<template>

    <v-app>
        <div class="form-component">
            <v-form v-model="valid" >
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>

            <v-col class="text-center">
                <div class="my-2 pink--text">
                    <v-btn  large color="primary" >Prediction</v-btn>
                </div>
            </v-col>
            <Result v-show="true"></Result>
        </div>
    </v-app>
</template>

<script>
    import Result from "./Result";
    export default {
        name: "Form",
        data: () => ({
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }),
    }
</script>

<style scoped>
    .form-component{
        width: 700px;
        margin: auto;
        padding: 60px 30px;

        background: #fcfffa;
        border-radius: 5px;
    }
    .form-component .form-custom{
        width: 100%;
    }
    .m-a{
        margin: auto;
    }
    .custom-botton{
        padding: 15px;
        width: 190px;
        font-size: 20px;
        font-style: italic;
        font-weight: 700;
    }
</style>