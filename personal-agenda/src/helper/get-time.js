export default function getTime() {
    let currentTime = new Date()
    let currentHour = currentTime.getHours()
    switch (true) {
        case (currentHour < 12):
            return 'Günaydın'
        case (currentHour > 12 && currentHour < 17):
            return 'Tünaydın'
        default:
            return 'İyi Akşamlar'
    }
}

