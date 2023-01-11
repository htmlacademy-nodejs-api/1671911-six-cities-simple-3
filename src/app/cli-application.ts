import { CliCommandInterface } from '../cli-command/cli-command.interface.js';

type ParsedCommand = {
  [key: string]: string[]
}

export default class CLIApplication {

  private commands: {[propertyName: string]: CliCommandInterface} = {};
  // отдельное приватное свойство  -  команда , которая должна исполнятся по умолчанию,
  //если пользователь не ввел никикакую команду в ком.строке
  private defaultCommand = '--help';

  // метод, который разбирает  команды, введеные пользователем
  private parseCommand(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let command = '';

    return cliArguments.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if ( command && item) {
        acc[command].push(item);
      }
      return acc;
    }, parsedCommand);
  }

  // метод, который регистрирует комманды
  public registerCommands(commandList: CliCommandInterface[]): void {
    commandList.reduce((acc, command) => {
      const cliCommand = command;
      acc[cliCommand.name] = cliCommand;
      return acc;
    }, this.commands);
  }

  //метод, который позволяет получить определенную команду по имени или выполнить команду по умолчанию
  public getCommand(commandName: string): CliCommandInterface {
    return this.commands[commandName] ?? this.commands[this.defaultCommand];
  }

  //метод, который запускает/выполняет команды. Тут аккумилируется  вызовы всех тех методов, которые
  //мы написали раньше
  public processCommand(argv: string[]): void {
    //разбираем пользовательский ввод, парсим
    const parsedCommand = this.parseCommand(argv);
    //находим имя команды
    const [commandName] = Object.keys(parsedCommand);
    //получаем саму команду
    const command = this.getCommand(commandName);
    //находим и берём аргументы или пустой массив , если  аргументов нет
    const commandArguments = parsedCommand[commandName] ?? [];
    //вызываем метод execute  у нашей команды и  передаем все аргументы,
    //которые насобирали в массив или просто  пустой массив
    command.execute(...commandArguments);
  }
}
