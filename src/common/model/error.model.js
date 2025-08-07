export class ErrorMoel {
  constructor(status, message, body) {
    this.status = status;
    this.message = message ?? "UNKNOWN";
    this.body = body ?? undefined;
  }
}
