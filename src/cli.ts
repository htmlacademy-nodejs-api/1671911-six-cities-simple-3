//укажем путь к интерпретатору js
//#!/usr/bin/env node;

//код, который отвечает за запуск cli  приложения
import VersionCommand from './cli-command/version-command.js';
import HelpCommand from './cli-command/help-command.js';
import ImportCommand from './cli-command/import-command.js';
import CLIApplication from './app/cli-application.js';

//создаем экземпляр менеджера - им является CLIApplication
const myManager = new CLIApplication();
//мнеджер должен зарегистрировать команды и ему передаем массив из экземпляров команд
myManager.registerCommands([
  new HelpCommand,
  new VersionCommand,
  new ImportCommand
]);
// выполняем команду, которую ввел пользователь
//process -  глобальный объект в node, который содержит информацию о запущенном приложении
//argv -  аргументы переданные пользователем
myManager.processCommand(process.argv);
