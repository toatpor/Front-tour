export enum EHeader {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}

export type THeading = {
  as: EHeader;
  $headerBackGround?: string;
};
