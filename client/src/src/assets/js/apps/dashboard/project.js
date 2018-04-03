(function ()
{
    var data = {
        "projects"     : [
            {
                "name": "ACME Corp. Backend App"
            },
            {
                "name": "ACME Corp. Frontend App"
            },
            {
                "name": "Creapond"
            },
            {
                "name": "Withinpixels"
            }
        ],
        "widget1"      : {
            "ranges"      : {
                "DY" : "Yesterday",
                "DT" : "Today",
                "DTM": "Tomorrow"
            },
            "currentRange": "DT",
            "data"        : {
                "label": "DUE TASKS",
                "count": {
                    "DY" : 21,
                    "DT" : 25,
                    "DTM": 19
                },
                "extra": {
                    "label": "Completed",
                    "count": {
                        "DY" : 6,
                        "DT" : 7,
                        "DTM": "-"
                    }
                }
            },
            "detail"      : "You can show some detailed information about this widget in here."
        },
        "widget2"      : {
            "title" : "Overdue",
            "data"  : {
                "label": "TASKS",
                "count": 4,
                "extra": {
                    "label": "Yesterday's overdue",
                    "count": 2
                }
            },
            "detail": "You can show some detailed information about this widget in here."
        },
        "widget3"      : {
            "title" : "Issues",
            "data"  : {
                "label": "OPEN",
                "count": 32,
                "extra": {
                    "label": "Closed today",
                    "count": 0
                }
            },
            "detail": "You can show some detailed information about this widget in here."
        },
        "widget4"      : {
            "title" : "Features",
            "data"  : {
                "label": "PROPOSALS",
                "count": 42,
                "extra": {
                    "label": "Implemented",
                    "count": 8
                }
            },
            "detail": "You can show some detailed information about this widget in here."
        },
        "widget5"      : {
            "title"     : "Github Issues",
            "ranges"    : {
                "TW": "This Week",
                "LW": "Last Week",
                "2W": "2 Weeks Ago"
            },
            "mainChart" : {
                "2W": [
                    {
                        "key"   : "Closed Issues",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 9
                            },
                            {
                                "x": "Tue",
                                "y": 12
                            },
                            {
                                "x": "Wed",
                                "y": 9
                            },
                            {
                                "x": "Thu",
                                "y": 12
                            },
                            {
                                "x": "Fri",
                                "y": 7
                            },
                            {
                                "x": "Sat",
                                "y": 8
                            },
                            {
                                "x": "Sun",
                                "y": 16
                            }
                        ]
                    },
                    {
                        "key"   : "Issues",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 37
                            },
                            {
                                "x": "Tue",
                                "y": 32
                            },
                            {
                                "x": "Wed",
                                "y": 39
                            },
                            {
                                "x": "Thu",
                                "y": 27
                            },
                            {
                                "x": "Fri",
                                "y": 18
                            },
                            {
                                "x": "Sat",
                                "y": 24
                            },
                            {
                                "x": "Sun",
                                "y": 20
                            }
                        ]
                    }
                ],
                "LW": [
                    {
                        "key"   : "Closed Issues",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 12
                            },
                            {
                                "x": "Tue",
                                "y": 8
                            },
                            {
                                "x": "Wed",
                                "y": 7
                            },
                            {
                                "x": "Thu",
                                "y": 13
                            },
                            {
                                "x": "Fri",
                                "y": 7
                            },
                            {
                                "x": "Sat",
                                "y": 6
                            },
                            {
                                "x": "Sun",
                                "y": 10
                            }
                        ]
                    },
                    {
                        "key"   : "Issues",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 37
                            },
                            {
                                "x": "Tue",
                                "y": 24
                            },
                            {
                                "x": "Wed",
                                "y": 51
                            },
                            {
                                "x": "Thu",
                                "y": 31
                            },
                            {
                                "x": "Fri",
                                "y": 29
                            },
                            {
                                "x": "Sat",
                                "y": 17
                            },
                            {
                                "x": "Sun",
                                "y": 31
                            }
                        ]
                    }
                ],
                "TW": [
                    {
                        "key"   : "Closed Issues",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 11
                            },
                            {
                                "x": "Tue",
                                "y": 10
                            },
                            {
                                "x": "Wed",
                                "y": 8
                            },
                            {
                                "x": "Thu",
                                "y": 11
                            },
                            {
                                "x": "Fri",
                                "y": 8
                            },
                            {
                                "x": "Sat",
                                "y": 10
                            },
                            {
                                "x": "Sun",
                                "y": 17
                            }
                        ]
                    },
                    {
                        "key"   : "Issues",
                        "values": [
                            {
                                "x": "Mon",
                                "y": 42
                            },
                            {
                                "x": "Tue",
                                "y": 28
                            },
                            {
                                "x": "Wed",
                                "y": 43
                            },
                            {
                                "x": "Thu",
                                "y": 34
                            },
                            {
                                "x": "Fri",
                                "y": 20
                            },
                            {
                                "x": "Sat",
                                "y": 25
                            },
                            {
                                "x": "Sun",
                                "y": 22
                            }
                        ]
                    }
                ]
            },
            "supporting": {
                "created"   : {
                    "label": "CREATED",
                    "count": {
                        "2W": 48,
                        "LW": 46,
                        "TW": 54
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Created",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 8
                                    },
                                    {
                                        "x": 2,
                                        "y": 5
                                    },
                                    {
                                        "x": 3,
                                        "y": 6
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Created",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Created",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 3
                                    },
                                    {
                                        "x": 1,
                                        "y": 2
                                    },
                                    {
                                        "x": 2,
                                        "y": 1
                                    },
                                    {
                                        "x": 3,
                                        "y": 4
                                    },
                                    {
                                        "x": 4,
                                        "y": 8
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                "closed"    : {
                    "label": "CLOSED",
                    "count": {
                        "2W": 27,
                        "LW": 31,
                        "TW": 26
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Closed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 3
                                    },
                                    {
                                        "x": 1,
                                        "y": 2
                                    },
                                    {
                                        "x": 2,
                                        "y": 1
                                    },
                                    {
                                        "x": 3,
                                        "y": 4
                                    },
                                    {
                                        "x": 4,
                                        "y": 8
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 4
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Closed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 5
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Closed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                "re-opened" : {
                    "label": "RE-OPENED",
                    "count": {
                        "2W": 4,
                        "LW": 5,
                        "TW": 2
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Re-Opened",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Re-Opened",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 7
                                    },
                                    {
                                        "x": 2,
                                        "y": 8
                                    },
                                    {
                                        "x": 3,
                                        "y": 8
                                    },
                                    {
                                        "x": 4,
                                        "y": 6
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 1
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Re-Opened",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 3
                                    },
                                    {
                                        "x": 1,
                                        "y": 2
                                    },
                                    {
                                        "x": 2,
                                        "y": 1
                                    },
                                    {
                                        "x": 3,
                                        "y": 4
                                    },
                                    {
                                        "x": 4,
                                        "y": 8
                                    },
                                    {
                                        "x": 5,
                                        "y": 8
                                    },
                                    {
                                        "x": 6,
                                        "y": 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                "wont-fix"  : {
                    "label": "WON'T FIX",
                    "count": {
                        "2W": 6,
                        "LW": 3,
                        "TW": 4
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Won't Fix",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 7
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 6
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 3
                                    },
                                    {
                                        "x": 6,
                                        "y": 2
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Won't Fix",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Won't Fix",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 5
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                "needs-test": {
                    "label": "NEEDS TEST",
                    "count": {
                        "2W": 10,
                        "LW": 7,
                        "TW": 8
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Won't Fix",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 5
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Won't Fix",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 7
                                    },
                                    {
                                        "x": 2,
                                        "y": 8
                                    },
                                    {
                                        "x": 3,
                                        "y": 8
                                    },
                                    {
                                        "x": 4,
                                        "y": 6
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 1
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Won't Fix",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 3
                                    },
                                    {
                                        "x": 2,
                                        "y": 7
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                "fixed"     : {
                    "label": "FIXED",
                    "count": {
                        "2W": 21,
                        "LW": 17,
                        "TW": 14
                    },
                    "chart": {
                        "2W": [
                            {
                                "key"   : "Fixed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 7
                                    },
                                    {
                                        "x": 2,
                                        "y": 8
                                    },
                                    {
                                        "x": 3,
                                        "y": 8
                                    },
                                    {
                                        "x": 4,
                                        "y": 6
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 1
                                    }
                                ]
                            }
                        ],
                        "LW": [
                            {
                                "key"   : "Fixed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 6
                                    },
                                    {
                                        "x": 1,
                                        "y": 5
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 5
                                    },
                                    {
                                        "x": 4,
                                        "y": 7
                                    },
                                    {
                                        "x": 5,
                                        "y": 4
                                    },
                                    {
                                        "x": 6,
                                        "y": 7
                                    }
                                ]
                            }
                        ],
                        "TW": [
                            {
                                "key"   : "Fixed",
                                "values": [
                                    {
                                        "x": 0,
                                        "y": 5
                                    },
                                    {
                                        "x": 1,
                                        "y": 7
                                    },
                                    {
                                        "x": 2,
                                        "y": 4
                                    },
                                    {
                                        "x": 3,
                                        "y": 6
                                    },
                                    {
                                        "x": 4,
                                        "y": 5
                                    },
                                    {
                                        "x": 5,
                                        "y": 3
                                    },
                                    {
                                        "x": 6,
                                        "y": 2
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        "widget6"      : {
            "title"      : "Task Distribution",
            "ranges"     : {
                "TW": "This Week",
                "LW": "Last Week",
                "2W": "2 Weeks Ago"
            },
            "mainChart"  : {
                "2W": [
                    {
                        "label": "Frontend",
                        "value": 18
                    },
                    {
                        "label": "Backend",
                        "value": 17
                    },
                    {
                        "label": "Api",
                        "value": 40
                    },
                    {
                        "label": "Isues",
                        "value": 25
                    }
                ],
                "LW": [
                    {
                        "label": "Frontend",
                        "value": 19
                    },
                    {
                        "label": "Backend",
                        "value": 16
                    },
                    {
                        "label": "Api",
                        "value": 42
                    },
                    {
                        "label": "Isues",
                        "value": 23
                    }
                ],
                "TW": [
                    {
                        "label": "Frontend",
                        "value": 15
                    },
                    {
                        "label": "Backend",
                        "value": 20
                    },
                    {
                        "label": "Api",
                        "value": 38
                    },
                    {
                        "label": "Isues",
                        "value": 27
                    }
                ]
            },
            "footerLeft" : {
                "title": "Tasks Added",
                "count": {
                    "2W": 487,
                    "LW": 526,
                    "TW": 594
                }
            },
            "footerRight": {
                "title": "Tasks Completed",
                "count": {
                    "2W": 193,
                    "LW": 260,
                    "TW": 287
                }
            }
        },
        "widget7"      : {
            "title"   : "Schedule",
            "ranges"  : {
                "T" : "Today",
                "TM": "Tomorrow"
            }
            ,
            "schedule": {
                "T" : [
                    {
                        "title"   : "Group Meeting",
                        "time"    : "In 32 minutes",
                        "location": "Room 1B"
                    },
                    {
                        "title": "Coffee Break",
                        "time" : "10:30 AM"
                    },
                    {
                        "title": "Public Beta Release",
                        "time" : "11:00 AM"
                    },
                    {
                        "title": "Lunch",
                        "time" : "12:10 PM"
                    },
                    {
                        "title": "Dinner with David",
                        "time" : "17:30 PM"
                    },
                    {
                        "title": "Jane's Birthday Party",
                        "time" : "19:30 PM"
                    },
                    {
                        "title": "Overseer's Retirement Party",
                        "time" : "21:30 PM"
                    }
                ],
                "TM": [
                    {
                        "title": "Marketing Meeting",
                        "time" : "09:00 AM"
                    },
                    {
                        "title": "Public Announcement",
                        "time" : "11:00 AM"
                    },
                    {
                        "title": "Lunch",
                        "time" : "12:10 PM"
                    },
                    {
                        "title": "Meeting with Beta Testers",
                        "time" : "15:00 AM"
                    },
                    {
                        "title": "Live Stream",
                        "time" : "17:30 PM"
                    },
                    {
                        "title": "Release Party",
                        "time" : "19:30 PM"
                    },
                    {
                        "title": "CEO's Party",
                        "time" : "22:30 PM"
                    }
                ]
            }
        },
        "widget8"      : {
            "title"    : "Budget Distribution",
            "mainChart": [
                {
                    "label": "Wireframing",
                    "value": 12
                },
                {
                    "label": "Design",
                    "value": 17
                },
                {
                    "label": "Coding",
                    "value": 28
                },
                {
                    "label": "Marketing",
                    "value": 25
                },
                {
                    "label": "Extra",
                    "value": 15
                }
            ]
        },
        "widget9"      : {
            "title"         : "Spent",
            "ranges"        : {
                "TW": "This Week",
                "LW": "Last Week",
                "2W": "2 Weeks Ago"
            },
            "weeklySpent"   : {
                "title": "WEEKLY SPENT",
                "count": {
                    "2W": "2,682.85",
                    "LW": "1,445.34",
                    "TW": "3,630.15"
                },
                "chart": {
                    "2W": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 6
                                },
                                {
                                    "x": 1,
                                    "y": 1
                                },
                                {
                                    "x": 2,
                                    "y": 3
                                },
                                {
                                    "x": 3,
                                    "y": 4
                                },
                                {
                                    "x": 4,
                                    "y": 5
                                },
                                {
                                    "x": 5,
                                    "y": 5
                                },
                                {
                                    "x": 6,
                                    "y": 2
                                }
                            ]
                        }
                    ],
                    "LW": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 4
                                },
                                {
                                    "x": 1,
                                    "y": 6
                                },
                                {
                                    "x": 2,
                                    "y": 2
                                },
                                {
                                    "x": 3,
                                    "y": 2
                                },
                                {
                                    "x": 4,
                                    "y": 1
                                },
                                {
                                    "x": 5,
                                    "y": 3
                                },
                                {
                                    "x": 6,
                                    "y": 4
                                }
                            ]
                        }
                    ],
                    "TW": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 2
                                },
                                {
                                    "x": 1,
                                    "y": 6
                                },
                                {
                                    "x": 2,
                                    "y": 5
                                },
                                {
                                    "x": 3,
                                    "y": 4
                                },
                                {
                                    "x": 4,
                                    "y": 5
                                },
                                {
                                    "x": 5,
                                    "y": 3
                                },
                                {
                                    "x": 6,
                                    "y": 6
                                }
                            ]
                        }
                    ]
                }
            },
            "totalSpent"    : {
                "title": "TOTAL SPENT",
                "count": {
                    "2W": "29,682.85",
                    "LW": "31,128.19",
                    "TW": "34,758.34"
                },
                "chart": {
                    "2W": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 3
                                },
                                {
                                    "x": 1,
                                    "y": 2
                                },
                                {
                                    "x": 2,
                                    "y": 2
                                },
                                {
                                    "x": 3,
                                    "y": 4
                                },
                                {
                                    "x": 4,
                                    "y": 7
                                },
                                {
                                    "x": 5,
                                    "y": 7
                                },
                                {
                                    "x": 6,
                                    "y": 4
                                }
                            ]
                        }
                    ],
                    "LW": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 5
                                },
                                {
                                    "x": 1,
                                    "y": 7
                                },
                                {
                                    "x": 2,
                                    "y": 8
                                },
                                {
                                    "x": 3,
                                    "y": 8
                                },
                                {
                                    "x": 4,
                                    "y": 6
                                },
                                {
                                    "x": 5,
                                    "y": 4
                                },
                                {
                                    "x": 6,
                                    "y": 1
                                }
                            ]
                        }
                    ],
                    "TW": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 6
                                },
                                {
                                    "x": 1,
                                    "y": 3
                                },
                                {
                                    "x": 2,
                                    "y": 7
                                },
                                {
                                    "x": 3,
                                    "y": 5
                                },
                                {
                                    "x": 4,
                                    "y": 5
                                },
                                {
                                    "x": 5,
                                    "y": 4
                                },
                                {
                                    "x": 6,
                                    "y": 7
                                }
                            ]
                        }
                    ]
                }
            },
            "remaining"     : {
                "title": "REMAINING",
                "count": {
                    "2W": "94.317,15",
                    "LW": "92.871,81",
                    "TW": "89.241,66"
                },
                "chart": {
                    "2W": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 1
                                },
                                {
                                    "x": 1,
                                    "y": 4
                                },
                                {
                                    "x": 2,
                                    "y": 5
                                },
                                {
                                    "x": 3,
                                    "y": 7
                                },
                                {
                                    "x": 4,
                                    "y": 8
                                },
                                {
                                    "x": 5,
                                    "y": 2
                                },
                                {
                                    "x": 6,
                                    "y": 4
                                }
                            ]
                        }
                    ],
                    "LW": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 3
                                },
                                {
                                    "x": 1,
                                    "y": 2
                                },
                                {
                                    "x": 2,
                                    "y": 1
                                },
                                {
                                    "x": 3,
                                    "y": 4
                                },
                                {
                                    "x": 4,
                                    "y": 8
                                },
                                {
                                    "x": 5,
                                    "y": 8
                                },
                                {
                                    "x": 6,
                                    "y": 4
                                }
                            ]
                        }
                    ],
                    "TW": [
                        {
                            "label" : "Weekly Spent",
                            "values": [
                                {
                                    "x": 0,
                                    "y": 2
                                },
                                {
                                    "x": 1,
                                    "y": 4
                                },
                                {
                                    "x": 2,
                                    "y": 8
                                },
                                {
                                    "x": 3,
                                    "y": 6
                                },
                                {
                                    "x": 4,
                                    "y": 2
                                },
                                {
                                    "x": 5,
                                    "y": 5
                                },
                                {
                                    "x": 6,
                                    "y": 1
                                }
                            ]
                        }
                    ]
                }
            },
            "totalRemaining": {
                "title": "TOTAL BUDGET",
                "count": "124.000,00"
            },
            "totalBudget"   : {
                "title": "TOTAL BUDGET",
                "count": "124.000,00"
            }
        },
        "widget10"     : {
            "title": "Budget Details",
            "table": {
                "columns": [
                    {
                        "title": "Budget Type"
                    },
                    {
                        "title": "Total Budget"
                    },
                    {
                        "title": "Spent ($)"
                    },
                    {
                        "title": "Spent (%)"
                    },
                    {
                        "title": "Remaining ($)"
                    },
                    {
                        "title": "Remaining (%)"
                    }
                ],
                "rows"   : [
                    [
                        {
                            "value"  : "Wireframing",
                            "classes": "badge badge-primary",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$14,880.00",
                            "classes": "text-bold",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$14,000.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%94.08",
                            "classes": "text-success",
                            "icon"   : "icon-trending-up text-success"
                        },
                        {
                            "value"  : "$880.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%5.92",
                            "classes": "",
                            "icon"   : ""
                        }
                    ],
                    [
                        {
                            "value"  : "Design",
                            "classes": "badge badge-success",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$21,080.00",
                            "classes": "text-bold",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$17,240.34",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%81.78",
                            "classes": "text-success",
                            "icon"   : "icon-trending-up text-success"
                        },
                        {
                            "value"  : "$3,839.66",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%18.22",
                            "classes": "",
                            "icon"   : ""
                        }
                    ],
                    [
                        {
                            "value"  : "Coding",
                            "classes": "badge badge-warning",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$34,720.00",
                            "classes": "text-bold",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$3,518.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%10.13",
                            "classes": "text-danger",
                            "icon"   : "icon-trending-down text-danger"
                        },
                        {
                            "value"  : "$31,202.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%89.87",
                            "classes": "",
                            "icon"   : ""
                        }
                    ],
                    [
                        {
                            "value"  : "Marketing",
                            "classes": "badge badge-info",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$34,720.00",
                            "classes": "text-bold",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$0.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%0.00",
                            "classes": "text-info",
                            "icon"   : "icon-minus text-info"
                        },
                        {
                            "value"  : "$34,720.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%100.00",
                            "classes": "",
                            "icon"   : ""
                        }
                    ],
                    [
                        {
                            "value"  : "Extra",
                            "classes": "badge badge-danger",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$18,600.00",
                            "classes": "text-bold",
                            "icon"   : ""
                        },
                        {
                            "value"  : "$0.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%0.00",
                            "classes": "text-info",
                            "icon"   : "icon-minus text-info"
                        },
                        {
                            "value"  : "$34,720.00",
                            "classes": "",
                            "icon"   : ""
                        },
                        {
                            "value"  : "%100.00",
                            "classes": "",
                            "icon"   : ""
                        }
                    ]
                ]
            }
        },
        "widget11"     : {
            "title": "Team Members",
            "table": {
                "columns": [
                    {
                        "title": ""
                    },
                    {
                        "title": "Name"
                    },
                    {
                        "title": "Position"
                    },
                    {
                        "title": "Office"
                    },
                    {
                        "title": "E-Mail"
                    },
                    {
                        "title": "Phone"
                    }
                ],
                "rows"   : [
                    [
                        "james.jpg",
                        "Jack Gilbert",
                        "Design Manager",
                        "Johor Bahru",
                        "jgilbert48@mail.com",
                        "+16 298 032 7774"
                    ],
                    [
                        "katherine.jpg",
                        "Kathy Anderson",
                        "Recruiting Manager",
                        "Solţānābād",
                        "kanderson49@mail.com.br",
                        "+23 572 311 1136"
                    ],
                    [
                        "andrew.jpg",
                        "Mark Turner",
                        "Recruiting Manager",
                        "Neftegorsk",
                        "mturner4a@mail.com",
                        "+01 139 803 9263"
                    ],
                    [
                        "jane.jpg",
                        "Kathryn Martinez",
                        "Director of Sales",
                        "Palekastro",
                        "kmartinez4b@mail.com",
                        "+25 467 022 5393"
                    ],
                    [
                        "alice.jpg",
                        "Annie Gonzales",
                        "Actuary",
                        "Candon",
                        "agonzales4c@mail.edu",
                        "+99 891 619 7138"
                    ],
                    [
                        "vincent.jpg",
                        "Howard King",
                        "Human Resources",
                        "Bergen op Zoom",
                        "hking4d@mail.gov",
                        "+46 984 348 1409"
                    ],
                    [
                        "joyce.jpg",
                        "Elizabeth Dixon",
                        "Electrical Engineer",
                        "Písečná",
                        "edixon4e@mail.gov",
                        "+33 332 067 9063"
                    ],
                    [
                        "danielle.jpg",
                        "Dorothy Morris",
                        "Office Assistant",
                        "Magsaysay",
                        "dmorris4f@mail.com",
                        "+05 490 958 6120"
                    ],
                    [
                        "carl.jpg",
                        "Mark Gonzales",
                        "Quality Control",
                        "Matsue-shi",
                        "mgonzales4g@mail.com",
                        "+03 168 394 9935"
                    ],
                    [
                        "profile.jpg",
                        "Catherine Rogers",
                        "Programmer Analyst",
                        "Kangar",
                        "crogers4h@mail.com",
                        "+86 235 407 5373"
                    ],
                    [
                        "garry.jpg",
                        "Ruth Grant",
                        "Community Outreach",
                        "Beaune",
                        "rgrant4i@mail.pl",
                        "+36 288 083 8460"
                    ],
                    [
                        "james.jpg",
                        "Phyllis Gutierrez",
                        "Administrative Assistant",
                        "Shlissel’burg",
                        "pgutierrez4j@mail.net",
                        "+52 749 861 9304"
                    ],
                    [
                        "alice.jpg",
                        "Lillian Morris",
                        "Media Planner",
                        "Berlin",
                        "lmorris4k@mail.de",
                        "+59 695 110 3856"
                    ],
                    [
                        "vincent.jpg",
                        "Jeremy Anderson",
                        "Systems Engineer",
                        "Lũng Hồ",
                        "janderson4l@mail.uk",
                        "+40 384 115 1448"
                    ],
                    [
                        "carl.jpg",
                        "Arthur Lawrence",
                        "Nurse Practicioner",
                        "Sarkanjut",
                        "alawrence4m@mail.com",
                        "+36 631 599 7867"
                    ],
                    [
                        "andrew.jpg",
                        "David Simmons",
                        "Social Worker",
                        "Ushumun",
                        "dsimmons4n@mail.com",
                        "+01 189 681 4417"
                    ],
                    [
                        "danielle.jpg",
                        "Daniel Johnston",
                        "Help Desk",
                        "São Carlos",
                        "djohnston4o@mail.gov",
                        "+60 028 943 7919"
                    ],
                    [
                        "joyce.jpg",
                        "Ann King",
                        "Internal Auditor",
                        "Liren",
                        "aking4p@mail.com",
                        "+91 103 932 6545"
                    ],
                    [
                        "james.jpg",
                        "Phillip Franklin",
                        "VP Accounting",
                        "Soba",
                        "pfranklin4q@mail.com",
                        "+25 820 986 7626"
                    ],
                    [
                        "garry.jpg",
                        "Gary Gonzalez",
                        "Speech Pathologist",
                        "Gangkou",
                        "ggonzalez4r@mail.cc",
                        "+10 862 046 7916"
                    ]
                ]
            }
        },
        "weatherWidget": {
            "locations"      : {
                "NewYork": {
                    "name"           : "New York",
                    "icon"           : "icon-weather-pouring",
                    "temp"           : {
                        "C": "22",
                        "F": "72"
                    }
                    ,
                    "windSpeed"      : {
                        "KMH": 12,
                        "MPH": 7.5
                    }
                    ,
                    "windDirection"  : "NW",
                    "rainProbability": "98%",
                    "next3Days"      : [
                        {
                            "name": "Sunday",
                            "icon": "icon-weather-pouring",
                            "temp": {
                                "C": "21",
                                "F": "70"
                            }
                        },
                        {
                            "name": "Sunday",
                            "icon": "icon-weather-pouring",
                            "temp": {
                                "C": "19",
                                "F": "66"
                            }
                        },
                        {
                            "name": "Tuesday",
                            "icon": "icon-weather-partlycloudy",
                            "temp": {
                                "C": "24",
                                "F": "75"
                            }
                        }
                    ]
                }
            }
            ,
            "currentLocation": "NewYork",
            "tempUnit"       : "C",
            "speedUnit"      : "KMH"
        }
    };

    /**
     * Widget 5
     */
    var widget5Option = 'TW';
    // Main Chart
    nv.addGraph(function ()
    {
        var chart = nv.models.multiBarChart()
            .options(
                {
                    color       : ['#03a9f4', '#b3e5fc'],
                    margin      : {
                        top   : 48,
                        right : 16,
                        bottom: 16,
                        left  : 32
                    },
                    clipEdge    : true,
                    groupSpacing: 0.3,
                    reduceXTicks: false,
                    stacked     : true,
                    duration    : 250,
                    x           : function (d)
                    {
                        return d.x;
                    },
                    y           : function (d)
                    {
                        return d.y;
                    },
                    yTickFormat : function (d)
                    {
                        return d;
                    }
                }
            );

        var chartd3 = d3.select('#widget5-main-chart svg')
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        $(window).bind('update:widget5', function ()
        {

            initChart();
        })

        function initChart()
        {
            chartData = data.widget5.mainChart[widget5Option];
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });

    // Supporting Charts
    $.each(['created', 'closed', 're-opened', 'wont-fix', 'needs-test', 'fixed'], function (index, id)
    {
        nv.addGraph(function ()
        {
            var chart = nv.models.lineChart()
                .options(
                    {
                        color                  : ['#03A9F4'],
                        height                 : 50,
                        margin                 : {
                            top   : 8,
                            right : 0,
                            bottom: 0,
                            left  : 0
                        },
                        isArea                 : true,
                        interpolate            : 'cardinal',
                        clipEdge               : true,
                        duration               : 500,
                        showXAxis              : false,
                        showYAxis              : false,
                        showLegend             : false,
                        useInteractiveGuideline: true,
                        x                      : function (d)
                        {
                            return d.x;
                        },
                        y                      : function (d)
                        {
                            return d.y;
                        },
                        yDomain                : [0, 9]
                    }
                );

            var chartd3 = d3.select('#widget5-' + id + '-chart svg');
            var chartData;

            initChart();

            nv.utils.windowResize(chart.update);

            $(window).bind('update:widget5', function ()
            {

                initChart();
                $('#widget5-' + id + '-chart .count').text(data.widget5.supporting[id].count[widget5Option]);
            })

            function initChart()
            {
                chartData = data.widget5.supporting[id].chart[widget5Option];
                chartd3.datum(chartData).call(chart);
            }

            return chart;
        });
    });

    $('.widget5-option-change-btn').on('click', function (ev)
    {
        console.log($(ev.target).data('interval'));
        widget5Option = $(ev.target).data('interval');
        $(window).trigger('update:widget5');
    });

    /**
     * Widget 6
     */
    var widget6Option = 'TW';
    // Main Chart - Donut chart
    nv.addGraph(function ()
    {
        var chart = nv.models.pieChart()
            .options({
                color       : ['#f44336', '#9c27b0', '#03a9f4', '#e91e63'],
                margin      : {
                    top   : 0,
                    right : 0,
                    bottom: 0,
                    left  : 0
                },
                donut       : true,
                clipEdge    : true,
                cornerRadius: 0,
                labelType   : 'percent',
                padAngle    : 0.02,
                x           : function (d)
                {
                    return d.label;
                },
                y           : function (d)
                {
                    return d.value;
                }
            });

        var chartd3 = d3.select('#widget6-main-chart svg');
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        $(window).bind('update:widget6', function ()
        {

            initChart();
            $('#added-tasks .count').text(data.widget6.footerLeft.count[widget6Option]);
            $('#completed-tasks .count').text(data.widget6.footerRight.count[widget6Option]);
        })

        function initChart()
        {
            chartData = data.widget6.mainChart[widget6Option];
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });


    $('#widget6-option-select').on('change', function (ev)
    {
        console.log($(ev.target).val());
        widget6Option = $(ev.target).val();
        $(window).trigger('update:widget6');
    });


    /**
     * Widget 8
     */

    // Main Chart - Donut chart
    nv.addGraph(function ()
    {
        var chart = nv.models.pieChart()
            .options({
                color    : ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107'],
                margin   : {
                    top   : 0,
                    right : 0,
                    bottom: 0,
                    left  : 0
                },
                labelType: 'percent',
                x        : function (d)
                {
                    return d.label;
                },
                y        : function (d)
                {
                    return d.value;
                }
            });

        var chartd3 = d3.select('#widget8-main-chart svg');
        var chartData;

        initChart();

        nv.utils.windowResize(chart.update);

        $(window).bind('update:widget8', function ()
        {
            initChart();
        })

        function initChart()
        {
            chartData = data.widget8.mainChart;
            chartd3.datum(chartData).call(chart);
        }

        return chart;
    });


    /**
     * Widget 9 Charts
     */
    var widget9Option = 'TW';

    $.each(['weeklySpent', 'totalSpent', 'remaining'], function (index, id)
    {
        nv.addGraph(function ()
        {
            var chart = nv.models.lineChart()
                .options(
                    {
                        color                  : ['#03A9F4'],
                        height                 : 50,
                        margin                 : {
                            top   : 8,
                            right : 0,
                            bottom: 0,
                            left  : 0
                        },
                        isArea                 : true,
                        interpolate            : 'cardinal',
                        clipEdge               : true,
                        duration               : 500,
                        showXAxis              : false,
                        showYAxis              : false,
                        showLegend             : false,
                        useInteractiveGuideline: true,
                        x                      : function (d)
                        {
                            return d.x;
                        },
                        y                      : function (d)
                        {
                            return d.y;
                        },
                        yDomain                : [0, 9]
                    }
                );

            var chartd3 = d3.select('#widget9-' + id + ' svg');
            var chartData;

            initChart();

            nv.utils.windowResize(chart.update);

            $(window).bind('update:widget9', function ()
            {
                initChart();
                $('#widget9-' + id + ' .item-value').text(data.widget9[id].count[widget9Option]);
            })

            function initChart()
            {
                chartData = data.widget9[id].chart[widget9Option];
                chartd3.datum(chartData).call(chart);
            }

            return chart;
        });
    });

    $('#widget9-option-select').on('change', function (ev)
    {
        console.log($(ev.target).val());
        widget9Option = $(ev.target).val();
        $(window).trigger('update:widget9');
    });
})();