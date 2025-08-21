export interface PlantData {
  id: string;
  scientificName: string;
  commonNames: {
    en: string[];
    hi: string[];
    bn: string[];
  };
  family: string;
  category: string;
  description: {
    en: string;
    hi: string;
    bn: string;
  };
  care: {
    watering: {
      en: string;
      hi: string;
      bn: string;
    };
    light: {
      en: string;
      hi: string;
      bn: string;
    };
    temperature: {
      en: string;
      hi: string;
      bn: string;
    };
    humidity: {
      en: string;
      hi: string;
      bn: string;
    };
    soil: {
      en: string;
      hi: string;
      bn: string;
    };
    fertilizer: {
      en: string;
      hi: string;
      bn: string;
    };
  };
  characteristics: {
    height: string;
    spread: string;
    bloomTime: string;
    hardiness: string;
  };
  facts: {
    en: string[];
    hi: string[];
    bn: string[];
  };
  benefits: {
    en: string[];
    hi: string[];
    bn: string[];
  };
  toxicity: {
    en: string;
    hi: string;
    bn: string;
  };
  propagation: {
    en: string;
    hi: string;
    bn: string;
  };
  commonProblems: {
    en: string[];
    hi: string[];
    bn: string[];
  };
  imageUrl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  airPurifying: boolean;
  petFriendly: boolean;
  origin: string;
}

export const plantDatabase: PlantData[] = [
  {
    id: 'monstera-deliciosa',
    scientificName: 'Monstera deliciosa',
    commonNames: {
      en: ['Swiss Cheese Plant', 'Ceriman', 'Cutleaf Philodendron', 'Hurricane Plant'],
      hi: ['स्विस चीज़ प्लांट', 'मॉन्स्टेरा', 'छिद्रित पत्ती का पौधा'],
      bn: ['সুইস চিজ প্লান্ট', 'মনস্টেরা', 'ছিদ্রযুক্ত পাতার গাছ']
    },
    family: 'Araceae',
    category: 'Houseplant',
    description: {
      en: 'A stunning tropical plant known for its large, glossy leaves with distinctive holes and splits. Native to Central America, it\'s a popular choice for indoor spaces due to its dramatic foliage and relatively easy care.',
      hi: 'एक आश्चर्यजनक उष्णकटिबंधीय पौधा जो अपनी बड़ी, चमकदार पत्तियों के लिए जाना जाता है जिनमें विशिष्ट छिद्र और विभाजन होते हैं। मध्य अमेरिका का मूल निवासी, यह अपनी नाटकीय पत्तियों और अपेक्षाकृत आसान देखभाल के कारण इनडोर स्थानों के लिए एक लोकप्रिय विकल्प है।',
      bn: 'একটি অত্যাশ্চর্য গ্রীষ্মমন্ডলীय উদ্ভিদ যা তার বড়, চকচকে পাতার জন্য পরিচিত যাতে স্বতন্ত্র ছিদ্র এবং বিভাজন রয়েছে। মধ্য আমেরিকার স্থানীয়, এটি তার নাটকীয় পাতা এবং তুলনামূলক সহজ যত্নের কারণে অভ্যন্তরীণ স্থানগুলির জন্য একটি জনপ্রিয় পছন্দ।'
    },
    care: {
      watering: {
        en: 'Water when the top inch of soil feels dry, typically every 1-2 weeks. Ensure good drainage to prevent root rot.',
        hi: 'जब मिट्টी का ऊपरी हिस्सा सूखा लगे तो पानी दें, आमतौर पर हर 1-2 सप्ताह में। जड़ सड़न को रोकने के लिए अच्छी जल निकासी सुनिश्चित करें।',
        bn: 'মাটির উপরের অংশ শুকনো মনে হলে পানি দিন, সাধারণত প্রতি ১-২ সপ্তাহে। শিকড় পচা রোধে ভাল নিষ্কাশন নিশ্চিত করুন।'
      },
      light: {
        en: 'Bright, indirect light. Can tolerate lower light but grows best with consistent bright, filtered sunlight.',
        hi: 'तेज़, अप्रत्यक्ष प्रकाश। कम रोशनी सहन कर सकता है लेकिन निरंतर तेज़, छनी हुई धूप के साथ सबसे अच्छा बढ़ता है।',
        bn: 'উজ্জ্বল, পরোক্ষ আলো। কম আলো সহ্য করতে পারে তবে ধারাবাহিক উজ্জ্বল, ছাঁকনি সূর্যালোকে সবচেয়ে ভাল বৃদ্ধি পায়।'
      },
      temperature: {
        en: 'Ideal range: 65-80°F (18-27°C). Protect from cold drafts and sudden temperature changes.',
        hi: 'आदর्श सीমা: 65-80°F (18-27°C)। ठंडी हवा और अचानक तापमान परिवर्तन से बचाएं।',
        bn: 'আদর্শ পরিসর: ৬৫-৮০°F (১৮-২৭°C)। ঠান্ডা বাতাস এবং হঠাৎ তাপমাত্রা পরিবর্তন থেকে রক্ষা করুন।'
      },
      humidity: {
        en: 'Prefers 50-60% humidity. Use a humidifier, pebble tray, or regular misting to increase humidity.',
        hi: '50-60% नमी पसंद करता है। नमी बढ़ाने के लिए ह्यूमिडिफायर, कंकड़ ट्रे या नियमित छिड़काव का उपयोग करें।',
        bn: '৫০-৬০% আর্দ্রতা পছন্দ করে। আর্দ্রতা বৃদ্ধির জন্য হিউমিডিফায়ার, নুড়ির ট্রে বা নিয়মিত স্প্রে করুন।'
      },
      soil: {
        en: 'Well-draining potting mix with peat, perlite, and bark. Slightly acidic to neutral pH (5.5-7.0).',
        hi: 'पीট, पर्लाইट और छाल के साथ अच्छी जल निকासी वाली मिट्टी का मिश्रण। हल्का अम्लीय से उदासीन pH (5.5-7.0)।',
        bn: 'পিট, পার্লাইট এবং বাকল সহ ভাল-নিষ্কাশনকারী পটিং মিশ্রণ। সামান্য অম্লীয় থেকে নিরপেক্ষ pH (৫.৫-৭.০)।'
      },
      fertilizer: {
        en: 'Feed monthly during growing season (spring-summer) with balanced liquid fertilizer diluted to half strength.',
        hi: 'बढ़ते मौसम (वसंत-गर्मी) के दौरान संतुलित तरल उर्वरक को आधी ताकत में घोलकर मासिक रूप से दें।',
        bn: 'বৃদ্ধির মৌসুমে (বসন্ত-গ্রীষ্ম) অর্ধেক শক্তিতে মিশ্রিত সুষম তরল সার দিয়ে মাসিক খাওয়ান।'
      }
    },
    characteristics: {
      height: '6-8 feet indoors, up to 30 feet outdoors',
      spread: '3-5 feet',
      bloomTime: 'Rarely blooms indoors',
      hardiness: 'USDA zones 10-12'
    },
    facts: {
      en: [
        'Leaves develop holes (fenestrations) as the plant matures',
        'Can produce edible fruit when grown outdoors in tropical climates',
        'Uses aerial roots to climb trees in its native habitat',
        'The holes in leaves help reduce wind resistance in storms'
      ],
      hi: [
        'पौधे के परिपक्व होने पर पत्तियों में छिद्र (फेनेस्ट्रेशन) विकसित होते हैं',
        'उष्णकटिबंधीय जलवायु में बाहर उगाने पर खाने योग्य फल पैदा कर सकता है',
        'अपने प्राकृतिक आवास में पेड़ों पर चढ़ने के लिए हवाई जड़ों का उपयोग करता है',
        'पत्तियों में छिद्र तूफान में हवा के प्रतिरोध को कम करने में मदद करते हैं'
      ],
      bn: [
        'উদ্ভিদ পরিপক্ক হওয়ার সাথে সাথে পাতায় ছিদ্র (ফেনেস্ট্রেশন) তৈরি হয়',
        'গ্রীষ্মমন্ডলীয় জলবায়ুতে বাইরে জন্মালে ভোজ্য ফল উৎপাদন করতে পারে',
        'তার প্রাকৃতিক আবাসস্থলে গাছে ওঠার জন্য বায়বীয় শিকড় ব্যবহার করে',
        'পাতার ছিদ্রগুলি ঝড়ে বাতাসের প্রতিরোধ কমাতে সাহায্য করে'
      ]
    },
    benefits: {
      en: [
        'Excellent air purifier, removes formaldehyde and benzene',
        'Adds tropical ambiance to any space',
        'Low maintenance once established',
        'Can grow very large, making a statement piece'
      ],
      hi: [
        'उत्कृष्ট वायु शुद्धक, फॉर्मलाडिहाइड और बेंजीन को हटाता है',
        'किसी भी स्थान में उष्णकटिबंधीय माहौल जोड़ता है',
        'स्थापित होने के बाद कम रखरखाव',
        'बहुत बड़ा हो सकता है, एक कथन टुकड़ा बनाता है'
      ],
      bn: [
        'চমৎকার বায়ু পরিশোধক, ফর্মালডিহাইড এবং বেনজিন অপসারণ করে',
        'যেকোনো স্থানে গ্রীষ্মমন্ডলীয় পরিবেশ যোগ করে',
        'স্থাপিত হওয়ার পর কম রক্ষণাবেক্ষণ',
        'খুব বড় হতে পারে, একটি বিবৃতি অংশ তৈরি করে'
      ]
    },
    toxicity: {
      en: 'Toxic to pets and humans if ingested. Contains calcium oxalate crystals.',
      hi: 'पालতू जानवরों और मनুष्यों के लिए विषाক्त यदि निगल लिया जाए। कैल्शियम ऑक्सालेट क्रिस्टल होते हैं।',
      bn: 'গিলে ফেললে পোষা প্রাণী এবং মানুষের জন্য বিষাক্ত। ক্যালসিয়াম অক্সালেট স্ফটিক রয়েছে।'
    },
    propagation: {
      en: 'Easy to propagate through stem cuttings with aerial roots. Place in water or moist soil.',
      hi: 'हवাई जड़ों के साथ तने की कटिंग के माध्यम से प्रचार करना आसान। पानी या नम मिट्टी में रखें।',
      bn: 'বায়বীয় শিকড় সহ কাণ্ডের কাটিং দিয়ে বংশবিস্তার করা সহজ। পানি বা আর্দ্র মাটিতে রাখুন।'
    },
    commonProblems: {
      en: [
        'Yellow leaves usually indicate overwatering',
        'Brown leaf tips suggest low humidity or fluoridated water',
        'Small holes without natural fenestration may indicate pests',
        'Leggy growth means insufficient light'
      ],
      hi: [
        'পীত পাতা সাধারণত অতিরিক্ত জল সেচনকে নির্দেশ করে',
        'বাদামী পাতার ডগা কম আর্দ্রতা বা ফ্লুরাইডযুক্ত জল নির্দেশ করে',
        'প্রাকৃতিক ফেনেস্ট্রেশন ছাড়া ছোট ছিদ্র কীটপতঙ্গ নির্দেশ করতে পারে',
        'পাতলা বৃদ্ধি মানে অপর্যাপ্ত আলো'
      ],
      bn: [
        'पीली पत्तियां आमतौर पर अधिक पानी देने का संकेत देती हैं',
        'भूरे पत्ते की युक्तियां कम आर्द्रता या फ्लोराइड युक्त पानी का सुझाव देती हैं',
        'प्राकृतिक फेनेस्ट्रेशन के बिना छोटे छेद कीटों का संकेत दे सकते हैं',
        'लेगी ग्रोथ का मतलब अपर्याप्त प्रकाश है'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    difficulty: 'Beginner',
    airPurifying: true,
    petFriendly: false,
    origin: 'Central America'
  },
  {
    id: 'snake-plant',
    scientificName: 'Sansevieria trifasciata',
    commonNames: {
      en: ['Snake Plant', 'Mother-in-Law\'s Tongue', 'Viper\'s Bowstring Hemp'],
      hi: ['सांप का पौधा', 'सास की जीभ', 'नागदोन'],
      bn: ['সাপ গাছ', 'শাশুড়ির জিহ্বা', 'সানসেভিয়েরিয়া']
    },
    family: 'Asparagaceae',
    category: 'Succulent',
    description: {
      en: 'A virtually indestructible succulent with thick, upright leaves marked with green and yellow stripes. Perfect for beginners and low-light conditions.',
      hi: 'मোটা পাতাযুक্ত এক প্রায় অবিনশ্বর রসালো উদ্ভিদ যার সবুজ এবং হলুদ ডোরা রয়েছে। শুরুকারীদের এবং কম আলোর অবস্থার জন্য নিখুঁত।',
      bn: 'एक लगभग अविनाशी रसीला मोटी, सीधी पत्तियों के साथ जो हरे और पीले धारियों से चिह्नित है। शुरुआती और कम रोशनी की स्थिति के लिए बिल्कुल सही।'
    },
    care: {
      watering: {
        en: 'Water deeply but infrequently, every 2-6 weeks depending on season. Allow soil to dry completely between waterings.',
        hi: 'গভীরভাবে কিন্তু কদাচিৎ পানি দিন, ঋতুর উপর নির্ভর করে প্রতি ২-৬ সপ্তাহে। পানি দেওয়ার মধ্যে মাটি সম্পূর্ণ শুকিয়ে যেতে দিন।',
        bn: 'गहराई से लेकिन कभी-कभार पानी दें, मौसम के आधार पर हर 2-6 सप्ताह में। पानी देने के बीच मिट्टी को पूरी तरह सूखने दें।'
      },
      light: {
        en: 'Tolerates low light to bright, indirect light. Avoid direct sunlight which can scorch leaves.',
        hi: 'কম আলো থেকে উজ্জ্বল, পরোক্ষ আলো সহ্য করে। সরাসরি সূর্যালোক এড়িয়ে চলুন যা পাতা পুড়িয়ে দিতে পারে।',
        bn: 'कम रोशनी से तेज, अप्रत्यक्ष रोशनी को सहन करता है। प्रत्यक्ष सूर्य प्रकाश से बचें जो पत्तियों को झुलसा सकता है।'
      },
      temperature: {
        en: 'Prefers 60-80°F (15-27°C). Can tolerate temperature fluctuations better than most houseplants.',
        hi: '৬০-৮০°F (১৫-২৭°C) পছন্দ করে। বেশিরভাগ ঘরোয়া উদ্ভিদের চেয়ে তাপমাত্রার ওঠানামা ভাল সহ্য করতে পারে।',
        bn: '60-80°F (15-27°C) पसंद करता है। अधिकांश घरेलू पौधों की तुलना में तापमान के उतार-चढ़ाव को बेहतर तरीके से सहन कर सकता है।'
      },
      humidity: {
        en: 'Thrives in average household humidity (30-50%). No special humidity requirements.',
        hi: 'গড় ঘরোয়া আর্দ্রতায় (৩০-৫০%) বৃদ্ধি পায়। কোন বিশেষ আর্দ্রতার প্রয়োজন নেই।',
        bn: 'औसत घरेलू आर्द्रता (30-50%) में पनपता है। कोई विशेष आर्द्रता आवश्यकताएं नहीं।'
      },
      soil: {
        en: 'Well-draining cactus or succulent potting mix. Avoid water-retentive soils.',
        hi: 'ভাল-নিষ্কাশনকারী ক্যাকটাস বা সাকুলেন্ট পটিং মিশ্রণ। জল ধরে রাখার মাটি এড়িয়ে চলুন।',
        bn: 'अच्छी जल निकासी वाला कैक्टस या रसीला पॉटिंग मिश्रण। पानी बनाए रखने वाली मिट्टी से बचें।'
      },
      fertilizer: {
        en: 'Feed sparingly, 2-3 times per year with diluted succulent fertilizer during growing season.',
        hi: 'বৃদ্ধির মৌসুমে পাতলা সাকুলেন্ট সার দিয়ে বছরে ২-৩ বার অল্প পরিমাণে খাওয়ান।',
        bn: 'बढ़ते मौसम के दौरान पतले रसीले उर्वरक के साथ वर्ष में 2-3 बार कम मात्रा में भोजन दें।'
      }
    },
    characteristics: {
      height: '1-4 feet',
      spread: '1-2 feet',
      bloomTime: 'Rarely blooms indoors',
      hardiness: 'USDA zones 9-12'
    },
    facts: {
      en: [
        'Releases oxygen at night, making it ideal for bedrooms',
        'Can survive neglect for weeks without water',
        'Propagates easily through leaf cuttings or division',
        'NASA listed it as one of the best air-purifying plants'
      ],
      hi: [
        'রাতে অক্সিজেন ছাড়ে, শোবার ঘরের জন্য আদর্শ করে তোলে',
        'জল ছাড়া সপ্তাহের পর সপ্তাহ অবহেলা সহ্য করতে পারে',
        'পাতার কাটিং বা বিভাজনের মাধ্যমে সহজেই বংশবিস্তার করে',
        'NASA এটিকে সেরা বায়ু-পরিশোধনকারী উদ্ভিদের মধ্যে একটি হিসাবে তালিকাভুক্ত করেছে'
      ],
      bn: [
        'रात में ऑक्सीजन छोड़ता है, जो इसे बेडरूम के लिए आदर्श बनाता है',
        'पानी के बिना हफ्तों तक उपेक्षा को सहन कर सकता है',
        'पत्ती की कटिंग या विभाजन के माध्यम से आसानी से प्रचार करता है',
        'नासा ने इसे सबसे अच्छे वायु शुद्ध करने वाले पौधों में से एक के रूप में सूचीबद्ध किया है'
      ]
    },
    benefits: {
      en: [
        'Excellent air purifier, removes toxins like formaldehyde',
        'Extremely low maintenance',
        'Perfect for beginners',
        'Tolerates neglect and low light'
      ],
      hi: [
        'চমৎকার বায়ু পরিশোধক, ফর্মালডিহাইডের মতো টক্সিন অপসারণ করে',
        'অত্যন্ত কম রক্ষণাবেক্ষণ',
        'শুরুকারীদের জন্য নিখুঁত',
        'অবহেলা এবং কম আলো সহ্য করে'
      ],
      bn: [
        'उत्कृष्ट वायु शुद्धक, फॉर्मलाडिहाइड जैसे विषाक्त पदार्थों को हटाता है',
        'बेहद कम रखरखाव',
        'शुरुआती लोगों के लिए बिल्कुल सही',
        'उपेक्षा और कम रोशनी को सहन करता है'
      ]
    },
    toxicity: {
      en: 'Mildly toxic to pets if ingested in large quantities. Generally safe for humans.',
      hi: 'বড় পরিমাণে গিলে ফেললে পোষা প্রাণীদের জন্য সামান্য বিষাক্ত। সাধারণত মানুষের জন্য নিরাপদ।',
      bn: 'बड़ी मात्रा में निगलने पर पालतू जानवरों के लिए हल्का विषाक्त। आम तौर पर इंसानों के लिए सुरक्षित।'
    },
    propagation: {
      en: 'Divide at the roots or propagate through leaf cuttings in water or soil.',
      hi: 'শিকড়ে ভাগ করুন বা পানি বা মাটিতে পাতার কাটিং দিয়ে বংশবিস্তার করুন।',
      bn: 'जड़ों पर विभाजित करें या पानी या मिट्टी में पत्ती की कटिंग के माध्यम से प्रचार करें।'
    },
    commonProblems: {
      en: [
        'Root rot from overwatering is the most common issue',
        'Brown tips usually indicate low humidity or water quality issues',
        'Wrinkled leaves suggest underwatering',
        'Slow growth is normal - this plant grows very slowly'
      ],
      hi: [
        'অতিরিক্ত জল দেওয়ার কারণে শিকড় পচা সবচেয়ে সাধারণ সমস্যা',
        'বাদামী ডগা সাধারণত কম আর্দ্রতা বা জলের গুণমানের সমস্যা নির্দেশ করে',
        'কুঁচকানো পাতা অপর্যাপ্ত জল সেচন নির্দেশ করে',
        'ধীর বৃদ্ধি স্বাভাবিক - এই উদ্ভিদ খুব ধীরে বৃদ্ধি পায়'
      ],
      bn: [
        'अधिक पानी देने से जड़ सड़न सबसे आम समस्या है',
        'भूरे सुझाव आमतौर पर कम आर्द्रता या पानी की गुणवत्ता के मुद्दों का संकेत देते हैं',
        'झुर्रीदार पत्तियां कम पानी देने का सुझाव देती हैं',
        'धीमी वृद्धि सामान्य है - यह पौधा बहुत धीरे-धीरे बढ़ता है'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80',
    difficulty: 'Beginner',
    airPurifying: true,
    petFriendly: false,
    origin: 'West Africa'
  },
  {
    id: 'pothos',
    scientificName: 'Epipremnum aureum',
    commonNames: {
      en: ['Golden Pothos', 'Devil\'s Ivy', 'Money Plant'],
      hi: ['गोल्डन पोथोस', 'शैतान की बेल', 'मनी प्लांट'],
      bn: ['গোল্ডেন পোথোস', 'শয়তানের লতা', 'মানি প্লান্ট']
    },
    family: 'Araceae',
    category: 'Vine',
    description: {
      en: 'A fast-growing, trailing vine with heart-shaped leaves marked with golden variegation. Extremely adaptable and perfect for hanging baskets or climbing.',
      hi: 'सुनहरी धारियों से चिह्नित दिल के आकार की पत्तियों के साथ एक तेजी से बढ़ने वाली, फैलने वाली बेल। अत्यधिक अनुकूलनीय और लटकती टोकरियों या चढ़ने के लिए बिल्कुल सही।',
      bn: 'সোনালী বৈচিত্র্য দিয়ে চিহ্নিত হৃদয় আকৃতির পাতা সহ একটি দ্রুত বর্ধনশীল, লতানো লতা। অত্যন্ত অভিযোজনযোগ্য এবং ঝুলন্ত ঝুড়ি বা আরোহণের জন্য নিখুঁত।'
    },
    care: {
      watering: {
        en: 'Water when the top inch of soil feels dry, typically weekly. Prefers consistent moisture but not waterlogged.',
        hi: 'जब मिट्टी का ऊपरी हिस्सा सूखा लगे तो पानी दें, आमतौर पर साप्ताहिक। निरंतर नमी पसंद करता है लेकिन जल भराव नहीं।',
        bn: 'মাটির উপরের অংশ শুকনো লাগলে পানি দিন, সাধারণত সাপ্তাহিক। ধারাবাহিক আর্দ্রতা পছন্দ করে কিন্তু জলাবদ্ধতা নয়।'
      },
      light: {
        en: 'Thrives in bright, indirect light but tolerates low light conditions. Variegation may fade in low light.',
        hi: 'तेज, अप्रत्यक्ष प्रकाश में पनपता है लेकिन कम रोशनी की स्थिति को सहन करता है। कम रोशनी में धारियां फीकी हो सकती हैं।',
        bn: 'উজ্জ্বল, পরোক্ষ আলোতে বৃদ্ধি পায় কিন্তু কম আলোর অবস্থা সহ্য করে। কম আলোতে বৈচিত্র্য ম্লান হতে পারে।'
      },
      temperature: {
        en: 'Comfortable in 65-85°F (18-29°C). Protect from cold drafts and temperatures below 50°F.',
        hi: '65-85°F (18-29°C) में आरামदायक। ठंडी हवा और 50°F से नीचे के तापमान से बचाएं।',
        bn: '৬৫-৮৫°F (১৮-২৯°C) এ আরামদায়ক। ঠান্ডা বাতাস এবং ৫০°F এর নিচের তাপমাত্রা থেকে রক্ষা করুন।'
      },
      humidity: {
        en: 'Adapts to average household humidity but prefers 40-60%. Benefits from occasional misting.',
        hi: 'औसत घरेलू आर्द्रता के अनुकूल होता है लेकिन 40-60% पसंद करता है। कभी-कभार छिड़काव से लाभ होता है।',
        bn: 'গড় ঘরোয়া আর্দ্রতার সাথে খাপ খায় কিন্তু ৪০-৬০% পছন্দ করে। মাঝে মাঝে স্প্রে করার উপকার হয়।'
      },
      soil: {
        en: 'Well-draining potting mix with good aeration. Standard houseplant soil works well.',
        hi: 'अच्छी वायु संचार के साथ अच्छी जल निकासी वाली मिट्टी का मिश्रण। मानक घरेलू पौधों की मिट्टी अच्छी तरह काम करती है।',
        bn: 'ভাল বায়ু চলাচল সহ ভাল-নিষ্কাশনকারী পটিং মিশ্রণ। স্ট্যান্ডার্ড হাউসপ্ল্যান্ট মাটি ভাল কাজ করে।'
      },
      fertilizer: {
        en: 'Feed monthly during growing season with balanced liquid fertilizer diluted to half strength.',
        hi: 'बढ़ते मौसम के दौरान संतुलित तरल उर्वरक को आधी ताकत में घोलकर मासिक रूप से दें।',
        bn: 'বৃদ্ধির মৌসুমে অর্ধেক শক্তিতে মিশ্রিত সুষম তরল সার দিয়ে মাসিক খাওয়ান।'
      }
    },
    characteristics: {
      height: '6-10 feet as trailing vine',
      spread: '3-6 feet',
      bloomTime: 'Rarely blooms indoors',
      hardiness: 'USDA zones 10-12'
    },
    facts: {
      en: [
        'Can grow in water indefinitely with proper nutrients',
        'Leaves can grow much larger when climbing with support',
        'One of the fastest-growing houseplants',
        'Can survive in very low light conditions'
      ],
      hi: [
        'उचित पोषक तत्वों के साथ पानी में अनिश्चित काल तक बढ़ सकता है',
        'सहारे के साथ चढ़ते समय पत्तियां बहुत बड़ी हो सकती हैं',
        'सबसे तेजी से बढ़ने वाले घरेलू पौधों में से एक',
        'बहुत कम रोशनी की स्थिति में जीवित रह सकता है'
      ],
      bn: [
        'যথাযথ পুষ্টি সহ পানিতে অনির্দিষ্টকালের জন্য বৃদ্ধি পেতে পারে',
        'সহায়তা দিয়ে আরোহণ করার সময় পাতা অনেক বড় হতে পারে',
        'দ্রুততম বর্ধনশীল হাউসপ্ল্যান্টগুলির মধ্যে একটি',
        'খুব কম আলোর অবস্থায় বেঁচে থাকতে পারে'
      ]
    },
    benefits: {
      en: [
        'Effective air purifier, removes indoor pollutants',
        'Extremely easy to propagate and share',
        'Fast-growing for quick results',
        'Versatile - can trail, climb, or bushy with pruning'
      ],
      hi: [
        'प्रभावी वायु शुद्धक, इनडोर प्रदूषकों को हटाता है',
        'प्रचार और साझा करना बेहद आसान',
        'त्वरित परिणामों के लिए तेजी से बढ़ने वाला',
        'बहुमुखी - छंटाई के साथ पीछे छोड़ सकता है, चढ़ सकता है, या घनी हो सकती है'
      ],
      bn: [
        'কার্যকর বায়ু পরিশোধক, অভ্যন্তরীণ দূষক অপসারণ করে',
        'বংশবিস্তার এবং শেয়ার করা অত্যন্ত সহজ',
        'দ্রুত ফলাফলের জন্য দ্রুত বর্ধনশীল',
        'বহুমুখী - ছাঁটাই দিয়ে পিছনে ফেলতে, আরোহণ করতে বা ঝোপঝাড় হতে পারে'
      ]
    },
    toxicity: {
      en: 'Toxic to pets and humans if ingested. Contains calcium oxalate crystals.',
      hi: 'पालतू जानवरों और मनुष्यों के लिए विषाक्त यदि निगल लिया जाए। कैल्शियम ऑक्सालेट क्रिस्टल होते हैं।',
      bn: 'গিলে ফেললে পোষা প্রাণী এবং মানুষের জন্য বিষাক্ত। ক্যালসিয়াম অক্সালেট স্ফটিক রয়েছে।'
    },
    propagation: {
      en: 'Very easy to propagate from stem cuttings in water or soil. Roots develop quickly.',
      hi: 'पानी या मिट्टी में तने की कटिंग से प्रचार करना बहुत आसान। जड़ें जल्दी विकसित होती हैं।',
      bn: 'পানি বা মাটিতে কাণ্ডের কাটিং থেকে বংশবিস্তার করা খুবই সহজ। শিকড় দ্রুত বিকশিত হয়।'
    },
    commonProblems: {
      en: [
        'Yellow leaves often indicate overwatering',
        'Brown tips suggest low humidity or fluoridated water',
        'Loss of variegation means insufficient light',
        'Pest issues include spider mites and mealybugs'
      ],
      hi: [
        'पीली पत्तियां अक्सर अधिक पानी देने का संकेत देती हैं',
        'भूरे सुझाव कम आर्द्रता या फ्लोराइड युक्त पानी का सुझाव देते हैं',
        'धारियों का नुकसान अपर्याप्त प्रकाश का मतलब है',
        'कीट समस्याओं में मकड़ी के कण और मीलीबग शामिल हैं'
      ],
      bn: [
        'হলুদ পাতা প্রায়ই অতিরিক্ত জল দেওয়ার ইঙ্গিত দেয়',
        'বাদামী ডগা কম আর্দ্রতা বা ফ্লুরাইডযুক্ত জল নির্দেশ করে',
        'বৈচিত্র্যের ক্ষতি মানে অপর্যাপ্ত আলো',
        'কীটপতঙ্গের সমস্যায় স্পাইডার মাইট এবং মিলিবাগ অন্তর্ভুক্ত'
      ]
    },
    imageUrl: 'https://images.unsplash.com/photo-1586074299070-6bd4c7dc5e0e?w=600&q=80',
    difficulty: 'Beginner',
    airPurifying: true,
    petFriendly: false,
    origin: 'French Polynesia'
  }
  // Add more plants as needed...
];

export const searchPlants = (query: string, language: 'en' | 'hi' | 'bn' = 'en'): PlantData[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return plantDatabase.filter(plant => {
    // Search in scientific name
    if (plant.scientificName.toLowerCase().includes(searchTerm)) return true;
    
    // Search in common names for the specified language
    if (plant.commonNames[language].some(name => 
      name.toLowerCase().includes(searchTerm)
    )) return true;
    
    // Search in family name
    if (plant.family.toLowerCase().includes(searchTerm)) return true;
    
    // Search in category
    if (plant.category.toLowerCase().includes(searchTerm)) return true;
    
    return false;
  });
};

export const getPlantById = (id: string): PlantData | undefined => {
  return plantDatabase.find(plant => plant.id === id);
};

export const getPlantsByCategory = (category: string): PlantData[] => {
  return plantDatabase.filter(plant => 
    plant.category.toLowerCase() === category.toLowerCase()
  );
};

export const getPlantsByDifficulty = (difficulty: string): PlantData[] => {
  return plantDatabase.filter(plant => 
    plant.difficulty.toLowerCase() === difficulty.toLowerCase()
  );
};