import React from 'react'

export const GET_COMPLETED = "GET_COMPLETED"
export const DELETE_COMPLETED = "DELETE_COMPLETED"

export function completedTask (name) {
    return async function (dispatch) {
        try {
            dispatch({
                type: GET_COMPLETED,
                payload: name,
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function deleteCompletedTask (index) {
    return async function (dispatch) {
        try {
            dispatch({
                type: DELETE_COMPLETED,
                payload: index
            })
        } catch (err) {
            console.log(err)
        }
    }
}