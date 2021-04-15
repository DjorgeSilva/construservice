import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    padding: 0 40px; 


    .row{

        .coluna-filtros{
            width: 100%;
            padding: 0;

        select,
        input[type="search"]{
            cursor: pointer;
            width: 100%;
            height: 45px;
            margin: 10px auto;
            padding-left: 10px;
            border-radius: 0;
            border: 1px solid #CDCDCD;
        
            &:focus{
                outline: none;
            }

            @media (min-width: 770px){
                height: 60px;
            }
        }

            /* clears the ‘X’ from Internet Explorer */
            input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
            input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
            /* clears the ‘X’ from Chrome */
            input[type="search"]::-webkit-search-decoration,
            input[type="search"]::-webkit-search-cancel-button,
            input[type="search"]::-webkit-search-results-button,
            input[type="search"]::-webkit-search-results-decoration { 
                display: none; 
                }
    }

    .busca{

        @media (min-width: 770px){
            display: flex;
            justify-content: center;
            align-items: center;
        }

        button{
            display: block;
            width: 150px;
            height: 45px;
            margin: 10px auto;
            background: #f11b26;
            color: #fff;
            border: none;

            &:hover{
                background: #B30D14;
            }

            @media (min-width: 770px){
                height: 60px;
            }
            
        }
    }
    }

`