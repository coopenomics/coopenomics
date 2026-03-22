#!/bin/bash

# CDT заносим статично в docs временно. Т.е. надо сгенерировать отдельно и засинхронизировать. 

# Копируем SDK документацию (без typedoc.json)
mkdir -p docs/cdt
rsync -av "../../cdt/tmp/html/" docs/cdt/

