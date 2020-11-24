export enum LoginProvider
{
    Email = "Email",
    Google = "Google",
    Facebook = "Facebook",
    Github = "Github",
    Twitter = "Twitter"
}

export interface TwitterAuth
{
    authToken: string;
    authTokenSecret: string;
    userName: string;
    userID: string;
}

export interface FacebookData
{
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    picture: FacebookPicture;
}

export interface FacebookPicture
{
    data: PictureData;
}

export interface PictureData
{
    height: number;
    is_silhouette: boolean;
    url: string;
    width: number;
}