YoEmber.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return {
	"title": "Live Shows Calendar",
	"intro": "Columbus, Ohio local music calendar.",
	"dates": [
		{
			"date": "Friday",
			"venues": [
				{
					"name": "Venue 1 Name",
					"url": "http://cringe.com",
					"phone": "111-111-1111",
					"streetAddress": ["111 1th St.", "1st Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "111111",
					"notes": "Venue 1 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": true						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				},
				{
					"name": "Venue 2 Name",
					"url": "http://cringe.com",
					"phone": "222-222-2222",
					"streetAddress": ["222 2th St.", "2nd Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "22222",
					"notes": "Venue 2 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				},
				{
					"name": "Venue 3 Name",
					"url": "http://cringe.com",
					"phone": "333-333-3333",
					"streetAddress": ["333 3th St.", "5th Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "33333",
					"notes": "Venue 3 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
												
						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				}
			]
		},
		{
			"date": "Saturday",
			"venues": [
				{
					"name": "Venue 1 Name",
					"url": "http://cringe.com",
					"phone": "111-111-1111",
					"streetAddress": ["111 1th St.", "1st Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "111111",
					"notes": "Venue 1 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
												
						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				},
				{
					"name": "Venue 2 Name",
					"url": "http://cringe.com",
					"phone": "222-222-2222",
					"streetAddress": ["222 2th St.", "2nd Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "22222",
					"notes": "Venue 2 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
												
						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				},
				{
					"name": "Venue 3 Name",
					"url": "http://cringe.com",
					"phone": "333-333-3333",
					"streetAddress": ["333 3th St.", "5th Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "33333",
					"notes": "Venue 3 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
												
						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				}
			]
		},
		{
			"date": "Sunday",
			"venues": [
				{
					"name": "Venue 1 Name",
					"url": "http://cringe.com",
					"phone": "111-111-1111",
					"streetAddress": ["111 1th St.", "1st Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "111111",
					"notes": "Venue 1 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
												
						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				},
				{
					"name": "Venue 2 Name",
					"url": "http://cringe.com",
					"phone": "222-222-2222",
					"streetAddress": ["222 2th St.", "2nd Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "22222",
					"notes": "Venue 2 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
												
						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				},
				{
					"name": "Venue 3 Name",
					"url": "http://cringe.com",
					"phone": "333-333-3333",
					"streetAddress": ["333 3th St.", "5th Floor"],
					"city": "Columbus",
					"tate": "Ohio",
					"postalCode": "33333",
					"notes": "Venue 3 Notes",
					"events": [
						{
							"attractions": [
								{
									"name": "Attraction Name 1",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1 Name",
									"url": "http://promoter1.com",
									"phone": "555-555-5555",
									"streetAddress": ["555 5th St."],
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["6pm"],
							"ages": "all ages",
							"cost": "free",
							"notes": "happy hour show",
							"soldout": false
												
						
						},
						{
							"attractions": [
								{
									"name": "Attraction Name 1b",
									"url": "http://attratcion1.com/",
									"shortDescription": "Short Description 1",
									"longDescription": "Long Description 1",
									"notes": "Attraction 1 note"
								},
								{
									"name": "Attraction Name 2b",
									"url": "http://attratcion2.com/",
									"shortDescription": "Short Description 2",
									"longDescription": "Long Description 2",
									"notes": "Attraction 2 note"
								},
								{
									"name": "Attraction Name 3b",
									"url": "http://attratcion3.com/",
									"shortDescription": "Short Description 3",
									"longDescription": "Long Description 3",
									"notes": "Attraction 3 note"
								}
							],
							"promoters": [
								{
									"name": "Promoter 1b Name",
									"url": "http://promoter1b.com",
									"phone": "555-555-5555",
									"address1": "555 5th St.",
									"address2": "5th Floor",
									"city": "Columbus",
									"tate": "Ohio",
									"postalCode": "555555",
									"notes": "Notes"
								}
							],
							"times": ["10pm", "12m"],
							"ages": "ages 21+",
							"cost": "$5",
							"notes": "free before 11pm"
						}
					]
				}
			]
		}
	]
}
;
    }
});
