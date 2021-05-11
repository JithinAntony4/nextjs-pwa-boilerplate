import {useEffect} from 'react'
import Router from 'next/router'
import useSWR from 'swr'

export const fetcher = (url) =>
    fetch(url)
        .then((r) => r.json())
        .then((data) => {
            return {user: data?.user || null, userDet: data?.userDet || null}
        })
export const fetcherFCM = (url) =>
    fetch(url)
        .then((r) => r.json())
        .then((data) => {
            return {isHave: data?.isHave || false, errMsg: data?.errMsg || null}
        })

export function useUser({redirectTo, redirectIfFound} = {}) {
    const {data, error} = useSWR('/api/user', fetcher)
    const user = data?.user
    const userDet = data?.userDet
    const finished = Boolean(data)
    const hasUser = Boolean(user)

    useEffect(() => {
        if (!redirectTo || !finished) return
        if (
            // If redirectTo is set, redirect if the user was not found.
            (redirectTo && !redirectIfFound && !hasUser) ||
            // If redirectIfFound is also set, redirect if the user was found
            (redirectIfFound && hasUser)
        ) {
            if (user) {
                redirectTo = '/'
            }
            Router.push(redirectTo)
        }
    }, [redirectTo, redirectIfFound, finished, hasUser])

    return error ? null : user
}

export function useFCMToken() {
    const {data, error} = useSWR('/api/fcm/check', fetcherFCM)
    const isHave = data?.isHave
    const errMsg = data?.errMsg
    const finished = isHave || !Boolean(errMsg);
    return error ? null : (finished ? isHave : null);
}
