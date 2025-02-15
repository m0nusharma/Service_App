import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const serviceCategories = [

  {
    id: 1,
    name: 'Cleaning',
    subServices: [
      'Room', 'Car', 'Bike', 'Office', 'Garden', 'Swimming Pool',
      'Kitchen', 'Bathroom', 'Balcony', 'Living Room', 'Dining Room',
      'Bedroom', 'Garage', 'Basement', 'Attic', 'Driveway', 'Patio',
      'Deck', 'Fence', 'Windows', 'Carpet', 'Curtains', 'Upholstery',
      'Mattress', 'Air Ducts', 'Chimney', 'Gutter', 'Roof', 'Walls',
      'Ceiling', 'Floor', 'Stairs', 'Elevator', 'Warehouse', 'Factory',
      'Restaurant', 'Cafeteria', 'Hotel Room', 'Apartment', 'Villa',
      'School', 'Gym', 'Playground', 'Park', 'Public Toilets', 'Event Venue',
      'Construction Site', 'Industrial Area', 'Parking Lot', 'Solar Panels'
    ],
    pricing: {
      Room: { base: 500, perSqFt: 5 },
      Car: { sedan: 1000, suv: 1500, luxury: 2500 },
      Bike: { standard: 500, premium: 800 },
      Office: { base: 2000, perSqFt: 3 },
      Garden: { small: 800, medium: 1500, large: 2500 },
      'Swimming Pool': { base: 3000, perSqFt: 7 },
      Kitchen: { base: 1000, deepCleaning: 2000 },
      Bathroom: { base: 800, deepCleaning: 1500 },
      Balcony: { base: 500, perSqFt: 4 },
      'Living Room': { base: 700, perSqFt: 5 },
      'Dining Room': { base: 600, perSqFt: 5 },
      Bedroom: { base: 500, perSqFt: 5 },
      Garage: { base: 1000, perSqFt: 4 },
      Basement: { base: 1500, perSqFt: 6 },
      Attic: { base: 1200, perSqFt: 5 },
      Driveway: { base: 800, perSqFt: 3 },
      Patio: { base: 700, perSqFt: 4 },
      Deck: { base: 900, perSqFt: 5 },
      Fence: { base: 600, perLinearFt: 2 },
      Windows: { base: 500, perWindow: 50 },
      Carpet: { base: 300, perSqFt: 2 },
      Curtains: { base: 400, perCurtain: 100 },
      Upholstery: { base: 500, perPiece: 200 },
      Mattress: { base: 600, deepCleaning: 1000 },
      'Air Ducts': { base: 2000, perSqFt: 10 },
      Chimney: { base: 1500, deepCleaning: 2500 },
      Gutter: { base: 800, perLinearFt: 3 },
      Roof: { base: 3000, perSqFt: 8 },
      Walls: { base: 1000, perSqFt: 4 },
      Ceiling: { base: 1200, perSqFt: 5 },
      Floor: { base: 800, perSqFt: 3 },
      Stairs: { base: 500, perStep: 20 },
      Elevator: { base: 1000, deepCleaning: 2000 },
      Warehouse: { base: 2500, perSqFt: 2 },
      Factory: { base: 5000, perSqFt: 3 },
      Restaurant: { base: 3000, deepCleaning: 5000 },
      Cafeteria: { base: 2000, deepCleaning: 4000 },
      'Hotel Room': { base: 1000, deepCleaning: 2000 },
      Apartment: { base: 1500, perSqFt: 4 },
      Villa: { base: 5000, perSqFt: 6 },
      School: { base: 4000, perSqFt: 2 },
      Gym: { base: 3000, deepCleaning: 5000 },
      Playground: { base: 2000, perSqFt: 3 },
      Park: { base: 5000, perSqFt: 1 },
      'Public Toilets': { base: 1000, deepCleaning: 2000 },
      'Event Venue': { base: 4000, perSqFt: 4 },
      'Construction Site': { base: 6000, perSqFt: 2 },
      'Industrial Area': { base: 7000, perSqFt: 3 },
      'Parking Lot': { base: 3000, perSqFt: 1 },
      'Solar Panels': { base: 2000, perPanel: 100 }
    }
  },
  {
    id: 2,
    name: 'Repairing',
    subServices: [
      'AC', 'Fan', 'Bike', 'Car', 'Refrigerator', 'Washing Machine',
      'Microwave', 'Television', 'Laptop', 'Smartphone', 'Plumbing',
      'Electrical', 'Carpentry', 'Generator', 'Inverter', 'Water Purifier',
      'Air Purifier', 'Vacuum Cleaner', 'Oven', 'Dishwasher', 'Printer',
      'Tablet', 'Home Theater', 'Chimney', 'Geyser', 'Sewing Machine',
      'Air Conditioner', 'Ceiling Fan', 'Table Fan', 'Motorcycle', 'Scooter',
      'Car Wash', 'Car Detailing', 'Deep Freezer', 'Ice Maker', 'Dryer',
      'Blender', 'Mixer Grinder', 'Toaster', 'Coffee Maker', 'Electric Kettle',
      'Iron', 'Hair Dryer', 'Electric Shaver', 'Gaming Console', 'Projector',
      'Sound System', 'Smartwatch', 'Drone', 'Camera', 'Power Bank',
      'Solar Panel', 'Electric Vehicle', 'Bicycle', 'Treadmill', 'Elliptical',
      'Home Security System', 'Door Lock', 'Window Repair', 'Roof Repair',
      'Furniture Repair', 'Appliance Installation'
    ],
    pricing: {
      AC: { window: 1500, split: 2500, central: 5000 },
      Fan: { ceiling: 300, table: 250, exhaust: 400 },
      Bike: { basic: 800, fullService: 1500, engineRepair: 3000 },
      Car: { basic: 2500, premium: 5000, engineOverhaul: 10000 },
      Refrigerator: { singleDoor: 1200, doubleDoor: 2000, sideBySide: 3000 },
      'Washing Machine': { semiAuto: 1000, fullyAuto: 1800, topLoad: 1500 },
      Microwave: { basic: 800, advanced: 1200, convection: 1500 },
      Television: { LED: 1500, OLED: 2500, CRT: 1000, smartTV: 3000 },
      Laptop: { software: 500, hardware: 1500, screenReplacement: 3000, keyboard: 1000 },
      Smartphone: { screenReplacement: 2000, batteryReplacement: 1000, software: 500, camera: 1500 },
      Plumbing: { basic: 600, advanced: 1200, emergency: 2000, pipeReplacement: 1500 },
      Electrical: { basic: 500, advanced: 1000, emergency: 1500, wiring: 2000 },
      Carpentry: { basic: 700, advanced: 1500, customWork: 3000, furnitureRepair: 1200 },
      Generator: { basic: 1000, fullService: 2500, engineRepair: 4000 },
      Inverter: { basic: 800, fullService: 1500, batteryReplacement: 2000 },
      'Water Purifier': { basic: 600, advanced: 1200, RO: 1500, UV: 1800 },
      'Air Purifier': { basic: 700, advanced: 1300, HEPA: 1500 },
      'Vacuum Cleaner': { basic: 500, advanced: 1000, robotic: 1500 },
      Oven: { basic: 600, advanced: 1200, microwaveCombo: 1500 },
      Dishwasher: { basic: 1000, advanced: 2000, commercial: 3000 },
      Printer: { basic: 500, advanced: 1000, laser: 1500, inkjet: 800 },
      Tablet: { screenReplacement: 1500, batteryReplacement: 800, software: 400, chargingPort: 600 },
      'Home Theater': { basic: 1000, advanced: 2000, surroundSound: 2500 },
      Chimney: { basic: 800, advanced: 1500, autoClean: 2000 },
      Geyser: { basic: 600, advanced: 1200, instant: 1500 },
      'Sewing Machine': { basic: 500, advanced: 1000, industrial: 2000 },
      'Air Conditioner': { window: 1500, split: 2500, central: 5000, portable: 2000 },
      'Ceiling Fan': { basic: 300, advanced: 500, smartFan: 800 },
      'Table Fan': { basic: 250, advanced: 400, towerFan: 600 },
      Motorcycle: { basic: 800, fullService: 1500, engineRepair: 3000 },
      Scooter: { basic: 700, fullService: 1200, batteryReplacement: 2000 },
      'Car Wash': { basic: 500, premium: 1000, detailing: 2000 },
      'Car Detailing': { interior: 1500, exterior: 2000, full: 3000 },
      'Deep Freezer': { basic: 1200, advanced: 2000, commercial: 3000 },
      'Ice Maker': { basic: 1000, advanced: 1800, commercial: 2500 },
      Dryer: { basic: 800, advanced: 1500, commercial: 2000 },
      Blender: { basic: 300, advanced: 600, commercial: 1000 },
      'Mixer Grinder': { basic: 400, advanced: 700, heavyDuty: 1000 },
      Toaster: { basic: 200, advanced: 400, commercial: 600 },
      'Coffee Maker': { basic: 500, advanced: 1000, espresso: 1500 },
      'Electric Kettle': { basic: 300, advanced: 500, smartKettle: 800 },
      Iron: { basic: 200, advanced: 400, steam: 600 },
      'Hair Dryer': { basic: 300, advanced: 500, professional: 800 },
      'Electric Shaver': { basic: 400, advanced: 700, premium: 1000 },
      'Gaming Console': { basic: 500, advanced: 1000, hardwareRepair: 1500 },
      Projector: { basic: 800, advanced: 1500, laser: 2000 },
      'Sound System': { basic: 1000, advanced: 2000, surroundSound: 2500 },
      Smartwatch: { screenReplacement: 1000, batteryReplacement: 500, software: 300 },
      Drone: { basic: 800, advanced: 1500, cameraRepair: 2000 },
      Camera: { basic: 600, advanced: 1200, lensReplacement: 1500 },
      'Power Bank': { basic: 300, advanced: 500, solar: 800 },
      'Solar Panel': { basic: 2000, advanced: 4000, installation: 5000 },
      'Electric Vehicle': { basic: 3000, advanced: 6000, batteryReplacement: 10000 },
      Bicycle: { basic: 500, advanced: 1000, fullService: 1500 },
      Treadmill: { basic: 1000, advanced: 2000, motorRepair: 3000 },
      Elliptical: { basic: 1200, advanced: 2500, fullService: 3500 },
      'Home Security System': { basic: 1500, advanced: 3000, cameraInstallation: 2000 },
      'Door Lock': { basic: 400, advanced: 800, smartLock: 1200 },
      'Window Repair': { basic: 600, advanced: 1200, glassReplacement: 1500 },
      'Roof Repair': { basic: 2000, advanced: 4000, emergency: 5000 },
      'Furniture Repair': { basic: 700, advanced: 1500, customWork: 3000 },
      'Appliance Installation': { basic: 500, advanced: 1000, complex: 2000 }
    }
  },

  {
    name: 'Education',
    subServices: [
      'School Tutoring', 'College Tutoring', 'Language Classes', 'Music Lessons', 'Exam Preparation',
      'Online Courses', 'Professional Certifications', 'Coding Bootcamps', 'Art Classes', 'Dance Lessons',
      'STEM Workshops', 'Creative Writing', 'Public Speaking', 'Test Prep for Kids', 'Adult Education',
      'Special Education', 'Career Counseling', 'Study Abroad Guidance', 'Homework Help', 'Thesis Assistance',
      'Cooking Classes', 'Photography Lessons', 'Yoga Instruction', 'Financial Literacy', 'Entrepreneurship Training',
      'NEET Preparation', 'IIT-JEE Preparation', 'UPSC Preparation', 'SSC Preparation', 'Banking Exam Preparation',
      'Railway Exam Preparation', 'State PSC Preparation', 'Defense Exam Preparation', 'Teaching Exam Preparation',
      'Law Entrance Preparation', 'CA Foundation Preparation', 'CS Preparation', 'Medical Entrance Preparation',
      'Nursing Exam Preparation', 'Pharmacy Entrance Preparation', 'Architecture Entrance Preparation',
      'Design Entrance Preparation', 'Fashion Design Preparation', 'Hotel Management Preparation',
      'MBA Entrance Preparation', 'CLAT Preparation', 'GRE Preparation', 'GMAT Preparation', 'TOEFL Preparation',
      'IELTS Preparation', 'PTE Preparation', 'SAT Preparation', 'ACT Preparation', 'AP Exam Preparation',
      'IB Exam Preparation', 'A-Level Preparation', 'Olympiad Preparation', 'NTSE Preparation', 'KVPY Preparation',
      'Scholarship Exam Preparation', 'Group A Exam Preparation', 'Group B Exam Preparation', 'Group C Exam Preparation',
      'Group D Exam Preparation', 'Police Exam Preparation', 'Firefighter Exam Preparation', 'Postal Exam Preparation',
      'Insurance Exam Preparation', 'Civil Services Interview Prep', 'Foreign Language Test Prep'
    ],
    pricing: {
      'School Tutoring': { perHour: 300, subject: { Math: 350, Science: 400, English: 320, 'Social Studies': 300, Hindi: 280 } },
      'College Tutoring': { perHour: 500, subject: { Engineering: 600, Medicine: 700, Commerce: 550, Arts: 500, Law: 650 } },
      'Language Classes': { perHour: 400, language: { English: 450, Spanish: 400, French: 500, German: 480, Japanese: 550 } },
      'Music Lessons': { perHour: 600, instrument: { Guitar: 550, Piano: 700, Violin: 800, Drums: 650, Flute: 500 } },
      'Exam Preparation': { perHour: 700, exam: { SAT: 800, GRE: 900, IELTS: 750, TOEFL: 780, PTE: 760 } },
      'Online Courses': { perHour: 200, category: { Business: 250, Technology: 300, Design: 280, Marketing: 270, 'Data Science': 350 } },
      'Professional Certifications': { perHour: 800, certification: { PMP: 900, CFA: 1000, AWS: 850,' Google Cloud': 880, Cisco: 870 } },
      'Coding Bootcamps': { perHour: 600, language: { Python: 650, JavaScript: 700, Java: 680, 'C++' : 720 , Ruby: 660 } },
      'Art Classes': { perHour: 400, medium: { Painting: 450, Sculpting: 500,' Digital Art': 480, Sketching: 420, Pottery: 470 } },
      'Dance Lessons': { perHour: 500, style: { Ballet: 550, 'Hip-Hop': 450, Salsa: 500, Kathak: 480, Contemporary: 520 } },
      'STEM Workshops': { perHour: 350, topic: { Robotics: 400, AI: 450, '3D Printing': 380, Electronics: 420, Coding: 390 } },
      'Creative Writing': { perHour: 300, genre: { Fiction: 350, Poetry: 320, 'Non-Fiction': 330, Screenwriting: 360, Blogging: 310 } },
      'Public Speaking': { perHour: 400, level: { Beginner: 350, Intermediate: 400, Advanced: 450, Corporate: 500, Debate: 470 } },
      'Test Prep for Kids': { perHour: 250, exam: { SSAT: 300, ISEE: 280, 'State Exams': 270, Olympiad: 320, NTSE: 330 } },
      'Adult Education': { perHour: 300, course: { GED: 350, ESL: 320, 'Computer Basics': 300, 'Financial Literacy': 400, 'Digital Marketing': 380 } },
      'Special Education': { perHour: 600, focus: { 'Autism Support': 650, Dyslexia: 620, ADHD: 630, 'Speech Therapy': 680, 'Behavioral Therapy': 700 } },
      'Career Counseling': { perHour: 500, service: { 'Resume Writing': 550, 'Interview Prep': 500, 'Career Planning': 600, 'LinkedIn Profile': 450, 'Job Search': 520 } },
      'Study Abroad Guidance': { perHour: 400, region: { USA: 450, Europe: 500, Asia: 480, Australia: 470, Canada: 490 } },
      'Homework Help': { perHour: 200, subject: { Math: 250, Science: 230, English: 220, History: 210, Geography: 240 } },
      'Thesis Assistance': { perHour: 700, field: { Humanities: 750, STEM: 800, 'Social Sciences': 780, Law: 820, Business: 790 } },
      'Cooking Classes': { perHour: 400, cuisine: { Italian: 450, Japanese: 500, Indian: 480, Chinese: 470, French: 520 } },
      'Photography Lessons': { perHour: 500, type: { Portrait: 550, Landscape: 500, Editing: 520, Wildlife: 530, Fashion: 540 } },
      'Yoga Instruction': { perHour: 300, style: { Hatha: 350, Vinyasa: 320, Ashtanga: 330, Kundalini: 340, 'Power Yoga': 360 } },
      'Financial Literacy': { perHour: 400, topic: { Budgeting: 450, Investing: 500, Taxes: 480, 'Retirement Planning': 520, 'Stock Market': 550 } },
      'Entrepreneurship Training': { perHour: 600, focus: { Startups: 650, Marketing: 620, Funding: 630, 'Business Plan': 640, Scaling: 660 } },
      'NEET Preparation': { perHour: 800, subject: { Biology: 850, Chemistry: 820, Physics: 830, 'Mock Tests': 900 } },
      'IIT-JEE Preparation': { perHour: 900, subject: { Math: 950, Physics: 920, Chemistry: 930, 'Mock Tests': 1000 } },
      'UPSC Preparation': { perHour: 1000, subject: { GS: 1100, Optional: 1200, Essay: 1050, 'Mock Interviews': 1500 } },
      'SSC Preparation': { perHour: 700, subject: { 'Quantitative Aptitude': 750, Reasoning: 730, English: 720, GK: 740 } },
      'Banking Exam Preparation': { perHour: 750, subject: { Reasoning: 800, 'Quantitative Aptitude': 780, English: 770, 'Banking Awareness': 790 } },
      'Railway Exam Preparation': { perHour: 700, subject: { Math: 750, Reasoning: 730, GK: 720, Technical: 740 } },
      'State PSC Preparation': { perHour: 800, subject: { GS: 850, Optional: 900, Essay: 820, 'Mock Tests': 950 } },
      'Defense Exam Preparation': { perHour: 900, subject: { Math: 950, Reasoning: 920, GK: 930, 'Physical Training': 1000 } },
      'Teaching Exam Preparation': { perHour: 700, subject: { 'Child Development': 750, Pedagogy: 730, 'Subject Knowledge': 720, GK: 740 } },
      'Law Entrance Preparation': { perHour: 800, subject: { 'Legal Aptitude': 850,' Logical Reasoning': 830, GK: 820, English: 840 } },
      'CA Foundation Preparation': { perHour: 900, subject: { Accounts: 950, Law: 920, Economics: 930, 'Quantitative Aptitude': 940 } },
      'CS Preparation': { perHour: 850, subject: { 'Company Law': 900, 'Tax Law': 880, Accounting: 870, Ethics: 890 } },
      'Medical Entrance Preparation': { perHour: 800, subject: { Biology: 850, Chemistry: 820, Physics: 830, 'Mock Tests': 900 } },
      'Nursing Exam Preparation': { perHour: 700, subject: { Anatomy: 750, Physiology: 730, Pharmacology: 720, GK: 740 } },
      'Pharmacy Entrance Preparation': { perHour: 750, subject: { Chemistry: 800, Biology: 780, Math: 770, GK: 790 } },
      'Architecture Entrance Preparation': { perHour: 800, subject: { Math: 850, Aptitude: 830, Drawing: 900, GK: 820 } },
      'Design Entrance Preparation': { perHour: 850, subject: { 'Design Aptitude': 900, Drawing: 880, GK: 870, Portfolio: 950 } },
      'Fashion Design Preparation': { perHour: 900, subject: { Design: 950, Sketching: 920, Textiles: 930, Portfolio: 1000 } },
      'Hotel Management Preparation': { perHour: 700, subject: { Aptitude: 750, GK: 730, English: 720, Reasoning: 740 } },
      'MBA Entrance Preparation': { perHour: 1000, subject: { 'Quantitative Aptitude': 1050, 'Verbal Ability': 1020, 'Logical Reasoning': 1030, GK: 1040 } },
      'CLAT Preparation': { perHour: 800, subject: { 'Legal Aptitude': 850, 'Logical Reasoning': 830, GK: 820, English: 840 } },
      'GRE Preparation': { perHour: 900, subject: { Quantitative: 950, Verbal: 920, 'Analytical Writing': 930, 'Mock Tests': 1000 } },
      'GMAT Preparation': { perHour: 1000, subject: { Quantitative: 1050, Verbal: 1020, 'Integrated Reasoning': 1030, 'Mock Tests': 1100 } },
      'TOEFL Preparation': { perHour: 700, subject: { Reading: 750, Listening: 730, Speaking: 720, Writing: 740 } },
      'IELTS Preparation': { perHour: 750, subject: { Reading: 800, Listening: 780, Speaking: 770, Writing: 790 } },
      'PTE Preparation': { perHour: 700, subject: { Speaking: 750, Writing: 730, Reading: 720, Listening: 740 } },
      'SAT Preparation': { perHour: 800, subject: { Math: 850, Reading: 830, Writing: 820, Essay: 840 } },
      'ACT Preparation': { perHour: 850, subject: { Math: 900, English: 880, Reading: 870, Science: 890 } },
      'AP Exam Preparation': { perHour: 700, subject: { Calculus: 750, Biology: 730, Chemistry: 720, History: 740 } },
      'IB Exam Preparation': { perHour: 800, subject: { Math: 850, Physics: 830, Chemistry: 820, English: 840 } },
      'A-Level Preparation': { perHour: 850, subject: { Math: 900, Physics: 880, Chemistry: 870, Economics: 890 } },
      'Olympiad Preparation': { perHour: 700, subject: { Math: 750, Science: 730, English: 720, GK: 740 } },
      'NTSE Preparation': { perHour: 800, subject: { Math: 850, Science: 830, 'Social Studies': 820, 'Mental Ability': 840 } },
      'KVPY Preparation': { perHour: 900, subject: { Math: 950, Physics: 920, Chemistry: 930, Biology: 940 } },
      'Scholarship Exam Preparation': { perHour: 700, subject: { Math: 750, Science: 730, English: 720, GK: 740 } },
      'Group A Exam Preparation': { perHour: 1000, subject: { GS: 1050, Optional: 1100, Essay: 1020, 'Mock Tests': 1200 } },
      'Group B Exam Preparation': { perHour: 900, subject: { GS: 950, Optional: 1000, Essay: 920, 'Mock Tests': 1100 } },
      'Group C Exam Preparation': { perHour: 800, subject: { GS: 850, Optional: 900, Essay: 820, 'Mock Tests': 950 } },
      'Group D Exam Preparation': { perHour: 700, subject: { GS: 750, Reasoning: 730, Math: 720, English: 740 } },
      'Police Exam Preparation': { perHour: 750, subject: { GS: 800, Reasoning: 780, Math: 770, 'Physical Training': 790 } },
      'Firefighter Exam Preparation': { perHour: 700, subject: { GS: 750, Reasoning: 730, 'Physical Training': 720, GK: 740 } },
      'Postal Exam Preparation': { perHour: 600, subject: { GS: 650, Reasoning: 630, Math: 620, English: 640 } },
      'Insurance Exam Preparation': { perHour: 700, subject: { GS: 750, Reasoning: 730, Math: 720, English: 740 } },
      'Civil Services Interview Prep': { perHour: 1500, focus: { 'Mock Interviews': 1600,' Personality Development': 1550, 'Current Affairs': 1520 } },
      'Foreign Language Test Prep': { perHour: 500, language: { French: 550, German: 520, Spanish: 530, Japanese: 540 } }
    }
  },
  {
    id: 6,
    name: 'Design Services',
    subServices: [
      'Poster Design', 'Banner Design', 'Logo Design', 'Social Media Graphics', 'Brochure Design',
      'Flyer Design', 'Business Card Design', 'Website Design', 'App Design', 'UI/UX Design',
      'Packaging Design', 'Label Design', 'Book Cover Design', 'Magazine Layout', 'Newsletter Design',
      'Infographic Design', 'Presentation Design', 'T-Shirt Design', 'Merchandise Design', 'Illustration',
      'Icon Design', 'Vector Art', '3D Design', 'Motion Graphics', 'Video Editing',
      'Animation', 'Character Design', 'Typography Design', 'Branding', 'Stationery Design',
      'Signage Design', 'Billboard Design', 'Trade Show Booth Design', 'Email Template Design',
      'E-commerce Design', 'Landing Page Design', 'Wireframing' , 'Prototyping', 'Print Design',
      'Digital Art', 'Photo Editing', 'Retouching', 'Photo Manipulation', 'Album Art Design',
      'Postcard Design', 'Invitation Design', 'Menu Design', 'Catalog Design', 'Resume Design',
      'Portfolio Design', 'Certificate Design', 'Calendar Design', 'Wallpaper Design', 'Sticker Design',
      'Pattern Design', 'Web Banner Design', 'Social Media Ad Design', 'Storyboard Design', 'Game Design'
    ],
    pricing: {
      'Poster Design': { small: 1500, medium: 2500, large: 4000, custom: 6000 },
      'Banner Design': { digital: 2000, print: 3500, animated: 5000, largeFormat: 7000 },
      'Logo Design': { basic: 3000, premium: 8000, deluxe: 12000, custom: 15000 },
      'Social Media Graphics': { post: 800, story: 600, cover: 1500, ad: 2000 },
      'Brochure Design': { fold: 2500, booklet: 4500, premium: 6500, custom: 8000 },
      'Flyer Design': { singleSided: 1000, doubleSided: 1500, premium: 2500, custom: 3500 },
      'Business Card Design': { basic: 800, premium: 1500, deluxe: 2500, custom: 3000 },
      'Website Design': { landingPage: 5000, multiPage: 10000, eCommerce: 15000, custom: 20000 },
      'App Design': { wireframe: 6000, prototype: 10000, fullDesign: 15000, custom: 25000 },
      'UI/UX Design': { wireframe: 5000, prototype: 8000, fullDesign: 12000, custom: 18000 },
      'Packaging Design': { label: 2000, box: 4000, premium: 6000, custom: 8000 },
      'Label Design': { basic: 1500, premium: 3000, deluxe: 4500, custom: 6000 },
      'Book Cover Design': { paperback: 2500, hardcover: 4000, premium: 6000, custom: 8000 },
      'Magazine Layout': { basic: 3000, premium: 5000, deluxe: 7000, custom: 10000 },
      'Newsletter Design': { basic: 1500, premium: 2500, deluxe: 4000, custom: 6000 },
      'Infographic Design': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Presentation Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 5000 },
      'T-Shirt Design': { basic: 800, premium: 1500, deluxe: 2500, custom: 3500 },
      'Merchandise Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 5000 },
      'Illustration': { basic: 1500, premium: 3000, deluxe: 4500, custom: 6000 },
      'Icon Design': { basic: 500, premium: 1000, deluxe: 1500, custom: 2000 },
      'Vector Art': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      '3D Design': { basic: 3000, premium: 6000, deluxe: 9000, custom: 12000 },
      'Motion Graphics': { basic: 5000, premium: 8000, deluxe: 12000, custom: 15000 },
      'Video Editing': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Animation': { basic: 6000, premium: 10000, deluxe: 15000, custom: 20000 },
      'Character Design': { basic: 2500, premium: 5000, deluxe: 7500, custom: 10000 },
      'Typography Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      'Branding': { basic: 5000, premium: 10000, deluxe: 15000, custom: 20000 },
      'Stationery Design': { basic: 1500, premium: 3000, deluxe: 4500, custom: 6000 },
      'Signage Design': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Billboard Design': { basic: 3000, premium: 6000, deluxe: 9000, custom: 12000 },
      'Trade Show Booth Design': { basic: 5000, premium: 10000, deluxe: 15000, custom: 20000 },
      'Email Template Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      'E-commerce Design': { basic: 5000, premium: 10000, deluxe: 15000, custom: 20000 },
      'Landing Page Design': { basic: 3000, premium: 6000, deluxe: 9000, custom: 12000 },
      'Wireframing': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Prototyping': { basic: 3000, premium: 6000, deluxe: 9000, custom: 12000 },
      'Print Design': { basic: 1500, premium: 3000, deluxe: 4500, custom: 6000 },
      'Digital Art': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Photo Editing': { basic: 500, premium: 1000, deluxe: 1500, custom: 2000 },
      'Retouching': { basic: 800, premium: 1500, deluxe: 2500, custom: 3500 },
      'Photo Manipulation': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      'Album Art Design': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Postcard Design': { basic: 800, premium: 1500, deluxe: 2500, custom: 3500 },
      'Invitation Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      'Menu Design': { basic: 1500, premium: 3000, deluxe: 4500, custom: 6000 },
      'Catalog Design': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Resume Design': { basic: 800, premium: 1500, deluxe: 2500, custom: 3500 },
      'Portfolio Design': { basic: 1500, premium: 3000, deluxe: 4500, custom: 6000 },
      'Certificate Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      'Calendar Design': { basic: 1500, premium: 3000, deluxe: 4500, custom: 6000 },
      'Wallpaper Design': { basic: 800, premium: 1500, deluxe: 2500, custom: 3500 },
      'Sticker Design': { basic: 500, premium: 1000, deluxe: 1500, custom: 2000 },
      'Pattern Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      'Web Banner Design': { basic: 800, premium: 1500, deluxe: 2500, custom: 3500 },
      'Social Media Ad Design': { basic: 1000, premium: 2000, deluxe: 3000, custom: 4000 },
      'Storyboard Design': { basic: 2000, premium: 4000, deluxe: 6000, custom: 8000 },
      'Game Design': { basic: 5000, premium: 10000, deluxe: 15000, custom: 20000 }
    }
  },
  {
    id: 7,
    name: 'Home Services',
    subServices: [
      'Plumbing', 'Electrical', 'Carpentry', 'Pest Control', 'Home Automation',
      'Cleaning', 'Painting', 'Flooring', 'Roofing', 'Window Repair',
      'Door Repair', 'Wall Repair', 'Ceiling Repair', 'Furniture Assembly', 'Appliance Repair',
      'HVAC Services', 'Water Heater Repair', 'Septic Tank Cleaning', 'Drain Cleaning', 'Gutter Cleaning',
      'Chimney Cleaning', 'Carpet Cleaning', 'Upholstery Cleaning', 'Curtain Cleaning', 'Mattress Cleaning',
      'Air Duct Cleaning', 'Solar Panel Cleaning', 'Pool Cleaning', 'Garden Maintenance', 'Lawn Care',
      'Tree Trimming', 'Landscaping', 'Fence Repair', 'Driveway Repair', 'Patio Repair',
      'Deck Repair', 'Basement Waterproofing', 'Mold Removal', 'Asbestos Removal', 'Radon Testing',
      'Home Inspection', 'Interior Design', 'Space Planning', 'Furniture Repair', 'Cabinet Repair',
      'Countertop Installation', 'Tile Installation', 'Glass Repair', 'Mirror Installation', 'Security System Installation',
      'Smart Home Setup', 'Lighting Installation', 'Ceiling Fan Installation', 'Home Theater Setup', 'Appliance Installation'
    ],
    pricing: {
      Plumbing: { basic: 1500, emergency: 3000, pipeReplacement: 4000, faucetRepair: 1000 },
      Electrical: { wiring: 2500, fixture: 1800, panelUpgrade: 5000, outletRepair: 800 },
      Carpentry: { furniture: 4000, repair: 2000, customWork: 6000, cabinetInstallation: 3000 },
      'Pest Control': { apartment: 1200, villa: 2500, termite: 3500, rodent: 2000 },
      'Home Automation': { basic: 15000, premium: 30000, custom: 50000, smartLighting: 10000 },
      Cleaning: { basic: 1000, deepCleaning: 2500, moveInOut: 3000, postConstruction: 4000 },
      Painting: { walls: 2000, ceiling: 1500, exterior: 5000, texture: 3000 },
      Flooring: { tile: 3000, hardwood: 5000, carpet: 2500, laminate: 3500 },
      Roofing: { repair: 4000, replacement: 10000, shingle: 6000, metal: 8000 },
      'Window Repair': { glassReplacement: 1500, frameRepair: 2000, sealRepair: 1000, fullReplacement: 5000 },
      'Door Repair': { hingeRepair: 800, lockReplacement: 1200, frameRepair: 1500, fullReplacement: 3000 },
      'Wall Repair': { patch: 500, texture: 800, drywall: 1200, fullRepair: 2000 },
      'Ceiling Repair': { patch: 600, texture: 900, drywall: 1300, fullRepair: 2500 },
      'Furniture Assembly': { basic: 800, premium: 1500, custom: 2000, largeItem: 3000 },
      'Appliance Repair': { refrigerator: 2000, washingMachine: 1500, oven: 1200, dishwasher: 1000 },
      'HVAC Services': { maintenance: 1500, repair: 3000, installation: 10000, ductCleaning: 2500 },
      'Water Heater Repair': { basic: 1500, replacement: 5000, tankless: 7000, emergency: 3000 },
      'Septic Tank Cleaning': { basic: 2000, emergency: 4000, inspection: 1500, repair: 5000 },
      'Drain Cleaning': { basic: 1000, emergency: 2500, sewerLine: 3000, cameraInspection: 2000 },
      'Gutter Cleaning': { basic: 800, premium: 1500, repair: 2000, fullReplacement: 4000 },
      'Chimney Cleaning': { basic: 1200, inspection: 800, repair: 2500, fullReplacement: 5000 },
      'Carpet Cleaning': { basic: 500, deepCleaning: 1000, stainRemoval: 800, fullRoom: 1500 },
      'Upholstery Cleaning': { basic: 600, deepCleaning: 1200, stainRemoval: 1000, fullPiece: 2000 },
      'Curtain Cleaning': { basic: 400, premium: 800, dryCleaning: 1000, fullSet: 1500 },
      'Mattress Cleaning': { basic: 700, deepCleaning: 1200, stainRemoval: 1000, fullMattress: 1500 },
      'Air Duct Cleaning': { basic: 1500, premium: 2500, fullSystem: 4000, moldRemoval: 3000 },
      'Solar Panel Cleaning': { basic: 1000, premium: 2000, fullSystem: 3000, inspection: 800 },
      'Pool Cleaning': { basic: 1200, premium: 2500, chemicalBalance: 800, fullService: 3000 },
      'Garden Maintenance': { basic: 800, premium: 1500, landscaping: 3000, fullService: 4000 },
      'Lawn Care': { mowing: 500, fertilizing: 800, aeration: 1000, fullService: 2000 },
      'Tree Trimming': { basic: 1000, premium: 2000, largeTree: 3000, emergency: 4000 },
      'Landscaping': { basic: 3000, premium: 6000, custom: 10000, fullService: 15000 },
      'Fence Repair': { basic: 1000, premium: 2000, fullReplacement: 5000, custom: 7000 },
      'Driveway Repair': { basic: 2000, premium: 4000, fullReplacement: 8000, sealing: 1500 },
      'Patio Repair': { basic: 1500, premium: 3000, fullReplacement: 6000, custom: 8000 },
      'Deck Repair': { basic: 2000, premium: 4000, fullReplacement: 7000, custom: 10000 },
      'Basement Waterproofing': { basic: 5000, premium: 10000, custom: 15000, emergency: 12000 },
      'Mold Removal': { basic: 3000, premium: 6000, custom: 10000, emergency: 8000 },
      'Asbestos Removal': { basic: 5000, premium: 10000, custom: 15000, emergency: 12000 },
      'Radon Testing': { basic: 800, premium: 1500, custom: 2000, emergency: 2500 },
      'Home Inspection': { basic: 3000, premium: 5000, custom: 7000, emergency: 6000 },
      'Interior Design': { basic: 5000, premium: 10000, custom: 15000, fullService: 20000 },
      'Space Planning': { basic: 3000, premium: 6000, custom: 10000, fullService: 15000 },
      'Furniture Repair': { basic: 1000, premium: 2000, custom: 3000, fullService: 4000 },
      'Cabinet Repair': { basic: 1500, premium: 3000, custom: 5000, fullReplacement: 7000 },
      'Countertop Installation': { basic: 3000, premium: 6000, custom: 10000, fullService: 15000 },
      'Tile Installation': { basic: 2000, premium: 4000, custom: 6000, fullService: 8000 },
      'Glass Repair': { basic: 800, premium: 1500, custom: 2000, fullReplacement: 3000 },
      'Mirror Installation': { basic: 500, premium: 1000, custom: 1500, fullService: 2000 },
      'Security System Installation': { basic: 5000, premium: 10000, custom: 15000, fullService: 20000 },
      'Smart Home Setup': { basic: 10000, premium: 20000, custom: 30000, fullService: 40000 },
      'Lighting Installation': { basic: 2000, premium: 4000, custom: 6000, fullService: 8000 },
      'Ceiling Fan Installation': { basic: 1500, premium: 3000, custom: 5000, fullService: 7000 },
      'Home Theater Setup': { basic: 10000, premium: 20000, custom: 30000, fullService: 40000 },
      'Appliance Installation': { basic: 1000, premium: 2000, custom: 3000, fullService: 4000 }
    }
  },
  {
    id: 8,
    name: 'Event Services',
    subServices: ['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Catering', 'Photography'],
    pricing: {
      'Wedding Planning': { basic: 50000, premium: 150000 },
      'Corporate Events': { small: 30000, large: 100000 },
      'Birthday Parties': { kids: 15000, adults: 25000 },
      Catering: { perPerson: 500, minOrder: 10000 },
      Photography: { halfDay: 8000, fullDay: 15000 }
    }
  },
    ,
    {
      id: 9,
      name: 'Travel Services',
      subServices: ['Flight Booking', 'Hotel Reservations', 'Tour Packages', 'Car Rentals', 'Visa Assistance'],
      pricing: {
        'Flight Booking': { economy: 10000, business: 50000 },
        'Hotel Reservations': { budget: 2000, luxury: 20000 },
        'Tour Packages': { domestic: 15000, international: 50000 },
        'Car Rentals': { sedan: 3000, suv: 7000 },
        'Visa Assistance': { standard: 2000, express: 5000 }
      }
    },
    {
      id: 10,
      name: 'Health Services',
      subServices: ['General Checkup', 'Dental Care', 'Physiotherapy', 'Nutrition Counseling', 'Lab Tests'],
      pricing: {
        'General Checkup': { basic: 1000, comprehensive: 5000 },
        'Dental Care': { cleaning: 2000, filling: 5000 },
        'Physiotherapy': { session: 1500, package: 10000 },
        'Nutrition Counseling': { single: 2000, monthly: 8000 },
        'Lab Tests': { basic: 1000, advanced: 5000 }
      }
    },
    {
      id: 13,
      name: 'Fitness Services',
      subServices: ['Gym Membership', 'Personal Training', 'Yoga Classes', 'Diet Plans', 'Martial Arts'],
      pricing: {
        'Gym Membership': { monthly: 3000, yearly: 30000 },
        'Personal Training': { session: 1000, package: 20000 },
        'Yoga Classes': { dropIn: 500, monthly: 4000 },
        'Diet Plans': { basic: 2000, custom: 10000 },
        'Martial Arts': { monthly: 3000, yearly: 25000 }
      }
    },
    {
      id: 14,
      name: 'Beauty Services',
      subServices: ['Hair Styling', 'Makeup', 'Spa Treatments', 'Manicure & Pedicure', 'Skin Care'],
      pricing: {
        'Hair Styling': { cut: 1000, color: 5000 },
        Makeup: { basic: 2000, bridal: 15000 },
        'Spa Treatments': { basic: 3000, luxury: 10000 },
        'Manicure & Pedicure': { basic: 1500, deluxe: 4000 },
        'Skin Care': { facial: 2000, package: 10000 }
      }
    },
    {
      id: 15,
      name: 'Legal Services',
      subServices: ['Consultation', 'Document Drafting', 'Property Registration', 'Divorce Cases', 'Corporate Law'],
      pricing: {
        Consultation: { hourly: 3000, case: 10000 },
        'Document Drafting': { basic: 5000, complex: 20000 },
        'Property Registration': { flat: 10000, land: 20000 },
        'Divorce Cases': { mutual: 30000, contested: 100000 },
        'Corporate Law': { startup: 50000, enterprise: 200000 }
      }
    },
    {
      id: 16,
      name: 'IT Services',
      subServices: ['Web Development', 'App Development', 'SEO', 'Cloud Services', 'IT Support'],
      pricing: {
        'Web Development': { basic: 50000, advanced: 200000 },
        'App Development': { basic: 100000, advanced: 500000 },
        SEO: { monthly: 10000, yearly: 100000 },
        'Cloud Services': { basic: 5000, enterprise: 50000 },
        'IT Support': { hourly: 2000, contract: 50000 }
      }
    },
    {
      id: 17,
      name: 'Pet Services',
      subServices: ['Pet Grooming', 'Veterinary Care', 'Pet Sitting', 'Training', 'Pet Supplies'],
      pricing: {
        'Pet Grooming': { basic: 1000, full: 3000 },
        'Veterinary Care': { consultation: 1500, surgery: 10000 },
        'Pet Sitting': { daily: 500, monthly: 10000 },
        Training: { basic: 5000, advanced: 15000 },
        'Pet Supplies': { food: 2000, accessories: 5000 }
      }
    },
    {
      id: 18,
      name: 'Real Estate Services',
      subServices: ['Buying', 'Selling', 'Renting', 'Property Management', 'Legal Assistance'],
      pricing: {
        Buying: { flat: 50000, villa: 200000 },
        Selling: { flat: 50000, villa: 200000 },
        Renting: { flat: 20000, villa: 100000 },
        'Property Management': { monthly: 10000, yearly: 100000 },
        'Legal Assistance': { basic: 10000, complex: 50000 }
      }
    },
    {
      id: 19,
      name: 'Automotive Services',
      subServices: ['Car Repair', 'Car Wash', 'Towing', 'Insurance', 'Detailing'],
      pricing: {
        'Car Repair': { minor: 3000, major: 20000 },
        'Car Wash': { basic: 500, premium: 2000 },
        Towing: { local: 1000, longDistance: 5000 },
        Insurance: { basic: 10000, comprehensive: 50000 },
        Detailing: { basic: 3000, premium: 10000 }
      }
    },
    {
      id: 20,
      name: 'Financial Services',
      subServices: ['Tax Consulting', 'Investment Planning', 'Loan Services', 'Insurance', 'Wealth Management'],
      pricing: {
        'Tax Consulting': { basic: 5000, complex: 20000 },
        'Investment Planning': { basic: 10000, advanced: 50000 },
        'Loan Services': { personal: 5000, business: 20000 },
        Insurance: { health: 10000, life: 50000 },
        'Wealth Management': { basic: 20000, premium: 100000 }
      }
    },
    {
      id: 21,
      name: 'Entertainment Services',
      subServices: ['Event Hosting', 'DJ Services', 'Live Music', 'Photo Booth', 'Catering'],
      pricing: {
        'Event Hosting': { basic: 10000, premium: 50000 },
        'DJ Services': { hourly: 5000, fullEvent: 30000 },
        'Live Music': { band: 20000, solo: 10000 },
        'Photo Booth': { hourly: 3000, fullEvent: 15000 },
        Catering: { perPerson: 500, minOrder: 10000 }
      }
    },
    {
      id: 22,
      name: 'Logistics Services',
      subServices: ['Courier', 'Freight', 'Warehousing', 'Supply Chain', 'Last-Mile Delivery'],
      pricing: {
        Courier: { local: 100, national: 500 },
        Freight: { small: 5000, large: 20000 },
        Warehousing: { monthly: 10000, yearly: 100000 },
        'Supply Chain': { basic: 50000, advanced: 200000 },
        'Last-Mile Delivery': { perDelivery: 100, monthly: 5000 }
      }
    },
    {
      id: 23,
      name: 'Security Services',
      subServices: ['Home Security', 'Corporate Security', 'Event Security', 'Surveillance', 'Guard Services'],
      pricing: {
        'Home Security': { basic: 10000, advanced: 50000 },
        'Corporate Security': { small: 20000, large: 100000 },
        'Event Security': { hourly: 1000, fullEvent: 20000 },
        Surveillance: { installation: 50000, monthly: 10000 },
        'Guard Services': { hourly: 500, monthly: 15000 }
      }
    },
    {
      id: 24,
      name: 'Marketing Services',
      subServices: ['Digital Marketing', 'Content Creation', 'Social Media Management', 'SEO', 'Email Marketing'],
      pricing: {
        'Digital Marketing': { basic: 20000, advanced: 100000 },
        'Content Creation': { blog: 5000, video: 20000 },
        'Social Media Management': { monthly: 10000, yearly: 100000 },
        SEO: { monthly: 15000, yearly: 150000 },
        'Email Marketing': { campaign: 5000, monthly: 10000 }
      }
    },
    {
      id: 25,
      name: 'Consulting Services',
      subServices: ['Business Consulting', 'IT Consulting', 'HR Consulting', 'Financial Consulting', 'Legal Consulting'],
      pricing: {
        'Business Consulting': { hourly: 3000, project: 100000 },
        'IT Consulting': { hourly: 4000, project: 150000 },
        'HR Consulting': { hourly: 2000, project: 50000 },
        'Financial Consulting': { hourly: 5000, project: 200000 },
        'Legal Consulting': { hourly: 3000, project: 100000 }
      }
    },
    {
      id: 26,
      name: 'Creative Services',
      subServices: ['Graphic Design', 'Video Editing', 'Animation', 'Photography', 'Copywriting'],
      pricing: {
        'Graphic Design': { logo: 5000, branding: 20000 },
        'Video Editing': { short: 10000, feature: 50000 },
        Animation: { short: 20000, feature: 100000 },
        Photography: { hourly: 5000, fullDay: 30000 },
        Copywriting: { blog: 3000, adCopy: 10000 }
      }
    },
    {
      id: 27,
      name: 'Construction Services',
      subServices: ['Home Construction', 'Renovation', 'Interior Design', 'Landscaping', 'Architectural Services'],
      pricing: {
        'Home Construction': { small: 500000, large: 2000000 },
        Renovation: { basic: 100000, premium: 500000 },
        'Interior Design': { basic: 50000, premium: 200000 },
        Landscaping: { small: 30000, large: 150000 },
        'Architectural Services': { basic: 100000, premium: 500000 }
      }
    },
    {
      id: 28,
      name: 'Retail Services',
      subServices: ['E-commerce', 'Inventory Management', 'Point of Sale', 'Customer Support', 'Merchandising'],
      pricing: {
        'E-commerce': { setup: 50000, monthly: 10000 },
        'Inventory Management': { setup: 30000, monthly: 5000 },
        'Point of Sale': { setup: 20000, monthly: 3000 },
        'Customer Support': { hourly: 500, monthly: 10000 },
        Merchandising: { basic: 10000, premium: 50000 }
      }
    },
    {
      id: 29,
      name: 'Telecom Services',
      subServices: ['Broadband', 'Mobile Plans', 'Landline', 'Cable TV', 'VoIP'],
      pricing: {
        Broadband: { monthly: 1000, yearly: 10000 },
        'Mobile Plans': { prepaid: 500, postpaid: 1000 },
        Landline: { monthly: 500, yearly: 5000 },
        'Cable TV': { monthly: 300, yearly: 3000 },
        VoIP: { monthly: 1000, yearly: 10000 }
      }
    },
    {
      id: 30,
      name: 'Hospitality Services',
      subServices: ['Hotel Booking', 'Restaurant Reservations', 'Event Spaces', 'Catering', 'Tourism Packages'],
      pricing: {
        'Hotel Booking': { budget: 2000, luxury: 20000 },
        'Restaurant Reservations': { small: 1000, large: 5000 },
        'Event Spaces': { hourly: 5000, fullDay: 30000 },
        Catering: { perPerson: 500, minOrder: 10000 },
        'Tourism Packages': { domestic: 15000, international: 50000 }
      }
    },
    {
      id: 31,
      name: 'Agriculture Services',
      subServices: ['Crop Consulting', 'Equipment Rental', 'Irrigation Services', 'Pest Control', 'Soil Testing'],
      pricing: {
        'Crop Consulting': { hourly: 1000, project: 50000 },
        'Equipment Rental': { daily: 2000, monthly: 30000 },
        'Irrigation Services': { small: 10000, large: 50000 },
        'Pest Control': { small: 5000, large: 20000 },
        'Soil Testing': { basic: 3000, advanced: 10000 }
      }
    },
    {
      id: 32,
      name: 'Energy Services',
      subServices: ['Solar Installation', 'Wind Energy', 'Energy Audits', 'Battery Storage', 'Maintenance'],
      pricing: {
        'Solar Installation': { small: 100000, large: 500000 },
        'Wind Energy': { small: 200000, large: 1000000 },
        'Energy Audits': { basic: 5000, comprehensive: 20000 },
        'Battery Storage': { small: 50000, large: 200000 },
        Maintenance: { hourly: 1000, contract: 50000 }
      }
    },
    {
      id: 33,
      name: 'Environmental Services',
      subServices: ['Waste Management', 'Recycling', 'Pollution Control', 'Sustainability Consulting', 'Water Treatment'],
      pricing: {
        'Waste Management': { small: 5000, large: 20000 },
        Recycling: { small: 3000, large: 10000 },
        'Pollution Control': { basic: 10000, advanced: 50000 },
        'Sustainability Consulting': { hourly: 2000, project: 50000 },
        'Water Treatment': { small: 10000, large: 50000 }
      }
    },
    {
      id: 34,
      name: 'Media Services',
      subServices: ['News Production', 'Film Production', 'Advertising', 'Public Relations', 'Broadcasting'],
      pricing: {
        'News Production': { hourly: 5000, project: 100000 },
        'Film Production': { short: 50000, feature: 500000 },
        Advertising: { campaign: 20000, monthly: 100000 },
        'Public Relations': { hourly: 3000, project: 50000 },
        Broadcasting: { hourly: 10000, project: 200000 }
      }
    },
    {
      id: 35,
      name: 'Non-Profit Services',
      subServices: ['Fundraising', 'Volunteer Management', 'Grant Writing', 'Community Outreach', 'Event Planning'],
      pricing: {
        Fundraising: { basic: 10000, premium: 50000 },
        'Volunteer Management': { hourly: 1000, project: 20000 },
        'Grant Writing': { basic: 5000, premium: 20000 },
        'Community Outreach': { basic: 10000, premium: 50000 },
        'Event Planning': { basic: 20000, premium: 100000 }
      }
    },
    {
      id: 36,
      name: 'Pharmaceutical Services',
      subServices: ['Drug Development', 'Clinical Trials', 'Regulatory Affairs', 'Manufacturing', 'Distribution'],
      pricing: {
        'Drug Development': { small: 500000, large: 2000000 },
        'Clinical Trials': { phase1: 1000000, phase3: 5000000 },
        'Regulatory Affairs': { basic: 50000, premium: 200000 },
        Manufacturing: { small: 100000, large: 500000 },
        Distribution: { local: 50000, national: 200000 }
      }
    },
    {
      id: 37,
      name: 'Technology Services',
      subServices: ['AI Development', 'Blockchain', 'Cybersecurity', 'Data Analytics', 'IoT'],
      pricing: {
        'AI Development': { basic: 100000, advanced: 500000 },
        Blockchain: { basic: 50000, advanced: 200000 },
        Cybersecurity: { basic: 50000, advanced: 300000 },
        'Data Analytics': { basic: 30000, advanced: 150000 },
        IoT: { basic: 50000, advanced: 200000 }
      }
    },
    {
      id: 38,
      name: 'Transport Services',
      subServices: ['Ride Sharing', 'Car Rentals', 'Logistics', 'Freight', 'Public Transport'],
      pricing: {
        'Ride Sharing': { local: 100, longDistance: 500 },
        'Car Rentals': { hourly: 500, daily: 3000 },
        Logistics: { small: 5000, large: 20000 },
        Freight: { small: 10000, large: 50000 },
        'Public Transport': { monthly: 1000, yearly: 10000 }
      }
    },
    {
      id: 39,
      name: 'Wellness Services',
      subServices: ['Meditation', 'Yoga', 'Nutrition', 'Mental Health', 'Holistic Healing'],
      pricing: {
        Meditation: { session: 1000, package: 10000 },
        Yoga: { session: 1500, package: 12000 },
        Nutrition: { consultation: 2000, plan: 10000 },
        'Mental Health': { session: 3000, package: 20000 },
        'Holistic Healing': { session: 5000, package: 30000 }
      }
    },
    {
      id: 40,
      name: 'Art Services',
      subServices: ['Painting', 'Sculpting', 'Photography', 'Music', 'Dance'],
      pricing: {
        Painting: { small: 5000, large: 20000 },
        Sculpting: { small: 10000, large: 50000 },
        Photography: { hourly: 3000, fullDay: 20000 },
        Music: { session: 2000, package: 15000 },
        Dance: { session: 1000, package: 10000 }
      }
    },
    {
      id: 41,
      name: 'Craft Services',
      subServices: ['Pottery', 'Knitting', 'Jewelry Making', 'Woodworking', 'Embroidery'],
      pricing: {
        Pottery: { small: 3000, large: 10000 },
        Knitting: { small: 2000, large: 8000 },
        'Jewelry Making': { small: 5000, large: 20000 },
        Woodworking: { small: 10000, large: 50000 },
        Embroidery: { small: 3000, large: 15000 }
      }
    },
    {
      id: 42,
      name: 'Language Services',
      subServices: ['Translation', 'Interpretation', 'Language Classes', 'Proofreading', 'Localization'],
      pricing: {
        Translation: { perWord: 1, document: 5000 },
        Interpretation: { hourly: 2000, fullDay: 15000 },
        'Language Classes': { hourly: 1000, package: 10000 },
        Proofreading: { perPage: 500, document: 3000 },
        Localization: { basic: 10000, advanced: 50000 }
      }
    },
    {
      id: 43,
      name: 'Research Services',
      subServices: ['Market Research', 'Academic Research', 'Scientific Research', 'Data Collection', 'Analysis'],
      pricing: {
        'Market Research': { basic: 50000, advanced: 200000 },
        'Academic Research': { basic: 30000, advanced: 150000 },
        'Scientific Research': { basic: 100000, advanced: 500000 },
        'Data Collection': { small: 10000, large: 50000 },
        Analysis: { basic: 20000, advanced: 100000 }
      }
    },
    {
      id: 44,
      name: 'Publishing Services',
      subServices: ['Editing', 'Proofreading', 'Design', 'Printing', 'Distribution'],
      pricing: {
        Editing: { perPage: 500, document: 10000 },
        Proofreading: { perPage: 300, document: 5000 },
        Design: { basic: 10000, premium: 50000 },
        Printing: { small: 5000, large: 20000 },
        Distribution: { local: 10000, national: 50000 }
      }
    },
    {
      id: 45,
      name: 'Social Services',
      subServices: ['Counseling', 'Child Care', 'Elder Care', 'Disability Support', 'Community Development'],
      pricing: {
        Counseling: { session: 2000, package: 15000 },
        'Child Care': { hourly: 500, monthly: 10000 },
        'Elder Care': { hourly: 1000, monthly: 20000 },
        'Disability Support': { hourly: 1500, monthly: 25000 },
        'Community Development': { basic: 50000, advanced: 200000 }
      }
    },
    {
      id: 46,
      name: 'Veterinary Services',
      subServices: ['General Checkup', 'Surgery', 'Dental Care', 'Vaccination', 'Emergency Care'],
      pricing: {
        'General Checkup': { basic: 1000, comprehensive: 5000 },
        Surgery: { minor: 5000, major: 20000 },
        'Dental Care': { cleaning: 2000, extraction: 5000 },
        Vaccination: { basic: 1000, package: 5000 },
        'Emergency Care': { basic: 5000, critical: 20000 }
      }
    },
    {
      id: 47,
      name: 'Wedding Services',
      subServices: ['Venue Booking', 'Catering', 'Photography', 'Decor', 'Entertainment'],
      pricing: {
        'Venue Booking': { small: 50000, large: 200000 },
        Catering: { perPerson: 500, minOrder: 10000 },
        Photography: { halfDay: 10000, fullDay: 30000 },
        Decor: { basic: 20000, premium: 100000 },
        Entertainment: { basic: 30000, premium: 150000 }
      }
    },
    {
      id: 48,
      name: 'Yoga Services',
      subServices: ['Group Classes', 'Private Sessions', 'Retreats', 'Teacher Training', 'Online Classes'],
      pricing: {
        'Group Classes': { dropIn: 500, monthly: 4000 },
        'Private Sessions': { hourly: 2000, package: 15000 },
        Retreats: { weekend: 20000, weeklong: 50000 },
        'Teacher Training': { basic: 30000, advanced: 100000 },
        'Online Classes': { monthly: 2000, yearly: 20000 }
      }
    },
    {
      id: 49,
      name: 'Zoo Services',
      subServices: ['Animal Care', 'Educational Tours', 'Conservation Programs', 'Events', 'Adoption'],
      pricing: {
        'Animal Care': { basic: 5000, premium: 20000 },
        'Educational Tours': { small: 1000, large: 5000 },
        'Conservation Programs': { basic: 10000, premium: 50000 },
        Events: { small: 5000, large: 20000 },
        Adoption: { small: 10000, large: 50000 }
      }
    },
    {
      id: 50,
      name: 'Event Planning',
      subServices: ['Weddings', 'Corporate Events', 'Birthdays', 'Conferences', 'Festivals'],
      pricing: {
        Weddings: { basic: 50000, premium: 200000 },
        'Corporate Events': { small: 30000, large: 150000 },
        Birthdays: { kids: 15000, adults: 30000 },
        Conferences: { small: 50000, large: 200000 },
        Festivals: { small: 100000, large: 500000 }
      }
    },
    {
      id: 51,
      name: 'Catering Services',
      subServices: ['Weddings', 'Corporate Events', 'Parties', 'Buffets', 'Custom Menus'],
      pricing: {
        Weddings: { perPerson: 1000, minOrder: 50000 },
        'Corporate Events': { perPerson: 800, minOrder: 30000 },
        Parties: { perPerson: 500, minOrder: 15000 },
        Buffets: { perPerson: 600, minOrder: 20000 },
        'Custom Menus': { perPerson: 1200, minOrder: 100000 }
      }
    },
    {
      id: 52,
      name: 'Photography Services',
      subServices: ['Portraits', 'Events', 'Commercial', 'Product', 'Aerial'],
      pricing: {
        Portraits: { session: 5000, package: 20000 },
        Events: { hourly: 3000, fullDay: 20000 },
        Commercial: { hourly: 5000, project: 50000 },
        Product: { perProduct: 1000, package: 10000 },
        Aerial: { hourly: 10000, project: 50000 }
      }
    },
    {
      id: 53,
      name: 'Interior Design',
      subServices: ['Residential', 'Commercial', 'Office', 'Retail', 'Hospitality'],
      pricing: {
        Residential: { basic: 50000, premium: 200000 },
        Commercial: { basic: 100000, premium: 500000 },
        Office: { basic: 80000, premium: 300000 },
        Retail: { basic: 60000, premium: 250000 },
        Hospitality: { basic: 150000, premium: 700000 }
      }
    },
    {
      id: 54,
      name: 'Landscaping Services',
      subServices: ['Design', 'Installation', 'Maintenance', 'Irrigation', 'Lighting'],
      pricing: {
        Design: { basic: 20000, premium: 100000 },
        Installation: { small: 50000, large: 200000 },
        Maintenance: { monthly: 10000, yearly: 100000 },
        Irrigation: { small: 30000, large: 150000 },
        Lighting: { small: 20000, large: 100000 }
      }
    },
    {
      id: 55,
      name: 'Cleaning Services',
      subServices: ['Residential', 'Commercial', 'Industrial', 'Carpet Cleaning', 'Window Cleaning'],
      pricing: {
        Residential: { basic: 2000, deep: 10000 },
        Commercial: { basic: 5000, deep: 20000 },
        Industrial: { basic: 10000, deep: 50000 },
        'Carpet Cleaning': { small: 3000, large: 15000 },
        'Window Cleaning': { small: 2000, large: 10000 }
      }
    },
    {
      id: 56,
      name: 'Security Systems',
      subServices: ['Installation', 'Monitoring', 'Maintenance', 'Access Control', 'Surveillance'],
      pricing: {
        Installation: { basic: 20000, premium: 100000 },
        Monitoring: { monthly: 2000, yearly: 20000 },
        Maintenance: { hourly: 1000, contract: 50000 },
        'Access Control': { basic: 30000, premium: 150000 },
        Surveillance: { basic: 50000, premium: 200000 }
      }
    },
    {
      id: 57,
      name: 'IT Support',
      subServices: ['Help Desk', 'Network Setup', 'Data Recovery', 'Software Installation', 'Cybersecurity'],
      pricing: {
        'Help Desk': { hourly: 1000, contract: 50000 },
        'Network Setup': { small: 20000, large: 100000 },
        'Data Recovery': { basic: 5000, advanced: 30000 },
        'Software Installation': { basic: 3000, advanced: 15000 },
        Cybersecurity: { basic: 10000, advanced: 50000 }
      }
    },
    {
      id: 58,
      name: 'Web Development',
      subServices: ['Frontend', 'Backend', 'E-commerce', 'CMS', 'SEO'],
      pricing: {
        Frontend: { basic: 30000, advanced: 150000 },
        Backend: { basic: 50000, advanced: 200000 },
        'E-commerce': { basic: 100000, advanced: 500000 },
        CMS: { basic: 40000, advanced: 200000 },
        SEO: { basic: 20000, advanced: 100000 }
      }
    },
    {
      id: 59,
      name: 'App Development',
      subServices: [
        'iOS', 'Android', 'Cross-Platform', 'UI/UX Design', 'Testing',
        'Web App Development', 'Hybrid App Development', 'Game Development', 'AR/VR Development', 'Blockchain App Development',
        'IoT App Development', 'AI/ML Integration', 'Cloud Integration', 'API Development', 'Backend Development',
        'Frontend Development', 'Database Management', 'DevOps Services', 'App Maintenance', 'App Migration',
        'App Localization', 'App Security', 'App Analytics', 'App Monetization', 'App Store Optimization',
        'Push Notification Setup', 'Chatbot Integration', 'Payment Gateway Integration', 'Social Media Integration',
        'E-commerce App Development', 'Fitness App Development', 'Healthcare App Development', 'Education App Development',
        'Travel App Development', 'Food Delivery App Development', 'On-Demand App Development', 'Real Estate App Development',
        'Social Networking App Development', 'Entertainment App Development', 'Finance App Development', 'Event Management App Development',
        'Logistics App Development', 'Ride-Sharing App Development', 'Dating App Development', 'Gaming App Development',
        'News App Development', 'Weather App Development', 'Music App Development', 'Video Streaming App Development',
        'Fitness Tracking App Development', 'Wearable App Development'
      ],
      pricing: {
        iOS: { basic: 100000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        Android: { basic: 100000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        'Cross-Platform': { basic: 150000, advanced: 700000, enterprise: 1200000, custom: 2000000 },
        'UI/UX Design': { basic: 50000, advanced: 200000, enterprise: 400000, custom: 600000 },
        Testing: { basic: 30000, advanced: 150000, enterprise: 300000, custom: 500000 },
        'Web App Development': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'Hybrid App Development': { basic: 120000, advanced: 500000, enterprise: 900000, custom: 1400000 },
        'Game Development': { basic: 200000, advanced: 800000, enterprise: 1500000, custom: 2500000 },
        'AR/VR Development': { basic: 300000, advanced: 1000000, enterprise: 2000000, custom: 3000000 },
        'Blockchain App Development': { basic: 250000, advanced: 900000, enterprise: 1800000, custom: 2800000 },
        'IoT App Development': { basic: 200000, advanced: 700000, enterprise: 1500000, custom: 2500000 },
        'AI/ML Integration': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 2000000 },
        'Cloud Integration': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'API Development': { basic: 50000, advanced: 200000, enterprise: 400000, custom: 600000 },
        'Backend Development': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'Frontend Development': { basic: 80000, advanced: 300000, enterprise: 600000, custom: 900000 },
        'Database Management': { basic: 50000, advanced: 200000, enterprise: 400000, custom: 600000 },
        'DevOps Services': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'App Maintenance': { basic: 30000, advanced: 150000, enterprise: 300000, custom: 500000 },
        'App Migration': { basic: 50000, advanced: 200000, enterprise: 400000, custom: 600000 },
        'App Localization': { basic: 40000, advanced: 150000, enterprise: 300000, custom: 500000 },
        'App Security': { basic: 60000, advanced: 250000, enterprise: 500000, custom: 800000 },
        'App Analytics': { basic: 30000, advanced: 120000, enterprise: 250000, custom: 400000 },
        'App Monetization': { basic: 50000, advanced: 200000, enterprise: 400000, custom: 600000 },
        'App Store Optimization': { basic: 40000, advanced: 150000, enterprise: 300000, custom: 500000 },
        'Push Notification Setup': { basic: 20000, advanced: 80000, enterprise: 150000, custom: 250000 },
        'Chatbot Integration': { basic: 50000, advanced: 200000, enterprise: 400000, custom: 600000 },
        'Payment Gateway Integration': { basic: 40000, advanced: 150000, enterprise: 300000, custom: 500000 },
        'Social Media Integration': { basic: 30000, advanced: 120000, enterprise: 250000, custom: 400000 },
        'E-commerce App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 },
        'Fitness App Development': { basic: 120000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        'Healthcare App Development': { basic: 200000, advanced: 800000, enterprise: 1500000, custom: 2500000 },
        'Education App Development': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'Travel App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 },
        'Food Delivery App Development': { basic: 120000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        'On-Demand App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 },
        'Real Estate App Development': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'Social Networking App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 },
        'Entertainment App Development': { basic: 120000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        'Finance App Development': { basic: 200000, advanced: 800000, enterprise: 1500000, custom: 2500000 },
        'Event Management App Development': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'Logistics App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 },
        'Ride-Sharing App Development': { basic: 120000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        'Dating App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 },
        'Gaming App Development': { basic: 200000, advanced: 800000, enterprise: 1500000, custom: 2500000 },
        'News App Development': { basic: 100000, advanced: 400000, enterprise: 800000, custom: 1200000 },
        'Weather App Development': { basic: 80000, advanced: 300000, enterprise: 600000, custom: 900000 },
        'Music App Development': { basic: 120000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        'Video Streaming App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 },
        'Fitness Tracking App Development': { basic: 120000, advanced: 500000, enterprise: 1000000, custom: 1500000 },
        'Wearable App Development': { basic: 150000, advanced: 600000, enterprise: 1200000, custom: 1800000 }
      }
    }
];



const CategoryList = ({ categories, onSelect }) => (
  <div className="category-grid">
    {categories?.map(category => (
      <div key={category.id} className="category-card" onClick={() => onSelect(category)}>
        <h3>{category.name}</h3>
        <p>{category.subServices.length} specialized services</p>
        <div className="service-tags">
          {category.subServices.slice(0, 3).map(service => (
            <span key={service} className="service-tag">{service}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ServiceForm = ({ category, onSubmit }) => {
  const [selectedSubService, setSelectedSubService] = useState('');
  const [details, setDetails] = useState({});
  const [priceOptions, setPriceOptions] = useState([]);
  const [subOptions, setSubOptions] = useState([]);

  useEffect(() => {
    if (selectedSubService) {
      const pricing = category.pricing[selectedSubService];
      
      if (typeof pricing === 'object') {
        if (pricing.perHour) {
          setPriceOptions(Object.entries(pricing.subject || pricing.language || pricing.instrument || pricing.exam));
        } else if (pricing.perPerson) {
          setPriceOptions([]);
        } else {
          setPriceOptions(Object.entries(pricing));
        }
      }
    }
  }, [selectedSubService, category.pricing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      category: category.name,
      subService: selectedSubService,
      details,
      price: calculatePrice()
    });
  };

  const calculatePrice = () => {
    const pricing = category.pricing[selectedSubService];
    
    if (pricing?.perHour) {
      return details.hours * (pricing.perHour + (details.subjectType ? pricing[pricing.subject ? 'subject' : 'language'][details.subjectType] : 0));
    }
    if (pricing?.perPerson) {
      return details.guests * pricing.perPerson;
    }
    if (typeof pricing === 'number') return pricing;
    if (pricing?.base) return pricing.base + (details.area * pricing.perSqFt);
    if (details.priceKey) return pricing[details.priceKey];
    
    return Object.values(pricing)[0];
  };

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <h2>{category.name} Services</h2>
      
      <div className="form-group">
        <label>Select Service Type:</label>
        <select 
          value={selectedSubService}
          onChange={(e) => {
            setSelectedSubService(e.target.value);
            setDetails({});
          }}
          required
        >
          <option value="">Select a service</option>
          {category?.subServices?.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      {selectedSubService && (
        <div className="form-group">
          {category.pricing[selectedSubService]?.perHour ? (
            <>
              <label>Subject/Type:</label>
              <select
                onChange={(e) => setDetails({ ...details, subjectType: e.target.value })}
                required
              >
                {Object.entries(category.pricing[selectedSubService].subject || 
                              category.pricing[selectedSubService].language || 
                              category.pricing[selectedSubService].instrument || 
                              category.pricing[selectedSubService].exam).map(([key]) => (
                  <option key={key} value={key}>{key}</option>
                ))}
              </select>
              <label>Hours Required:</label>
              <input
                type="number"
                min="1"
                required
                onChange={(e) => setDetails({ ...details, hours: parseInt(e.target.value) })}
              />
            </>
          ) : priceOptions.length > 0 ? (
            <>
              <label>Service Variant:</label>
              <select
                onChange={(e) => setDetails({ priceKey: e.target.value })}
                required
              >
                {priceOptions.map(([key, value]) => (
                  <option key={key} value={key}>
                    {key} (₹{value})
                  </option>
                ))}
              </select>
            </>
          ) : category.pricing[selectedSubService]?.perPerson ? (
            <>
              <label>Number of Guests:</label>
              <input
                type="number"
                min="1"
                required
                onChange={(e) => setDetails({ guests: parseInt(e.target.value) })}
              />
            </>
          ) : typeof category.pricing[selectedSubService] === 'object' && 
            category.pricing[selectedSubService].base ? (
            <>
              <label>Area (sq.ft):</label>
              <input
                type="number"
                min="1"
                required
                onChange={(e) => setDetails({ area: parseInt(e.target.value) })}
              />
            </>
          ) : null}
        </div>
      )}

      <button type="submit">Calculate Price</button>
    </form>
  );
};

const PriceDisplay = ({ service }) => (
  <div className="price-display">
    {service && (
      <>
        <h3>Service Details</h3>
        <p>Category: {service.category}</p>
        <p>Service: {service.subService}</p>
        {service.details.area && <p>Area: {service.details.area} sq.ft</p>}
        {service.details.quantity && <p>Quantity: {service.details.quantity}</p>}
        {service.details.guests && <p>Guests: {service.details.guests}</p>}
        {service.details.hours && <p>Hours: {service.details.hours}</p>}
        {service.details.subjectType && <p>Type: {service.details.subjectType}</p>}
        {service.details.priceKey && <p>Variant: {service.details.priceKey}</p>}
        <h4>Total Price: ₹{service.price}</h4>
        <button>Book Now</button>
      </>
    )}
  </div>
);



function Notification() {
  const location = useLocation();
  const data = location.state;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setSelectedCategory(data || null);
  }, [data]);

  return (
    <div className="App">
      <h1>Professional Service Marketplace</h1>
      {!selectedCategory ? (
        <>
          <h2>Explore Service Categories</h2>
          <CategoryList 
            categories={serviceCategories} 
            onSelect={setSelectedCategory} 
          />
        </>
      ) : (
        <>
          <button className="back-button" onClick={() => setSelectedCategory(null)}>
            ← Back to Categories
          </button>
          <ServiceForm 
            category={selectedCategory} 
            onSubmit={setSelectedService} 
          />
          <PriceDisplay service={selectedService} />
        </>
      )}
    </div>
  );
}

export default Notification;