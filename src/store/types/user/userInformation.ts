export type registerInformation = {
  name: string;
  eMail: string;
  pass: string;
  age: number;
  sex: string;
  height: number;
  favoriteEvent: [];
  selfIntroduction: string;
};

export type registerForm = {
  name: string;
  eMail: string;
  pass: string;
  checkPass?: string;
  age: number;
  sex: string;
  height: number;
  favoriteEvent: [];
  selfIntroduction: string;
};
