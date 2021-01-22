const myObj = [
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:14:00'),
        tasksGiven: '6',
        tasksFinished: '5',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Html'
    },
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:16:00'),
        tasksGiven: '7',
        tasksFinished: '4',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Javascript'
    },
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:18:00'),
        tasksGiven: '9',
        tasksFinished: '9',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Css'
    },
    {
        startedAt: new Date('2021-01-09:12:00'),
        finishedAt: new Date('2021-01-09:20:00'),
        tasksGiven: '5',
        tasksFinished: '2',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Array'
    },
    {
        startedAt: new Date('2021-01-09:04:00'),
        finishedAt: new Date('2021-01-09:12:00'),
        tasksGiven: '6',
        tasksFinished: '3',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Function'
    },
    {
        startedAt: new Date('2021-01-09:10:00'),
        finishedAt: new Date('2021-01-09:12:00'),
        tasksGiven: '6',
        tasksFinished: '1',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Object'
    },
    {
        startedAt: new Date('2021-01-09:07:00'),
        finishedAt: new Date('2021-01-09:12:00'),
        tasksGiven: '4',
        tasksFinished: '4',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'JSON'
    },
    {
        startedAt: new Date('2021-01-09:13:00'),
        finishedAt: new Date('2021-01-09:16:00'),
        tasksGiven: '7',
        tasksFinished: '5',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Methods'
    },
    {
        startedAt: new Date('2021-01-09:09:00'),
        finishedAt: new Date('2021-01-09:14:00'),
        tasksGiven: '4',
        tasksFinished: '3',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Loops'
    },
    {
        startedAt: new Date('2021-01-09:04:00'),
        finishedAt: new Date('2021-01-09:13:00'),
        tasksGiven: '3',
        tasksFinished: '3',
        totalTime: '',
        tasksFinishedPrecent: '',
        topic: 'Github'
    }
];



function diff_hours(dt1, dt2) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    let total = Math.abs(Math.round(diff)); 
    return total;
} 




function calculatePrecent(num1, num2) {
    let precent = Math.floor((num1 / num2) * 100);

    return precent;
}



function getTime(date) {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return hour + ':' + minutes;
} 
