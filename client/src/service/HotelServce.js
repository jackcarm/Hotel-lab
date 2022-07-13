const baseURL = 'http://localhost:9000/api/hotel/'

export const getGuests = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postGuest = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteGuest = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateGuest = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())

}