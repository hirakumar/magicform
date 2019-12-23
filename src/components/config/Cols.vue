<template>

    <b-card title="Column">
        {{device}}
        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>

        <b-list-group flush>
            <!-- Cols -->
            <b-list-group-item>
                <b-form-group id="cols" :label="colsLabel" label-for="cols" label-cols="4" class="mb-0">
                    <b-form-input id="cols" min="0" max="12" type="range" size="sm" v-model="mycols" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <!-- Cols -->
            <!--
            <b-list-group-item>
                <b-form-group id="cols" label="Cols : " label-for="cols" label-cols="4" class="mb-0">
                    <b-form-input id="cols" min="0" max="12" type="range" size="sm" v-model="eleObj.cols" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            -->
            <!-- Label -->
            <b-list-group-item>                
                <b-form-group label="ID : " label-for="id" label-cols="6" class="mb-0">
                    <b-form-input id="id" type="text" size="sm" v-model="eleObj.id" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <!-- Label -->
           
          
            <template v-if="expandlevel>0">

                <b-list-group-item>
                    <b-form-group id="col" label="offset: " label-for="offsset" label-cols="4" class="mb-0">
                        <b-form-input id="offset" type="range" min="0" max="12" size="xl" v-model="eleObj.offset" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item>
                    <b-form-group id="col" label="Align self: " label-for="align-self" label-cols="4" class="mb-0">
                        <b-form-select :options="alignOptions" v-model="eleObj['align-self']" size="sm"></b-form-select>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="Tag : " label-for="tag" label-cols="4" class="mb-0">
                        <b-form-input id="tag" type="text" min="0" max="12" size="sm" v-model="eleObj.tag" trim></b-form-input>

                    </b-form-group>
                </b-list-group-item>
            </template>
            <template v-if="expandlevel>1">
                <b-list-group-item>
                    <!-- Col -->
                    <b-form-group id="col" label="Col : " label-for="col" label-cols="4" class="mb-0">
                        <b-form-checkbox v-model="eleObj.col" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>
                <!--
                 <b-list-group-item>
                   
                    <b-form-group id="col" label="Class : " label-for="col" label-cols="4" class="mb-0">
                       <b-form-input id="cols" type="text" size="sm" v-model="eleObj.class" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="sm: " label-for="col" label-cols="4" class="mb-0">
                        <b-form-input id="cols" type="number" min="0" max="12" size="sm" v-model="eleObj.sm" trim></b-form-input>

                    </b-form-group>
                </b-list-group-item>
                
                <b-list-group-item>
                    <b-form-group id="col" label="md: " label-for="md" label-cols="4" class="mb-0">
                        <b-form-input id="md" type="number" min="0" max="12" size="sm" v-model="eleObj.md" trim></b-form-input>

                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="xl: " label-for="xl" label-cols="4" class="mb-0">
                        <b-form-input id="md" type="number" min="0" max="12" size="xl" v-model="eleObj.xl" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="lg: " label-for="lg" label-cols="4" class="mb-0">
                        <b-form-input id="md" type="number" min="0" max="12" size="xl" v-model="eleObj.lg" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                -->
                <b-list-group-item>
                    <b-form-group id="col" label="offset sm: " label-for="offsset-sm" label-cols="4" class="mb-0">
                        <b-form-input id="offset-sm" type="number" min="0" max="12" size="sm" v-model="eleObj['offset-sm']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>

                    <b-form-group id="col" label="offset md: " label-for="offsset-md" label-cols="4" class="mb-0">
                        <b-form-input id="offset-md" type="number" min="0" max="12" size="sm" v-model="eleObj['offset-md']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="offset lg: " label-for="offsset-lg" label-cols="4">
                        <b-form-input id="offset-lg" type="number" min="0" max="12" size="sm" v-model="eleObj['offset-lg']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="offset xl: " label-for="offsset-xl" label-cols="4" class="mb-0">
                        <b-form-input id="offset-xl" type="number" min="0" max="12" size="sm" v-model="eleObj['offset-xl']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="order: " label-for="order" label-cols="4" class="mb-0">
                        <b-form-input id="order" type="number" min="0" max="12" size="sm" v-model="eleObj.order" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="order sm: " label-for="order-sm" label-cols="4" class="mb-0">
                        <b-form-input id="order-sm" type="number" min="0" max="12" size="sm" v-model="eleObj['order-sm']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="order md: " label-for="order-md" label-cols="4" class="mb-0">
                        <b-form-input id="order-md" type="number" min="0" max="12" size="sm" v-model="eleObj['order-md']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="order lg: " label-for="order-lg" label-cols="4" class="mb-0">
                        <b-form-input id="order-lg" type="number" min="0" max="12" size="sm" v-model="eleObj['order-lg']" trim></b-form-input>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="col" label="order xl: " label-for="order-xl" label-cols="4" class="mb-0">
                        <b-form-input id="order-xl" type="number" min="0" max="12" size="sm" v-model="eleObj['order-xl']" trim></b-form-input>
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
    name: 'Cols',
    props: {
        data: Number,
    },
    data: function() {
        return {
            detail: false,
            expandlevel: 0,
            alignOptions:[
                {text:'Start',value:'start'},
                {text:'Center',value:'center'},
                {text:'End',value:'end'}
            ]
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
       
        isCol: {
            get() {
                return (this.eleObj.ele == "col" ? true : false);
            }
        },
        device :{
            get(){
                return this.$store.getters.getDeviceObj;
            }
        },
       
        mycols:{
		get(){
            
			if(this.device.width>=992){
				return this.eleObj.lg;
			} else if(this.device.width>=1200){
                return this.eleObj.xl;
            } else if(this.device.width>=992){
				return this.eleObj.lg;
			}else if(this.device.width>=768){
				return this.eleObj.md;
			}else if(this.device.width>=576){
				return this.eleObj.sm;
            }else if(this.device.width<576){
				return this.eleObj.cols
			}
		},
		set(val){
            
			if(this.device.width>=1200){
				this.$store.commit('editObj',{xl:val})
			}else if(this.device.width>=992){
				this.$store.commit('editObj',{lg:val})
			}else if(this.device.width>=768){
				this.$store.commit('editObj',{md:val})
			}else if(this.device.width>=576){
                this.$store.commit('editObj',{sm:val})
            }else if(this.device.width<576){
                this.$store.commit('editObj',{cols:val})
				
			}
		}
		
	},    
 colsLabel:{
            get(){
                return "Cols : "+this.mycols;
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
        },

    }
}
</script>