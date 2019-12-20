<template>

    <b-card title="Form Group">
        
        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>
            <b-list-group-item>
                <!-- Label -->
                <b-form-group label="Label : " label-for="label" label-cols="6" class="mb-0">
                    <b-form-input id="label" type="text" size="sm" v-model="eleObj.label" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <!-- Description -->
            <b-list-group-item>
                <b-form-group label="Description : " label-for="description" label-cols="6" class="mb-0">
                    <b-form-input id="description" type="text" size="sm" v-model="eleObj.description" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
                <!-- Label Cols -->
                <b-form-group label="Label Cols : " label-for="labelCols" label-cols="6" class="mb-0">
                    <b-input type="range" v-model="eleObj['label-cols']" min="1" max="12" />

                </b-form-group>
            </b-list-group-item>
            <template v-if="expandlevel>0">
              <b-list-group-item> 
                   <b-form-group label="Order :" label-cols="6" class="mb-0">
                      <b-input type="number" min="1" v-model="eleObj.order" size="sm" />
                   </b-form-group>                
            </b-list-group-item>
                <b-list-group-item>

                    <!-- Label Class -->
                    <b-form-group label="Class : " label-for="labelClass" label-cols="6" class="mb-0">
                        <b-form-input id="labelClass" type="text" size="sm" v-model="eleObj['label-class']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Disabled " label-for="disabled" label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.disabled" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Sr Only -->
                    <b-form-group label="Sr Only : " label-for="srOnly" label-cols="6" class="mb-0">
                        <b-form-checkbox id="srOnly" v-model="eleObj['sr-only']" name="checkbox-1" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Align -->
                    <b-form-group label="Label Align : " label-for="labelAlign" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlign" v-model="eleObj['label-align']" :options="alignOptions" size="sm" class="mt-3"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Before -->
                    <b-form-group label="Before : " label-for="before" label-cols="6" class="mb-0">
                        <b-textarea id="before" v-model="eleObj.before" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- After -->
                    <b-form-group label="After : " label-for="after" label-cols="6" class="mb-0">
                        <b-textarea id="after" v-model="eleObj.after" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label For" label-for="labelFor" label-cols="6" class="mb-0">
                        <b-form-input id="labelFor" type="text" size="sm" v-model="eleObj['label-for']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Size" label-for="labelSize" label-cols="6" class="mb-0">
                        <b-form-select id="labelSize" v-model="eleObj['label-size']" :options="size" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                      <b-list-group-item>
               <b-form-group 
                  label="Valid Feedback : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input type="text" size="sm" v-model="eleObj['valid-feedback']" />
               </b-form-group>
            </b-list-group-item>
             <b-list-group-item>
               <b-form-group 
                  label="Invalid Feedback : "
                  label-cols="6"
                  class="mb-0"
                  >
                  <b-input type="text" size="sm" v-model="eleObj['invalid-feedback']" />
               </b-form-group>
            </b-list-group-item>
              <b-list-group-item>
                    <!-- Label Sr Only -->
                    <b-form-group label="State : " label-for="state" label-cols="6" class="mb-0">
                        <b-form-checkbox id="state" v-model="eleObj['state']" switch />
                    </b-form-group>
                </b-list-group-item>
            </template>
            <template v-if="expandlevel>1">

                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols sm : " label-for="labelColSm" label-cols="6" class="mb-0">
                        <b-form-select id="labelColSm" v-model="eleObj['label-cols-sm']" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols md : " label-for="labelColMd" label-cols="6" class="mb-0">
                        <b-form-select id="labelColMd" v-model="eleObj['label-cols-md']" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols lg : " label-for="labelColLg" label-cols="6" class="mb-0">
                        <b-form-select id="labelColLg" v-model="eleObj['label-cols-lg']" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols xl : " label-for="labelColXl" label-cols="6" class="mb-0">
                        <b-form-select id="labelColXl" v-model="eleObj['label-cols-xl']" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align sm : " label-for="labelAlignSm" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignSm" v-model="eleObj['label-align-sm']" :options="alignOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align md : " label-for="labelAlignMd" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignMd" v-model="eleObj['label-align-md']" :options="alignOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align lg : " label-for="labelAlignLg" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignLg" v-model="eleObj['label-align-lg']" :options="alignOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align xl : " label-for="labelAlignXl" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignXl" v-model="eleObj['label-align-xl']" :options="alignOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
            </template>
        </b-list-group>
        <div class="float-right">
            <b-button size="sm" variant="secondary" @click="increaselevel" v-if="expandlevel<2">
                <font-awesome-icon :icon="['fas','chevron-down']" />
            </b-button>
            <b-button size="sm" variant="secondary" @click="decreaselevel" v-if="expandlevel>0">
                <font-awesome-icon :icon="['fas','chevron-up']" />
            </b-button>
        </div>
    </b-card>

</template>


<script>
export default {
    name: 'ConfigFormGroups',
    props: {
        data: Number
    },
    data: function() {
        return {
            expandlevel: 0,
            alignOptions: [{
                    value: 'left',
                    text: 'Left'
                },
                {
                    value: 'center',
                    text: 'Center'
                },
                {
                    value: 'right',
                    text: 'Right'
                }
            ],
            size: [{
                    text: 'Small',
                    value: 'sm'
                },
                {
                    text: 'Medium',
                    value: 'md'
                },
                {
                    text: 'Large',
                    value: 'lg'
                }

            ],
            colOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            typeOptions: ['text', 'number', 'email', 'password', 'search', 'url', 'tel', 'date', 'time', 'range', 'color'],
            containerAddOptions: ['At First', 'Before', 'After', 'At Last'],
        }
    },
    computed: {
        eno: {
            get() {
                return this.data;
            }
        },

        eleObj: {
            get() {
                return this.$store.getters.getObj(this.eno);
            },
            set(val) {
                return val;
            }
        },
        isInput: {
            get() {
                if (this.eleObj != undefined) {
                    return (this.eleObj.ele == "form-input" ? true : false);
                }
            }
        },
        isRow: {
            get() {
                if (this.eleObj != undefined) {
                    return (this.eleObj.ele == "row" ? true : false);
                }
            }
        },




    },
    components: {

    },
    methods: {
        remove: function() {
            this.$store.dispatch("removeObj");
        },
        increaselevel: function() {
            try {
                this.expandlevel += 1;
            } catch (err) {
                console.log("Error on increaselevel :", err)
            }

        },
        decreaselevel: function() {
            try {
                this.expandlevel -= 1;
            } catch (err) {
                console.log("Error on decreaselevel :", err)
            }
        }
    }
}
</script>