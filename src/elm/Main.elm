module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, classList, type_)
import Models exposing (..)


main : Program Never Model Msg
main =
    Html.beginnerProgram
        { model = initialModel
        , view = view
        , update = update
        }



-- Update


type Msg
    = None


update : Msg -> Model -> Model
update msg model =
    model



-- View


view : Model -> Html Msg
view model =
    div [ class "layout" ]
        [ div [ class "container" ]
            [ h2 [] [ text "Search By Category" ]
            , input [ class "search-box" ] []
            ]
        , div [ class "container" ]
            [ h2 [] [ text "Search By Name" ]
            , input [ class "search-box" ] []
            ]
        , node "hr" [] []
        , div [ class "container" ]
            [ h2 [] [ text "Upload a Profile" ]
            , div [ class "row" ]
                [ text "Category"
                , select [ classList [ ( "search-box", True ), ( "select", True ) ] ]
                    [ option [] [ text "Category A" ]
                    , option [] [ text "Category B" ]
                    , option [] [ text "Category N" ]
                    ]
                ]
            , div [ class "row" ] [ input [ type_ "file", class "choose-file" ] [] ]
            ]
        ]
