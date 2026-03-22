# Реестр документов (`registry_id`)

Соответствие номера в реестре, человекочитаемого названия и файла шаблона в репозитории фабрики. Логика генерации для каждого типа — в парном файле в каталоге [`Actions`](https://github.com/coopenomics/mono/tree/main/components/factory/src/Actions) с тем же префиксом номера.

Базовый путь к шаблонам: [`components/factory/src/Templates`](https://github.com/coopenomics/mono/tree/main/components/factory/src/Templates).

| `registry_id` | Название | Тип | Шаблон (исходник) |
|--------------|----------|-----|-------------------|
| 1 | Соглашение о ЦПП (кошелёк) | Соглашение | [1.WalletAgreement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1.WalletAgreement.ts) |
| 2 | Регламент электронной подписи | Регламент | [2.RegulationElectronicSignature.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/2.RegulationElectronicSignature.ts) |
| 3 | Политика конфиденциальности | Политика | [3.PrivacyPolicy.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/3.PrivacyPolicy.ts) |
| 4 | Пользовательское соглашение | Соглашение | [4.UserAgreement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/4.UserAgreement.ts) |
| 50 | Соглашение Coopenomics | Соглашение | [50.CoopenomicsAgreement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/50.CoopenomicsAgreement.ts) |
| 51 | Заявление о конвертации в Axon | Заявление | [51.ConvertToAxonStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/51.ConvertToAxonStatement.ts) |
| 100 | Заявление на вступление в кооператив | Заявление | [100.ParticipantApplication.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/100.ParticipantApplication.ts) |
| 101 | Заявление о выборе участка | Заявление | [101.SelectBranchStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/101.SelectBranchStatement.ts) |
| 300 | Повестка общего собрания | Документ собрания | [300.AnnualGeneralMeetingAgenda.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/300.AnnualGeneralMeetingAgenda.ts) |
| 301 | Решение совета по общему собранию | Решение | [301.AnnualGeneralMeetingSovietDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/301.AnnualGeneralMeetingSovietDecision.ts) |
| 302 | Уведомление об общем собрании | Уведомление | [302.AnnualGeneralMeetingNotification.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/302.AnnualGeneralMeetingNotification.ts) |
| 303 | Бюллетень для голосования | Бюллетень | [303.AnnualGeneralMeetingVotingBallot.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/303.AnnualGeneralMeetingVotingBallot.ts) |
| 304 | Протокол общего собрания | Протокол | [304.AnnualGeneralMeetingDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/304.AnnualGeneralMeetingDecision.ts) |
| 501 | Решение по заявлению на вступление | Решение | [501.DecisionOfParticipantApplication.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/501.DecisionOfParticipantApplication.ts) |
| 599 | Свободное решение по проекту | Решение | [599.ProjectFreeDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/599.ProjectFreeDecision.ts) |
| 600 | Свободное решение | Решение | [600.FreeDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/600.FreeDecision.ts) |
| 699 | Соглашение программы «Соседи» | Соглашение | [699.SosediAgreement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/699.SosediAgreement.ts) |
| 700 | Заявление о взносе имуществом | Заявление | [700.assetContributionStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/700.assetContributionStatement.ts) |
| 701 | Решение о взносе имуществом | Решение | [701.assetContributionDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/701.assetContributionDecision.ts) |
| 702 | Акт приёма имущественного взноса | Акт | [702.assetContributionAct.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/702.assetContributionAct.ts) |
| 800 | Заявление о возврате имуществом | Заявление | [800.returnByAssetStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/800.returnByAssetStatement.ts) |
| 801 | Решение о возврате имуществом | Решение | [801.returnByAssetDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/801.returnByAssetDecision.ts) |
| 802 | Акт возврата имуществом | Акт | [802.returnByAssetAct.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/802.returnByAssetAct.ts) |
| 900 | Заявление о возврате деньгами | Заявление | [900.returnByMoney.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/900.returnByMoney.ts) |
| 901 | Решение о возврате деньгами | Решение | [901.ReturnByMoneyDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/901.ReturnByMoneyDecision.ts) |
| 994 | Шаблон программы ЦПП «Генератор» | Шаблон | [994.GeneratorProgramTemplate.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/994.GeneratorProgramTemplate.ts) |
| 995 | Шаблон оферты ЦПП «Генератор» | Шаблон | [995.GeneratorOfferTemplate.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/995.GeneratorOfferTemplate.ts) |
| 996 | Оферта ЦПП «Генератор» | Оферта | [996.GeneratorOffer.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/996.GeneratorOffer.ts) |
| 997 | Шаблон договора генерации | Шаблон | [997.GenerationContractTemplate.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/997.GenerationContractTemplate.ts) |
| 998 | Шаблон программы «Благорост» | Шаблон | [998.BlagorostProgramTemplate.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/998.BlagorostProgramTemplate.ts) |
| 999 | Шаблон оферты «Благорост» | Шаблон | [999.BlagorostOfferTemplate.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/999.BlagorostOfferTemplate.ts) |
| 1000 | Оферта «Благорост» | Оферта | [1000.BlagorostOffer.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1000.BlagorostOffer.ts) |
| 1001 | Договор генерации | Договор | [1001.GenerationContract.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1001.GenerationContract.ts) |
| 1002 | Договор генерации по проекту | Договор | [1002.ProjectGenerationContract.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1002.ProjectGenerationContract.ts) |
| 1003 | Договор генерации по компоненту | Договор | [1003.ComponentGenerationContract.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1003.ComponentGenerationContract.ts) |
| 1004 | Соглашение о хранении данных | Соглашение | [1004.StorageAgreement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1004.StorageAgreement.ts) |
| 1005 | Заявление о создании проекта | Заявление | [1005.InitProjectStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1005.InitProjectStatement.ts) |
| 1006 | Решение о создании проекта | Решение | [1006.InitProjectDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1006.InitProjectDecision.ts) |
| 1007 | Соглашение «Благорост» | Соглашение | [1007.BlagorostAgreement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1007.BlagorostAgreement.ts) |
| 1010 | Заявление на расход | Заявление | [1010.ExpenseStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1010.ExpenseStatement.ts) |
| 1011 | Решение по расходу | Решение | [1011.ExpenseDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1011.ExpenseDecision.ts) |
| 1020 | Заявление о денежном взносе в генерацию | Заявление | [1020.GenerationMoneyInvestStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1020.GenerationMoneyInvestStatement.ts) |
| 1025 | Заявление о возврате неиспользованных средств (генерация) | Заявление | [1025.GenerationMoneyReturnUnusedStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1025.GenerationMoneyReturnUnusedStatement.ts) |
| 1030 | Заявление о денежном взносе в благорост | Заявление | [1030.CapitalizationMoneyInvestStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1030.CapitalizationMoneyInvestStatement.ts) |
| 1040 | Заявление о взносе результатом труда | Заявление | [1040.ResultContributionStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1040.ResultContributionStatement.ts) |
| 1041 | Решение по взносу результатом труда | Решение | [1041.ResultContributionDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1041.ResultContributionDecision.ts) |
| 1042 | Акт взноса результатом труда | Акт | [1042.ResultContributionAct.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1042.ResultContributionAct.ts) |
| 1050 | Заявление на получение займа | Заявление | [1050.GetLoanStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1050.GetLoanStatement.ts) |
| 1051 | Решение о выдаче займа | Решение | [1051.GetLoanDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1051.GetLoanDecision.ts) |
| 1060 | Заявление об имущественном взносе в генерацию | Заявление | [1060.GenerationPropertyInvestStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1060.GenerationPropertyInvestStatement.ts) |
| 1061 | Решение об имущественном взносе в генерацию | Решение | [1061.GenerationPropertyInvestDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1061.GenerationPropertyInvestDecision.ts) |
| 1062 | Акт имущественного взноса в генерацию | Акт | [1062.GenerationPropertyInvestAct.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1062.GenerationPropertyInvestAct.ts) |
| 1070 | Заявление об имущественном взносе в благорост | Заявление | [1070.CapitalizationPropertyInvestStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1070.CapitalizationPropertyInvestStatement.ts) |
| 1071 | Решение об имущественном взносе в благорост | Решение | [1071.CapitalizationPropertyInvestDecision.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1071.CapitalizationPropertyInvestDecision.ts) |
| 1072 | Акт имущественного взноса в благорост | Акт | [1072.CapitalizationPropertyInvestAct.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1072.CapitalizationPropertyInvestAct.ts) |
| 1080 | Заявление о конвертации генерации → основной кошелёк | Заявление | [1080.GenerationToMainWalletConvertStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1080.GenerationToMainWalletConvertStatement.ts) |
| 1082 | Заявление о конвертации генерации → благорост | Заявление | [1082.GenerationToCapitalizationConvertStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1082.GenerationToCapitalizationConvertStatement.ts) |
| 1090 | Заявление о конвертации благорост → основной кошелёк | Заявление | [1090.CapitalizationToMainWalletConvertStatement.ts](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/1090.CapitalizationToMainWalletConvertStatement.ts) |

Маппинг `registry_id` → модуль также задан в [`registry.ts`](https://github.com/coopenomics/mono/blob/main/components/factory/src/Templates/registry.ts).
