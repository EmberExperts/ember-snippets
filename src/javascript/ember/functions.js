module.exports = {
  "set()": {
    "prefix": "set",
    "body": "set(${1:this}, '${2}', ${3});"
  },
  "get()": {
    "prefix": "get",
    "body": "get(${1:this}, '${2}');"
  },
  "bind()": {
    "prefix": "bind",
    "body": "bind(${1:this}, ${2:this.methodName});"
  },
  "cancel()": {
    "prefix": "cancel",
    "body": "cancel('${1:key}');"
  },
  "debounce()": {
    "prefix": "debounce",
    "body": "debounce(${1:this}, '${2:methodName}', ${3:500});"
  },
  "later()": {
    "prefix": "later",
    "body": "later(${1:this}, () => { ${2}\\}, ${3:500});"
  },
  "next()": {
    "prefix": "next",
    "body": "next(${1:this}, () => { ${2}\\});"
  },
  "run()": {
    "prefix": "run",
    "body": "run(() => { ${1}\\});"
  },
  "schedule()": {
    "prefix": "schedule",
    "body": "schedule('${1:queue}', ${2:this}, () => { ${3}\\}, );"
  },
  "scheduleOnce()": {
    "prefix": "scheduleOnce",
    "body": "scheduleOnce('${1:queue}', ${2:this}, () => { ${3}\\}, );"
  },
  "throttle()": {
    "prefix": "throttle",
    "body": "throttle(${1:this}, '${2:methodName}', ${3:500});"
  }
};
