export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, ErrorName: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = ErrorName;
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, "BadRequestError", 400);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, "NotFoundError", 404);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, "UnauthorizedError", 401);
  }
}
