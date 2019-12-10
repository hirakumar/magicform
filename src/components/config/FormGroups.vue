<template>

    <b-card title="Form Group">

        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>
            <b-list-group-item>
                <!-- Label -->
                <b-form-group label="Label : " label-for="label" label-cols="6" class="mb-0">
                    <b-form-input id="label" type="text" size="sm" v-model="label" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <!-- Description -->
            <b-list-group-item>
                <b-form-group label="Description : " label-for="description" label-cols="6" class="mb-0">
                    <b-form-input id="description" type="text" size="sm" v-model="description" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
                <!-- Label Cols -->
                <b-form-group label="Label Cols : " label-for="labelCols" label-cols="6" class="mb-0">
                    <b-input type="range" v-model="labelCols" min="1" max="12" />

                </b-form-group>
            </b-list-group-item>
            <template v-if="expandlevel>0">
                <b-list-group-item>

                    <!-- Label Class -->
                    <b-form-group label="Class : " label-for="labelClass" label-cols="6" class="mb-0">
                        <b-form-input id="labelClass" type="text" size="sm" v-model="labelClass" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Disabled " label-for="disabled" label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="disabled" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Sr Only -->
                    <b-form-group label="Sr Only : " label-for="srOnly" label-cols="6" class="mb-0">
                        <b-form-checkbox id="srOnly" v-model="srOnly" name="checkbox-1" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Align -->
                    <b-form-group label="Label Align : " label-for="labelAlign" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlign" v-model="labelAlign" :options="alignOptions" size="sm" class="mt-3"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Before -->
                    <b-form-group label="Before : " label-for="before" label-cols="6" class="mb-0">
                        <b-textarea id="before" v-model="before" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- After -->
                    <b-form-group label="After : " label-for="after" label-cols="6" class="mb-0">
                        <b-textarea id="after" v-model="after" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label For" label-for="labelFor" label-cols="6" class="mb-0">
                        <b-form-input id="labelFor" type="text" size="sm" v-model="labelFor" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Size" label-for="labelSize" label-cols="6" class="mb-0">
                        <b-form-select id="labelSize" v-model="labelSize" :options="size" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
            </template>
            <template v-if="expandlevel>1">

                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols sm : " label-for="labelColSm" label-cols="6" class="mb-0">
                        <b-form-select id="labelColSm" v-model="labelColSm" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols md : " label-for="labelColMd" label-cols="6" class="mb-0">
                        <b-form-select id="labelColMd" v-model="labelColMd" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols lg : " label-for="labelColLg" label-cols="6" class="mb-0">
                        <b-form-select id="labelColLg" v-model="labelColLg" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <!-- Label Cols -->
                    <b-form-group label="Label Cols xl : " label-for="labelColXl" label-cols="6" class="mb-0">
                        <b-form-select id="labelColXl" v-model="labelColXl" :options="colOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align sm : " label-for="labelAlignSm" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignSm" v-model="labelAlignSm" :options="alignOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align md : " label-for="labelAlignMd" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignMd" v-model="labelAlignMd" :options="alignOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align lg : " label-for="labelAlignLg" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignLg" v-model="labelAlignLg" :options="alignOptions" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group label="Label Align xl : " label-for="labelAlignXl" label-cols="6" class="mb-0">
                        <b-form-select id="labelAlignXl" v-model="labelAlignXl" :options="alignOptions" size="sm"></b-form-select>
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


        label: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.label;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    label: val
                })
            }
        },
        description: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.description;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    description: val
                })
            }
        },
        labelAlign: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['label-align'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-align': val
                })
            }
        },
        labelClass: {
            get() {
                return this.eleObj['label-class'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-class': val
                })
            }
        },
        srOnly: {
            get() {
                return this.eleObj['label-sr-only'];
            },
            set(val) {

                this.$store.commit('editObj', {
                    'label-sr-only': val
                })
            }
        },
        labelCols: {
            get() {
                return this.eleObj['label-cols'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-cols': val
                })
            }
        },
        before: {
            get() {
                return this.eleObj.before;
            },
            set(val) {
                this.$store.commit('editObj', {
                    before: val
                })
            }
        },
        after: {
            get() {
                return this.eleObj.after;
            },
            set(val) {
                this.$store.commit('editObj', {
                    after: val
                })
            }
        },
        labelFor: {
            get() {
                return this.eleObj['label-for'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-for': val
                })
            }
        },
        labelSize: {
            get() {
                return this.eleObj['label-size'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-size': val
                })
            }
        },

        labelColSm: {
            get() {
                return this.eleObj['label-cols-sm'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-cols-sm': val
                })
            }
        },
        labelColMd: {
            get() {
                return this.eleObj['label-cols-md'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-cols-md': val
                })
            }
        },
        labelColLg: {
            get() {
                return this.eleObj['label-cols-lg'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-cols-lg': val
                })
            }
        },
        labelColXl: {
            get() {
                return this.eleObj['label-cols-xl'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-cols-xl': val
                })
            }
        },
        labelAlignSm: {
            get() {
                return this.eleObj['label-align-sm'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-align-sm': val
                })
            }
        },
        labelAlignMd: {
            get() {
                return this.eleObj['label-align-md'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-align-md': val
                })
            }
        },
        labelAlignLg: {
            get() {
                return this.eleObj['label-align-lg'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-align-lg': val
                })
            }
        },
        labelAlignXl: {
            get() {
                return this.eleObj['label-align-xl'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'label-align-xl': val
                })
            }
        },

        disabled: {
            get() {
                return this.eleObj['disabled'];
            },
            set(val) {
                this.$store.commit('editObj', {
                    'disabled': val
                })
            }
        }


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