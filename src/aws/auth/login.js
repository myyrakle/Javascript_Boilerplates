const user = new CognitoUser({ Username: "sssang97", Pool: userPool });
user.authenticateUser(
    new AuthenticationDetails({ Username: "sssang97", Password: "password" }),
    {
        onSuccess: (result) => {
            console.log("로그인됨");

            console.log(result);

            const token = result.getAccessToken().getJwtToken();
            console.log("token:", token);

            user.getUserAttributes((error, result) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("attr:", result);
                }
            });
        },
        onFailure: (error) => {
            console.log(error);
        },
    }
);
