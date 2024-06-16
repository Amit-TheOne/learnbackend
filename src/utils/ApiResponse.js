class ApiResponse {
  constructor(statusCode, data, mesage = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = mesage;
    this.success = statusCode < 400;
  }
}