<template>
    <div class="accordion" :style="{width : accordionWidth}">
        <div v-for="(data,index) in datas" :key="index" class="item">
            <div class="accordion-header"  @click="active(index)" :style="{backgroundColor: titleBgColor, color: titleColor}" v-hover="titleHoverColor" >
                <h2 v-html="data.title" class="title"></h2>
                <span class="icon"
                      :class="{'right': openAccordion !== index, 'down': openAccordion === index}"
                      :style="{border: 'solid' + titleColor, borderWidth: '0px 2px 2px 0px'}"
                ></span>
            </div>
            <transition name="dropdown-fade" mode="out-in">
                <div class="accordion-body" v-if="openAccordion === index">
                    <div v-html="data.content"></div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VueAccordion",
        props:{
            datas:{
                type: Array,
                include: true
            },
            titleBgColor:{
                type: String
            },
            titleColor:{
                type: String
            },
            titleHoverColor:{
                type: String
            },
            accordionWidth:{
                type: String
            }
        },
        data(){
          return{
              openAccordion: -1,
          }
        },
        methods:{
            active(index){

                if(this.openAccordion !== index){
                    this.openAccordion = index;
                }
                else{
                    this.openAccordion = -1;
                }
            },
        },
        directives:{
            hover:{
                bind(el,binding){

                    let firstColor = el.style.backgroundColor;

                    el.onmouseover = function () {
                        if(binding.value){
                            el.style.backgroundColor = binding.value;
                        }
                        else{
                            el.style.backgroundColor = '#f5f5f5';
                        }
                    };
                    el.onmouseout = function () {

                        el.style.backgroundColor = firstColor;
                    };

                    el.style.transition = "all 300ms";

                   // el.onmouseout = this.titleBgColor;
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .accordion{
        display: inline-block;
        border: none;
        border-radius: 10px;
        width: 350px;
        .item{
            border-bottom: none;
            border-radius: 10px;
            margin-bottom: 10px;
            max-width: 350px;
        }

        .item:last-child{
            border: 0;
        }
    }

    .accordion-header{
        position: relative;
        cursor: pointer;
        color: black;
        padding: 15px;
        border-radius: 10px;
        &:hover{
            background-color: white;
            color: black;
        }

        .title{
            display: inline-block;
            overflow: hidden;
            margin-right: 20px;
            @include font-semibold ();
            font-size: 14px;
            line-height: 19px;
        }

        .icon{
            display: inline-block;
            float: right;
        }
    }

    .accordion-body{
        overflow: hidden;
        padding: 10px 20px;
        background-color: $text-blue-light;
        border-radius: 10px;
    }

    .dropdown-fade-enter-active,
    .dropdown-fade-leave-active{
        padding: 10px 20px;
        max-height: 2000px;
        transition: all 300ms linear;
    }

    .dropdown-fade-enter{
        padding: 0 20px;
        height: 0;
        max-height: 0;
    }

    .dropdown-fade-leave-to{
        padding: 0 20px;
        height: 0;
        max-height: 0;
    }

    /******************
     * Arrow
     ******************/

    .icon {
        position: absolute;
        right: 5px;
        top: 22.5%;
        border: solid #0a0a0a;
        border-width: 0px 2px 2px 0px;
        display: inline-block;
        padding: 3px;
        margin-top: 8px;
        margin-right: 8px;
    }

    .right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transition: all 300ms linear;
    }

    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transition: all 300ms linear;
    }

    /******************
    * Arrow END
    ******************/

</style>
