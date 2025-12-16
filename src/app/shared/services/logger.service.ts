import { Injectable } from '@angular/core';

export enum LogLevel {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
  None = 4,
}

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logLevel: LogLevel = LogLevel.Debug; // Set to Info or Error in production

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  debug(message: string, ...args: any[]): void {
    this.log(LogLevel.Debug, message, args);
  }

  info(message: string, ...args: any[]): void {
    this.log(LogLevel.Info, message, args);
  }

  warn(message: string, ...args: any[]): void {
    this.log(LogLevel.Warn, message, args);
  }

  error(message: string, error?: Error, ...args: any[]): void {
    this.log(LogLevel.Error, message, error ? [error, ...args] : args);
  }

  private log(level: LogLevel, message: string, args: any[]): void {
    if (level < this.logLevel) {
      return;
    }

    const timestamp = new Date().toISOString();
    const levelName = LogLevel[level];
    const formattedMessage = `[${timestamp}] [${levelName}] ${message}`;

    switch (level) {
      case LogLevel.Debug:
        console.debug(formattedMessage, ...args);
        break;
      case LogLevel.Info:
        console.info(formattedMessage, ...args);
        break;
      case LogLevel.Warn:
        console.warn(formattedMessage, ...args);
        break;
      case LogLevel.Error:
        console.error(formattedMessage, ...args);
        break;
    }

    // TODO: Send to remote logging service in production
    // this.sendToRemote(level, message, args);
  }

  // private sendToRemote(level: LogLevel, message: string, args: any[]): void {
  //   // Implement remote logging (e.g., Application Insights, Sentry, LogRocket)
  // }
}
