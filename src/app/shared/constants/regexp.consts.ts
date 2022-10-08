export class Regexp {
  public static readonly EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static readonly EXCEPT_SPECIAL_CHARACTERS = /^[^!&~#$^*()+=[\]{}|\\?:<>'"/;`%]*$/;
}
