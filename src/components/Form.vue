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
                                    v-model="dbt_1"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Dry Bulb Temp"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="dbt_2"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Dry Bulb Temp"
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
                                    v-model="wbt_1"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Weight Bulb Temp"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="wbt_2"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Weight Bulb Temp"
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
                                    v-model="rh_1"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Relative Humidity"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="rh_2"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Relative Humidity"
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
                                    v-model="pre_1"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Pressure"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="pre_2"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Pressure"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-col class="text-center">
                    <div class="my-2 pink--text">
                        <v-btn  large color="primary" >Prediction</v-btn>
                    </div>
                </v-col>
            </v-form>


            <Result v-show="false"></Result>
        </div>
    </v-app>
</template>

<script>
    import Result from "./Result";
    export default {
        name: "Form",
        components: {Result},
        data: () => ({
            valid: false,
            dbt_1: '',
            dbt_2: '',
            wbt_1: '',
            wbt_2: '',
            rh_1: '',
            rh_2: '',
            pre_1: '',
            pre_2: '',
            nameRules: [
                v => !!v || 'Field is required',
                v => v.length <= 5 || 'Field must be less than 5 characters',
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
</style>