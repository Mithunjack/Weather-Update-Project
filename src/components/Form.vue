<template>
    <v-app>
        <div class="form-component">
            <p class="date-title">Today : <b class="date-format">{{date}}</b></p>
            <v-form v-model="valid" @submit="postData" action="#">
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
                        <v-btn type="submit" large color="primary" v-on:click="onClickPrediction">Prediction</v-btn>
                    </div>
                </v-col>
            </v-form>
            <Result  v-show="response"></Result>
        </div>
    </v-app>
</template>

<script>
    import Result from "./Result";
    import { format ,getHours, getMonth, getDate} from 'date-fns'
    let postData = function (event){
        console.log(event);
        let data = {
            "time":{
                "month":getMonth(new Date(), 'MM'),
                "time":getHours(new Date(), 'dd'),
                "date":getDate(new Date(), 'dd')
            },
            "features":[
                {
                    "dew_temp":[this.dbt_1,this.dbt_2]
                },
                {
                    "dry_temp":[this.wbt_1,this.wbt_2]
                },
                {
                    "relative_humidity":[this.rh_1,this.rh_2]
                },
                {
                    "pressure":[this.pre_1,this.pre_2]
                }
            ]
        };
        console.log(data);
        return data;
    };
    export default {
        name: "Form",
        components: {Result},
        props: {
            response : Boolean,
        },
        data: () => ({
            valid: false,
            show: false,
            dbt_1: '',
            dbt_2: '',
            wbt_1: '',
            wbt_2: '',
            rh_1: '',
            rh_2: '',
            pre_1: '',
            pre_2: '',
            date : format(new Date(), 'MM/dd/yyyy'),
            nameRules: [
                v => !!v || 'Field is required',
                v => v.length <= 5 || 'Field must be less than 5 characters',
            ],
        }),
        methods: {
            postData,
            onClickPrediction(e){
                e.preventDefault();
                this.$emit('clicked', this.postData());
            }
        }
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
    .date-title{
        font-size: 30px;
        margin-right: 10px;
        background-color: #1976d2;
        color: white;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 30px;
    }
    .date-format{
        font-size: 30px;
    }

</style>