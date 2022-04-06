

export default function dateFormat(date) {
    let newDate = new Date(date);
    return (newDate.getDate() + 1 ) + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear();
}