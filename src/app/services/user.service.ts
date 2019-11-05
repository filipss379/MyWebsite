import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../sign-in/user";
import { resolve } from "url";
import { reject } from "q";


@Injectable()

export class UserService {

    private userUrl = 'http://localhost:63282/api/users';
    users: User[];

    constructor(private http: HttpClient) { }

    getUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            this.http.get<User[]>(this.userUrl)
                .subscribe((user) => {
                    resolve(user),
                    console.log("ok")
                }, (error: any) => {
                    reject(error)
                    console.log("get failed - " + error);
                })
        })
    }

}