import { ErrorModel } from "../model/error.model";

export class HandleHttp {
  static success(response) {
    return response;
  }

  static exception(result) {
    let error = new ErrorModel(result?.status, result?.message, result?.body);
    return error;
  }
}
