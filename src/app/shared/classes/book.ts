export class Book{

  private _title: string;
  private _authors: string[];
  private _publisher: string;
  private _printType: string;
  private _language: string;

  private _imgSrc: string;


  constructor() {
    this.authors = [];
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get authors(): string[] {
    return this._authors;
  }

  set authors(value: string[]) {
    this._authors = value;
  }

  get publisher(): string {
    return this._publisher;
  }

  set publisher(value: string) {
    this._publisher = value;
  }

  get printType(): string {
    return this._printType;
  }

  set printType(value: string) {
    this._printType = value;
  }

  get imgSrc(): string {
    return this._imgSrc;
  }

  set imgSrc(value: string) {
    this._imgSrc = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }
}
