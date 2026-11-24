// ================= 1. COMPLETE INDIAN & HYPERCAR DATABASE (86 CARS) =================
const carsDatabase = [
  // HATCHBACKS (16)
  { id: 1, brand: "Tata", name: "Nano GenX", category: "hatchback", minPrice: 2.36, maxPrice: 3.35, fuels: ["Petrol", "CNG"], engine: "624cc Twin-Cyl", power: "38 bhp / 51 Nm", mileage: "23.6 - 36.0 km/kg", transmission: "4-Speed MT / AMT", priorityTags: ["mileage", "balanced"], highlight: "India's most affordable 4-seater city runabout." },
  { id: 2, brand: "Maruti Suzuki", name: "Alto K10", category: "hatchback", minPrice: 3.99, maxPrice: 5.96, fuels: ["Petrol", "CNG"], engine: "1.0L K10C Petrol", power: "66 bhp / 89 Nm", mileage: "24.4 - 33.8 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["mileage", "balanced"], highlight: "Ultra-low maintenance budget hatchback for city driving." },
  { id: 3, brand: "Maruti Suzuki", name: "S-Presso", category: "hatchback", minPrice: 4.26, maxPrice: 6.12, fuels: ["Petrol", "CNG"], engine: "1.0L K10C Petrol", power: "66 bhp / 89 Nm", mileage: "24.7 - 32.7 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["mileage", "family", "balanced"], highlight: "SUV-inspired tall stance with 180mm ground clearance." },
  { id: 4, brand: "Renault", name: "Kwid", category: "hatchback", minPrice: 4.70, maxPrice: 6.45, fuels: ["Petrol"], engine: "1.0L SCe Petrol", power: "67 bhp / 91 Nm", mileage: "21.7 kmpl", transmission: "5-Speed MT / AMT", priorityTags: ["mileage", "balanced"], highlight: "8-inch touchscreen, digital cluster, and crossover styling." },
  { id: 5, brand: "Tata", name: "Tiago", category: "hatchback", minPrice: 4.99, maxPrice: 8.75, fuels: ["Petrol", "CNG"], engine: "1.2L Revotron", power: "86 bhp / 113 Nm", mileage: "19.0 - 28.0 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["family", "mileage", "balanced"], highlight: "4-star GNCAP safety with twin-cylinder iCNG boot space." },
  { id: 6, brand: "Maruti Suzuki", name: "Celerio", category: "hatchback", minPrice: 5.36, maxPrice: 7.04, fuels: ["Petrol", "CNG"], engine: "1.0L DualJet", power: "66 bhp / 89 Nm", mileage: "25.2 - 34.4 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["mileage", "family", "balanced"], highlight: "India's highest fuel-efficiency petrol hatchback." },
  { id: 7, brand: "Maruti Suzuki", name: "Wagon R", category: "hatchback", minPrice: 5.54, maxPrice: 7.33, fuels: ["Petrol", "CNG"], engine: "1.0L / 1.2L K-Series", power: "67 - 89 bhp / 113 Nm", mileage: "24.3 - 34.0 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["family", "mileage", "balanced"], highlight: "Unmatched tall-boy cabin headroom and practicality." },
  { id: 8, brand: "Hyundai", name: "Grand i10 Nios", category: "hatchback", minPrice: 5.92, maxPrice: 8.56, fuels: ["Petrol", "CNG"], engine: "1.2L Kappa 4-Cyl", power: "82 bhp / 114 Nm", mileage: "20.7 - 27.0 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["family", "balanced", "mileage"], highlight: "Refined 4-cylinder engine with 6 airbags standard." },
  { id: 9, brand: "Maruti Suzuki", name: "Swift (4th Gen)", category: "hatchback", minPrice: 6.49, maxPrice: 9.64, fuels: ["Petrol", "CNG"], engine: "1.2L Z12E Petrol", power: "82 bhp / 112 Nm", mileage: "24.8 - 32.8 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["mileage", "performance", "balanced"], highlight: "Nimble city handling with class-leading efficiency." },
  { id: 10, brand: "Maruti Suzuki", name: "Baleno / Glanza", category: "hatchback", minPrice: 6.66, maxPrice: 9.88, fuels: ["Petrol", "CNG"], engine: "1.2L DualJet", power: "89 bhp / 113 Nm", mileage: "22.3 - 30.6 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["family", "mileage", "balanced"], highlight: "Spacious rear seat, 360-degree camera, and Heads-Up Display." },
  { id: 11, brand: "Tata", name: "Altroz / Racer", category: "hatchback", minPrice: 6.65, maxPrice: 10.99, fuels: ["Petrol", "Diesel", "CNG"], engine: "1.2L Turbo / 1.5L Diesel", power: "88 - 120 bhp / 200 Nm", mileage: "19.3 - 26.2 kmpl", transmission: "5-Speed MT / 6-Speed MT / DCA", priorityTags: ["performance", "family", "mileage", "balanced"], highlight: "5-star safety rated hatch with diesel and 120hp turbo options." },
  { id: 12, brand: "MG", name: "Comet EV", category: "hatchback", minPrice: 6.99, maxPrice: 9.65, fuels: ["Electric"], engine: "17.3 kWh EV Motor", power: "42 bhp / 110 Nm", mileage: "230 km Range", transmission: "Single-Speed Automatic", priorityTags: ["mileage", "balanced"], highlight: "Ultra-compact urban EV with dual 10.25-inch screens." },
  { id: 13, brand: "Hyundai", name: "i20 / i20 N Line", category: "hatchback", minPrice: 7.04, maxPrice: 12.52, fuels: ["Petrol"], engine: "1.2L / 1.0L Turbo GDi", power: "83 - 120 bhp / 172 Nm", mileage: "20.0 kmpl", transmission: "5-Speed MT / IVT / 7-Speed DCT", priorityTags: ["performance", "family", "balanced"], highlight: "Bose audio, sunroof, and sport-tuned N Line exhaust." },
  { id: 14, brand: "Tata", name: "Tiago EV", category: "hatchback", minPrice: 7.99, maxPrice: 11.49, fuels: ["Electric"], engine: "24 kWh EV Motor", power: "74 bhp / 114 Nm", mileage: "315 km Range", transmission: "Single-Speed Automatic", priorityTags: ["mileage", "family", "balanced"], highlight: "Affordable zero-emission urban commuter." },
  { id: 15, brand: "Citroen", name: "eC3", category: "hatchback", minPrice: 11.61, maxPrice: 13.41, fuels: ["Electric"], engine: "29.2 kWh EV Motor", power: "57 bhp / 143 Nm", mileage: "320 km Range", transmission: "Single-Speed Automatic", priorityTags: ["family", "mileage", "balanced"], highlight: "Plush suspension tuning with high ground clearance." },
  { id: 16, brand: "MINI", name: "Cooper S", category: "hatchback", minPrice: 44.90, maxPrice: 55.00, fuels: ["Petrol"], engine: "2.0L TwinPower Turbo", power: "204 bhp / 300 Nm", mileage: "15.8 kmpl", transmission: "7-Speed DCT", priorityTags: ["performance", "balanced"], highlight: "Iconic go-kart handling with circular OLED display." },

  // SEDANS (20)
  { id: 17, brand: "Tata", name: "Tigor / Tigor EV", category: "sedan", minPrice: 6.00, maxPrice: 13.75, fuels: ["Petrol", "CNG", "Electric"], engine: "1.2L Petrol / 26 kWh EV", power: "74 - 86 bhp / 170 Nm", mileage: "19.2 kmpl / 315 km EV", transmission: "5-Speed MT / AMT / Auto", priorityTags: ["mileage", "family", "balanced"], highlight: "Available in Petrol, Twin-CNG, and Pure Electric." },
  { id: 18, brand: "Hyundai", name: "Aura", category: "sedan", minPrice: 6.49, maxPrice: 9.05, fuels: ["Petrol", "CNG"], engine: "1.2L Kappa 4-Cyl", power: "82 bhp / 114 Nm", mileage: "20.5 - 28.0 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["family", "mileage", "balanced"], highlight: "Smooth 4-cylinder refinement with 6 airbags." },
  { id: 19, brand: "Maruti Suzuki", name: "Dzire (4th Gen)", category: "sedan", minPrice: 6.79, maxPrice: 10.14, fuels: ["Petrol", "CNG"], engine: "1.2L Z12E Petrol", power: "82 bhp / 112 Nm", mileage: "24.8 - 33.7 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["mileage", "family", "balanced"], highlight: "5-star safety rated sedan with sunroof and 360 camera." },
  { id: 20, brand: "Honda", name: "Amaze (3rd Gen)", category: "sedan", minPrice: 8.00, maxPrice: 10.90, fuels: ["Petrol"], engine: "1.2L i-VTEC 4-Cyl", power: "90 bhp / 110 Nm", mileage: "18.6 - 19.4 kmpl", transmission: "5-Speed MT / CVT", priorityTags: ["family", "balanced", "mileage"], highlight: "Segment-first Honda Sensing ADAS and smooth CVT." },
  { id: 21, brand: "Skoda", name: "Slavia", category: "sedan", minPrice: 10.69, maxPrice: 18.69, fuels: ["Petrol"], engine: "1.0L / 1.5L TSI Turbo", power: "115 - 150 bhp / 250 Nm", mileage: "19.3 - 20.3 kmpl", transmission: "6-Speed MT / AT / 7-Speed DSG", priorityTags: ["performance", "family", "balanced"], highlight: "179mm ground clearance with 5-star European dynamics." },
  { id: 22, brand: "Hyundai", name: "Verna Turbo", category: "sedan", minPrice: 11.00, maxPrice: 17.42, fuels: ["Petrol"], engine: "1.5L Turbo GDi", power: "160 bhp / 253 Nm", mileage: "20.6 kmpl", transmission: "6-Speed MT / 7-Speed DCT", priorityTags: ["performance", "family", "balanced"], highlight: "Fastest sedan under ₹20L with Level 2 ADAS." },
  { id: 23, brand: "Volkswagen", name: "Virtus GT", category: "sedan", minPrice: 11.56, maxPrice: 19.40, fuels: ["Petrol"], engine: "1.5L TSI EVO Turbo", power: "150 bhp / 250 Nm", mileage: "19.6 kmpl", transmission: "6-Speed MT / 7-Speed DSG", priorityTags: ["performance", "family", "balanced"], highlight: "Enthusiast favorite with razor-sharp German chassis." },
  { id: 24, brand: "Honda", name: "City / e:HEV Hybrid", category: "sedan", minPrice: 11.82, maxPrice: 20.55, fuels: ["Petrol", "CNG"], engine: "1.5L i-VTEC / Strong Hybrid", power: "121 - 126 bhp", mileage: "18.4 - 27.1 kmpl", transmission: "6-Speed MT / CVT / e-CVT", priorityTags: ["mileage", "family", "balanced"], highlight: "Executive rear comfort with 27+ kmpl hybrid efficiency." },
  { id: 25, brand: "BYD", name: "Seal Performance", category: "sedan", minPrice: 41.00, maxPrice: 53.00, fuels: ["Electric"], engine: "82.5 kWh Dual-Motor AWD", power: "530 bhp / 670 Nm", mileage: "580 km Range", transmission: "Single-Speed AWD", priorityTags: ["performance", "family", "mileage"], highlight: "0–100 km/h in 3.8s with Blade Battery technology." },
  { id: 26, brand: "Audi", name: "A4", category: "sedan", minPrice: 46.25, maxPrice: 55.11, fuels: ["Petrol"], engine: "2.0L TFSI Mild-Hybrid", power: "204 bhp / 320 Nm", mileage: "17.4 kmpl", transmission: "7-Speed S tronic", priorityTags: ["family", "balanced"], highlight: "Refined entry luxury sedan with Virtual Cockpit Plus." },
  { id: 27, brand: "Toyota", name: "Camry Hybrid", category: "sedan", minPrice: 48.00, maxPrice: 48.50, fuels: ["Petrol"], engine: "2.5L Strong Hybrid", power: "230 bhp", mileage: "25.5 kmpl", transmission: "e-CVT", priorityTags: ["family", "mileage", "balanced"], highlight: "Chauffeur-driven luxury saloon with reclining rear seats." },
  { id: 28, brand: "Mercedes-Benz", name: "C-Class (C 200 / C 300)", category: "sedan", minPrice: 59.40, maxPrice: 66.25, fuels: ["Petrol", "Diesel"], engine: "1.5L / 2.0L Turbo Mild-Hybrid", power: "204 - 258 bhp / 440 Nm", mileage: "16.9 - 23.0 kmpl", transmission: "9G-TRONIC Automatic", priorityTags: ["family", "balanced", "performance"], highlight: "Baby S-Class cabin with portrait MBUX touchscreen." },
  { id: 29, brand: "BMW", name: "3 Series / M340i", category: "sedan", minPrice: 60.60, maxPrice: 74.90, fuels: ["Petrol", "Diesel"], engine: "2.0L Turbo / 3.0L Inline-6", power: "190 - 374 bhp / 500 Nm", mileage: "13.0 - 19.6 kmpl", transmission: "8-Speed Steptronic", priorityTags: ["performance", "family", "balanced"], highlight: "Benchmark sports sedan—M340i hits 0–100 in 4.4s." },
  { id: 30, brand: "Audi", name: "A6", category: "sedan", minPrice: 64.41, maxPrice: 70.79, fuels: ["Petrol"], engine: "2.0L TFSI Mild-Hybrid", power: "245 bhp / 370 Nm", mileage: "14.1 kmpl", transmission: "7-Speed S tronic", priorityTags: ["family", "balanced"], highlight: "Executive business saloon with dual haptic touchscreens & Matrix LEDs." },
  { id: 31, brand: "BMW", name: "5 Series LWB", category: "sedan", minPrice: 72.90, maxPrice: 76.50, fuels: ["Petrol"], engine: "2.0L TwinPower Turbo Mild-Hybrid", power: "258 bhp / 400 Nm", mileage: "15.7 kmpl", transmission: "8-Speed Steptronic", priorityTags: ["family", "balanced", "performance"], highlight: "First-ever long-wheelbase 5 Series engineered for India." },
  { id: 32, brand: "Mercedes-Benz", name: "E-Class LWB", category: "sedan", minPrice: 78.50, maxPrice: 92.50, fuels: ["Petrol", "Diesel"], engine: "2.0L / 3.0L Inline-6", power: "204 - 381 bhp / 500 Nm", mileage: "14.0 - 18.5 kmpl", transmission: "9G-TRONIC", priorityTags: ["family", "balanced"], highlight: "India's bestselling luxury executive saloon." },
  { id: 33, brand: "BMW", name: "i7 / 7 Series", category: "sedan", minPrice: 184.00, maxPrice: 250.00, fuels: ["Petrol", "Diesel", "Electric"], engine: "3.0L Inline-6 / 101.7 kWh EV", power: "286 - 659 bhp / 1015 Nm", mileage: "12.6 kmpl / 625 km EV", transmission: "8-Speed Auto / Single-Speed", priorityTags: ["family", "performance", "balanced"], highlight: "31.3-inch 8K Theatre Screen and executive lounge seating." },
  { id: 34, brand: "Mercedes-Maybach", name: "S-Class (S 680)", category: "sedan", minPrice: 277.00, maxPrice: 347.00, fuels: ["Petrol"], engine: "4.0L V8 / 6.0L V12", power: "503 - 612 bhp / 900 Nm", mileage: "7.5 - 9.8 kmpl", transmission: "9G-TRONIC AWD", priorityTags: ["family", "performance"], highlight: "Chauffeur-driven opulence with active noise cancellation." },
  { id: 35, brand: "Rolls-Royce", name: "Ghost Series II", category: "sedan", minPrice: 895.00, maxPrice: 1052.00, fuels: ["Petrol"], engine: "6.75L Twin-Turbo V12", power: "563 bhp / 850 Nm", mileage: "6.3 kmpl", transmission: "8-Speed Satellite-Aided Auto", priorityTags: ["family", "performance", "balanced"], highlight: "Planar suspension delivering Rolls-Royce's magic carpet ride." },
  { id: 36, brand: "Rolls-Royce", name: "Phantom VIII Extended", category: "sedan", minPrice: 899.00, maxPrice: 1048.00, fuels: ["Petrol"], engine: "6.75L Twin-Turbo V12", power: "563 bhp / 900 Nm", mileage: "6.7 kmpl", transmission: "8-Speed Automatic", priorityTags: ["family", "performance"], highlight: "The pinnacle of bespoke automotive luxury." },

  // SUVs (24)
  { id: 37, brand: "Tata", name: "Punch / Punch EV", category: "suv", minPrice: 6.13, maxPrice: 14.49, fuels: ["Petrol", "CNG", "Electric"], engine: "1.2L Petrol / 35 kWh EV", power: "88 - 122 bhp / 190 Nm", mileage: "20.0 kmpl / 421 km EV", transmission: "5-Speed MT / AMT / Auto", priorityTags: ["mileage", "family", "balanced"], highlight: "5-star GNCAP micro-SUV with commanding stance." },
  { id: 38, brand: "Hyundai", name: "Exter", category: "suv", minPrice: 6.13, maxPrice: 10.43, fuels: ["Petrol", "CNG"], engine: "1.2L Kappa 4-Cyl", power: "82 bhp / 114 Nm", mileage: "19.4 - 27.1 km/kg", transmission: "5-Speed MT / AMT", priorityTags: ["family", "mileage", "balanced"], highlight: "Dual-cylinder CNG, dashcam, sunroof, and 6 airbags." },
  { id: 39, brand: "Maruti Suzuki", name: "Fronx", category: "suv", minPrice: 7.51, maxPrice: 13.04, fuels: ["Petrol", "CNG"], engine: "1.2L / 1.0L Boosterjet Turbo", power: "89 - 100 bhp / 148 Nm", mileage: "20.0 - 28.5 km/kg", transmission: "5-Speed MT / AMT / 6-Speed AT", priorityTags: ["mileage", "performance", "balanced"], highlight: "Coupe-SUV styling with punchy 1.0L turbo option." },
  { id: 40, brand: "Mahindra", name: "XUV 3XO", category: "suv", minPrice: 7.79, maxPrice: 15.49, fuels: ["Petrol", "Diesel"], engine: "1.2L TGDi Turbo / 1.5L Diesel", power: "117 - 130 bhp / 300 Nm", mileage: "18.2 - 21.2 kmpl", transmission: "6-Speed MT / 6-Speed AT", priorityTags: ["performance", "family", "balanced"], highlight: "Panoramic skyroof, Level 2 ADAS, and 300 Nm diesel torque." },
  { id: 41, brand: "Tata", name: "Nexon / Nexon EV", category: "suv", minPrice: 8.00, maxPrice: 17.19, fuels: ["Petrol", "Diesel", "CNG", "Electric"], engine: "1.2L Turbo / 1.5L Diesel / 45 kWh EV", power: "118 - 143 bhp / 260 Nm", mileage: "17.4 - 24.0 kmpl / 489 km EV", transmission: "MT / AMT / 7-Speed DCA", priorityTags: ["balanced", "family", "mileage", "performance"], highlight: "5-star Bharat NCAP SUV in Petrol, Diesel, CNG, and EV." },
  { id: 42, brand: "Maruti Suzuki", name: "Brezza", category: "suv", minPrice: 8.34, maxPrice: 14.14, fuels: ["Petrol", "CNG"], engine: "1.5L K15C Smart Hybrid", power: "103 bhp / 137 Nm", mileage: "19.8 - 25.5 km/kg", transmission: "5-Speed MT / 6-Speed AT", priorityTags: ["family", "mileage", "balanced"], highlight: "Bulletproof 1.5L reliability and smooth 6-speed automatic." },
  { id: 43, brand: "Maruti Suzuki", name: "Grand Vitara / Hyryder", category: "suv", minPrice: 10.99, maxPrice: 20.09, fuels: ["Petrol", "CNG"], engine: "1.5L Strong Hybrid", power: "103 - 116 bhp", mileage: "21.1 - 27.9 kmpl", transmission: "5-Speed MT / 6-Speed AT / e-CVT", priorityTags: ["mileage", "family", "balanced"], highlight: "Near-28 kmpl strong hybrid efficiency plus optional AWD." },
  { id: 44, brand: "Hyundai", name: "Creta / Creta Electric", category: "suv", minPrice: 11.00, maxPrice: 23.50, fuels: ["Petrol", "Diesel", "Electric"], engine: "1.5L Turbo / 1.5L Diesel / 51.4 kWh EV", power: "115 - 171 bhp / 253 Nm", mileage: "17.4 - 21.8 kmpl / 473 km EV", transmission: "MT / IVT / 7-Speed DCT / AT", priorityTags: ["family", "balanced", "mileage", "performance"], highlight: "India's bestselling midsize SUV with dual screens." },
  { id: 45, brand: "Mahindra", name: "Thar ROXX", category: "suv", minPrice: 12.99, maxPrice: 23.09, fuels: ["Petrol", "Diesel"], engine: "2.0L mStallion / 2.2L mHawk", power: "175 bhp / 380 Nm", mileage: "15.2 kmpl", transmission: "6-Speed MT / 6-Speed AT (4x4)", priorityTags: ["performance", "family"], highlight: "5-door body-on-frame off-roader with panoramic sunroof." },
  { id: 46, brand: "Mahindra", name: "Scorpio-N / Scorpio Classic", category: "suv", minPrice: 13.69, maxPrice: 25.49, fuels: ["Petrol", "Diesel"], engine: "2.0L mStallion Turbo / 2.2L mHawk Diesel", power: "175 - 203 bhp / 400 Nm", mileage: "15.4 - 16.5 kmpl", transmission: "6-Speed MT / 6-Speed AT (4XPLOR 4WD)", priorityTags: ["family", "performance", "balanced"], highlight: "Big Daddy of SUVs—ladder-frame 7-seater with panoramic sunroof & 4WD." },
  { id: 47, brand: "Mahindra", name: "XUV700", category: "suv", minPrice: 13.99, maxPrice: 25.14, fuels: ["Petrol", "Diesel"], engine: "2.0L Turbo / 2.2L Diesel", power: "200 bhp / 450 Nm", mileage: "16.5 kmpl", transmission: "6-Speed MT / 6-Speed AT (AWD)", priorityTags: ["family", "performance", "balanced"], highlight: "Flagship 7-seater cruiser with twin HD screens and ADAS." },
  { id: 48, brand: "Tata", name: "Harrier / Safari", category: "suv", minPrice: 14.99, maxPrice: 26.79, fuels: ["Diesel"], engine: "2.0L Kryotec Diesel", power: "170 bhp / 350 Nm", mileage: "16.3 kmpl", transmission: "6-Speed MT / 6-Speed AT", priorityTags: ["family", "performance", "balanced"], highlight: "Land Rover-derived platform with 5-star Bharat NCAP safety." },
  { id: 49, brand: "Mahindra", name: "XEV 9e / BE 6", category: "suv", minPrice: 18.90, maxPrice: 30.50, fuels: ["Electric"], engine: "59 / 79 kWh Blade LFP EV", power: "231 - 286 bhp / 380 Nm", mileage: "535 - 682 km Range", transmission: "Single-Speed RWD", priorityTags: ["performance", "mileage", "family", "balanced"], highlight: "Born-electric INGLO platform with 0–100 in 6.7s." },
  { id: 50, brand: "Toyota", name: "Fortuner", category: "suv", minPrice: 35.11, maxPrice: 43.75, fuels: ["Petrol", "Diesel"], engine: "2.7L Petrol / 2.8L GD Turbo Diesel", power: "166 - 204 bhp / 500 Nm", mileage: "14.4 kmpl", transmission: "6-Speed MT / 6-Speed AT (4x4)", priorityTags: ["family", "performance", "balanced"], highlight: "India's undisputed full-size SUV benchmark with 500 Nm torque." },
  { id: 51, brand: "Toyota", name: "Fortuner Legender / GR-S", category: "suv", minPrice: 43.35, maxPrice: 50.97, fuels: ["Diesel"], engine: "2.8L 4-Cyl Turbo Diesel", power: "204 bhp / 500 Nm", mileage: "14.2 kmpl", transmission: "6-Speed Sequential AT (4WD)", priorityTags: ["family", "performance"], highlight: "Sportier dual-tone styling, GR-tuned suspension & ventilated seats." },
  { id: 52, brand: "Audi", name: "Q3 / Q3 Sportback", category: "suv", minPrice: 44.89, maxPrice: 55.64, fuels: ["Petrol"], engine: "2.0L TFSI quattro AWD", power: "190 bhp / 320 Nm", mileage: "14.9 kmpl", transmission: "7-Speed S tronic AWD", priorityTags: ["family", "balanced", "performance"], highlight: "Standard quattro all-wheel drive with panoramic glass roof." },
  { id: 53, brand: "BMW", name: "X1 / iX1", category: "suv", minPrice: 49.50, maxPrice: 66.90, fuels: ["Petrol", "Diesel", "Electric"], engine: "1.5L Petrol / 2.0L Diesel / 66.4 kWh EV", power: "136 - 313 bhp / 494 Nm", mileage: "16.3 - 20.3 kmpl / 440 km EV", transmission: "7-Speed Steptronic DCT / AWD", priorityTags: ["family", "balanced", "mileage"], highlight: "Curved widescreen cockpit with Harman Kardon audio." },
  { id: 54, brand: "Mercedes-Benz", name: "GLC (GLC 300 / 220d)", category: "suv", minPrice: 75.90, maxPrice: 76.90, fuels: ["Petrol", "Diesel"], engine: "2.0L Turbo Mild-Hybrid", power: "197 - 258 bhp / 440 Nm", mileage: "14.7 - 19.4 kmpl", transmission: "9G-TRONIC 4MATIC AWD", priorityTags: ["family", "balanced"], highlight: "Transparent bonnet off-road camera and plush 4MATIC ride." },
  { id: 55, brand: "Audi", name: "Q7 / Q8", category: "suv", minPrice: 88.66, maxPrice: 117.00, fuels: ["Petrol"], engine: "3.0L V6 TFSI Mild-Hybrid quattro", power: "340 bhp / 500 Nm", mileage: "11.2 kmpl", transmission: "8-Speed Tiptronic AWD", priorityTags: ["family", "performance", "balanced"], highlight: "7-seat luxury flagship (Q7) and coupe-SUV (Q8) with air suspension." },
  { id: 56, brand: "BMW", name: "X5", category: "suv", minPrice: 96.00, maxPrice: 109.00, fuels: ["Petrol", "Diesel"], engine: "3.0L Inline-6 TwinPower Turbo", power: "286 - 381 bhp / 650 Nm", mileage: "12.0 - 15.8 kmpl", transmission: "8-Speed Steptronic xDrive", priorityTags: ["family", "performance", "balanced"], highlight: "Adaptive two-axle air suspension and Sky Lounge panoramic roof." },
  { id: 57, brand: "Land Rover", name: "Defender 110", category: "suv", minPrice: 104.00, maxPrice: 279.00, fuels: ["Petrol", "Diesel"], engine: "2.0L / 3.0L Inline-6 / 5.0L V8", power: "300 - 635 bhp / 750 Nm", mileage: "8.5 - 14.0 kmpl", transmission: "8-Speed Auto AWD", priorityTags: ["family", "performance", "balanced"], highlight: "Unstoppable Terrain Response 2 off-roader." },
  { id: 58, brand: "Mercedes-AMG", name: "G 63 (G-Wagon)", category: "suv", minPrice: 360.00, maxPrice: 400.00, fuels: ["Petrol"], engine: "4.0L V8 Biturbo", power: "585 bhp / 850 Nm", mileage: "7.5 kmpl", transmission: "9-Speed AMG TCT 4MATIC", priorityTags: ["performance", "family"], highlight: "Iconic V8 luxury off-roader with three locking diffs." },
  { id: 59, brand: "Lamborghini", name: "Urus SE / Performante", category: "suv", minPrice: 422.00, maxPrice: 457.00, fuels: ["Petrol", "Electric"], engine: "4.0L Twin-Turbo V8 Plug-In Hybrid", power: "666 - 800 bhp / 950 Nm", mileage: "11.8 kmpl", transmission: "8-Speed Automatic AWD", priorityTags: ["performance", "family"], highlight: "World's first Super SUV—800 CV Urus SE hits 0–100 in 3.4s." },
  { id: 60, brand: "Rolls-Royce", name: "Cullinan Series II", category: "suv", minPrice: 1050.00, maxPrice: 1225.00, fuels: ["Petrol"], engine: "6.75L Twin-Turbo V12", power: "563 bhp / 850 Nm", mileage: "6.6 kmpl", transmission: "8-Speed Auto AWD", priorityTags: ["family", "performance"], highlight: "Ultra-luxury V12 SUV with Viewing Suite." },

  // SPORTS & HYPERCARS (26)
  { id: 61, brand: "Volkswagen", name: "Golf GTI", category: "sports", minPrice: 52.00, maxPrice: 55.00, fuels: ["Petrol"], engine: "2.0L TSI EA888 Turbo", power: "265 bhp / 370 Nm", mileage: "13.5 kmpl", transmission: "7-Speed DSG", priorityTags: ["performance", "balanced"], highlight: "Benchmark hot hatch with front differential lock." },
  { id: 62, brand: "Hyundai", name: "Ioniq 5 N", category: "sports", minPrice: 65.00, maxPrice: 70.00, fuels: ["Electric"], engine: "84 kWh Dual-Motor AWD", power: "650 bhp / 770 Nm", mileage: "448 km Range", transmission: "N e-Shift 8-Speed Sim", priorityTags: ["performance", "mileage", "balanced"], highlight: "Track-ready electric performance machine (0–100 in 3.4s)." },
  { id: 63, brand: "Kia", name: "EV6 GT", category: "sports", minPrice: 65.95, maxPrice: 68.00, fuels: ["Electric"], engine: "77.4 kWh Dual-Motor AWD", power: "585 bhp / 740 Nm", mileage: "528 km Range", transmission: "Single-Speed AWD", priorityTags: ["performance", "family", "mileage"], highlight: "0–100 km/h in 3.5 seconds with Drift Mode." },
  { id: 64, brand: "BMW", name: "Z4 M40i", category: "sports", minPrice: 90.90, maxPrice: 96.00, fuels: ["Petrol"], engine: "3.0L TwinPower Turbo Inline-6", power: "340 bhp / 500 Nm", mileage: "12.1 kmpl", transmission: "6-Speed MT / 8-Speed Auto", priorityTags: ["performance"], highlight: "Open-top roadster with 50:50 weight distribution." },
  { id: 65, brand: "BMW", name: "M2 (G87)", category: "sports", minPrice: 99.90, maxPrice: 103.00, fuels: ["Petrol"], engine: "3.0L TwinPower Turbo Inline-6", power: "460 bhp / 550 Nm", mileage: "10.1 kmpl", transmission: "6-Speed MT / 8-Speed Auto", priorityTags: ["performance"], highlight: "Pure rear-wheel-drive coupe with a true 6-speed manual." },
  { id: 66, brand: "Audi", name: "RS5 / RS e-tron GT", category: "sports", minPrice: 113.00, maxPrice: 195.00, fuels: ["Petrol", "Electric"], engine: "2.9L Twin-Turbo V6 / 93.4 kWh EV", power: "450 - 646 bhp / 830 Nm", mileage: "10.8 kmpl / 500 km EV", transmission: "8-Speed Auto / 2-Speed EV", priorityTags: ["performance", "family", "balanced"], highlight: "All-weather quattro grip with 0–100 in 3.3s." },
  { id: 67, brand: "BMW", name: "M4 Competition / M5", category: "sports", minPrice: 153.00, maxPrice: 199.00, fuels: ["Petrol", "Electric"], engine: "3.0L Inline-6 / 4.4L V8 Plug-in Hybrid", power: "530 - 727 bhp / 1000 Nm", mileage: "9.7 - 14.0 kmpl", transmission: "8-Speed M Steptronic xDrive", priorityTags: ["performance", "family"], highlight: "M xDrive switchable 4WD/RWD drift modes with carbon bucket seats." },
  { id: 68, brand: "Porsche", name: "718 Cayman GTS 4.0", category: "sports", minPrice: 159.42, maxPrice: 168.00, fuels: ["Petrol"], engine: "4.0L Naturally Aspirated Flat-6", power: "394 bhp / 420 Nm", mileage: "10.4 kmpl", transmission: "6-Speed MT / 7-Speed PDK", priorityTags: ["performance"], highlight: "Mid-engine balance with a high-revving flat-six." },
  { id: 69, brand: "Mercedes-AMG", name: "C 63 S E Performance", category: "sports", minPrice: 195.00, maxPrice: 205.00, fuels: ["Petrol", "Electric"], engine: "2.0L F1 Turbo + Rear E-Motor", power: "680 bhp / 1020 Nm", mileage: "14.5 kmpl", transmission: "9-Speed AMG SPEEDSHIFT MCT", priorityTags: ["performance", "family"], highlight: "F1 electric-exhaust turbo delivering 1,020 Nm and 0–100 in 3.4s." },
  { id: 70, brand: "Audi", name: "R8 V10 Performance", category: "sports", minPrice: 230.00, maxPrice: 272.00, fuels: ["Petrol"], engine: "5.2L Naturally Aspirated FSI V10", power: "620 bhp / 580 Nm", mileage: "6.7 kmpl", transmission: "7-Speed S tronic quattro", priorityTags: ["performance"], highlight: "8,700 rpm naturally aspirated V10 supercar icon." },
  { id: 71, brand: "Porsche", name: "911 Carrera GTS", category: "sports", minPrice: 275.00, maxPrice: 295.00, fuels: ["Petrol"], engine: "3.6L T-Hybrid Flat-6", power: "541 bhp / 610 Nm", mileage: "9.5 kmpl", transmission: "8-Speed PDK", priorityTags: ["performance", "balanced"], highlight: "Electrically assisted turbo flat-six with zero turbo lag." },
  { id: 72, brand: "Mercedes-AMG", name: "GT 63 S E Performance", category: "sports", minPrice: 330.00, maxPrice: 365.00, fuels: ["Petrol", "Electric"], engine: "4.0L V8 Biturbo + Rear E-Drive", power: "843 bhp / 1470 Nm", mileage: "11.5 kmpl", transmission: "9-Speed AMG MCT 4MATIC+", priorityTags: ["performance", "family"], highlight: "Most powerful AMG production car—0–100 km/h in 2.9s." },
  { id: 73, brand: "Aston Martin", name: "Vantage", category: "sports", minPrice: 399.00, maxPrice: 430.00, fuels: ["Petrol"], engine: "4.0L Twin-Turbo V8", power: "665 bhp / 800 Nm", mileage: "8.2 kmpl", transmission: "8-Speed ZF Auto RWD", priorityTags: ["performance"], highlight: "Hand-built British front-mid-engine V8 grand tourer." },
  { id: 74, brand: "Lamborghini", name: "Huracan Tecnica / Sterrato", category: "sports", minPrice: 404.00, maxPrice: 499.00, fuels: ["Petrol"], engine: "5.2L Naturally Aspirated V10", power: "640 bhp / 565 Nm", mileage: "7.2 kmpl", transmission: "7-Speed LDF Dual-Clutch", priorityTags: ["performance"], highlight: "Screaming 8,500 rpm V10 rear-wheel steering track weapon." },
  { id: 75, brand: "Ferrari", name: "296 GTB", category: "sports", minPrice: 540.00, maxPrice: 580.00, fuels: ["Petrol", "Electric"], engine: "3.0L V6 Plug-in Hybrid", power: "830 bhp / 740 Nm", mileage: "15.6 kmpl", transmission: "8-Speed F1 DCT", priorityTags: ["performance"], highlight: "8,500 rpm V6 hybrid hitting 0–100 km/h in 2.9 seconds." },
  { id: 76, brand: "Lamborghini", name: "Temerario", category: "sports", minPrice: 600.00, maxPrice: 650.00, fuels: ["Petrol", "Electric"], engine: "4.0L Flat-Plane Twin-Turbo V8 + 3 E-Motors", power: "920 bhp / 800 Nm", mileage: "11.0 kmpl", transmission: "8-Speed Dual-Clutch AWD", priorityTags: ["performance"], highlight: "10,000 rpm redline V8 hybrid successor to the Huracan." },
  { id: 77, brand: "Rolls-Royce", name: "Spectre", category: "sports", minPrice: 750.00, maxPrice: 825.00, fuels: ["Electric"], engine: "102 kWh Ultra-Luxury Coupe", power: "585 bhp / 900 Nm", mileage: "530 km Range", transmission: "Single-Speed AWD", priorityTags: ["performance", "family", "mileage"], highlight: "World's first ultra-luxury electric super coupe." },
  { id: 78, brand: "Ferrari", name: "SF90 Stradale", category: "sports", minPrice: 750.00, maxPrice: 855.00, fuels: ["Petrol", "Electric"], engine: "4.0L V8 + 3 Electric Motors", power: "1000 bhp / 800 Nm", mileage: "16.4 kmpl", transmission: "8-Speed F1 DCT AWD", priorityTags: ["performance"], highlight: "0–100 km/h in 2.5 seconds with F1 hybrid modes." },
  { id: 79, brand: "Lamborghini", name: "Revuelto", category: "sports", minPrice: 889.00, maxPrice: 950.00, fuels: ["Petrol", "Electric"], engine: "6.5L V12 + 3 E-Motors", power: "1015 bhp / 1062 Nm", mileage: "9.8 kmpl", transmission: "8-Speed Dual-Clutch", priorityTags: ["performance"], highlight: "1,015 CV V12 plug-in hybrid supercar hitting 350+ km/h." },
  { id: 80, brand: "Bugatti", name: "Veyron 16.4", category: "sports", minPrice: 1200.00, maxPrice: 1450.00, fuels: ["Petrol"], engine: "8.0L Quad-Turbo W16", power: "1001 bhp / 1250 Nm", mileage: "6.8 kmpl", transmission: "7-Speed DSG AWD", priorityTags: ["performance"], highlight: "The hypercar that broke the 400 km/h production barrier." },
  { id: 81, brand: "Koenigsegg", name: "Agera RS / Regera", category: "sports", minPrice: 1850.00, maxPrice: 2200.00, fuels: ["Petrol", "Electric"], engine: "5.0L Twin-Turbo V8 / Direct Drive Hybrid", power: "1360 - 1500 bhp / 2000 Nm", mileage: "6.2 kmpl", transmission: "7-Speed Paddle / Koenigsegg Direct Drive", priorityTags: ["performance"], highlight: "Swedish megacar with dihedral synchro-helix doors & 447 km/h speed." },
  { id: 82, brand: "Pagani", name: "Huayra Roadster BC", category: "sports", minPrice: 2100.00, maxPrice: 2650.00, fuels: ["Petrol"], engine: "6.0L Mercedes-AMG Twin-Turbo V12", power: "802 bhp / 1050 Nm", mileage: "6.5 kmpl", transmission: "7-Speed Xtrac Automated Manual", priorityTags: ["performance"], highlight: "Carbo-Titanium bespoke Italian art weighing just 1,250 kg." },
  { id: 83, brand: "Pagani", name: "Utopia", category: "sports", minPrice: 2400.00, maxPrice: 2800.00, fuels: ["Petrol"], engine: "6.0L AMG Twin-Turbo V12", power: "864 bhp / 1100 Nm", mileage: "6.4 kmpl", transmission: "7-Speed Pure Gated Manual / AMT", priorityTags: ["performance"], highlight: "Analog twin-turbo V12 masterpiece available with a true 7-speed manual." },
  { id: 84, brand: "Koenigsegg", name: "Jesko Absolut", category: "sports", minPrice: 2500.00, maxPrice: 2950.00, fuels: ["Petrol"], engine: "5.1L Twin-Turbo V8 (E85)", power: "1600 bhp / 1500 Nm", mileage: "5.8 kmpl / 500+ km/h Theoretical", transmission: "9-Speed Light Speed Transmission (LST)", priorityTags: ["performance"], highlight: "0.278 Cd low-drag Swedish hypercar engineered to be fastest ever." },
  { id: 85, brand: "Bugatti", name: "Chiron Pur Sport", category: "sports", minPrice: 1921.00, maxPrice: 2840.00, fuels: ["Petrol"], engine: "8.0L Quad-Turbo W16", power: "1500 bhp / 1600 Nm", mileage: "5.5 kmpl", transmission: "7-Speed Dual-Clutch AWD", priorityTags: ["performance"], highlight: "1,500 horsepower quad-turbo W16 engineering masterpiece." },
  { id: 86, brand: "Bugatti", name: "Tourbillon", category: "sports", minPrice: 3480.00, maxPrice: 3800.00, fuels: ["Petrol", "Electric"], engine: "8.3L V16 + 3 E-Motors", power: "1800 bhp / 1900 Nm", mileage: "445 km/h Top Speed", transmission: "8-Speed Dual-Clutch AWD", priorityTags: ["performance"], highlight: "1,800 hp naturally aspirated V16 hybrid hypercar." }
];

// ================= 2. WEB AUDIO ENGINE SOUND SYNTHESIZER =================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function makeExhaustDistortion(amount = 45) {
  const samples = 44100;
  const curve = new Float32Array(samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < samples; i++) {
    const x = (i * 2) / samples - 1;
    curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
  }
  return curve;
}

function playInputRev() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc1.type = "sawtooth";
    osc2.type = "triangle";

    osc1.frequency.setValueAtTime(75, now);
    osc1.frequency.exponentialRampToValueAtTime(195, now + 0.14);
    osc1.frequency.exponentialRampToValueAtTime(85, now + 0.35);

    osc2.frequency.setValueAtTime(37.5, now);
    osc2.frequency.exponentialRampToValueAtTime(97.5, now + 0.14);
    osc2.frequency.exponentialRampToValueAtTime(42.5, now + 0.35);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.exponentialRampToValueAtTime(1100, now + 0.14);
    filter.frequency.exponentialRampToValueAtTime(300, now + 0.35);
    filter.Q.value = 4;

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.36);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.37);
    osc2.stop(now + 0.37);
  } catch (err) {}
}

function playLamboExhaust() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const duration = 1.45;

    const shaper = ctx.createWaveShaper();
    shaper.curve = makeExhaustDistortion(75);
    shaper.oversample = "4x";

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(420, now);
    filter.frequency.exponentialRampToValueAtTime(1850, now + 0.55);
    filter.frequency.exponentialRampToValueAtTime(1250, now + 0.68);
    filter.frequency.exponentialRampToValueAtTime(2400, now + 1.05);
    filter.frequency.exponentialRampToValueAtTime(380, now + duration);
    filter.Q.value = 1.8;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.01, now);
    masterGain.gain.linearRampToValueAtTime(0.55, now + 0.08);
    masterGain.gain.setValueAtTime(0.58, now + 1.0);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    const ratios = [0.5, 1, 1.5, 2, 3];
    ratios.forEach((ratio, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = idx % 2 === 0 ? "sawtooth" : "square";
      oscGain.gain.value = idx === 1 ? 0.45 : 0.22;

      osc.frequency.setValueAtTime(95 * ratio, now);
      osc.frequency.exponentialRampToValueAtTime(360 * ratio, now + 0.52);
      osc.frequency.exponentialRampToValueAtTime(245 * ratio, now + 0.62);
      osc.frequency.exponentialRampToValueAtTime(450 * ratio, now + 1.05);
      osc.frequency.exponentialRampToValueAtTime(110 * ratio, now + duration);

      osc.connect(oscGain);
      oscGain.connect(shaper);
      osc.start(now);
      osc.stop(now + duration);
    });

    [1.08, 1.19, 1.31].forEach((popTime) => {
      const bufferSize = ctx.sampleRate * 0.06;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.015));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const popFilter = ctx.createBiquadFilter();
      popFilter.type = "lowpass";
      popFilter.frequency.value = 950;

      const popGain = ctx.createGain();
      popGain.gain.setValueAtTime(0.65, now + popTime);
      popGain.gain.exponentialRampToValueAtTime(0.01, now + popTime + 0.06);

      noise.connect(popFilter);
      popFilter.connect(popGain);
      popGain.connect(ctx.destination);
      noise.start(now + popTime);
    });

    shaper.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);
  } catch (err) {}
}

// ================= 3. CAR CARD PHOTO LOADER & RENDERING =================
const carImageCache = {};

async function loadCarPhoto(imgElement, car) {
  const cleanName = car.name
    .split("/")[0]
    .replace(/\(.*?\)/g, "")
    .replace(/\b(GenX|Series II|Extended|GR-S|Pur Sport|Performance|4th Gen|3rd Gen|LWB|Competition)\b/gi, "")
    .trim();
  const query = `${car.brand} ${cleanName}`;

  if (carImageCache[query]) {
    imgElement.src = carImageCache[query];
    imgElement.style.opacity = "0.4";
    return;
  }

  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&prop=pageimages&pithumbsize=800&format=json&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data?.query?.pages;
    if (pages) {
      const firstPage = Object.values(pages)[0];
      const imgUrl = firstPage?.thumbnail?.source;
      if (imgUrl) {
        carImageCache[query] = imgUrl;
        imgElement.src = imgUrl;
        imgElement.style.opacity = "0.4";
      }
    }
  } catch (err) {}
}

function formatIndianPrice(lakhs) {
  return lakhs >= 100 ? `₹${(lakhs / 100).toFixed(2)} Cr` : `₹${lakhs.toFixed(2)} L`;
}

function createCarCard(car) {
  const card = document.createElement("article");
  card.className = "car-card";
  card.innerHTML = `
    <img class="car-bg-img" alt="${car.brand} ${car.name}" />
    <div class="car-card-overlay"></div>
    <div class="car-card-body">
      <div class="card-header">
        <span class="car-brand">${car.brand}</span>
        <span class="car-price">${formatIndianPrice(car.minPrice)} – ${formatIndianPrice(car.maxPrice)}</span>
      </div>
      <h3 class="car-title">${car.name}</h3>
      <p class="car-highlight">${car.highlight}</p>
      <div class="car-specs">
        <span><strong>Power:</strong> ${car.power}</span>
        <span><strong>Mileage:</strong> ${car.mileage}</span>
        <span><strong>Fuel:</strong> ${car.fuels.join(", ")}</span>
      </div>
      <button type="button" class="btn-secondary view-specs-btn" data-id="${car.id}">
        VIEW FULL SPECS
      </button>
    </div>
  `;

  loadCarPhoto(card.querySelector(".car-bg-img"), car);
  return card;
}

function renderShowroom() {
  ["hatchback", "sedan", "suv", "sports"].forEach((cat) => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    grid.innerHTML = "";
    carsDatabase
      .filter((car) => car.category === cat)
      .forEach((car) => grid.appendChild(createCarCard(car)));
  });
}

function openModal(carId) {
  const car = carsDatabase.find((c) => c.id === Number(carId));
  const modal = document.getElementById("spec-modal");
  const modalBody = document.getElementById("modal-body");
  if (!car || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <span class="badge">${car.category.toUpperCase()}</span>
    <h2>${car.brand} ${car.name}</h2>
    <p class="modal-price">Ex-Showroom Price: <strong>${formatIndianPrice(car.minPrice)} – ${formatIndianPrice(car.maxPrice)}</strong></p>
    <p>${car.highlight}</p>
    <ul class="modal-spec-list">
      <li><strong>Engine / Motor:</strong> ${car.engine}</li>
      <li><strong>Max Output:</strong> ${car.power}</li>
      <li><strong>Transmission:</strong> ${car.transmission}</li>
      <li><strong>Fuel Options:</strong> ${car.fuels.join(", ")}</li>
      <li><strong>Efficiency / Range:</strong> ${car.mileage}</li>
    </ul>
  `;
  modal.classList.remove("hidden");
}

// ================= 4. EVENT LISTENERS & DIRECT SEARCH =================
document.addEventListener("DOMContentLoaded", () => {
  renderShowroom();

  const budgetInput = document.getElementById("budget");
  if (budgetInput) {
    budgetInput.min = "2";
    budgetInput.max = "5000";
  }

  const formControls = document.querySelectorAll("#advisor-form input, #advisor-form select");
  formControls.forEach((control) => {
    control.addEventListener("change", playInputRev);
    control.addEventListener("focus", playInputRev);
  });

  const advisorForm = document.getElementById("advisor-form");
  const resultsContainer = document.getElementById("recommendation-results");
  const modal = document.getElementById("spec-modal");
  const closeModalBtn = document.getElementById("close-modal");

  // Direct Search by Car Brand or Model Name
  const searchInput = document.getElementById("car-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  function handleDirectSearch() {
    if (!searchInput || !resultsContainer) return;
    const query = searchInput.value.trim().toLowerCase();

    if (clearSearchBtn) {
      clearSearchBtn.classList.toggle("hidden", query.length === 0);
    }

    if (query.length === 0) {
      resultsContainer.innerHTML = "";
      return;
    }

    const searchMatches = carsDatabase.filter((car) => {
      const fullName = `${car.brand} ${car.name}`.toLowerCase();
      return (
        fullName.includes(query) ||
        car.brand.toLowerCase().includes(query) ||
        car.name.toLowerCase().includes(query) ||
        car.category.toLowerCase().includes(query)
      );
    });

    resultsContainer.innerHTML = "";

    if (searchMatches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <p>No car found matching "<strong>${searchInput.value}</strong>". Try searching another model like <em>Scorpio, Fortuner, Koenigsegg, Pagani, or Lamborghini</em>.</p>
        </div>
      `;
      return;
    }

    const heading = document.createElement("h3");
    heading.className = "results-heading";
    heading.textContent = `Search Results for "${searchInput.value}" (${searchMatches.length} found):`;
    resultsContainer.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "car-grid";
    searchMatches.forEach((car) => grid.appendChild(createCarCard(car)));
    resultsContainer.appendChild(grid);
  }

  if (searchInput) {
    searchInput.addEventListener("focus", playInputRev);
    searchInput.addEventListener("input", handleDirectSearch);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        playLamboExhaust();
        handleDirectSearch();
      }
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearSearchBtn.classList.add("hidden");
      resultsContainer.innerHTML = "";
      searchInput.focus();
    });
  }

  // Filter Advisor Form Submission
  if (advisorForm && resultsContainer) {
    advisorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      playLamboExhaust();

      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.classList.add("hidden");

      const maxBudget = parseFloat(document.getElementById("budget").value);
      const selectedCategory = document.getElementById("category").value;
      const selectedFuel = document.getElementById("fuel").value;
      const selectedPriority = document.getElementById("priority").value;

      let matches = carsDatabase.filter((car) => {
        const withinBudget = car.minPrice <= maxBudget;
        const matchesCategory = selectedCategory === "all" || car.category === selectedCategory;
        const matchesFuel = selectedFuel === "all" || car.fuels.includes(selectedFuel);
        const matchesPriority = selectedPriority === "balanced" || car.priorityTags.includes(selectedPriority);
        return withinBudget && matchesCategory && matchesFuel && matchesPriority;
      });

      let isFallback = false;
      if (matches.length === 0) {
        isFallback = true;
        matches = carsDatabase
          .filter((car) => (selectedCategory === "all" || car.category === selectedCategory) && (selectedFuel === "all" || car.fuels.includes(selectedFuel)))
          .sort((a, b) => Math.abs(a.minPrice - maxBudget) - Math.abs(b.minPrice - maxBudget))
          .slice(0, 6);
      }

      resultsContainer.innerHTML = "";
      if (matches.length === 0) {
        resultsContainer.innerHTML = `<div class="no-results"><p>No cars matched that exact body type + fuel combination. Try selecting <strong>Any Fuel</strong> or <strong>Any Category</strong>.</p></div>`;
        return;
      }

      const heading = document.createElement("h3");
      heading.className = "results-heading";
      heading.textContent = isFallback
        ? `No exact match under ${formatIndianPrice(maxBudget)} — showing closest available ${selectedCategory === "all" ? "cars" : selectedCategory + "s"}:`
        : `${matches.length} Recommended Match${matches.length > 1 ? "es" : ""} Under ${formatIndianPrice(maxBudget)}:`;
      resultsContainer.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "car-grid";
      matches.forEach((car) => grid.appendChild(createCarCard(car)));
      resultsContainer.appendChild(grid);
    });
  }

  // Modal Triggers
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-specs-btn");
    if (btn) {
      playInputRev();
      openModal(btn.dataset.id);
    }
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }
});