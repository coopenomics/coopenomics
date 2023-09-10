#include <eosio/action.hpp>
#include <eosio/crypto.hpp>
#include <eosio/permission.hpp>
#include "soviet.hpp"
#include "src/admin.cpp"
#include "src/chairman.cpp"
#include "src/regaccount.cpp"
#include "src/voting.cpp"
#include "src/automator.cpp"
#include "src/marketplace.cpp"

using namespace eosio;

[[eosio::action]] void soviet::newid(uint64_t document_id) {
  require_auth(_soviet);
};

void soviet::exec(eosio::name executer, uint64_t document_id) { 
  require_auth(executer);

  documents_index documents(_soviet, _soviet.value);
  auto document = documents.find(document_id);
  eosio::check(document != documents.end(),"Решение не найдено в оперативной памяти");
  eosio::check(document -> authorized == true, "Только авторизованное решение может быть выполнено");
  eosio::check(document -> executed == false, "Решение уже исполнено");

  if (document -> type == _regaccount_action) {
    soviet::regaccount_effect(executer, document->id, name(document->secondary_id));
  } else if (document -> type == _change_action){
    soviet::change_effect(executer, document->id, name(document->secondary_id));
  }
}

extern "C" {

  /// The apply method implements the dispatch of events to this contract
  void apply(uint64_t receiver, uint64_t code, uint64_t action) {

    if (code == _soviet.value) {
      switch (action) {

        EOSIO_DISPATCH_HELPER (
            soviet, 
            //main
            (exec)(newid)
            //ADMIN
            (addadmin)(rmadmin)(setadmrights)(validate)
            //CHAIRMAN
            (authorize)(createboard)
            //VOTING
            (votefor)(voteagainst)(cancelvote)
            //REGACCOUNT
            (regaccount)
            //MARKETPLACE
            (change)
            //AUTOMATOR
            (automate)(disautomate)
            )
      }

    } else {

      if (action == "transfer"_n.value) {

        struct transfer {
          eosio::name from;
          eosio::name to;
          eosio::asset quantity;
          std::string memo;
        };

        auto op = eosio::unpack_action_data<transfer>();
        if (op.to == _soviet) {
          eosio::check(false, "Совет не принимает взятки (входящие переводы) :))");
        }
      }
    }
  };

};
