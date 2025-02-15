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
      subServices: [
        'Market Research', 'Academic Research', 'Scientific Research', 'Data Collection', 'Analysis',
        'Competitor Analysis', 'Consumer Behavior Studies', 'Industry Trend Analysis', 'Survey Design', 'Polling Services',
        'Product Research', 'User Experience Research', 'Customer Feedback Analysis', 'Feasibility Studies', 'Brand Research',
        'Advertising Effectiveness Research', 'Demographic Research', 'Political Research', 'Economic Research', 'Financial Market Research',
        'Social Media Analytics', 'Big Data Analysis', 'Business Intelligence', 'Data Mining', 'AI & Machine Learning Research',
        'Healthcare Research', 'Medical Trials Support', 'Pharmaceutical Research', 'Genetic Research', 'Bioinformatics',
        'Environmental Research', 'Climate Change Studies', 'Energy Research', 'Sustainability Research', 'Agricultural Research',
        'Food & Nutrition Research', 'Education Research', 'Policy Research', 'Legal Research', 'Criminal Justice Research',
        'Public Health Research', 'Epidemiological Studies', 'Sports Analytics', 'Cultural Studies', 'Historical Research',
        'Linguistic Research', 'Psychological Research', 'Sociological Research', 'Ethnographic Research', 'Human Rights Research',
        'Space & Astronomical Research', 'Technology Forecasting', 'Patent Research', 'Supply Chain Research', 'Risk Assessment',
        'Security & Cybersecurity Research', 'Defense & Military Studies', 'Media & Journalism Research', 'Blockchain & Cryptocurrency Research'
      ],
      pricing: {
        'Market Research': { basic: 50000, advanced: 200000 },
        'Academic Research': { basic: 30000, advanced: 150000 },
        'Scientific Research': { basic: 100000, advanced: 500000 },
        'Data Collection': { small: 10000, large: 50000 },
        Analysis: { basic: 20000, advanced: 100000 },
        'Competitor Analysis': { small: 50000, fullStudy: 200000 },
        'Consumer Behavior Studies': { perStudy: 75000, comprehensive: 300000 },
        'Industry Trend Analysis': { report: 100000, fullPackage: 500000 },
        'Survey Design': { perSurvey: 20000, fullPackage: 100000 },
        'Polling Services': { perPoll: 15000, nationwideStudy: 500000 },
        'Product Research': { prototypeTesting: 75000, marketLaunchStudy: 300000 },
        'User Experience Research': { perSession: 10000, fullProject: 150000 },
        'Customer Feedback Analysis': { perReport: 20000, annualPlan: 100000 },
        'Feasibility Studies': { perStudy: 75000, largeScale: 500000 },
        'Brand Research': { perAudit: 50000, advancedAnalysis: 200000 },
        'Advertising Effectiveness Research': { perCampaign: 75000, comprehensive: 250000 },
        'Demographic Research': { perReport: 50000, fullScale: 200000 },
        'Political Research': { perPoll: 50000, campaignStrategy: 300000 },
        'Economic Research': { perReport: 100000, fullAnalysis: 500000 },
        'Financial Market Research': { perSector: 75000, globalStudy: 500000 },
        'Social Media Analytics': { perBrand: 30000, enterprise: 150000 },
        'Big Data Analysis': { perDataset: 50000, 'AI-drivenAnalysis': 500000 },
        'Business Intelligence': { consultation: 100000, fullProject: 500000 },
        'Data Mining': { small: 50000, enterprise: 250000 },
        'AI & Machine Learning Research': { modelDevelopment: 150000, fullImplementation: 750000 },
        'Healthcare Research': { perStudy: 75000, largeScale: 500000 },
        'Medical Trials Support': { phase1: 150000, fullTrial: 1000000 },
        'Pharmaceutical Research': { perDrug: 200000, fullPipeline: 1000000 },
        'Genetic Research': { perGenome: 500000, fullStudy: 2000000 },
        'Bioinformatics': { datasetAnalysis: 100000, enterprise: 500000 },
        'Environmental Research': { perProject: 100000, globalStudy: 1000000 },
        'Climate Change Studies': { small: 150000, large: 750000 },
        'Energy Research': { renewableEnergy: 200000, fullProject: 1000000 },
        'Sustainability Research': { perReport: 50000, corporatePlan: 300000 },
        'Agricultural Research': { perStudy: 100000, globalImpact: 500000 },
        'Food & Nutrition Research': { perIngredient: 75000, fullStudy: 500000 },
        'Education Research': { perReport: 50000, nationalStudy: 250000 },
        'Policy Research': { perPolicy: 75000, comprehensive: 500000 },
        'Legal Research': { perCase: 50000, fullStudy: 250000 },
        'Criminal Justice Research': { perStudy: 100000, nationwideAnalysis: 500000 },
        'Public Health Research': { perReport: 100000, pandemicStudy: 1000000 },
        'Epidemiological Studies': { perDisease: 150000, fullDataset: 750000 },
        'Sports Analytics': { perTeam: 50000, leagueAnalysis: 500000 },
        'Cultural Studies': { perRegion: 50000, worldwideStudy: 300000 },
        'Historical Research': { perProject: 75000, fullScale: 500000 },
        'Linguistic Research': { perLanguage: 50000, fullStudy: 300000 },
        'Psychological Research': { perExperiment: 75000, comprehensive: 400000 },
        'Sociological Research': { perStudy: 75000, globalAnalysis: 500000 },
        'Ethnographic Research': { perCommunity: 75000, worldwide: 500000 },
        'Human Rights Research': { perCase: 75000, fullScale: 500000 },
        'Space & Astronomical Research': { perStudy: 150000, fullProject: 1000000 },
        'Technology Forecasting': { perSector: 75000, enterprise: 500000 },
        'Patent Research': { perPatent: 30000, portfolioReview: 150000 },
        'Supply Chain Research': { perReport: 100000, globalAnalysis: 500000 },
        'Risk Assessment': { perIndustry: 100000, fullConsulting: 500000 },
        'Security & Cybersecurity Research': { perAudit: 100000, enterprise: 500000 },
        'Defense & Military Studies': { perReport: 150000, fullScale: 1000000 },
        'Media & Journalism Research': { perStory: 50000, investigativeSeries: 500000 },
        'Blockchain & Cryptocurrency Research': { perProject: 150000, fullImplementation: 750000 }
      }
    },
    {
      id: 44,
      name: 'Publishing Services',
      subServices: [
        'Editing', 'Proofreading', 'Design', 'Printing', 'Distribution',
        'Ghostwriting', 'Copywriting', 'Book Formatting', 'Cover Design', 'Illustration',
        'ISBN Registration', 'Manuscript Evaluation', 'Indexing', 'Translation', 'Transcription',
        'Ebook Conversion', 'Audiobook Production', 'Marketing & Promotion', 'Social Media Campaigns',
        'Author Branding', 'Press Release Writing', 'Website Development for Authors', 'SEO for Authors',
        'Metadata Optimization', 'Beta Reading', 'Sensitivity Reading', 'Fact-Checking', 'Content Licensing',
        'Rights Management', 'Print-on-Demand Services', 'Hardcover & Paperback Printing', 'Custom Bookbinding',
        'Self-Publishing Consultation', 'Traditional Publishing Assistance', 'Hybrid Publishing Services',
        'Journal & Magazine Publishing', 'Scientific Publishing', 'Technical Writing', 'Grant Writing',
        'Resume & CV Writing', 'Proposal Writing', 'Speech Writing', 'Blog & Article Writing',
        'White Paper Development', 'Case Study Writing', 'Email Newsletter Writing', 'Corporate Publishing',
        'Educational Publishing', 'Textbook Publishing', 'Children’s Book Publishing', 'Poetry & Fiction Publishing',
        'Comic & Graphic Novel Publishing', 'Interactive Digital Publishing', 'Subscription-Based Publishing'
      ],
      pricing: {
        Editing: { perPage: 500, file: 10000 },
        Proofreading: { perPage: 300, file: 5000 },
        Design: { basic: 10000, premium: 50000 },
        Printing: { small: 5000, large: 20000 },
        Distribution: { local: 10000, national: 50000 },
        Ghostwriting: { perWord: 5, bookProject: 500000 },
        Copywriting: { perArticle: 5000, campaign: 50000 },
        'Book Formatting': { ebook: 5000, print: 10000 },
        'Cover Design': { basic: 5000, premium: 25000 },
        Illustration: { perIllustration: 3000, fullBook: 100000 },
        'ISBN Registration': { standard: 5000, expedited: 10000 },
        'Manuscript Evaluation': { basic: 5000, detailed: 20000 },
        Indexing: { perPage: 200, fullBook: 20000 },
        Translation: { perWord: 2, fullBook: 150000 },
        Transcription: { perMinute: 50, perHour: 3000 },
        'Ebook Conversion': { standard: 5000, advanced: 15000 },
        'Audiobook Production': { perHour: 50000, fullBook: 300000 },
        'Marketing & Promotion': { campaign: 50000, premiumCampaign: 200000 },
        'Social Media Campaigns': { perPlatform: 15000, fullCampaign: 100000 },
        'Author Branding': { consultation: 10000, package: 50000 },
        'Press Release Writing': { single: 5000, package: 25000 },
        'Website Development for Authors': { basic: 20000, advanced: 100000 },
        'SEO for Authors': { perBook: 10000, fullBrand: 50000 },
        'Metadata Optimization': { perBook: 5000, series: 20000 },
        'Beta Reading': { perBook: 5000, detailedFeedback: 20000 },
        'Sensitivity Reading': { perBook: 5000, detailedFeedback: 20000 },
        'Fact-Checking': { perArticle: 3000, fullBook: 50000 },
        'Content Licensing': { perLicense: 10000, fullRights: 100000 },
        'Rights Management': { consultation: 10000, fullSupport: 50000 },
        'Print-on-Demand Services': { setup: 10000, perBook: 300 },
        'Hardcover & Paperback Printing': { perCopy: 200, bulkOrder: 50000 },
        'Custom Bookbinding': { perBook: 5000, luxuryEdition: 30000 },
        'Self-Publishing Consultation': { session: 5000, fullSupport: 50000 },
        'Traditional Publishing Assistance': { queryPackage: 10000, fullSupport: 50000 },
        'Hybrid Publishing Services': { perBook: 50000, fullPackage: 200000 },
        'Journal & Magazine Publishing': { perIssue: 20000, annualPlan: 100000 },
        'Scientific Publishing': { perPaper: 50000, fullJournal: 500000 },
        'Technical Writing': { perPage: 5000, fullManual: 200000 },
        'Grant Writing': { perProposal: 10000, fullProject: 50000 },
        'Resume & CV Writing': { standard: 5000, executive: 20000 },
        'Proposal Writing': { perProposal: 5000, detailed: 30000 },
        'Speech Writing': { perSpeech: 10000, series: 50000 },
        'Blog & Article Writing': { perArticle: 5000, monthlyPlan: 50000 },
        'White Paper Development': { perDocument: 20000, premium: 100000 },
        'Case Study Writing': { perStudy: 15000, fullPackage: 50000 },
        'Email Newsletter Writing': { perEmail: 5000, monthlyPlan: 30000 },
        'Corporate Publishing': { perReport: 30000, annualPlan: 200000 },
        'Educational Publishing': { perModule: 50000, fullCourse: 300000 },
        'Textbook Publishing': { perBook: 100000, fullSeries: 500000 },
        'Children’s Book Publishing': { perBook: 50000, premium: 200000 },
        'Poetry & Fiction Publishing': { perBook: 30000, fullSeries: 150000 },
        'Comic & Graphic Novel Publishing': { perIssue: 50000, fullSeries: 300000 },
        'Interactive Digital Publishing': { perProject: 100000, enterprise: 500000 },
        'Subscription-Based Publishing': { monthly: 5000, yearly: 50000 }
      }
    },
    {
      id: 45,
      name: 'Social Services',
      subServices: [
        'Counseling', 'Child Care', 'Elder Care', 'Disability Support', 'Community Development',
        'Mental Health Support', 'Substance Abuse Recovery', 'Crisis Intervention', 'Family Counseling',
        'Marriage Counseling', 'Grief Support', 'Youth Mentoring', 'Adoption Services', 'Foster Care Support',
        'Domestic Violence Support', 'Legal Aid Assistance', 'Employment Assistance', 'Financial Literacy Training',
        'Housing Assistance', 'Food Distribution', 'Disaster Relief', 'Refugee Support', 'Senior Citizen Programs',
        'Volunteer Training', 'Rehabilitation Services', 'Suicide Prevention', 'LGBTQ+ Support', 'Social Work Training',
        'Support Groups', 'Parenting Classes', 'Educational Workshops', 'Job Placement Programs', 'Re-entry Programs',
        'Disaster Preparedness Training', 'Community Outreach', 'Advocacy & Policy Support', 'Healthcare Access Assistance',
        'Homeless Shelter Services', 'Women’s Empowerment Programs', 'Anti-Human Trafficking Initiatives',
        'Civic Engagement Training', 'Youth Leadership Programs', 'Environmental Awareness Programs',
        'Microfinance & Small Business Support', 'Financial Aid Guidance', 'Veteran Support Services',
        'Cultural Integration Programs', 'Life Skills Coaching', 'Elderly Wellness Programs', 'Transportation Assistance',
        'Child Protection Services', 'Healthcare for Underprivileged', 'Mental Health Awareness Campaigns'
      ],
      pricing: {
        Counseling: { session: 2000, package: 15000 },
        'Child Care': { hourly: 500, monthly: 10000 },
        'Elder Care': { hourly: 1000, monthly: 20000 },
        'Disability Support': { hourly: 1500, monthly: 25000 },
        'Community Development': { basic: 50000, advanced: 200000 },
        'Mental Health Support': { session: 2500, package: 18000 },
        'Substance Abuse Recovery': { session: 3000, program: 50000 },
        'Crisis Intervention': { perCase: 5000 },
        'Family Counseling': { session: 3000, package: 20000 },
        'Marriage Counseling': { session: 4000, package: 25000 },
        'Grief Support': { session: 2500, package: 15000 },
        'Youth Mentoring': { perSession: 1500, monthly: 10000 },
        'Adoption Services': { consultation: 5000, fullSupport: 50000 },
        'Foster Care Support': { perChild: 10000, yearly: 100000 },
        'Domestic Violence Support': { perCase: 3000, shelterSupport: 20000 },
        'Legal Aid Assistance': { consultation: 5000, caseSupport: 50000 },
        'Employment Assistance': { session: 2000, program: 25000 },
        'Financial Literacy Training': { session: 1500, package: 10000 },
        'Housing Assistance': { consultation: 5000, relocationSupport: 50000 },
        'Food Distribution': { meal: 100, monthlyPlan: 5000 },
        'Disaster Relief': { emergency: 10000, fullRehabilitation: 100000 },
        'Refugee Support': { perPerson: 5000, settlementProgram: 50000 },
        'Senior Citizen Programs': { session: 3000, annualPlan: 25000 },
        'Volunteer Training': { session: 2000, certification: 15000 },
        'Rehabilitation Services': { program: 25000, fullTreatment: 100000 },
        'Suicide Prevention': { session: 3000, crisisHotline: 5000 },
        'LGBTQ+ Support': { session: 2000, advocacyProgram: 15000 },
        'Social Work Training': { course: 5000, certification: 30000 },
        'Support Groups': { session: 1000, membership: 8000 },
        'Parenting Classes': { session: 2000, package: 15000 },
        'Educational Workshops': { perSession: 3000, fullCourse: 25000 },
        'Job Placement Programs': { consultation: 5000, program: 50000 },
        'Re-entry Programs': { perParticipant: 5000, fullPlan: 50000 },
        'Disaster Preparedness Training': { session: 4000, fullCourse: 30000 },
        'Community Outreach': { smallEvent: 5000, largeEvent: 50000 },
        'Advocacy & Policy Support': { campaign: 10000, fullSupport: 100000 },
        'Healthcare Access Assistance': { consultation: 2000, fullSupport: 20000 },
        'Homeless Shelter Services': { perPerson: 5000, fullCare: 50000 },
        'Women’s Empowerment Programs': { workshop: 5000, annualPlan: 50000 },
        'Anti-Human Trafficking Initiatives': { caseSupport: 10000, fullProgram: 100000 },
        'Civic Engagement Training': { perSession: 4000, fullCourse: 30000 },
        'Youth Leadership Programs': { perSession: 5000, annualPlan: 50000 },
        'Environmental Awareness Programs': { workshop: 3000, campaign: 25000 },
        'Microfinance & Small Business Support': { perConsultation: 5000, fundingSupport: 50000 },
        'Financial Aid Guidance': { session: 2000, fullProgram: 20000 },
        'Veteran Support Services': { session: 3000, fullSupport: 50000 },
        'Cultural Integration Programs': { workshop: 4000, fullProgram: 30000 },
        'Life Skills Coaching': { session: 2000, package: 15000 },
        'Elderly Wellness Programs': { session: 3000, fullPlan: 20000 },
        'Transportation Assistance': { perTrip: 1000, monthlyPlan: 10000 },
        'Child Protection Services': { perCase: 5000, fullSupport: 50000 },
        'Healthcare for Underprivileged': { perConsultation: 2000, fullTreatment: 30000 },
        'Mental Health Awareness Campaigns': { event: 5000, fullProgram: 50000 }
      }
    },
    {
      id: 46,
      name: 'Veterinary Services',
      subServices: [
        'General Checkup', 'Surgery', 'Dental Care', 'Vaccination', 'Emergency Care',
        'Pet Grooming', 'Spaying & Neutering', 'Microchipping', 'Deworming', 'X-Rays & Imaging',
        'Blood Tests & Lab Work', 'Ultrasound', 'Euthanasia & Cremation', 'Pet Boarding', 
        'Nutritional Counseling', 'Orthopedic Surgery', 'Physical Therapy', 'Behavioral Training', 
        'Parasite Control', 'Flea & Tick Prevention', 'Heartworm Treatment', 'Dermatology Care',
        'Allergy Testing', 'Gastrointestinal Treatment', 'Senior Pet Care', 'Puppy & Kitten Care',
        'Breeding Consultation', 'Artificial Insemination', 'Cardiology Services', 'Ophthalmology Care',
        'Neurology Services', 'Oncology (Cancer Treatment)', 'Endocrinology (Diabetes, Thyroid, etc.)',
        'Holistic Veterinary Care', 'Chiropractic Services', 'Acupuncture for Pets', 'Rehabilitation Therapy',
        'Emergency Surgery', '24/7 Critical Care', 'Exotic Pet Care', 'Farm Animal Veterinary Services',
        'Livestock Health Management', 'Equine Veterinary Services', 'Pet Travel Certificates', 
        'Pet Insurance Consultation', 'Home Veterinary Visits', 'Telemedicine Consultations',
        'Pain Management', 'Post-Operative Care', 'Wound Management', 'Hydrotherapy',
        'Pet Hospice & Palliative Care', 'Avian Veterinary Services', 'Reptile & Amphibian Care'
      ],
      pricing: {
        'General Checkup': { basic: 1000, comprehensive: 5000 },
        Surgery: { minor: 5000, major: 20000 },
        'Dental Care': { cleaning: 2000, extraction: 5000 },
        Vaccination: { basic: 1000, package: 5000 },
        'Emergency Care': { basic: 5000, critical: 20000 },
        'Pet Grooming': { basic: 2000, fullService: 7000 },
        'Spaying & Neutering': { cat: 5000, dog: 8000 },
        Microchipping: { perPet: 2000 },
        Deworming: { perSession: 1000 },
        'X-Rays & Imaging': { basic: 3000, fullBody: 8000 },
        'Blood Tests & Lab Work': { standard: 3000, advanced: 10000 },
        Ultrasound: { perSession: 5000 },
        'Euthanasia & Cremation': { standard: 10000, premium: 30000 },
        'Pet Boarding': { perDay: 2000, perMonth: 50000 },
        'Nutritional Counseling': { session: 1500, package: 8000 },
        'Orthopedic Surgery': { minor: 15000, major: 50000 },
        'Physical Therapy': { perSession: 3000, package: 25000 },
        'Behavioral Training': { perSession: 2000, package: 15000 },
        'Parasite Control': { perTreatment: 3000 },
        'Flea & Tick Prevention': { perApplication: 2000, package: 10000 },
        'Heartworm Treatment': { basic: 5000, advanced: 20000 },
        'Dermatology Care': { consultation: 2000, treatment: 10000 },
        'Allergy Testing': { basic: 5000, fullPanel: 20000 },
        'Gastrointestinal Treatment': { consultation: 2000, fullTreatment: 10000 },
        'Senior Pet Care': { consultation: 3000, fullPackage: 15000 },
        'Puppy & Kitten Care': { basic: 3000, premium: 15000 },
        'Breeding Consultation': { perSession: 5000 },
        'Artificial Insemination': { procedure: 15000 },
        'Cardiology Services': { consultation: 5000, fullTreatment: 30000 },
        'Ophthalmology Care': { consultation: 4000, surgery: 25000 },
        'Neurology Services': { consultation: 8000, surgery: 50000 },
        'Oncology (Cancer Treatment)': { consultation: 10000, fullTreatment: 100000 },
        'Endocrinology (Diabetes, Thyroid, etc.)': { consultation: 5000, treatment: 30000 },
        'Holistic Veterinary Care': { session: 4000, package: 20000 },
        'Chiropractic Services': { perSession: 5000 },
        'Acupuncture for Pets': { perSession: 4000, package: 25000 },
        'Rehabilitation Therapy': { perSession: 3000, package: 25000 },
        'Emergency Surgery': { minor: 20000, major: 80000 },
        '24/7 Critical Care': { perDay: 10000 },
        'Exotic Pet Care': { consultation: 5000, fullTreatment: 25000 },
        'Farm Animal Veterinary Services': { consultation: 10000, herdManagement: 50000 },
        'Livestock Health Management': { perAnimal: 5000, fullHerd: 100000 },
        'Equine Veterinary Services': { consultation: 10000, surgery: 80000 },
        'Pet Travel Certificates': { basic: 3000, international: 10000 },
        'Pet Insurance Consultation': { session: 2000 },
        'Home Veterinary Visits': { basic: 5000, emergency: 20000 },
        'Telemedicine Consultations': { perCall: 2000, subscription: 10000 },
        'Pain Management': { perSession: 3000, package: 20000 },
        'Post-Operative Care': { perDay: 5000, package: 30000 },
        'Wound Management': { minor: 3000, major: 15000 },
        Hydrotherapy: { perSession: 4000, package: 25000 },
        'Pet Hospice & Palliative Care': { perWeek: 15000, perMonth: 50000 },
        'Avian Veterinary Services': { consultation: 4000, fullTreatment: 20000 },
        'Reptile & Amphibian Care': { consultation: 5000, surgery: 30000 }
      }
    },
    {
      id: 47,
      name: 'Wedding Services',
      subServices: [
        'Venue Booking', 'Catering', 'Photography', 'Decor', 'Entertainment',
        'Wedding Planning', 'Invitation Design', 'Guest Management', 'Bridal Makeup',
        'Groom Styling', 'Bridal Attire', 'Groom Attire', 'Floral Arrangements',
        'Event Coordination', 'Rehearsal Dinner Planning', 'Pre-Wedding Photoshoot',
        'Post-Wedding Shoot', 'Engagement Party Planning', 'Bachelor Party Planning',
        'Bachelorette Party Planning', 'Wedding Cake', 'DJ & Music', 'Live Band',
        'Sound & Lighting', 'Traditional Ritual Management', 'Destination Weddings',
        'Themed Weddings', 'Luxury Weddings', 'Eco-Friendly Weddings',
        'Cultural Wedding Specialists', 'Dance Choreography', 'Transportation Services',
        'Luxury Car Rentals', 'Horse & Carriage', 'Drone Photography', 'Fireworks Display',
        'Live Streaming Services', 'Wedding Website Development', 'Guest Gift Planning',
        'Honeymoon Planning', 'Marriage Registration Assistance', 'Pre-Marriage Counseling',
        'After-Wedding Cleanup', 'VIP Guest Hospitality', 'Security Services',
        'Customized Wedding Favors', 'Personalized Decorations', 'Table Setting & Cutlery Arrangements',
        'Mehendi (Henna) Services', 'Sangeet & Musical Night', 'Cocktail Party Planning',
        'Wedding Budget Management', 'Bridal Shower Planning', 'Groom’s Men Coordination'
      ],
      pricing: {
        'Venue Booking': { small: 50000, large: 200000 },
        Catering: { perPerson: 500, minOrder: 10000 },
        Photography: { halfDay: 10000, fullDay: 30000 },
        Decor: { basic: 20000, premium: 100000 },
        Entertainment: { basic: 30000, premium: 150000 },
        'Wedding Planning': { basic: 50000, fullService: 300000 },
        'Invitation Design': { digital: 5000, print: 15000 },
        'Guest Management': { perGuest: 200, package: 20000 },
        'Bridal Makeup': { basic: 15000, premium: 50000 },
        'Groom Styling': { basic: 10000, premium: 40000 },
        'Bridal Attire': { rent: 30000, custom: 150000 },
        'Groom Attire': { rent: 20000, custom: 80000 },
        'Floral Arrangements': { small: 10000, premium: 50000 },
        'Event Coordination': { perDay: 25000, fullEvent: 150000 },
        'Rehearsal Dinner Planning': { basic: 30000, premium: 100000 },
        'Pre-Wedding Photoshoot': { session: 15000, package: 50000 },
        'Post-Wedding Shoot': { session: 20000, package: 60000 },
        'Engagement Party Planning': { basic: 50000, luxury: 200000 },
        'Bachelor Party Planning': { basic: 30000, premium: 100000 },
        'Bachelorette Party Planning': { basic: 30000, premium: 100000 },
        'Wedding Cake': { singleTier: 5000, multiTier: 50000 },
        'DJ & Music': { hourly: 15000, fullEvent: 80000 },
        'Live Band': { hourly: 30000, fullEvent: 150000 },
        'Sound & Lighting': { basic: 25000, premium: 100000 },
        'Traditional Ritual Management': { perEvent: 20000, fullPackage: 100000 },
        'Destination Weddings': { basic: 200000, luxury: 1000000 },
        'Themed Weddings': { standard: 50000, premium: 300000 },
        'Luxury Weddings': { perPackage: 500000, premium: 2000000 },
        'Eco-Friendly Weddings': { standard: 50000, premium: 200000 },
        'Cultural Wedding Specialists': { perEvent: 25000, fullService: 120000 },
        'Dance Choreography': { perDance: 5000, fullEvent: 50000 },
        'Transportation Services': { perCar: 10000, fullPackage: 50000 },
        'Luxury Car Rentals': { perDay: 30000, premium: 100000 },
        'Horse & Carriage': { perEvent: 50000, luxury: 200000 },
        'Drone Photography': { perHour: 10000, fullDay: 50000 },
        'Fireworks Display': { basic: 50000, premium: 200000 },
        'Live Streaming Services': { perHour: 5000, fullEvent: 30000 },
        'Wedding Website Development': { basic: 10000, custom: 50000 },
        'Guest Gift Planning': { perGift: 500, premium: 5000 },
        'Honeymoon Planning': { domestic: 50000, international: 300000 },
        'Marriage Registration Assistance': { basic: 10000, fullService: 50000 },
        'Pre-Marriage Counseling': { session: 5000, package: 20000 },
        'After-Wedding Cleanup': { basic: 20000, premium: 80000 },
        'VIP Guest Hospitality': { perGuest: 5000, package: 50000 },
        'Security Services': { perGuard: 10000, fullService: 50000 },
        'Customized Wedding Favors': { perItem: 500, premium: 5000 },
        'Personalized Decorations': { basic: 15000, premium: 100000 },
        'Table Setting & Cutlery Arrangements': { standard: 20000, luxury: 80000 },
        'Mehendi (Henna) Services': { perHand: 2000, bridal: 20000 },
        'Sangeet & Musical Night': { standard: 50000, luxury: 200000 },
        'Cocktail Party Planning': { basic: 50000, premium: 150000 },
        'Wedding Budget Management': { consultation: 10000, fullService: 50000 },
        'Bridal Shower Planning': { basic: 30000, premium: 100000 },
        'Groom’s Men Coordination': { perPerson: 5000, package: 50000 }
      }
    },
    {
      id: 48,
      name: 'Yoga Services',
      subServices: [
        'Group Classes', 'Private Sessions', 'Retreats', 'Teacher Training', 'Online Classes',
        'Prenatal Yoga', 'Postnatal Yoga', 'Kids Yoga', 'Senior Yoga', 'Corporate Yoga',
        'Therapeutic Yoga', 'Meditation Classes', 'Breathwork (Pranayama)', 'Yoga for Stress Relief',
        'Yoga for Weight Loss', 'Yoga for Back Pain', 'Power Yoga', 'Hatha Yoga', 'Vinyasa Yoga',
        'Ashtanga Yoga', 'Kundalini Yoga', 'Bikram Yoga', 'Restorative Yoga', 'Yin Yoga',
        'Chair Yoga', 'Yoga for Athletes', 'Yoga for Beginners', 'Yoga for Advanced Practitioners',
        'Chakra Balancing Yoga', 'Yoga for Mental Health', 'Yoga Nidra', 'Yoga for Office Workers',
        'Aerial Yoga', 'Hot Yoga', 'Ayurvedic Yoga', 'Sound Healing Yoga', 'Shamanic Yoga',
        'Mantra Chanting', 'Yoga Philosophy Workshops', 'Yoga Anatomy Classes', 'Yoga Business Coaching',
        'Yoga Retreats in Nature', 'Luxury Yoga Retreats', 'Yoga and Detox Retreats',
        'Silent Meditation Retreats', 'Yoga and Hiking Retreats', 'Yoga and Surf Retreats',
        'Weekend Yoga Getaways', 'International Yoga Retreats', 'Yoga Teacher Mentorship Programs',
        'Online Yoga Teacher Certification', 'Yoga Equipment Rental', 'Yoga Studio Space Rental'
      ],
      pricing: {
        'Group Classes': { dropIn: 500, monthly: 4000 },
        'Private Sessions': { hourly: 2000, package: 15000 },
        Retreats: { weekend: 20000, weeklong: 50000 },
        'Teacher Training': { basic: 30000, advanced: 100000 },
        'Online Classes': { monthly: 2000, yearly: 20000 },
        'Prenatal Yoga': { dropIn: 700, monthly: 5000 },
        'Postnatal Yoga': { dropIn: 700, monthly: 5000 },
        'Kids Yoga': { dropIn: 500, monthly: 4000 },
        'Senior Yoga': { dropIn: 500, monthly: 4000 },
        'Corporate Yoga': { perSession: 5000, monthly: 20000 },
        'Therapeutic Yoga': { session: 2500, package: 20000 },
        'Meditation Classes': { dropIn: 300, monthly: 2500 },
        'Breathwork (Pranayama)': { session: 500, course: 5000 },
        'Yoga for Stress Relief': { session: 800, monthly: 6000 },
        'Yoga for Weight Loss': { session: 1000, package: 8000 },
        'Yoga for Back Pain': { session: 1200, package: 10000 },
        'Power Yoga': { session: 1000, package: 8000 },
        'Hatha Yoga': { session: 900, package: 7500 },
        'Vinyasa Yoga': { session: 1000, package: 8500 },
        'Ashtanga Yoga': { session: 1200, package: 10000 },
        'Kundalini Yoga': { session: 1500, package: 12000 },
        'Bikram Yoga': { session: 1300, package: 11000 },
        'Restorative Yoga': { session: 800, package: 6500 },
        'Yin Yoga': { session: 700, package: 6000 },
        'Chair Yoga': { session: 600, monthly: 4500 },
        'Yoga for Athletes': { session: 1500, package: 12000 },
        'Yoga for Beginners': { session: 500, package: 4000 },
        'Yoga for Advanced Practitioners': { session: 1500, package: 12000 },
        'Chakra Balancing Yoga': { session: 2000, package: 15000 },
        'Yoga for Mental Health': { session: 1200, package: 9000 },
        'Yoga Nidra': { session: 1000, package: 7500 },
        'Yoga for Office Workers': { session: 1500, package: 10000 },
        'Aerial Yoga': { session: 2500, package: 20000 },
        'Hot Yoga': { session: 2000, package: 15000 },
        'Ayurvedic Yoga': { session: 1800, package: 14000 },
        'Sound Healing Yoga': { session: 2500, package: 18000 },
        'Shamanic Yoga': { session: 3000, package: 25000 },
        'Mantra Chanting': { session: 700, package: 5000 },
        'Yoga Philosophy Workshops': { session: 2000, course: 10000 },
        'Yoga Anatomy Classes': { session: 2500, course: 12000 },
        'Yoga Business Coaching': { session: 5000, program: 50000 },
        'Yoga Retreats in Nature': { perRetreat: 30000, premium: 80000 },
        'Luxury Yoga Retreats': { perRetreat: 50000, premium: 120000 },
        'Yoga and Detox Retreats': { perRetreat: 40000, premium: 90000 },
        'Silent Meditation Retreats': { perRetreat: 35000, premium: 80000 },
        'Yoga and Hiking Retreats': { perRetreat: 30000, premium: 75000 },
        'Yoga and Surf Retreats': { perRetreat: 40000, premium: 95000 },
        'Weekend Yoga Getaways': { perRetreat: 25000, premium: 70000 },
        'International Yoga Retreats': { perRetreat: 70000, premium: 150000 },
        'Yoga Teacher Mentorship Programs': { perMonth: 15000, fullProgram: 70000 },
        'Online Yoga Teacher Certification': { basic: 50000, advanced: 150000 },
        'Yoga Equipment Rental': { perSession: 500, monthly: 3000 },
        'Yoga Studio Space Rental': { hourly: 1000, monthly: 20000 }
      }
    },
    {
      id: 49,
      name: 'Zoo Services',
      subServices: [
        'Animal Care', 'Educational Tours', 'Conservation Programs', 'Events', 'Adoption',
        'Veterinary Services', 'Wildlife Rehabilitation', 'Animal Training', 'Zoo Memberships', 
        'Animal Encounters', 'Guided Safari Tours', 'Bird Watching', 'Petting Zoo', 
        'School Field Trips', 'Photography Sessions', 'Zoo Sleepovers', 'Private Zoo Tours', 
        'Corporate Zoo Events', 'Birthday Parties at the Zoo', 'Summer Camps', 
        'Volunteer Programs', 'Research Programs', 'Animal Rescue', 'Zoo Maintenance', 
        'Habitat Design & Construction', 'Animal Diet Planning', 'Endangered Species Breeding', 
        'Dinosaur Exhibits', 'Marine Life Exhibits', 'Reptile Shows', 'Insectarium Tours', 
        'Aquarium Management', 'Butterfly Garden Tours', 'Zoo Gift Shops', 'Themed Zoo Nights', 
        'Nocturnal Animal Tours', 'Behind-the-Scenes Experiences', 'Virtual Zoo Tours', 
        'Wildlife Documentaries', 'Zoo Sponsorships', 'Adopt-an-Animal Programs', 
        'Zoo Souvenirs & Merchandise', 'Animal Therapy Programs', 'Interactive Learning Centers', 
        'Eco-Tourism Initiatives', 'Wildlife Research Grants', 'Zoo Weddings', 
        'Habitat Restoration Programs', 'Animal Keeper Experiences', 'Junior Zookeeper Programs',
        'Sustainable Zoo Initiatives', 'Zoo Campfires', 'Special Needs Accessible Tours'
      ],
      pricing: {
        'Animal Care': { basic: 5000, premium: 20000 },
        'Educational Tours': { small: 1000, large: 5000 },
        'Conservation Programs': { basic: 10000, premium: 50000 },
        Events: { small: 5000, large: 20000 },
        Adoption: { small: 10000, large: 50000 },
        'Veterinary Services': { basic: 5000, advanced: 25000 },
        'Wildlife Rehabilitation': { small: 15000, large: 60000 },
        'Animal Training': { session: 3000, package: 20000 },
        'Zoo Memberships': { monthly: 2000, yearly: 15000 },
        'Animal Encounters': { perEncounter: 5000, premium: 20000 },
        'Guided Safari Tours': { perPerson: 2000, group: 15000 },
        'Bird Watching': { session: 1000, fullDay: 5000 },
        'Petting Zoo': { perPerson: 500, group: 4000 },
        'School Field Trips': { perStudent: 800, minGroup: 10000 },
        'Photography Sessions': { session: 3000, premium: 15000 },
        'Zoo Sleepovers': { perPerson: 5000, familyPackage: 20000 },
        'Private Zoo Tours': { perGroup: 10000, VIP: 50000 },
        'Corporate Zoo Events': { basic: 50000, premium: 200000 },
        'Birthday Parties at the Zoo': { small: 15000, large: 50000 },
        'Summer Camps': { perWeek: 25000, fullSummer: 120000 },
        'Volunteer Programs': { registration: 2000, fullTerm: 15000 },
        'Research Programs': { perProject: 50000, large: 200000 },
        'Animal Rescue': { emergency: 10000, rehabilitation: 50000 },
        'Zoo Maintenance': { small: 20000, large: 100000 },
        'Habitat Design & Construction': { small: 50000, large: 300000 },
        'Animal Diet Planning': { session: 3000, premium: 20000 },
        'Endangered Species Breeding': { perAnimal: 50000, program: 300000 },
        'Dinosaur Exhibits': { basic: 30000, large: 100000 },
        'Marine Life Exhibits': { small: 25000, large: 150000 },
        'Reptile Shows': { session: 5000, fullDay: 20000 },
        'Insectarium Tours': { small: 2000, large: 8000 },
        'Aquarium Management': { basic: 50000, premium: 200000 },
        'Butterfly Garden Tours': { session: 2000, fullDay: 8000 },
        'Zoo Gift Shops': { basic: 500, premium: 5000 },
        'Themed Zoo Nights': { ticket: 3000, VIP: 15000 },
        'Nocturnal Animal Tours': { perPerson: 5000, group: 25000 },
        'Behind-the-Scenes Experiences': { perPerson: 7000, VIP: 30000 },
        'Virtual Zoo Tours': { session: 1000, annualPass: 10000 },
        'Wildlife Documentaries': { small: 50000, fullFeature: 200000 },
        'Zoo Sponsorships': { small: 10000, corporate: 500000 },
        'Adopt-an-Animal Programs': { basic: 5000, premium: 20000 },
        'Zoo Souvenirs & Merchandise': { basic: 200, premium: 5000 },
        'Animal Therapy Programs': { session: 5000, monthly: 20000 },
        'Interactive Learning Centers': { perStudent: 500, annual: 15000 },
        'Eco-Tourism Initiatives': { perPerson: 10000, corporate: 500000 },
        'Wildlife Research Grants': { small: 50000, large: 300000 },
        'Zoo Weddings': { small: 100000, large: 500000 },
        'Habitat Restoration Programs': { perProject: 50000, large: 300000 },
        'Animal Keeper Experiences': { perSession: 10000, fullProgram: 80000 },
        'Junior Zookeeper Programs': { perWeek: 20000, fullSummer: 100000 },
        'Sustainable Zoo Initiatives': { small: 20000, large: 100000 },
        'Zoo Campfires': { perPerson: 3000, group: 15000 },
        'Special Needs Accessible Tours': { perPerson: 500, VIP: 5000 }
      }
    },
    {
      id: 50,
      name: 'Event Planning',
      subServices: [
        'Weddings', 'Corporate Events', 'Birthdays', 'Conferences', 'Festivals',
        'Anniversaries', 'Engagement Parties', 'Baby Showers', 'Bridal Showers',
        'Graduation Parties', 'Housewarming Events', 'Retirement Parties',
        'Fundraisers', 'Charity Galas', 'Award Ceremonies', 'Fashion Shows',
        'Product Launches', 'Trade Shows', 'Networking Events', 'Exhibitions',
        'Concerts', 'Live Shows', 'Sporting Events', 'Marathons',
        'Music Festivals', 'Film Festivals', 'Food Festivals', 'Cultural Events',
        'Workshops', 'Seminars', 'Panel Discussions', 'Political Rallies',
        'Religious Gatherings', 'Holiday Parties', 'New Year’s Eve Events',
        'Halloween Parties', 'Christmas Parties', 'Easter Events', 'Themed Parties',
        'Bachelor Parties', 'Bachelorette Parties', 'Destination Weddings',
        'Surprise Parties', 'Pop-up Events', 'Flash Mobs', 'School Reunions',
        'Corporate Retreats', 'Team Building Events', 'VIP Events', 
        'Influencer Events', 'Press Conferences', 'Grand Openings',
        'Community Gatherings', 'Public Relations Events', 'Meetups'
      ],
      pricing: {
        Weddings: { basic: 50000, premium: 200000 },
        'Corporate Events': { small: 30000, large: 150000 },
        Birthdays: { kids: 15000, adults: 30000 },
        Conferences: { small: 50000, large: 200000 },
        Festivals: { small: 100000, large: 500000 },
        Anniversaries: { small: 25000, large: 80000 },
        'Engagement Parties': { small: 40000, large: 120000 },
        'Baby Showers': { small: 20000, large: 50000 },
        'Bridal Showers': { small: 25000, large: 60000 },
        'Graduation Parties': { small: 30000, large: 100000 },
        'Housewarming Events': { small: 20000, large: 50000 },
        'Retirement Parties': { small: 30000, large: 100000 },
        Fundraisers: { small: 50000, large: 300000 },
        'Charity Galas': { small: 80000, large: 400000 },
        'Award Ceremonies': { small: 75000, large: 350000 },
        'Fashion Shows': { small: 100000, large: 500000 },
        'Product Launches': { small: 80000, large: 400000 },
        'Trade Shows': { small: 120000, large: 600000 },
        'Networking Events': { small: 25000, large: 100000 },
        Exhibitions: { small: 70000, large: 350000 },
        Concerts: { small: 150000, large: 700000 },
        'Live Shows': { small: 100000, large: 500000 },
        'Sporting Events': { small: 120000, large: 600000 },
        Marathons: { small: 100000, large: 500000 },
        'Music Festivals': { small: 150000, large: 700000 },
        'Film Festivals': { small: 120000, large: 600000 },
        'Food Festivals': { small: 100000, large: 500000 },
        'Cultural Events': { small: 80000, large: 400000 },
        Workshops: { small: 30000, large: 150000 },
        Seminars: { small: 25000, large: 100000 },
        'Panel Discussions': { small: 30000, large: 120000 },
        'Political Rallies': { small: 75000, large: 350000 },
        'Religious Gatherings': { small: 50000, large: 200000 },
        'Holiday Parties': { small: 40000, large: 150000 },
        'New Year’s Eve Events': { small: 80000, large: 400000 },
        'Halloween Parties': { small: 30000, large: 120000 },
        'Christmas Parties': { small: 40000, large: 150000 },
        'Easter Events': { small: 30000, large: 100000 },
        'Themed Parties': { small: 30000, large: 120000 },
        'Bachelor Parties': { small: 25000, large: 80000 },
        'Bachelorette Parties': { small: 25000, large: 80000 },
        'Destination Weddings': { small: 200000, large: 1000000 },
        'Surprise Parties': { small: 20000, large: 70000 },
        'Pop-up Events': { small: 50000, large: 200000 },
        'Flash Mobs': { small: 30000, large: 100000 },
        'School Reunions': { small: 50000, large: 200000 },
        'Corporate Retreats': { small: 60000, large: 300000 },
        'Team Building Events': { small: 50000, large: 200000 },
        'VIP Events': { small: 100000, large: 500000 },
        'Influencer Events': { small: 80000, large: 350000 },
        'Press Conferences': { small: 50000, large: 200000 },
        'Grand Openings': { small: 75000, large: 300000 },
        'Community Gatherings': { small: 30000, large: 120000 },
        'Public Relations Events': { small: 40000, large: 150000 },
        Meetups: { small: 20000, large: 80000 }
      }
    }
    ,
    {
      id: 51,
      name: 'Catering Services',
      subServices: [
        'Weddings', 'Corporate Events', 'Parties', 'Buffets', 'Custom Menus',
        'Birthday Parties', 'Anniversaries', 'Graduation Parties', 'Baby Showers',
        'Bridal Showers', 'Engagement Parties', 'Housewarming Events',
        'Holiday Parties', 'Reunions', 'Picnics', 'Barbecues', 'Funeral Catering',
        'Cocktail Receptions', 'Private Chef Services', 'Gourmet Catering',
        'Vegan Catering', 'Vegetarian Catering', 'Gluten-Free Catering',
        'Keto Catering', 'Halal Catering', 'Kosher Catering', 'Organic Catering',
        'Luxury Catering', 'Afternoon Tea Catering', 'Brunch Catering',
        'Breakfast Catering', 'Lunch Catering', 'Dinner Catering',
        'Corporate Lunches', 'Board Meetings', 'Networking Events', 
        'Food Truck Catering', 'Street Food Catering', 'Fusion Cuisine Catering',
        'International Cuisine', 'BBQ Catering', 'Seafood Catering',
        'Italian Catering', 'French Catering', 'Chinese Catering',
        'Mexican Catering', 'Japanese Catering', 'Indian Catering',
        'Mediterranean Catering', 'Middle Eastern Catering', 'African Catering',
        'South American Catering', 'Dessert Catering', 'Ice Cream Catering',
        'Chocolate Fountains', 'Grazing Tables', 'Charcuterie Boards',
        'Healthy Meal Plans', 'Event Catering Consultation', 'Tasting Sessions'
      ],
      pricing: {
        Weddings: { perPerson: 1000, minOrder: 50000 },
        'Corporate Events': { perPerson: 800, minOrder: 30000 },
        Parties: { perPerson: 500, minOrder: 15000 },
        Buffets: { perPerson: 600, minOrder: 20000 },
        'Custom Menus': { perPerson: 1200, minOrder: 100000 },
        'Birthday Parties': { perPerson: 700, minOrder: 20000 },
        'Anniversaries': { perPerson: 900, minOrder: 25000 },
        'Graduation Parties': { perPerson: 600, minOrder: 18000 },
        'Baby Showers': { perPerson: 700, minOrder: 20000 },
        'Bridal Showers': { perPerson: 750, minOrder: 22000 },
        'Engagement Parties': { perPerson: 1000, minOrder: 40000 },
        'Housewarming Events': { perPerson: 650, minOrder: 18000 },
        'Holiday Parties': { perPerson: 1100, minOrder: 50000 },
        'Reunions': { perPerson: 850, minOrder: 30000 },
        'Picnics': { perPerson: 500, minOrder: 15000 },
        'Barbecues': { perPerson: 600, minOrder: 20000 },
        'Funeral Catering': { perPerson: 700, minOrder: 25000 },
        'Cocktail Receptions': { perPerson: 1200, minOrder: 60000 },
        'Private Chef Services': { perMeal: 5000, package: 50000 },
        'Gourmet Catering': { perPerson: 1500, minOrder: 80000 },
        'Vegan Catering': { perPerson: 1000, minOrder: 40000 },
        'Vegetarian Catering': { perPerson: 900, minOrder: 35000 },
        'Gluten-Free Catering': { perPerson: 1100, minOrder: 45000 },
        'Keto Catering': { perPerson: 1200, minOrder: 50000 },
        'Halal Catering': { perPerson: 1000, minOrder: 40000 },
        'Kosher Catering': { perPerson: 1300, minOrder: 60000 },
        'Organic Catering': { perPerson: 1400, minOrder: 70000 },
        'Luxury Catering': { perPerson: 2000, minOrder: 100000 },
        'Afternoon Tea Catering': { perPerson: 900, minOrder: 35000 },
        'Brunch Catering': { perPerson: 800, minOrder: 30000 },
        'Breakfast Catering': { perPerson: 700, minOrder: 25000 },
        'Lunch Catering': { perPerson: 900, minOrder: 35000 },
        'Dinner Catering': { perPerson: 1000, minOrder: 40000 },
        'Corporate Lunches': { perPerson: 850, minOrder: 32000 },
        'Board Meetings': { perPerson: 950, minOrder: 37000 },
        'Networking Events': { perPerson: 1000, minOrder: 45000 },
        'Food Truck Catering': { perTruck: 50000, package: 200000 },
        'Street Food Catering': { perPerson: 700, minOrder: 30000 },
        'Fusion Cuisine Catering': { perPerson: 1100, minOrder: 50000 },
        'International Cuisine': { perPerson: 1300, minOrder: 70000 },
        'BBQ Catering': { perPerson: 800, minOrder: 35000 },
        'Seafood Catering': { perPerson: 1500, minOrder: 60000 },
        'Italian Catering': { perPerson: 1200, minOrder: 50000 },
        'French Catering': { perPerson: 1300, minOrder: 60000 },
        'Chinese Catering': { perPerson: 900, minOrder: 35000 },
        'Mexican Catering': { perPerson: 950, minOrder: 37000 },
        'Japanese Catering': { perPerson: 1400, minOrder: 60000 },
        'Indian Catering': { perPerson: 1100, minOrder: 45000 },
        'Mediterranean Catering': { perPerson: 1250, minOrder: 55000 },
        'Middle Eastern Catering': { perPerson: 1150, minOrder: 48000 },
        'African Catering': { perPerson: 1100, minOrder: 45000 },
        'South American Catering': { perPerson: 1050, minOrder: 42000 },
        'Dessert Catering': { perPerson: 700, minOrder: 25000 },
        'Ice Cream Catering': { perPerson: 600, minOrder: 20000 },
        'Chocolate Fountains': { perSetup: 15000, package: 60000 },
        'Grazing Tables': { perSetup: 20000, package: 80000 },
        'Charcuterie Boards': { perBoard: 8000, package: 40000 },
        'Healthy Meal Plans': { perPlan: 15000, package: 70000 },
        'Event Catering Consultation': { perSession: 10000, package: 50000 },
        'Tasting Sessions': { perPerson: 3000, package: 20000 }
      }
    },
    {
      id: 52,
      name: 'Photography Services',
      subServices: [
        'Portraits', 'Events', 'Commercial', 'Product', 'Aerial',
        'Wedding Photography', 'Engagement Shoots', 'Maternity Photography',
        'Newborn Photography', 'Family Portraits', 'Senior Portraits',
        'Headshots', 'Fashion Photography', 'Model Portfolio',
        'Corporate Photography', 'Branding Photography', 'Real Estate Photography',
        'Architectural Photography', 'Interior Photography', 'Food Photography',
        'Beverage Photography', 'Automotive Photography', 'Jewelry Photography',
        'E-commerce Photography', 'Editorial Photography', 'Fine Art Photography',
        'Street Photography', 'Candid Photography', 'Concert Photography',
        'Sports Photography', 'Adventure Photography', 'Wildlife Photography',
        'Nature Photography', 'Landscape Photography', 'Underwater Photography',
        'Astrophotography', 'Drone Photography', 'Time-lapse Photography',
        'Stop-motion Photography', 'Black & White Photography', 'HDR Photography',
        '360-Degree Photography', 'VR Photography', 'Macro Photography',
        'Stock Photography', 'Photojournalism', 'Political Photography',
        'Cultural Photography', 'Pet Photography', 'Boudoir Photography',
        'Glamour Photography', 'Fashion Editorial Photography', 
        'Graduation Photography', 'Festival Photography', 'Themed Photography',
        'Celebrity Photography', 'Advertising Photography', 'Magazine Shoots'
      ],
      pricing: {
        Portraits: { session: 5000, package: 20000 },
        Events: { hourly: 3000, fullDay: 20000 },
        Commercial: { hourly: 5000, project: 50000 },
        Product: { perProduct: 1000, package: 10000 },
        Aerial: { hourly: 10000, project: 50000 },
        'Wedding Photography': { basic: 50000, premium: 200000 },
        'Engagement Shoots': { session: 10000, package: 40000 },
        'Maternity Photography': { session: 7000, package: 30000 },
        'Newborn Photography': { session: 8000, package: 35000 },
        'Family Portraits': { session: 10000, package: 40000 },
        'Senior Portraits': { session: 8000, package: 30000 },
        'Headshots': { session: 5000, package: 20000 },
        'Fashion Photography': { session: 15000, project: 70000 },
        'Model Portfolio': { session: 20000, package: 80000 },
        'Corporate Photography': { session: 25000, project: 100000 },
        'Branding Photography': { session: 30000, project: 120000 },
        'Real Estate Photography': { perProperty: 15000, package: 60000 },
        'Architectural Photography': { perProject: 25000, premium: 100000 },
        'Interior Photography': { perSpace: 15000, package: 70000 },
        'Food Photography': { perDish: 5000, package: 40000 },
        'Beverage Photography': { perItem: 4000, package: 30000 },
        'Automotive Photography': { perCar: 10000, package: 50000 },
        'Jewelry Photography': { perPiece: 3000, package: 25000 },
        'E-commerce Photography': { perProduct: 2000, package: 30000 },
        'Editorial Photography': { perSession: 20000, project: 80000 },
        'Fine Art Photography': { perPrint: 5000, collection: 50000 },
        'Street Photography': { perSession: 10000, project: 40000 },
        'Candid Photography': { perEvent: 15000, package: 60000 },
        'Concert Photography': { perShow: 20000, tour: 100000 },
        'Sports Photography': { perGame: 25000, season: 150000 },
        'Adventure Photography': { perTrip: 30000, package: 120000 },
        'Wildlife Photography': { perExpedition: 50000, premium: 250000 },
        'Nature Photography': { perSession: 15000, collection: 70000 },
        'Landscape Photography': { perSession: 20000, collection: 80000 },
        'Underwater Photography': { perDive: 30000, project: 120000 },
        'Astrophotography': { perSession: 40000, collection: 150000 },
        'Drone Photography': { perFlight: 20000, project: 100000 },
        'Time-lapse Photography': { perProject: 50000, premium: 200000 },
        'Stop-motion Photography': { perProject: 70000, premium: 300000 },
        'Black & White Photography': { perSession: 15000, collection: 70000 },
        'HDR Photography': { perProject: 25000, package: 100000 },
        '360-Degree Photography': { perSession: 30000, package: 120000 },
        'VR Photography': { perProject: 50000, premium: 250000 },
        'Macro Photography': { perSession: 10000, package: 50000 },
        'Stock Photography': { perImage: 2000, collection: 50000 },
        'Photojournalism': { perAssignment: 25000, premium: 150000 },
        'Political Photography': { perEvent: 20000, campaign: 120000 },
        'Cultural Photography': { perSession: 25000, project: 100000 },
        'Pet Photography': { perSession: 8000, package: 30000 },
        'Boudoir Photography': { perSession: 20000, premium: 80000 },
        'Glamour Photography': { perSession: 25000, package: 100000 },
        'Fashion Editorial Photography': { perSession: 30000, project: 150000 },
        'Graduation Photography': { perSession: 10000, package: 50000 },
        'Festival Photography': { perDay: 30000, event: 150000 },
        'Themed Photography': { perSession: 20000, premium: 80000 },
        'Celebrity Photography': { perSession: 50000, premium: 250000 },
        'Advertising Photography': { perProject: 100000, premium: 500000 },
        'Magazine Shoots': { perSession: 50000, project: 250000 }
      }
    },
    {
      id: 53,
      name: 'Interior Design',
      subServices: [
        'Residential', 'Commercial', 'Office', 'Retail', 'Hospitality',
        'Luxury Home Design', 'Minimalist Design', 'Traditional Design',
        'Modern Design', 'Industrial Design', 'Scandinavian Design',
        'Bohemian Design', 'Mid-Century Modern', 'Eclectic Design',
        'Contemporary Design', 'Art Deco Design', 'Vintage Design',
        'Rustic Design', 'Coastal Design', 'Urban Loft Design',
        'Apartment Interior', 'Villa Interior', 'Tiny Home Design',
        'Modular Interior Design', 'Kitchen Design', 'Bathroom Design',
        'Living Room Design', 'Bedroom Design', 'Dining Room Design',
        'Walk-in Closet Design', 'Home Theater Design', 'Smart Home Design',
        'Sustainable Interior Design', 'Eco-Friendly Interiors',
        'Color Consultation', 'Furniture Selection', 'Custom Furniture Design',
        'Lighting Design', 'Flooring Solutions', 'Wall Treatments',
        'Ceiling Design', '3D Visualization', 'Space Planning',
        'Office Space Optimization', 'Coworking Space Design',
        'Retail Store Design', 'Showroom Design', 'Boutique Interior',
        'Café & Restaurant Design', 'Hotel & Resort Interiors',
        'Wellness & Spa Interior', 'Healthcare Facility Design',
        'Educational Facility Interiors', 'Event Space Design',
        'Exhibition & Museum Interiors', 'Yacht Interior Design',
        'Private Jet Interior Design', 'Thematic Interior Design',
        'Custom Decor & Art Installation'
      ],
      pricing: {
        Residential: { basic: 50000, premium: 200000 },
        Commercial: { basic: 100000, premium: 500000 },
        Office: { basic: 80000, premium: 300000 },
        Retail: { basic: 60000, premium: 250000 },
        Hospitality: { basic: 150000, premium: 700000 },
        'Luxury Home Design': { basic: 150000, premium: 700000 },
        'Minimalist Design': { basic: 50000, premium: 250000 },
        'Traditional Design': { basic: 80000, premium: 350000 },
        'Modern Design': { basic: 100000, premium: 450000 },
        'Industrial Design': { basic: 90000, premium: 400000 },
        'Scandinavian Design': { basic: 70000, premium: 300000 },
        'Bohemian Design': { basic: 60000, premium: 250000 },
        'Mid-Century Modern': { basic: 90000, premium: 350000 },
        'Eclectic Design': { basic: 85000, premium: 320000 },
        'Contemporary Design': { basic: 95000, premium: 400000 },
        'Art Deco Design': { basic: 120000, premium: 500000 },
        'Vintage Design': { basic: 75000, premium: 320000 },
        'Rustic Design': { basic: 70000, premium: 280000 },
        'Coastal Design': { basic: 65000, premium: 270000 },
        'Urban Loft Design': { basic: 90000, premium: 350000 },
        'Apartment Interior': { basic: 50000, premium: 250000 },
        'Villa Interior': { basic: 150000, premium: 700000 },
        'Tiny Home Design': { basic: 40000, premium: 200000 },
        'Modular Interior Design': { basic: 60000, premium: 300000 },
        'Kitchen Design': { basic: 50000, premium: 250000 },
        'Bathroom Design': { basic: 40000, premium: 200000 },
        'Living Room Design': { basic: 70000, premium: 300000 },
        'Bedroom Design': { basic: 60000, premium: 250000 },
        'Dining Room Design': { basic: 50000, premium: 250000 },
        'Walk-in Closet Design': { basic: 80000, premium: 350000 },
        'Home Theater Design': { basic: 100000, premium: 450000 },
        'Smart Home Design': { basic: 120000, premium: 500000 },
        'Sustainable Interior Design': { basic: 90000, premium: 400000 },
        'Eco-Friendly Interiors': { basic: 85000, premium: 350000 },
        'Color Consultation': { basic: 10000, premium: 50000 },
        'Furniture Selection': { basic: 20000, premium: 80000 },
        'Custom Furniture Design': { basic: 50000, premium: 250000 },
        'Lighting Design': { basic: 30000, premium: 150000 },
        'Flooring Solutions': { basic: 40000, premium: 200000 },
        'Wall Treatments': { basic: 30000, premium: 150000 },
        'Ceiling Design': { basic: 35000, premium: 180000 },
        '3D Visualization': { basic: 50000, premium: 250000 },
        'Space Planning': { basic: 70000, premium: 300000 },
        'Office Space Optimization': { basic: 80000, premium: 350000 },
        'Coworking Space Design': { basic: 90000, premium: 400000 },
        'Retail Store Design': { basic: 100000, premium: 450000 },
        'Showroom Design': { basic: 110000, premium: 500000 },
        'Boutique Interior': { basic: 90000, premium: 400000 },
        'Café & Restaurant Design': { basic: 100000, premium: 450000 },
        'Hotel & Resort Interiors': { basic: 200000, premium: 1000000 },
        'Wellness & Spa Interior': { basic: 120000, premium: 600000 },
        'Healthcare Facility Design': { basic: 150000, premium: 700000 },
        'Educational Facility Interiors': { basic: 100000, premium: 500000 },
        'Event Space Design': { basic: 80000, premium: 400000 },
        'Exhibition & Museum Interiors': { basic: 150000, premium: 750000 },
        'Yacht Interior Design': { basic: 250000, premium: 1200000 },
        'Private Jet Interior Design': { basic: 300000, premium: 1500000 },
        'Thematic Interior Design': { basic: 120000, premium: 600000 },
        'Custom Decor & Art Installation': { basic: 100000, premium: 500000 }
      }
    },
    {
      id: 54,
      name: 'Landscaping Services',
      subServices: [
        'Design', 'Installation', 'Maintenance', 'Irrigation', 'Lighting',
        'Lawn Care', 'Tree Planting', 'Shrub Pruning', 'Garden Bed Design', 
        'Soil Testing', 'Mulching', 'Fertilization', 'Weed Control', 'Sod Installation',
        'Artificial Turf Installation', 'Aeration', 'Seeding', 'Erosion Control',
        'Retaining Wall Construction', 'Pathways & Walkways', 'Patios & Decking',
        'Outdoor Fireplaces', 'Pergolas & Gazebos', 'Fencing', 'Driveway Paving',
        'Water Features', 'Pond Installation', 'Fountain Installation', 'Rock Gardens',
        'Drought-Resistant Landscaping', 'Xeriscaping', 'Green Roof Installation',
        'Vertical Gardens', 'Hardscaping', 'Landscape Renovation', 'Stormwater Management',
        'Native Plant Landscaping', 'Wildlife-Friendly Gardens', 'Seasonal Flower Planting',
        'Composting Solutions', 'Organic Gardening', 'Edible Landscaping', 
        'Bamboo Installation', 'Landscape Drainage Solutions', 'Pest Control',
        'Outdoor Kitchens', 'Sports Field Maintenance', 'Playground Landscaping',
        'Hedge Trimming', 'Tree Removal', 'Christmas & Holiday Lighting',
        'Smart Irrigation Systems', 'Eco-Friendly Landscaping', 'Low-Maintenance Landscaping'
      ],
      pricing: {
        Design: { basic: 20000, premium: 100000 },
        Installation: { small: 50000, large: 200000 },
        Maintenance: { monthly: 10000, yearly: 100000 },
        Irrigation: { small: 30000, large: 150000 },
        Lighting: { small: 20000, large: 100000 },
        'Lawn Care': { basic: 5000, premium: 25000 },
        'Tree Planting': { small: 3000, large: 15000 },
        'Shrub Pruning': { basic: 5000, premium: 20000 },
        'Garden Bed Design': { basic: 10000, premium: 50000 },
        'Soil Testing': { basic: 3000, premium: 15000 },
        'Mulching': { basic: 5000, premium: 20000 },
        'Fertilization': { basic: 7000, premium: 30000 },
        'Weed Control': { basic: 6000, premium: 25000 },
        'Sod Installation': { basic: 15000, premium: 70000 },
        'Artificial Turf Installation': { basic: 20000, premium: 90000 },
        'Aeration': { basic: 5000, premium: 25000 },
        'Seeding': { basic: 7000, premium: 30000 },
        'Erosion Control': { basic: 15000, premium: 70000 },
        'Retaining Wall Construction': { basic: 30000, premium: 150000 },
        'Pathways & Walkways': { basic: 25000, premium: 120000 },
        'Patios & Decking': { basic: 35000, premium: 180000 },
        'Outdoor Fireplaces': { basic: 40000, premium: 200000 },
        'Pergolas & Gazebos': { basic: 50000, premium: 250000 },
        'Fencing': { basic: 30000, premium: 150000 },
        'Driveway Paving': { basic: 40000, premium: 200000 },
        'Water Features': { basic: 35000, premium: 180000 },
        'Pond Installation': { basic: 40000, premium: 200000 },
        'Fountain Installation': { basic: 30000, premium: 150000 },
        'Rock Gardens': { basic: 25000, premium: 120000 },
        'Drought-Resistant Landscaping': { basic: 30000, premium: 150000 },
        'Xeriscaping': { basic: 35000, premium: 180000 },
        'Green Roof Installation': { basic: 50000, premium: 250000 },
        'Vertical Gardens': { basic: 40000, premium: 200000 },
        'Hardscaping': { basic: 30000, premium: 150000 },
        'Landscape Renovation': { basic: 35000, premium: 180000 },
        'Stormwater Management': { basic: 50000, premium: 250000 },
        'Native Plant Landscaping': { basic: 25000, premium: 120000 },
        'Wildlife-Friendly Gardens': { basic: 30000, premium: 150000 },
        'Seasonal Flower Planting': { basic: 15000, premium: 70000 },
        'Composting Solutions': { basic: 10000, premium: 50000 },
        'Organic Gardening': { basic: 20000, premium: 90000 },
        'Edible Landscaping': { basic: 30000, premium: 150000 },
        'Bamboo Installation': { basic: 40000, premium: 200000 },
        'Landscape Drainage Solutions': { basic: 30000, premium: 150000 },
        'Pest Control': { basic: 25000, premium: 120000 },
        'Outdoor Kitchens': { basic: 50000, premium: 250000 },
        'Sports Field Maintenance': { basic: 35000, premium: 180000 },
        'Playground Landscaping': { basic: 40000, premium: 200000 },
        'Hedge Trimming': { basic: 7000, premium: 30000 },
        'Tree Removal': { basic: 15000, premium: 70000 },
        'Christmas & Holiday Lighting': { basic: 20000, premium: 100000 },
        'Smart Irrigation Systems': { basic: 50000, premium: 250000 },
        'Eco-Friendly Landscaping': { basic: 30000, premium: 150000 },
        'Low-Maintenance Landscaping': { basic: 35000, premium: 180000 }
      }
    }
    ,
    {
      id: 55,
      name: 'Cleaning Services',
      subServices: [
        'Residential', 'Commercial', 'Industrial', 'Carpet Cleaning', 'Window Cleaning',
        'Move-In/Move-Out Cleaning', 'Post-Construction Cleaning', 'Deep Cleaning',
        'Office Cleaning', 'Warehouse Cleaning', 'Medical Facility Cleaning',
        'School Cleaning', 'Hotel Cleaning', 'Restaurant Cleaning', 'Gym Cleaning',
        'Shopping Mall Cleaning', 'Event Cleaning', 'Airbnb Cleaning',
        'Kitchen Deep Cleaning', 'Bathroom Deep Cleaning', 'Tile & Grout Cleaning',
        'Upholstery Cleaning', 'Mattress Cleaning', 'Pressure Washing',
        'Exterior Cleaning', 'Gutter Cleaning', 'Chimney Cleaning', 'Roof Cleaning',
        'Driveway Cleaning', 'Sidewalk Cleaning', 'Parking Lot Cleaning',
        'Hardwood Floor Cleaning', 'Marble Floor Polishing', 'Garage Cleaning',
        'Ceiling Cleaning', 'Disinfection & Sanitization', 'Green Cleaning',
        'Pet Stain & Odor Removal', 'Allergy & Dust Mite Cleaning', 'Electronics & Server Room Cleaning',
        'Crime Scene Cleaning', 'Hoarding Cleanup', 'Emergency Cleaning Services',
        'Biohazard Cleaning', 'Smoke & Fire Damage Cleanup', 'Water Damage Cleanup',
        'Graffiti Removal', 'Solar Panel Cleaning', 'Boat Cleaning', 'Aircraft Cleaning',
        'Industrial Equipment Cleaning', 'Dry Cleaning Pickup & Delivery',
        'Janitorial Services', '24/7 Emergency Cleaning'
      ],
      pricing: {
        Residential: { basic: 2000, deep: 10000 },
        Commercial: { basic: 5000, deep: 20000 },
        Industrial: { basic: 10000, deep: 50000 },
        'Carpet Cleaning': { small: 3000, large: 15000 },
        'Window Cleaning': { small: 2000, large: 10000 },
        'Move-In/Move-Out Cleaning': { basic: 8000, deep: 25000 },
        'Post-Construction Cleaning': { basic: 15000, deep: 50000 },
        'Deep Cleaning': { basic: 5000, premium: 25000 },
        'Office Cleaning': { basic: 7000, premium: 30000 },
        'Warehouse Cleaning': { basic: 10000, premium: 50000 },
        'Medical Facility Cleaning': { basic: 12000, premium: 60000 },
        'School Cleaning': { basic: 10000, premium: 50000 },
        'Hotel Cleaning': { basic: 15000, premium: 70000 },
        'Restaurant Cleaning': { basic: 12000, premium: 60000 },
        'Gym Cleaning': { basic: 8000, premium: 40000 },
        'Shopping Mall Cleaning': { basic: 20000, premium: 100000 },
        'Event Cleaning': { basic: 5000, premium: 25000 },
        'Airbnb Cleaning': { basic: 3000, premium: 15000 },
        'Kitchen Deep Cleaning': { basic: 5000, premium: 20000 },
        'Bathroom Deep Cleaning': { basic: 4000, premium: 18000 },
        'Tile & Grout Cleaning': { basic: 3000, premium: 15000 },
        'Upholstery Cleaning': { basic: 4000, premium: 20000 },
        'Mattress Cleaning': { basic: 3000, premium: 12000 },
        'Pressure Washing': { basic: 7000, premium: 30000 },
        'Exterior Cleaning': { basic: 6000, premium: 25000 },
        'Gutter Cleaning': { basic: 5000, premium: 20000 },
        'Chimney Cleaning': { basic: 8000, premium: 35000 },
        'Roof Cleaning': { basic: 10000, premium: 50000 },
        'Driveway Cleaning': { basic: 5000, premium: 25000 },
        'Sidewalk Cleaning': { basic: 3000, premium: 15000 },
        'Parking Lot Cleaning': { basic: 12000, premium: 60000 },
        'Hardwood Floor Cleaning': { basic: 5000, premium: 25000 },
        'Marble Floor Polishing': { basic: 8000, premium: 40000 },
        'Garage Cleaning': { basic: 7000, premium: 35000 },
        'Ceiling Cleaning': { basic: 5000, premium: 25000 },
        'Disinfection & Sanitization': { basic: 10000, premium: 50000 },
        'Green Cleaning': { basic: 7000, premium: 30000 },
        'Pet Stain & Odor Removal': { basic: 6000, premium: 25000 },
        'Allergy & Dust Mite Cleaning': { basic: 5000, premium: 22000 },
        'Electronics & Server Room Cleaning': { basic: 8000, premium: 40000 },
        'Crime Scene Cleaning': { basic: 30000, premium: 150000 },
        'Hoarding Cleanup': { basic: 25000, premium: 120000 },
        'Emergency Cleaning Services': { basic: 12000, premium: 60000 },
        'Biohazard Cleaning': { basic: 50000, premium: 250000 },
        'Smoke & Fire Damage Cleanup': { basic: 60000, premium: 300000 },
        'Water Damage Cleanup': { basic: 70000, premium: 350000 },
        'Graffiti Removal': { basic: 15000, premium: 70000 },
        'Solar Panel Cleaning': { basic: 5000, premium: 25000 },
        'Boat Cleaning': { basic: 10000, premium: 50000 },
        'Aircraft Cleaning': { basic: 15000, premium: 75000 },
        'Industrial Equipment Cleaning': { basic: 20000, premium: 100000 },
        'Dry Cleaning Pickup & Delivery': { basic: 3000, premium: 15000 },
        'Janitorial Services': { basic: 10000, premium: 50000 },
        '24/7 Emergency Cleaning': { basic: 20000, premium: 100000 }
      }
    }
    ,
    {
      id: 56,
      name: 'Security Systems',
      subServices: [
        'Installation', 'Monitoring', 'Maintenance', 'Access Control', 'Surveillance',
        'Alarm Systems', 'CCTV Installation', 'Biometric Systems', 'Smart Locks',
        'Intercom Systems', 'Fire Alarm Installation', 'Perimeter Security', 
        'Motion Sensors', 'Glass Break Sensors', 'Remote Surveillance', 
        'Home Security Systems', 'Commercial Security Systems', 'Industrial Security Solutions',
        'IP Camera Installation', 'Wireless Security Systems', 'Video Analytics', 
        'Facial Recognition Systems', 'License Plate Recognition', 'Smart Home Integration',
        'Cloud-Based Security', 'Security Audits', 'Intrusion Detection Systems', 
        'Cyber-Physical Security', 'AI-Based Security Solutions', 'IoT Security Devices',
        'GPS Tracking Solutions', 'Emergency Alert Systems', 'RFID Access Control', 
        'Two-Factor Authentication (2FA) Systems', 'Smart Doorbells', 'Gate Automation',
        'Data Center Security', 'Thermal Camera Systems', 'AI-Powered Threat Detection',
        'Night Vision Surveillance', 'Under-Vehicle Surveillance Systems (UVSS)',
        'Drone Surveillance', 'Security Lighting Systems', 'Keycard Access Systems',
        'Turnstile Access Control', 'Panic Button Installation', 'Electric Fencing',
        'Vehicle Barrier Systems', 'Crowd Control Systems', 'Smart City Security Solutions',
        'Integrated Security Management', 'Cloud Security Cameras', 'Voice-Activated Security',
        'Geo-Fencing Security Solutions'
      ],
      pricing: {
        Installation: { basic: 20000, premium: 100000 },
        Monitoring: { monthly: 2000, yearly: 20000 },
        Maintenance: { hourly: 1000, contract: 50000 },
        'Access Control': { basic: 30000, premium: 150000 },
        Surveillance: { basic: 50000, premium: 200000 },
        'Alarm Systems': { basic: 25000, premium: 120000 },
        'CCTV Installation': { basic: 30000, premium: 150000 },
        'Biometric Systems': { basic: 40000, premium: 180000 },
        'Smart Locks': { basic: 20000, premium: 100000 },
        'Intercom Systems': { basic: 25000, premium: 120000 },
        'Fire Alarm Installation': { basic: 30000, premium: 150000 },
        'Perimeter Security': { basic: 40000, premium: 200000 },
        'Motion Sensors': { basic: 15000, premium: 80000 },
        'Glass Break Sensors': { basic: 20000, premium: 90000 },
        'Remote Surveillance': { basic: 50000, premium: 250000 },
        'Home Security Systems': { basic: 30000, premium: 150000 },
        'Commercial Security Systems': { basic: 50000, premium: 250000 },
        'Industrial Security Solutions': { basic: 60000, premium: 300000 },
        'IP Camera Installation': { basic: 35000, premium: 180000 },
        'Wireless Security Systems': { basic: 40000, premium: 200000 },
        'Video Analytics': { basic: 50000, premium: 250000 },
        'Facial Recognition Systems': { basic: 60000, premium: 300000 },
        'License Plate Recognition': { basic: 50000, premium: 250000 },
        'Smart Home Integration': { basic: 40000, premium: 200000 },
        'Cloud-Based Security': { basic: 50000, premium: 250000 },
        'Security Audits': { basic: 30000, premium: 150000 },
        'Intrusion Detection Systems': { basic: 40000, premium: 200000 },
        'Cyber-Physical Security': { basic: 60000, premium: 300000 },
        'AI-Based Security Solutions': { basic: 70000, premium: 350000 },
        'IoT Security Devices': { basic: 50000, premium: 250000 },
        'GPS Tracking Solutions': { basic: 30000, premium: 150000 },
        'Emergency Alert Systems': { basic: 25000, premium: 120000 },
        'RFID Access Control': { basic: 40000, premium: 200000 },
        'Two-Factor Authentication (2FA) Systems': { basic: 30000, premium: 150000 },
        'Smart Doorbells': { basic: 20000, premium: 100000 },
        'Gate Automation': { basic: 50000, premium: 250000 },
        'Data Center Security': { basic: 60000, premium: 300000 },
        'Thermal Camera Systems': { basic: 70000, premium: 350000 },
        'AI-Powered Threat Detection': { basic: 80000, premium: 400000 },
        'Night Vision Surveillance': { basic: 50000, premium: 250000 },
        'Under-Vehicle Surveillance Systems (UVSS)': { basic: 70000, premium: 350000 },
        'Drone Surveillance': { basic: 100000, premium: 500000 },
        'Security Lighting Systems': { basic: 30000, premium: 150000 },
        'Keycard Access Systems': { basic: 40000, premium: 200000 },
        'Turnstile Access Control': { basic: 60000, premium: 300000 },
        'Panic Button Installation': { basic: 20000, premium: 100000 },
        'Electric Fencing': { basic: 50000, premium: 250000 },
        'Vehicle Barrier Systems': { basic: 60000, premium: 300000 },
        'Crowd Control Systems': { basic: 70000, premium: 350000 },
        'Smart City Security Solutions': { basic: 100000, premium: 500000 },
        'Integrated Security Management': { basic: 80000, premium: 400000 },
        'Cloud Security Cameras': { basic: 60000, premium: 300000 },
        'Voice-Activated Security': { basic: 70000, premium: 350000 },
        'Geo-Fencing Security Solutions': { basic: 50000, premium: 250000 }
      }
    }
    ,
    {
      id: 57,
      name: 'IT Support',
      subServices: [
        'Help Desk', 'Network Setup', 'Data Recovery', 'Software Installation', 'Cybersecurity',
        'Hardware Troubleshooting', 'Remote IT Support', 'On-Site IT Support', 'Cloud Backup Solutions',
        'Server Maintenance', 'VPN Setup', 'Firewall Configuration', 'IT Consultation', 'Software Updates',
        'System Monitoring', 'Malware Removal', 'Email Configuration', 'VoIP Setup', 'Disaster Recovery Planning',
        'Cloud Migration', 'IT Infrastructure Setup', 'Access Control Management', 'Active Directory Management',
        'WiFi Optimization', 'Virtualization Support', 'Printer & Peripheral Setup', 'Database Backup & Recovery',
        'Patch Management', 'End-User Training', 'Office 365 Support', 'Google Workspace Support',
        'IT Asset Management', 'Storage Management', 'System Integration', 'IoT Device Configuration',
        'Penetration Testing', 'Network Security Audits', 'Anti-Virus & Endpoint Security',
        'Dark Web Monitoring', 'Identity & Access Management', 'Incident Response', 'IT Policy Development',
        'Data Encryption', 'Ransomware Protection', 'Network Performance Optimization', 'Load Balancing',
        'Cloud Security Audits', 'Managed IT Services', 'Custom IT Solutions', 'AI & Automation Support',
        'Remote Desktop Solutions', 'Custom Server Configurations', 'Linux Server Support', 'Windows Server Support',
        'Enterprise IT Support', 'Smart Home IT Support', 'Custom IT Scripting & Automation'
      ],
      pricing: {
        'Help Desk': { hourly: 1000, contract: 50000 },
        'Network Setup': { small: 20000, large: 100000 },
        'Data Recovery': { basic: 5000, advanced: 30000 },
        'Software Installation': { basic: 3000, advanced: 15000 },
        Cybersecurity: { basic: 10000, advanced: 50000 },
        'Hardware Troubleshooting': { hourly: 1500, contract: 60000 },
        'Remote IT Support': { hourly: 1200, contract: 55000 },
        'On-Site IT Support': { hourly: 2000, contract: 80000 },
        'Cloud Backup Solutions': { basic: 10000, advanced: 50000 },
        'Server Maintenance': { basic: 25000, advanced: 120000 },
        'VPN Setup': { basic: 8000, advanced: 40000 },
        'Firewall Configuration': { basic: 15000, advanced: 70000 },
        'IT Consultation': { hourly: 3000, contract: 100000 },
        'Software Updates': { basic: 5000, advanced: 25000 },
        'System Monitoring': { basic: 20000, advanced: 100000 },
        'Malware Removal': { basic: 10000, advanced: 50000 },
        'Email Configuration': { basic: 5000, advanced: 25000 },
        'VoIP Setup': { basic: 20000, advanced: 100000 },
        'Disaster Recovery Planning': { basic: 40000, advanced: 150000 },
        'Cloud Migration': { basic: 30000, advanced: 120000 },
        'IT Infrastructure Setup': { basic: 50000, advanced: 250000 },
        'Access Control Management': { basic: 20000, advanced: 100000 },
        'Active Directory Management': { basic: 25000, advanced: 120000 },
        'WiFi Optimization': { basic: 10000, advanced: 50000 },
        'Virtualization Support': { basic: 30000, advanced: 150000 },
        'Printer & Peripheral Setup': { basic: 5000, advanced: 25000 },
        'Database Backup & Recovery': { basic: 15000, advanced: 75000 },
        'Patch Management': { basic: 10000, advanced: 50000 },
        'End-User Training': { hourly: 2000, contract: 75000 },
        'Office 365 Support': { basic: 20000, advanced: 100000 },
        'Google Workspace Support': { basic: 15000, advanced: 80000 },
        'IT Asset Management': { basic: 25000, advanced: 120000 },
        'Storage Management': { basic: 20000, advanced: 100000 },
        'System Integration': { basic: 40000, advanced: 150000 },
        'IoT Device Configuration': { basic: 25000, advanced: 120000 },
        'Penetration Testing': { basic: 50000, advanced: 200000 },
        'Network Security Audits': { basic: 40000, advanced: 150000 },
        'Anti-Virus & Endpoint Security': { basic: 20000, advanced: 100000 },
        'Dark Web Monitoring': { basic: 50000, advanced: 200000 },
        'Identity & Access Management': { basic: 30000, advanced: 120000 },
        'Incident Response': { basic: 40000, advanced: 150000 },
        'IT Policy Development': { basic: 30000, advanced: 120000 },
        'Data Encryption': { basic: 25000, advanced: 100000 },
        'Ransomware Protection': { basic: 40000, advanced: 150000 },
        'Network Performance Optimization': { basic: 30000, advanced: 120000 },
        'Load Balancing': { basic: 35000, advanced: 140000 },
        'Cloud Security Audits': { basic: 40000, advanced: 150000 },
        'Managed IT Services': { monthly: 50000, yearly: 500000 },
        'Custom IT Solutions': { basic: 60000, advanced: 300000 },
        'AI & Automation Support': { basic: 80000, advanced: 350000 },
        'Remote Desktop Solutions': { basic: 20000, advanced: 100000 },
        'Custom Server Configurations': { basic: 50000, advanced: 250000 },
        'Linux Server Support': { basic: 40000, advanced: 150000 },
        'Windows Server Support': { basic: 40000, advanced: 150000 },
        'Enterprise IT Support': { monthly: 100000, yearly: 1000000 },
        'Smart Home IT Support': { basic: 20000, advanced: 100000 },
        'Custom IT Scripting & Automation': { basic: 60000, advanced: 300000 }
      }
    }
    ,
    {
      id: 58,
      name: 'Web Development',
      subServices: [
        'Frontend', 'Backend', 'E-commerce', 'CMS', 'SEO',
        'UI/UX Design', 'Full Stack Development', 'Web App Development',
        'Mobile-Friendly Design', 'Progressive Web Apps (PWA)',
        'Landing Page Design', 'Website Maintenance', 'Custom Website Development',
        'Website Redesign', 'WordPress Development', 'Shopify Development',
        'Magento Development', 'Laravel Development', 'React Development',
        'Vue.js Development', 'Angular Development', 'Node.js Development',
        'Django Development', 'Flask Development', 'Ruby on Rails Development',
        'ASP.NET Development', 'Static Website Development', 'Dynamic Website Development',
        'Multi-Vendor Marketplace', 'API Development', 'Third-Party API Integration',
        'Payment Gateway Integration', 'Database Design & Management',
        'Performance Optimization', 'Security Implementation', 'Bug Fixing & Debugging',
        'Hosting & Server Management', 'Cloud Deployment', 'Content Writing',
        'Technical SEO', 'Local SEO', 'Schema Markup Implementation', 'Speed Optimization',
        'SSL Implementation', 'Version Control Setup (Git/GitHub/GitLab)',
        'Automated Testing', 'Chatbot Integration', 'Custom Admin Panel Development',
        'Multi-Language Website', 'Accessibility Optimization', 'Code Review & Refactoring',
        'Microservices Architecture', 'Headless CMS Development', 'AI-Based Web Apps',
        'Blockchain Integration', 'Web3 Development'
      ],
      pricing: {
        Frontend: { basic: 30000, advanced: 150000 },
        Backend: { basic: 50000, advanced: 200000 },
        'E-commerce': { basic: 100000, advanced: 500000 },
        CMS: { basic: 40000, advanced: 200000 },
        SEO: { basic: 20000, advanced: 100000 },
        'UI/UX Design': { basic: 25000, advanced: 120000 },
        'Full Stack Development': { basic: 70000, advanced: 300000 },
        'Web App Development': { basic: 80000, advanced: 350000 },
        'Mobile-Friendly Design': { basic: 20000, advanced: 90000 },
        'Progressive Web Apps (PWA)': { basic: 60000, advanced: 250000 },
        'Landing Page Design': { basic: 15000, advanced: 70000 },
        'Website Maintenance': { basic: 10000, advanced: 50000 },
        'Custom Website Development': { basic: 50000, advanced: 250000 },
        'Website Redesign': { basic: 40000, advanced: 200000 },
        'WordPress Development': { basic: 30000, advanced: 150000 },
        'Shopify Development': { basic: 35000, advanced: 180000 },
        'Magento Development': { basic: 50000, advanced: 250000 },
        'Laravel Development': { basic: 60000, advanced: 280000 },
        'React Development': { basic: 50000, advanced: 200000 },
        'Vue.js Development': { basic: 45000, advanced: 180000 },
        'Angular Development': { basic: 50000, advanced: 200000 },
        'Node.js Development': { basic: 60000, advanced: 250000 },
        'Django Development': { basic: 55000, advanced: 220000 },
        'Flask Development': { basic: 40000, advanced: 180000 },
        'Ruby on Rails Development': { basic: 55000, advanced: 240000 },
        'ASP.NET Development': { basic: 60000, advanced: 260000 },
        'Static Website Development': { basic: 20000, advanced: 80000 },
        'Dynamic Website Development': { basic: 50000, advanced: 220000 },
        'Multi-Vendor Marketplace': { basic: 120000, advanced: 600000 },
        'API Development': { basic: 50000, advanced: 250000 },
        'Third-Party API Integration': { basic: 30000, advanced: 150000 },
        'Payment Gateway Integration': { basic: 40000, advanced: 180000 },
        'Database Design & Management': { basic: 45000, advanced: 200000 },
        'Performance Optimization': { basic: 30000, advanced: 150000 },
        'Security Implementation': { basic: 40000, advanced: 180000 },
        'Bug Fixing & Debugging': { basic: 20000, advanced: 90000 },
        'Hosting & Server Management': { basic: 25000, advanced: 120000 },
        'Cloud Deployment': { basic: 30000, advanced: 150000 },
        'Content Writing': { basic: 15000, advanced: 70000 },
        'Technical SEO': { basic: 20000, advanced: 90000 },
        'Local SEO': { basic: 15000, advanced: 70000 },
        'Schema Markup Implementation': { basic: 25000, advanced: 120000 },
        'Speed Optimization': { basic: 30000, advanced: 150000 },
        'SSL Implementation': { basic: 10000, advanced: 50000 },
        'Version Control Setup (Git/GitHub/GitLab)': { basic: 10000, advanced: 50000 },
        'Automated Testing': { basic: 40000, advanced: 180000 },
        'Chatbot Integration': { basic: 50000, advanced: 200000 },
        'Custom Admin Panel Development': { basic: 80000, advanced: 350000 },
        'Multi-Language Website': { basic: 50000, advanced: 200000 },
        'Accessibility Optimization': { basic: 25000, advanced: 120000 },
        'Code Review & Refactoring': { basic: 30000, advanced: 150000 },
        'Microservices Architecture': { basic: 70000, advanced: 300000 },
        'Headless CMS Development': { basic: 60000, advanced: 250000 },
        'AI-Based Web Apps': { basic: 120000, advanced: 600000 },
        'Blockchain Integration': { basic: 150000, advanced: 750000 },
        'Web3 Development': { basic: 150000, advanced: 800000 }
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