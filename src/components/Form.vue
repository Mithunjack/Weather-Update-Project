<template>
    <div class="form-component">
        <div class="row">
            <v-form v-model="valid" class="form-custom">
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
        </div>
        <v-row align="center">
            <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                    <v-btn large color="primary">Primary</v-btn>
                </div>
            </v-col>
        </v-row>
        <div class="card text-white bg-info mt-3 mb-3 m-a" style="max-width: 18rem;" v-show="false">
            <div class="card-header">Result</div>
            <div class="card-body">
                <h5 class="card-title">Info card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
</template>

<script>
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
        background: #edeaf1;
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