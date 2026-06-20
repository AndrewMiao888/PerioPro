const hydrogenData = {
  // 1. Fundamental Identity & Classification
  num: 1,
  symbol: "H",
  name: "Hydrogen",
  type: "Nonmetal", // Metallic character
  group: 1,
  period: 1,
  block: "s",
  casRegistryNumber: "1333-74-0",
  discoverer: "Henry Cavendish",
  year: 1766,
  originOfName: "Greek words 'hydro' (water) and 'genes' (creator)",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.00008988, // g/cm³ at STP
  melting: 14.01, // Kelvin
  boiling: 20.28, // Kelvin
  triplePointTemperature: 13.8033, // Kelvin
  triplePointPressure: 7.04, // kPa
  criticalPointTemperature: 32.938, // Kelvin
  criticalPointPressure: 1.2858, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null, // Extremely high at STP
  thermalConductivity: 0.1805, // W/(m·K)
  thermalExpansionCoefficient: null, // Defined for bulk solids/liquids
  speedOfSound: 1310, // m/s at 27°C
  refractiveIndex: 1.000132,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 2, // Diatomic (H2) and Atomic (H), or spin isomers (ortho/para)
  color: "Colorless",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 14.304, // J/(g·K)
  molarHeatCapacity: 28.836, // J/(mol·K)
  heatOfFusion: 0.117, // kJ/mol
  heatOfVaporization: 0.904, // kJ/mol
  heatOfAtomization: 218, // kJ/mol
  standardMolarEntropy: 130.68, // J/(mol·K) for H2 gas
  standardEnthalpyOfFormation: 0.0, // Reference state
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.55e-4, // m²/s
  criticalTemperatureSuperconductivity: null, // Only metallic H under massive pressure

  // 4. Atomic & Structural Variables
  radius: 53, // pm (Atomic/Bohr radius)
  covalentRadius: 31, // pm
  vanderWaalsRadius: 120, // pm
  ionicRadius: 139, // pm (for H- hydride ion)
  crystalStructure: "Hexagonal close-packed", // For solid hydrogen below 14K
  latticeConstantA: 378, // pm
  latticeConstantB: 378, // pm
  latticeConstantC: 616, // pm
  axialAngleAlpha: 90, // degrees
  axialAngleBeta: 90, // degrees
  axialAngleGamma: 120, // degrees
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // In solid HCP phase
  packingFraction: 0.74, // Solid HCP phase
  atomicVolume: 14.1, // cm³/mol (solidified)
  bohr: "1", // Shell configuration
  orbital: "1s1", // Full electron configuration
  valence: 1,
  coreElectronCount: 0,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.20, // Pauling scale
  electronegativityMulliken: 3.06,
  electronegativityAllredRochow: 2.20,
  ionization: 1312, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1312.0], // Only has one electron
  electronAffinity: 72.8, // kJ/mol
  oxidation: "+1, -1", // Common states
  maximumOxidationState: 1,
  minimumOxidationState: -1,
  chemicalHardness: 6.42, // eV
  chemicalSoftness: 0.156, // eV⁻¹
  electrophilicityIndex: 0.36,
  polarizability: 0.667, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.00, // V (The reference point: SHE)
  flameTestColor: "Pale blue / Colorless",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 1, // n
  azimuthalQuantumNumber: 0, // l (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms (+1/2)
  effectiveNuclearCharge: 1.0, // Zeff (No shielding core electrons)
  slatersShieldingConstant: 0.0,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -13.6, // eV (Ground state)
  workFunction: 4.0, // eV (approximate for compiled atomic layers)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 1.008,
  massNumber: 1, // For Protium
  neutronNumber: 0, // For Protium
  isotopeCount: 7, // H-1 to H-7
  stableIsotopeCount: 2, // H-1 (Protium) and H-2 (Deuterium)
  isotopicAbundance: {
    H1: 99.988, // % abundance
    H2: 0.012,  // % abundance
    H3: 0.000   // Trace (Tritium)
  },
  halfLife: "Stable", // For Protium (H-1)
  decayMode: "None", // For Protium (H-1)
  decayEnergy: null,
  nuclearSpin: 0.5, // 1/2 (Crucial for Proton NMR)
  magneticDipoleMoment: 2.7928, // nuclear magnetons
  neutronCrossSection: 0.332, // barns (thermal neutron absorption)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 75.0, // % by mass
  solarAbundance: 71.0, // % by mass
  crustalAbundance: 0.14, // % by mass (1400 mg/kg)
  oceanicAbundance: 10.8, // % by mass
  humanBodyAbundance: 10.0, // % by mass
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "Big Bang nucleosynthesis"
};

const heliumData = {
  // 1. Fundamental Identity & Classification
  num: 2,
  symbol: "He",
  name: "Helium",
  type: "Nonmetal", // Noble gas
  group: 18,
  period: 1,
  block: "s",
  casRegistryNumber: "7440-59-7",
  discoverer: "Pierre Janssen, Norman Lockyer",
  year: 1868,
  originOfName: "Greek word 'helios' (sun), as it was first detected in the solar spectrum",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.0001786, // g/cm³ at STP
  melting: 0.95, // Kelvin (At a massive 2.5 MPa of pressure; does not freeze at 1 atm)
  boiling: 4.22, // Kelvin
  triplePointTemperature: 2.177, // Kelvin (Lambda point for superfluid transition, no true solid-liquid-gas triple point exists)
  triplePointPressure: 5.04, // kPa
  criticalPointTemperature: 5.19, // Kelvin
  criticalPointPressure: 0.227, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null, // Extremely high at STP
  thermalConductivity: 0.1513, // W/(m·K)
  thermalExpansionCoefficient: null, // Gas at STP
  speedOfSound: 972, // m/s at 0°C
  refractiveIndex: 1.000035,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 1, // Monatomic gas (does not form stable allotropes, though liquid phase has Helium I and Helium II states)
  color: "Colorless",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 5.193, // J/(g·K)
  molarHeatCapacity: 20.786, // J/(mol·K)
  heatOfFusion: 0.0138, // kJ/mol
  heatOfVaporization: 0.0829, // kJ/mol
  heatOfAtomization: 0.0, // Already exists naturally as isolated monatomic atoms
  standardMolarEntropy: 126.15, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.8e-4, // m²/s
  criticalTemperatureSuperconductivity: null, // Non-metallic, cannot become a superconductor (though liquid exhibits superfluidity)

  // 4. Atomic & Structural Variables
  radius: 31, // pm (Calculated atomic radius)
  covalentRadius: 28, // pm
  vanderWaalsRadius: 140, // pm
  ionicRadius: null, // Does not form stable ions in a crystal lattice
  crystalStructure: "Hexagonal close-packed", // Only solidifies under extreme pressure below 1K
  latticeConstantA: 353, // pm
  latticeConstantB: 353, // pm
  latticeConstantC: 569, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // In extreme pressure solid phase
  packingFraction: 0.74,
  atomicVolume: 31.8, // cm³/mol (liquid phase value)
  bohr: "2",
  orbital: "1s2",
  valence: 0, // Enclosed full shell
  coreElectronCount: 0,

  // 5. Chemical & Periodicity Variables
  electronegativity: 4.5, // Allen scale (No formal value on Pauling scale due to lack of standard bonds)
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 2372, // kJ/mol (First Ionization Energy - highest of all elements)
  successiveIonizationEnergies: [2372.3, 5250.5],
  electronAffinity: -48.0, // kJ/mol (Highly unfavorable to add an electron)
  oxidation: "0", // Chemically inert
  maximumOxidationState: 0,
  minimumOxidationState: 0,
  chemicalHardness: 12.3, // eV
  chemicalSoftness: 0.081, // eV⁻¹
  electrophilicityIndex: 0.0,
  polarizability: 0.205, // × 10⁻²⁴ cm³
  standardReductionPotential: null, // Does not readily participate in redox equations
  flameTestColor: "Pink / Pale peach (in a gas discharge tube)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 1, // n
  azimuthalQuantumNumber: 0, // l
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 1.7, // Zeff (Shielding from the companion electron in the 1s subshell)
  slatersShieldingConstant: 0.30,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -24.6, // eV (Ground state)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 4.0026,
  massNumber: 4, // For Helium-4
  neutronNumber: 2, // For Helium-4
  isotopeCount: 9, // He-2 to He-10
  stableIsotopeCount: 2, // He-4 and He-3
  isotopicAbundance: {
    He4: 99.99986, // % abundance on Earth
    He3: 0.00014   // % abundance on Earth
  },
  halfLife: "Stable", // For Helium-4
  decayMode: "None", // For Helium-4
  decayEnergy: null,
  nuclearSpin: 0, // For He-4 (Even-even nucleus makes it a boson; He-3 has spin 1/2)
  magneticDipoleMoment: 0, // For He-4
  neutronCrossSection: 0.007, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 23.0, // % by mass (Second most abundant in cosmos)
  solarAbundance: 27.1, // % by mass
  crustalAbundance: 0.000008, // % by mass (0.008 mg/kg - very rare on Earth because it escapes gravity)
  oceanicAbundance: 7.2e-12, // % by mass
  humanBodyAbundance: null, // No known biological role
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "Big Bang nucleosynthesis and Stellar hydrogen fusion (pp-chain)"
};

const lithiumData = {
  // 1. Fundamental Identity & Classification
  num: 3,
  symbol: "Li",
  name: "Lithium",
  type: "Alkali metal", // Metallic character
  group: 1,
  period: 2,
  block: "s",
  casRegistryNumber: "7439-93-2",
  discoverer: "Johan August Arfwedson",
  year: 1817,
  originOfName: "Greek word 'lithos' (stone), because it was discovered from a mineral source rather than plant ashes",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 0.534, // g/cm³ at STP (Least dense of all solid elements)
  melting: 453.69, // Kelvin
  boiling: 1615, // Kelvin
  triplePointTemperature: 453.69, // Kelvin
  triplePointPressure: 0.00002, // kPa
  criticalPointTemperature: 3223, // Kelvin (estimated)
  criticalPointPressure: 67, // MPa (estimated)
  molarVolume: 13.02, // cm³/mol
  electricalConductivity: 1.1e7, // S/m (Good conductor)
  electricalResistivity: 9.28e-8, // Ω·m at 20°C
  thermalConductivity: 84.8, // W/(m·K)
  thermalExpansionCoefficient: 46e-6, // K⁻¹ at 25°C
  speedOfSound: 6000, // m/s
  refractiveIndex: null, // Solid metal (highly reflective)
  hardnessMohs: 0.6, // Very soft, can be cut with a knife
  hardnessVickers: null,
  hardnessBrinell: 5.0, // MPa
  bulkModulus: 11, // GPa
  shearModulus: 4.2, // GPa
  youngsModulus: 4.9, // GPa
  poissonsRatio: 0.36,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Standard BCC structural form at room temperature
  color: "Silvery-white (tarnishes quickly to gray in air)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 3.582, // J/(g·K) (Highest specific heat of any solid element)
  molarHeatCapacity: 24.86, // J/(mol·K)
  heatOfFusion: 3.00, // kJ/mol
  heatOfVaporization: 136, // kJ/mol
  heatOfAtomization: 159, // kJ/mol
  standardMolarEntropy: 29.1, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 4.43e-5, // m²/s
  criticalTemperatureSuperconductivity: 0.0004, // Kelvin (under ambient pressure; increases under high pressure)

  // 4. Atomic & Structural Variables
  radius: 152, // pm (Atomic radius)
  covalentRadius: 128, // pm
  vanderWaalsRadius: 182, // pm
  ionicRadius: 76, // pm (for Li+ coordination number 6)
  crystalStructure: "Body-centered cubic", // At room temperature
  latticeConstantA: 351, // pm
  latticeConstantB: 351, // pm
  latticeConstantC: 351, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // In standard BCC phase
  packingFraction: 0.68,
  atomicVolume: 13.02, // cm³/mol
  bohr: "2, 1",
  orbital: "1s2 2s1",
  valence: 1,
  coreElectronCount: 2,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.98, // Pauling scale
  electronegativityMulliken: 1.28,
  electronegativityAllredRochow: 0.97,
  ionization: 520, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [520.2, 7298.1, 11815.0],
  electronAffinity: 59.6, // kJ/mol
  oxidation: "+1",
  maximumOxidationState: 1,
  minimumOxidationState: -1, // Observed only in volatile gas-phase alkali molecules
  chemicalHardness: 2.39, // eV
  chemicalSoftness: 0.418, // eV⁻¹
  electrophilicityIndex: 0.28,
  polarizability: 24.3, // × 10⁻²⁴ cm³
  standardReductionPotential: -3.04, // V (Lowest standard reduction potential of all elements)
  flameTestColor: "Crimson red",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 2, // n (for valence electron)
  azimuthalQuantumNumber: 0, // l
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 1.3, // Zeff (Shielding adjusted via Slater's rules)
  slatersShieldingConstant: 1.70,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -5.39, // eV (Valence shell energy level)
  workFunction: 2.9, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 6.94,
  massNumber: 7, // For Lithium-7
  neutronNumber: 4, // For Lithium-7
  isotopeCount: 9, // Li-3 to Li-11
  stableIsotopeCount: 2, // Li-7 and Li-6
  isotopicAbundance: {
    Li7: 92.41, // % abundance on Earth
    Li6: 7.59   // % abundance on Earth
  },
  halfLife: "Stable", // For Lithium-7
  decayMode: "None", // For Lithium-7
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for Li-7 (Li-6 has spin 1)
  magneticDipoleMoment: 3.2564, // nuclear magnetons
  neutronCrossSection: 0.045, // barns (thermal neutron absorption average; Li-6 is much higher)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 6e-7, // % by mass
  solarAbundance: 6e-9, // % by mass (Relatively low due to stellar fusion consumption)
  crustalAbundance: 0.002, // % by mass (20 mg/kg)
  oceanicAbundance: 0.00018, // % by mass (0.18 mg/L)
  humanBodyAbundance: 0.000003, // % by mass (Trace levels)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Big Bang nucleosynthesis and Cosmic ray spallation"
};

  
 
const boronData = {
  // 1. Fundamental Identity & Classification
  num: 5,
  symbol: "B",
  name: "Boron",
  type: "Metalloid", // Metallic character
  group: 13,
  period: 2,
  block: "p",
  casRegistryNumber: "7440-42-8",
  discoverer: "Joseph Louis Gay-Lussac, Louis Jacques Thénard, Humphry Davy",
  year: 1808,
  originOfName: "Derived from Arabic 'buraq' or Persian 'burah' for borax, its primary mineral",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 2.34, // g/cm³ at STP
  melting: 2349, // Kelvin
  boiling: 4200, // Kelvin
  triplePointTemperature: null, // Sublimes/melts at high temperature under specific conditions
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 4.62, // cm³/mol
  electricalConductivity: 0.0001, // S/m at room temp (Semiconductor; increases significantly with temp)
  electricalResistivity: 1.0e4, // Ω·m at 20°C
  thermalConductivity: 27.0, // W/(m·K)
  thermalExpansionCoefficient: 5e-6, // K⁻¹ at 25°C
  speedOfSound: 16200, // m/s (Extremely high due to strong covalent network)
  refractiveIndex: null, // Solid crystalline metalloid
  hardnessMohs: 9.3, // Extremely hard, just below diamond and carborundum
  hardnessVickers: 49000, // MPa
  hardnessBrinell: null,
  bulkModulus: 320, // GPa
  shearModulus: 258, // GPa
  youngsModulus: 440, // GPa (High stiffness)
  poissonsRatio: 0.13,
  malleability: "Low (Very brittle)",
  ductility: "Low",
  allotropeCount: 4, // Amorphous, alpha-rhombohedral, beta-rhombohedral, beta-tetragonal
  color: "Black-brown or silvery-black crystalline",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 1.026, // J/(g·K)
  molarHeatCapacity: 11.08, // J/(mol·K)
  heatOfFusion: 50.2, // kJ/mol
  heatOfVaporization: 480, // kJ/mol
  heatOfAtomization: 565, // kJ/mol
  standardMolarEntropy: 5.86, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.12e-5, // m²/s
  criticalTemperatureSuperconductivity: null, // Only shows superconductivity under extreme pressures in specific forms

  // 4. Atomic & Structural Variables
  radius: 90, // pm (Atomic radius)
  covalentRadius: 84, // pm
  vanderWaalsRadius: 192, // pm
  ionicRadius: 27, // pm (Theoretical for B3+ coordination number 6)
  crystalStructure: "Rhombohedral (Beta form is most stable)",
  latticeConstantA: 1013, // pm (Beta-rhombohedral cell)
  latticeConstantB: 1013, // pm
  latticeConstantC: 2382, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "R-3m",
  coordinationNumber: 6, // Commonly forms icosahedral clusters (B12) with coordination index 6
  packingFraction: 0.35, // Low packing density due to open complex icosahedral structure
  atomicVolume: 4.62, // cm³/mol
  bohr: "2, 3",
  orbital: "1s2 2s2 2p1",
  valence: 3,
  coreElectronCount: 2,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.04, // Pauling scale
  electronegativityMulliken: 1.83,
  electronegativityAllredRochow: 2.01,
  ionization: 801, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [800.6, 2427.1, 3659.7, 25025.8, 32826.7],
  electronAffinity: 26.7, // kJ/mol
  oxidation: "+3", // Standard state in almost all compounds (also forms boranes with complex deltahedral bonding)
  maximumOxidationState: 3,
  minimumOxidationState: -5, // In specialized gas phase metal complexes
  chemicalHardness: 4.01, // eV
  chemicalSoftness: 0.249, // eV⁻¹
  electrophilicityIndex: 0.53,
  polarizability: 3.0, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.87, // V (For B(OH)3 + 3H+ + 3e- -> B + 3H2O)
  flameTestColor: "Bright green",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 2, // n (for valence 2p electron)
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.42, // Zeff (Adjusted via Slater's rules for 2p)
  slatersShieldingConstant: 2.58,
  termSymbol: "2P1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -8.30, // eV (Valence 2p subshell energy)
  workFunction: 4.45, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 10.81,
  massNumber: 11, // For Boron-11
  neutronNumber: 6, // For Boron-11
  isotopeCount: 14, // B-6 to B-19
  stableIsotopeCount: 2, // B-11 and B-10
  isotopicAbundance: {
    B11: 80.1, // % abundance on Earth
    B10: 19.9  // % abundance on Earth (Highly critical for neutron absorption)
  },
  halfLife: "Stable", // For Boron-11
  decayMode: "None", // For Boron-11
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for B-11 (B-10 has spin 3)
  magneticDipoleMoment: 2.6886, // nuclear magnetons
  neutronCrossSection: 767, // barns (Average atomic cross section; B-10 alone is a massive 3835 barns)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 1e-7, // % by mass (Low because it is bypassed in standard stellar nucleosynthesis)
  solarAbundance: 2e-7, // % by mass
  crustalAbundance: 0.001, // % by mass (10 mg/kg)
  oceanicAbundance: 0.00044, // % by mass (4.4 mg/L)
  humanBodyAbundance: 0.00007, // % by mass (Essential micronutrient)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Cosmic ray spallation"
};

const carbonData = {
  // 1. Fundamental Identity & Classification
  num: 6,
  symbol: "C",
  name: "Carbon",
  type: "Nonmetal", // Metallic character
  group: 14,
  period: 2,
  block: "p",
  casRegistryNumber: "7440-44-0",
  discoverer: "Known since antiquity",
  year: null, // Prehistoric discovery
  originOfName: "Derived from Latin 'carbo' meaning coal or charcoal",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 2.267, // g/cm³ at STP (Graphite form; Diamond is ~3.51)
  melting: 4100, // Kelvin (Triple point under high pressure; sublimes at ~3900K at 1 atm)
  boiling: 4300, // Kelvin (Sublimation point)
  triplePointTemperature: 4600, // Kelvin (at approx 10.8 MPa)
  triplePointPressure: 10800, // kPa
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 5.3, // cm³/mol
  electricalConductivity: 3.0e5, // S/m (Graphite form; Diamond is an electrical insulator at ~1e-13)
  electricalResistivity: 3.3e-6, // Ω·m (Graphite in-plane value)
  thermalConductivity: 140, // W/(m·K) (Graphite; Diamond is extremely high at ~2200)
  thermalExpansionCoefficient: 7.1e-6, // K⁻¹ at 25°C (Graphite anisotropy occurs)
  speedOfSound: 18350, // m/s (In diamond form, exceptionally high due to lattice rigidity)
  refractiveIndex: 2.417, // For Diamond form (high dispersion value)
  hardnessMohs: 1.0, // For Graphite (extremely soft; Diamond is 10.0, the maximum index)
  hardnessVickers: 100000, // MPa (For Diamond form)
  hardnessBrinell: null,
  bulkModulus: 442, // GPa (For Diamond form)
  shearModulus: 478, // GPa (For Diamond form)
  youngsModulus: 1050, // GPa (For Diamond form)
  poissonsRatio: 0.1, // For Diamond form
  malleability: "Low (Very brittle in all macroscopic structural forms)",
  ductility: "Low",
  allotropeCount: 8, // Major ones include Graphite, Diamond, Lonsdaleite, Buckminsterfullerene (C60), Carbon Nanotubes, Graphene
  color: "Black (Graphite) or Colorless/Transparent (Pure Diamond)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.709, // J/(g·K) (Graphite form)
  molarHeatCapacity: 8.517, // J/(mol·K)
  heatOfFusion: 117, // kJ/mol (Estimated under high pressure)
  heatOfVaporization: 715, // kJ/mol
  heatOfAtomization: 717, // kJ/mol
  standardMolarEntropy: 5.74, // J/(mol·K) (Graphite form)
  standardEnthalpyOfFormation: 0.0, // Defined as zero for Graphite reference state
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 8.0e-5, // m²/s (Graphite form)
  criticalTemperatureSuperconductivity: 11.4, // Kelvin (Observed in intercalated graphite/C60 variants like CaC6)

  // 4. Atomic & Structural Variables
  radius: 70, // pm (Atomic radius)
  covalentRadius: 77, // pm
  vanderWaalsRadius: 170, // pm
  ionicRadius: 16, // pm (Theoretical value for coordinated C4+)
  crystalStructure: "Hexagonal (Graphite standard form; Diamond is Cubic)",
  latticeConstantA: 246, // pm (Graphite unit cell dimension)
  latticeConstantB: 246, // pm
  latticeConstantC: 671, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 3, // In Graphite (3 sp2 bonds; Diamond has a coordination number of 4 with sp3 bonds)
  packingFraction: 0.34, // Graphite packing index (Diamond structural form is 0.34)
  atomicVolume: 5.3, // cm³/mol
  bohr: "2, 4",
  orbital: "1s2 2s2 2p2",
  valence: 4,
  coreElectronCount: 2,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.55, // Pauling scale
  electronegativityMulliken: 2.67,
  electronegativityAllredRochow: 2.50,
  ionization: 1087, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1086.5, 2352.6, 4620.5, 6222.7, 37831.0, 47277.0],
  electronAffinity: 121.8, // kJ/mol
  oxidation: "+4, +2, -4", // Exceptionally diverse range owing to organic networks
  maximumOxidationState: 4,
  minimumOxidationState: -4,
  chemicalHardness: 5.01, // eV
  chemicalSoftness: 0.200, // eV⁻¹
  electrophilicityIndex: 1.48,
  polarizability: 1.76, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.13, // V (For CO2 + 4H+ + 4e- -> C + 2H2O)
  flameTestColor: "Sparking bright yellow/orange (incandescent particulate emission)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 2, // n (for valence 2p electrons)
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml (Hund's rule configurations)
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.75, // Zeff (Adjusted via Slater's rules for 2p shell)
  slatersShieldingConstant: 3.25,
  termSymbol: "3P0",
  totalAngularMomentumQuantumNumber: 0, // J = 0 (Ground state configuration)
  atomicOrbitalEnergyLevel: -10.66, // eV (Valence 2p subshell energy level)
  workFunction: 5.0, // eV (Graphite variant measurement)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 12.011,
  massNumber: 12, // For Carbon-12
  neutronNumber: 6, // For Carbon-12
  isotopeCount: 15, // C-8 to C-22
  stableIsotopeCount: 2, // C-12 and C-13
  isotopicAbundance: {
    C12: 98.93, // % abundance on Earth
    C13: 1.07,  // % abundance on Earth (Crucial for Carbon NMR)
    C14: 0.0000000001 // Trace quantity (~1 part per trillion, used in radiocarbon dating)
  },
  halfLife: "Stable", // For Carbon-12 (C-14 has a half-life variable of 5730 years)
  decayMode: "None", // For Carbon-12
  decayEnergy: null,
  nuclearSpin: 0, // For C-12 (Even-even pairing eliminates spin; C-13 has spin 1/2)
  magneticDipoleMoment: 0, // For C-12
  neutronCrossSection: 0.0035, // barns (Extremely low absorption; useful in nuclear moderation)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.5, // % by mass (Highly abundant engine of cosmic organic matter)
  solarAbundance: 0.3, // % by mass
  crustalAbundance: 0.02, // % by mass (200 mg/kg)
  oceanicAbundance: 0.0028, // % by mass (28 mg/L)
  humanBodyAbundance: 18.5, // % by mass (The primary structural backbone element for life)
  goldschmidtClassification: "Lithophile / Atmophile",
  nucleosynthesisPathway: "Stellar helium burning via the Triple-alpha process"
};

const nitrogenData = {
  // 1. Fundamental Identity & Classification
  num: 7,
  symbol: "N",
  name: "Nitrogen",
  type: "Nonmetal", // Reactive nonmetal
  group: 15,
  period: 2,
  block: "p",
  casRegistryNumber: "7727-37-9",
  discoverer: "Daniel Rutherford",
  year: 1772,
  originOfName: "Derived from Greek words 'nitron' (native sodium carbonate) and 'genes' (forming)",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.0012506, // g/cm³ at STP
  melting: 63.15, // Kelvin
  boiling: 77.36, // Kelvin
  triplePointTemperature: 63.151, // Kelvin
  triplePointPressure: 12.52, // kPa
  criticalPointTemperature: 126.21, // Kelvin
  criticalPointPressure: 3.39, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null,
  thermalConductivity: 0.02583, // W/(m·K)
  thermalExpansionCoefficient: null,
  speedOfSound: 353, // m/s at 27°C
  refractiveIndex: 1.000298,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 1, // Exists predominantly as diatomic N2 at standard conditions
  color: "Colorless",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 1.04, // J/(g·K)
  molarHeatCapacity: 29.12, // J/(mol·K)
  heatOfFusion: 0.72, // kJ/mol
  heatOfVaporization: 5.57, // kJ/mol
  heatOfAtomization: 473, // kJ/mol
  standardMolarEntropy: 191.61, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.2e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 65, // pm (Atomic radius)
  covalentRadius: 71, // pm
  vanderWaalsRadius: 155, // pm
  ionicRadius: 146, // pm (Theoretical for N3- nitride ion)
  crystalStructure: "Hexagonal (For solid alpha-nitrogen at low temperature)",
  latticeConstantA: 566, // pm
  latticeConstantB: 566, // pm
  latticeConstantC: 566, // pm (Cubic form variant beta is also common)
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 1, // Bonded to a single atom in N2 molecule
  packingFraction: null,
  atomicVolume: 17.3, // cm³/mol (liquid phase value)
  bohr: "2, 5",
  orbital: "1s2 2s2 2p3",
  valence: 5,
  coreElectronCount: 2,

  // 5. Chemical & Periodicity Variables
  electronegativity: 3.04, // Pauling scale
  electronegativityMulliken: 3.08,
  electronegativityAllredRochow: 3.07,
  ionization: 1402, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1402.3, 2856.3, 4578.1, 7475.0, 9444.9, 53266.6, 64360.0],
  electronAffinity: -6.7, // kJ/mol (Highly unfavorable due to half-filled p subshell stability)
  oxidation: "+5, +4, +3, +2, +1, 0, -1, -2, -3", // Massive variable range across common oxides and ammonia
  maximumOxidationState: 5,
  minimumOxidationState: -3,
  chemicalHardness: 7.27, // eV
  chemicalSoftness: 0.138, // eV⁻¹
  electrophilicityIndex: 0.0,
  polarizability: 1.10, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.27, // V (For N2 + 6H+ + 6e- -> 2NH3)
  flameTestColor: "Pale blue / White (under high voltage discharge)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 2, // n
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.90, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 3.10,
  termSymbol: "4S3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -13.18, // eV (Valence 2p subshell energy level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 14.007,
  massNumber: 14, // For Nitrogen-14
  neutronNumber: 7, // For Nitrogen-14
  isotopeCount: 16, // N-10 to N-25
  stableIsotopeCount: 2, // N-14 and N-15
  isotopicAbundance: {
    N14: 99.636, // % abundance on Earth
    N15: 0.364   // % abundance on Earth
  },
  halfLife: "Stable", // For Nitrogen-14
  decayMode: "None", // For Nitrogen-14
  decayEnergy: null,
  nuclearSpin: 1, // For N-14 (Odd-odd active NMR nucleus; N-15 has spin 1/2)
  magneticDipoleMoment: 0.4037, // nuclear magnetons
  neutronCrossSection: 1.91, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.1, // % by mass
  solarAbundance: 0.1, // % by mass
  crustalAbundance: 0.0019, // % by mass (19 mg/kg)
  oceanicAbundance: 0.00005, // % by mass (0.5 mg/L dissolved gas)
  humanBodyAbundance: 3.2, // % by mass (Essential component of amino acids and DNA)
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "CNO cycle in intermediate and massive stars"
};

const oxygenData = {
  // 1. Fundamental Identity & Classification
  num: 8,
  symbol: "O",
  name: "Oxygen",
  type: "Nonmetal", // Reactive nonmetal
  group: 16,
  period: 2,
  block: "p",
  casRegistryNumber: "7782-44-7",
  discoverer: "Carl Wilhelm Scheele, Joseph Priestley",
  year: 1774,
  originOfName: "Derived from Greek words 'oxys' (acid) and 'genes' (forming), as it was mistakenly thought to be essential for all acids",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.001429, // g/cm³ at STP
  melting: 54.36, // Kelvin
  boiling: 90.20, // Kelvin
  triplePointTemperature: 54.358, // Kelvin
  triplePointPressure: 0.1463, // kPa
  criticalPointTemperature: 154.58, // Kelvin
  criticalPointPressure: 5.043, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null,
  thermalConductivity: 0.02565, // W/(m·K)
  thermalExpansionCoefficient: null,
  speedOfSound: 330, // m/s at 25°C
  refractiveIndex: 1.000271,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 4, // Dioxygen (O2), Ozone (O3), Tetraoxygen (O4), Octaoxygen (O8)
  color: "Colorless (Gas), Pale blue (Liquid and Solid)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.918, // J/(g·K)
  molarHeatCapacity: 29.38, // J/(mol·K)
  heatOfFusion: 0.44, // kJ/mol
  heatOfVaporization: 6.82, // kJ/mol
  heatOfAtomization: 249, // kJ/mol
  standardMolarEntropy: 205.15, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0, // Reference state (O2 gas)
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.2e-5, // m²/s
  criticalTemperatureSuperconductivity: 0.6, // Kelvin (Solid phase exhibits superconductivity under extreme pressures >100 GPa)

  // 4. Atomic & Structural Variables
  radius: 60, // pm (Atomic radius)
  covalentRadius: 66, // pm
  vanderWaalsRadius: 152, // pm
  ionicRadius: 140, // pm (For O2- oxide ion)
  crystalStructure: "Cubic (For solid alpha-oxygen at low temperature)",
  latticeConstantA: 683, // pm
  latticeConstantB: 683, // pm
  latticeConstantC: 683, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 2, // In standard solid configuration structures
  packingFraction: null,
  atomicVolume: 14.0, // cm³/mol (liquid phase value)
  bohr: "2, 6",
  orbital: "1s2 2s2 2p4",
  valence: 6,
  coreElectronCount: 2,

  // 5. Chemical & Periodicity Variables
  electronegativity: 3.44, // Pauling scale (Second highest of all stable elements)
  electronegativityMulliken: 3.21,
  electronegativityAllredRochow: 3.50,
  ionization: 1314, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1313.9, 3388.3, 5300.5, 7469.2, 10989.5, 13326.5, 71330.0, 84078.0],
  electronAffinity: 141.0, // kJ/mol
  oxidation: "-2, -1, 0, +1, +2", // -2 is standard (oxide), -1 in peroxides, up to +2 when bound to fluorine
  maximumOxidationState: 2,
  minimumOxidationState: -2,
  chemicalHardness: 6.08, // eV
  chemicalSoftness: 0.164, // eV⁻¹
  electrophilicityIndex: 1.73,
  polarizability: 0.80, // × 10⁻²⁴ cm³
  standardReductionPotential: 1.23, // V (For O2 + 4H+ + 4e- -> 2H2O)
  flameTestColor: "N/A (Supports combustion; glows pale blue/white in discharge tubes)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 2, // n
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.55, // Zeff (Valence shell electrons via Slater's rules)
  slatersShieldingConstant: 3.45,
  termSymbol: "3P2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -15.85, // eV (Valence 2p subshell energy level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 15.999,
  massNumber: 16, // For Oxygen-16
  neutronNumber: 8, // For Oxygen-16
  isotopeCount: 18, // O-12 to O-29
  stableIsotopeCount: 3, // O-16, O-17, and O-18
  isotopicAbundance: {
    O16: 99.762, // % abundance on Earth
    O17: 0.038,  // % abundance on Earth
    O18: 0.200   // % abundance on Earth
  },
  halfLife: "Stable", // For Oxygen-16
  decayMode: "None", // For Oxygen-16
  decayEnergy: null,
  nuclearSpin: 0, // For O-16 (Even-even pairing ensures 0 spin; O-17 has spin 5/2)
  magneticDipoleMoment: 0, // For O-16
  neutronCrossSection: 0.00027, // barns (Exceptionally low neutron absorption profile)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 1.0, // % by mass (Third most abundant element in the universe)
  solarAbundance: 0.9, // % by mass
  crustalAbundance: 46.1, // % by mass (Most abundant element in Earth's crust by far)
  oceanicAbundance: 85.8, // % by mass (Mainly as part of water molecule matrix)
  humanBodyAbundance: 65.0, // % by mass (Primary weight component due to water and tissue mass)
  goldschmidtClassification: "Lithophile / Atmophile",
  nucleosynthesisPathway: "Stellar helium burning via Alpha process and CNO cycle"
};

const fluorineData = {
  // 1. Fundamental Identity & Classification
  num: 9,
  symbol: "F",
  name: "Fluorine",
  type: "Halogen", // Nonmetal
  group: 17,
  period: 2,
  block: "p",
  casRegistryNumber: "7782-41-4",
  discoverer: "Henri Moissan",
  year: 1886,
  originOfName: "Derived from Latin 'fluere' meaning to flow, from its primary source mineral fluorite used as a flux",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.001696, // g/cm³ at STP
  melting: 53.48, // Kelvin
  boiling: 85.03, // Kelvin
  triplePointTemperature: 53.48, // Kelvin
  triplePointPressure: 9.04, // kPa
  criticalPointTemperature: 144.13, // Kelvin
  criticalPointPressure: 5.172, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null,
  thermalConductivity: 0.0254, // W/(m·K)
  thermalExpansionCoefficient: null,
  speedOfSound: 410, // m/s at 25°C
  refractiveIndex: 1.000195,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 1, // Exists solely as diatomic F2 gas at normal conditions
  color: "Pale yellow",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.824, // J/(g·K)
  molarHeatCapacity: 31.30, // J/(mol·K)
  heatOfFusion: 0.51, // kJ/mol
  heatOfVaporization: 6.62, // kJ/mol
  heatOfAtomization: 79, // kJ/mol
  standardMolarEntropy: 202.79, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0, // Reference state (F2 gas)
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.1e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 50, // pm (Atomic radius)
  covalentRadius: 57, // pm
  vanderWaalsRadius: 147, // pm
  ionicRadius: 133, // pm (For F- fluoride ion)
  crystalStructure: "Monoclinic (Alpha form below 45.6K)",
  latticeConstantA: 550, // pm
  latticeConstantB: 328, // pm
  latticeConstantC: 728, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 102.17, // degrees
  axialAngleGamma: 90,
  spaceGroup: "C2/c",
  coordinationNumber: 1, // Diatomic bond configuration
  packingFraction: null,
  atomicVolume: 17.1, // cm³/mol (liquid phase value)
  bohr: "2, 7",
  orbital: "1s2 2s2 2p5",
  valence: 7,
  coreElectronCount: 2,

  // 5. Chemical & Periodicity Variables
  electronegativity: 3.98, // Pauling scale (Highest of all elements)
  electronegativityMulliken: 4.43,
  electronegativityAllredRochow: 4.10,
  ionization: 1681, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1681.0, 3374.2, 6050.4, 8407.7, 11022.7, 15164.1, 17868.0, 92038.1, 106434.3],
  electronAffinity: 328.0, // kJ/mol (Extremely high, highly exothermic)
  oxidation: "-1", // Only element that never takes a positive oxidation state in any stable molecule
  maximumOxidationState: 0, // In standard elemental F2
  minimumOxidationState: -1,
  chemicalHardness: 7.01, // eV
  chemicalSoftness: 0.143, // eV⁻¹
  electrophilicityIndex: 3.86,
  polarizability: 0.56, // × 10⁻²⁴ cm³ (Very small, tightly held electron cloud)
  standardReductionPotential: 2.87, // V (For F2 + 2e- -> 2F-, strongest elemental oxidizing agent)
  flameTestColor: "Bright yellow/white light during intense reaction/combustion",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 2, // n
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.20, // Zeff (Valence shell electrons via Slater's rules)
  slatersShieldingConstant: 3.80,
  termSymbol: "2P3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -18.6, // eV (Valence 2p subshell energy level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 18.998,
  massNumber: 19, // For Fluorine-19
  neutronNumber: 10, // For Fluorine-19
  isotopeCount: 18, // F-13 to F-31
  stableIsotopeCount: 1, // Monoisotopic (Only F-19 is stable)
  isotopicAbundance: {
    F19: 100.0 // 100% naturally occurring isotope
  },
  halfLife: "Stable", // For Fluorine-19
  decayMode: "None", // For Fluorine-19
  decayEnergy: null,
  nuclearSpin: 0.5, // 1/2 (Excellent high-sensitivity NMR active nucleus)
  magneticDipoleMoment: 2.6288, // nuclear magnetons
  neutronCrossSection: 0.0096, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00004, // % by mass
  solarAbundance: 0.00005, // % by mass
  crustalAbundance: 0.0585, // % by mass (585 mg/kg)
  oceanicAbundance: 0.00013, // % by mass (1.3 mg/L)
  humanBodyAbundance: 0.0037, // % by mass (Mainly located within bone matrix and enamel)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Asymptotic giant branch (AGB) stars and Type II supernovae"
};

const neonData = {
  // 1. Fundamental Identity & Classification
  num: 10,
  symbol: "Ne",
  name: "Neon",
  type: "Nonmetal", // Noble gas
  group: 18,
  period: 2,
  block: "p",
  casRegistryNumber: "7440-01-9",
  discoverer: "Morris Travers, William Ramsay",
  year: 1898,
  originOfName: "Derived from the Greek word 'neos', meaning new",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.0008999, // g/cm³ at STP
  melting: 24.56, // Kelvin
  boiling: 27.07, // Kelvin
  triplePointTemperature: 24.556, // Kelvin
  triplePointPressure: 43.37, // kPa
  criticalPointTemperature: 44.4, // Kelvin
  criticalPointPressure: 2.76, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null,
  thermalConductivity: 0.0491, // W/(m·K)
  thermalExpansionCoefficient: null,
  speedOfSound: 435, // m/s at 0°C
  refractiveIndex: 1.000067,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 1, // Monatomic gas
  color: "Colorless",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 1.03, // J/(g·K)
  molarHeatCapacity: 20.786, // J/(mol·K)
  heatOfFusion: 0.335, // kJ/mol
  heatOfVaporization: 1.71, // kJ/mol
  heatOfAtomization: 0.0, // Monatomic gas standard state
  standardMolarEntropy: 146.33, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.0e-4, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 38, // pm (Calculated atomic radius)
  covalentRadius: 62, // pm
  vanderWaalsRadius: 154, // pm
  ionicRadius: null, // Does not form stable chemical bonds/lattice ions
  crystalStructure: "Face-centered cubic", // Solidifies in FCC structure under low temp/high pressure
  latticeConstantA: 443, // pm
  latticeConstantB: 443, // pm
  latticeConstantC: 443, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // In extreme low-temperature solid state
  packingFraction: 0.74,
  atomicVolume: 16.7, // cm³/mol (liquid phase value)
  bohr: "2, 8",
  orbital: "1s2 2s2 2p6",
  valence: 0, // Enclosed complete octet shell
  coreElectronCount: 2,

  // 5. Chemical & Periodicity Variables
  electronegativity: 4.84, // Allen scale (No formal value on Pauling scale)
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 2081, // kJ/mol (First Ionization Energy - second highest overall)
  successiveIonizationEnergies: [2080.7, 3952.3, 6122.0, 9371.0, 12177.0, 15238.0, 19999.0, 23069.5, 115379.5, 131432.0],
  electronAffinity: -116.0, // kJ/mol (Highly unfavorable addition due to stable octet)
  oxidation: "0", // Highly inert
  maximumOxidationState: 0,
  minimumOxidationState: 0,
  chemicalHardness: 10.4, // eV
  chemicalSoftness: 0.096, // eV⁻¹
  electrophilicityIndex: 0.0,
  polarizability: 0.395, // × 10⁻²⁴ cm³
  standardReductionPotential: null,
  flameTestColor: "Reddish-orange (in a gas discharge tube)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 2, // n
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.85, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 4.15,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -21.6, // eV (Valence 2p subshell energy)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 20.180,
  massNumber: 20, // For Neon-20
  neutronNumber: 10, // For Neon-20
  isotopeCount: 14, // Ne-16 to Ne-29
  stableIsotopeCount: 3, // Ne-20, Ne-21, and Ne-22
  isotopicAbundance: {
    Ne20: 90.48, // % abundance on Earth
    Ne21: 0.27,  // % abundance on Earth
    Ne22: 9.25   // % abundance on Earth
  },
  halfLife: "Stable", // For Neon-20
  decayMode: "None", // For Neon-20
  decayEnergy: null,
  nuclearSpin: 0, // For Ne-20 (Even-even pairing; Ne-21 has spin 3/2)
  magneticDipoleMoment: 0, // For Ne-20
  neutronCrossSection: 0.04, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.13, // % by mass (Fifth most abundant chemical element in the cosmos)
  solarAbundance: 0.1, // % by mass
  crustalAbundance: 0.0000005, // % by mass (0.005 mg/kg - very rare crust trace gas)
  oceanicAbundance: 1.2e-8, // % by mass
  humanBodyAbundance: null, // No known biological role
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "Advanced stellar carbon burning process"
};

const sodiumData = {
  // 1. Fundamental Identity & Classification
  num: 11,
  symbol: "Na",
  name: "Sodium",
  type: "Alkali metal", // Metallic character
  group: 1,
  period: 3,
  block: "s",
  casRegistryNumber: "7440-23-5",
  discoverer: "Humphry Davy",
  year: 1807,
  originOfName: "Derived from the English word 'soda'. The symbol Na comes from Neo-Latin 'natrium', derived from 'natron' (a type of natural salt)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 0.968, // g/cm³ at STP (Floats on water)
  melting: 370.87, // Kelvin
  boiling: 1156, // Kelvin
  triplePointTemperature: 370.87, // Kelvin
  triplePointPressure: 0.000024, // kPa
  criticalPointTemperature: 2573, // Kelvin (estimated)
  criticalPointPressure: 35, // MPa (estimated)
  molarVolume: 23.78, // cm³/mol
  electricalConductivity: 2.1e7, // S/m (Excellent conductor)
  electricalResistivity: 4.77e-8, // Ω·m at 20°C
  thermalConductivity: 142.0, // W/(m·K)
  thermalExpansionCoefficient: 71e-6, // K⁻¹ at 25°C
  speedOfSound: 3200, // m/s at 20°C
  refractiveIndex: null, // Solid metal (highly reflective)
  hardnessMohs: 0.5, // Very soft, easily cut with a butter knife
  hardnessVickers: null,
  hardnessBrinell: 0.69, // MPa
  bulkModulus: 6.3, // GPa
  shearModulus: 3.3, // GPa
  youngsModulus: 6.8, // GPa
  poissonsRatio: 0.28,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Standard body-centered cubic form at ambient pressure
  color: "Silvery-white (oxidizes to a dull gray instantly upon exposure to air)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 1.228, // J/(g·K)
  molarHeatCapacity: 28.23, // J/(mol·K)
  heatOfFusion: 2.60, // kJ/mol
  heatOfVaporization: 97.4, // kJ/mol
  heatOfAtomization: 107, // kJ/mol
  standardMolarEntropy: 51.3, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 6.71e-5, // m²/s
  criticalTemperatureSuperconductivity: null, // Does not display standard superconductivity at ambient pressure

  // 4. Atomic & Structural Variables
  radius: 186, // pm (Atomic radius)
  covalentRadius: 166, // pm
  vanderWaalsRadius: 227, // pm
  ionicRadius: 102, // pm (For Na+ coordination number 6)
  crystalStructure: "Body-centered cubic", // At room temperature
  latticeConstantA: 429, // pm
  latticeConstantB: 429, // pm
  latticeConstantC: 429, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC phase
  packingFraction: 0.68,
  atomicVolume: 23.78, // cm³/mol
  bohr: "2, 8, 1",
  orbital: "[Ne] 3s1", // 1s2 2s2 2p6 3s1
  valence: 1,
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.93, // Pauling scale
  electronegativityMulliken: 0.91,
  electronegativityAllredRochow: 1.01,
  ionization: 496, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [495.8, 4562.4, 6910.3, 9543.0, 13354, 16613, 20117, 25496, 28932, 141362],
  electronAffinity: 52.8, // kJ/mol
  oxidation: "+1", // Exclusively forms +1 compounds in nature
  maximumOxidationState: 1,
  minimumOxidationState: -1, // Observed in specialized unstable alkalide salts (Na-)
  chemicalHardness: 2.31, // eV
  chemicalSoftness: 0.433, // eV⁻¹
  electrophilicityIndex: 0.15,
  polarizability: 24.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.71, // V (Highly active reducing agent, reacts violently with water)
  flameTestColor: "Intense persistent yellow",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n (for valence 3s electron)
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.51, // Zeff (Adjusted via Slater's rules for 3s shell)
  slatersShieldingConstant: 8.49,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -5.14, // eV (Valence 3s subshell energy level)
  workFunction: 2.36, // eV (Highly photoemissive)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 22.990,
  massNumber: 23, // For Sodium-23
  neutronNumber: 12, // For Sodium-23
  isotopeCount: 22, // Na-18 to Na-39
  stableIsotopeCount: 1, // Monoisotopic (Only Na-23 is stable)
  isotopicAbundance: {
    Na23: 100.0 // 100% naturally occurring abundance
  },
  halfLife: "Stable", // For Sodium-23 (Cosmogenic Na-22 has a half-life of 2.6 years)
  decayMode: "None", // For Sodium-23
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 (Active NMR nucleus)
  magneticDipoleMoment: 2.2176, // nuclear magnetons
  neutronCrossSection: 0.53, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.002, // % by mass
  solarAbundance: 0.004, // % by mass
  crustalAbundance: 2.36, // % by mass (Sixth most abundant element in Earth's crust)
  oceanicAbundance: 1.08, // % by mass (Highly concentrated as principal dissolved cation Na+)
  humanBodyAbundance: 0.15, // % by mass (Essential electrolyte for osmotic balance and nerve signaling)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Carbon burning process in massive stars"
};

const magnesiumData = {
  // 1. Fundamental Identity & Classification
  num: 12,
  symbol: "Mg",
  name: "Magnesium",
  type: "Alkaline earth metal", // Metallic character
  group: 2,
  period: 3,
  block: "s",
  casRegistryNumber: "7439-95-4",
  discoverer: "Joseph Black",
  year: 1755,
  originOfName: "Named after Magnesia, a district in Thessaly, Greece",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 1.738, // g/cm³ at STP
  melting: 923, // Kelvin
  boiling: 1363, // Kelvin
  triplePointTemperature: 923, // Kelvin (At melting point under low pressure conditions)
  triplePointPressure: 0.043, // kPa
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 14.0, // cm³/mol
  electricalConductivity: 2.3e7, // S/m
  electricalResistivity: 4.39e-8, // Ω·m at 20°C
  thermalConductivity: 156, // W/(m·K)
  thermalExpansionCoefficient: 24.8e-6, // K⁻¹ at 25°C
  speedOfSound: 4940, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 2.5, // Fairly soft, harder than alkali metals
  hardnessVickers: 260, // MPa
  hardnessBrinell: 260, // MPa
  bulkModulus: 45, // GPa
  shearModulus: 17, // GPa
  youngsModulus: 45, // GPa
  poissonsRatio: 0.29,
  malleability: "Medium (Improves when heated)",
  ductility: "Medium",
  allotropeCount: 1, // Hexagonal close-packed structure is stable at standard conditions
  color: "Shiny silvery-white",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 1.023, // J/(g·K)
  molarHeatCapacity: 24.87, // J/(mol·K)
  heatOfFusion: 8.48, // kJ/mol
  heatOfVaporization: 128, // kJ/mol
  heatOfAtomization: 148, // kJ/mol
  standardMolarEntropy: 32.7, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 8.8e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 160, // pm (Atomic radius)
  covalentRadius: 141, // pm
  vanderWaalsRadius: 173, // pm
  ionicRadius: 72, // pm (For Mg2+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 321, // pm
  latticeConstantB: 321, // pm
  latticeConstantC: 521, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP structure coordination
  packingFraction: 0.74,
  atomicVolume: 14.0, // cm³/mol
  bohr: "2, 8, 2",
  orbital: "[Ne] 3s2", // 1s2 2s2 2p6 3s2
  valence: 2,
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.31, // Pauling scale
  electronegativityMulliken: 1.21,
  electronegativityAllredRochow: 1.23,
  ionization: 738, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [737.7, 1450.7, 7732.7, 10542.5, 13630, 18020, 21711, 25661, 31653, 35458],
  electronAffinity: -40.0, // kJ/mol (Unfavorable addition due to full s-subshell)
  oxidation: "+2", // Highly stable standard oxidation state
  maximumOxidationState: 2,
  minimumOxidationState: 1, // Observed only in transient gas-phase complexes or rare low-valent compounds
  chemicalHardness: 3.56, // eV
  chemicalSoftness: 0.281, // eV⁻¹
  electrophilicityIndex: 0.21,
  polarizability: 10.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.37, // V (Strong reducing agent)
  flameTestColor: "Brilliant blinding white",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n (for valence 3s electrons)
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.85, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 9.15,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -7.65, // eV (Valence 3s subshell energy level)
  workFunction: 3.66, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 24.305,
  massNumber: 24, // For Magnesium-24
  neutronNumber: 12, // For Magnesium-24
  isotopeCount: 22, // Mg-19 to Mg-40
  stableIsotopeCount: 3, // Mg-24, Mg-25, and Mg-26
  isotopicAbundance: {
    Mg24: 78.99, // % abundance on Earth
    Mg25: 10.00, // % abundance on Earth (Active NMR nucleus with spin 5/2)
    Mg26: 11.01  // % abundance on Earth
  },
  halfLife: "Stable", // For Magnesium-24
  decayMode: "None", // For Magnesium-24
  decayEnergy: null,
  nuclearSpin: 0, // For Mg-24 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Mg-24
  neutronCrossSection: 0.063, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.06, // % by mass
  solarAbundance: 0.07, // % by mass
  crustalAbundance: 2.33, // % by mass (Seventh most abundant element in Earth's crust)
  oceanicAbundance: 0.129, // % by mass (Second most abundant dissolved cation in seawater)
  humanBodyAbundance: 0.05, // % by mass (Essential cofactor for over 300 enzymatic reactions)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Carbon fusion process and Neon burning process in massive stars"
};

const aluminiumData = {
  // 1. Fundamental Identity & Classification
  num: 13,
  symbol: "Al",
  name: "Aluminium",
  type: "Post-transition metal", // Metallic character
  group: 13,
  period: 3,
  block: "p",
  casRegistryNumber: "7429-90-5",
  discoverer: "Hans Christian Ørsted",
  year: 1825,
  originOfName: "Derived from 'alumina', which comes from the Latin word 'alumen' meaning bitter salt",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 2.70, // g/cm³ at STP (Lightweight structural metal)
  melting: 933.47, // Kelvin
  boiling: 2792, // Kelvin
  triplePointTemperature: null, 
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 10.0, // cm³/mol
  electricalConductivity: 3.5e7, // S/m (High conductivity per unit mass)
  electricalResistivity: 2.65e-8, // Ω·m at 20°C
  thermalConductivity: 237, // W/(m·K)
  thermalExpansionCoefficient: 23.1e-6, // K⁻¹ at 25°C
  speedOfSound: 5000, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 2.75, // Relatively soft when pure
  hardnessVickers: 167, // MPa
  hardnessBrinell: 160, // MPa
  bulkModulus: 76, // GPa
  shearModulus: 26, // GPa
  youngsModulus: 70, // GPa
  poissonsRatio: 0.35,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Face-centered cubic is stable under all standard structural limits
  color: "Silvery-gray",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.897, // J/(g·K)
  molarHeatCapacity: 24.20, // J/(mol·K)
  heatOfFusion: 10.71, // kJ/mol
  heatOfVaporization: 284, // kJ/mol
  heatOfAtomization: 330, // kJ/mol
  standardMolarEntropy: 28.3, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 9.75e-5, // m²/s
  criticalTemperatureSuperconductivity: 1.18, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 143, // pm (Atomic radius)
  covalentRadius: 121, // pm
  vanderWaalsRadius: 184, // pm
  ionicRadius: 53.5, // pm (For Al3+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 405, // pm
  latticeConstantB: 405, // pm
  latticeConstantC: 405, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Face-centered cubic geometry packing coordination
  packingFraction: 0.74,
  atomicVolume: 10.0, // cm³/mol
  bohr: "2, 8, 3",
  orbital: "[Ne] 3s2 3p1", // 1s2 2s2 2p6 3s2 3p1
  valence: 3,
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.61, // Pauling scale
  electronegativityMulliken: 1.37,
  electronegativityAllredRochow: 1.47,
  ionization: 578, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [577.5, 1816.7, 2744.8, 11577.1, 14842, 18379, 23326, 27465, 31853, 38473],
  electronAffinity: 42.5, // kJ/mol
  oxidation: "+3", // Passivates dynamically to construct a stable oxide surface layer
  maximumOxidationState: 3,
  minimumOxidationState: -1, // Monovalent gas phase or rare subvalent clusters (+1 is also possible but rare)
  chemicalHardness: 2.68, // eV
  chemicalSoftness: 0.373, // eV⁻¹
  electrophilicityIndex: 0.34,
  polarizability: 6.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.66, // V (Highly active thermodynamic profile, protected by kinetic oxide passivation)
  flameTestColor: "Silver-white sparkles (when powdered)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n (for valence 3p electron)
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.07, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 8.93,
  termSymbol: "2P1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -5.98, // eV (Valence 3p subshell energy level)
  workFunction: 4.28, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 26.982,
  massNumber: 27, // For Aluminium-27
  neutronNumber: 14, // For Aluminium-27
  isotopeCount: 22, // Al-21 to Al-42
  stableIsotopeCount: 1, // Monoisotopic (Only Al-27 is stable)
  isotopicAbundance: {
    Al27: 100.0 // 100% naturally occurring isotope matrix
  },
  halfLife: "Stable", // For Aluminium-27 (Al-26 is a trace cosmogenic radioisotope with t1/2 of 7.17e5 years)
  decayMode: "None", // For Aluminium-27
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 (Highly active NMR target nucleus)
  magneticDipoleMoment: 3.6415, // nuclear magnetons
  neutronCrossSection: 0.23, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.005, // % by mass
  solarAbundance: 0.006, // % by mass
  crustalAbundance: 8.23, // % by mass (The most abundant metal in Earth's crust)
  oceanicAbundance: 0.000001, // % by mass (Highly insoluble due to oxide stability)
  humanBodyAbundance: 0.00009, // % by mass (No verified biological function)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Neon burning process and Magnesium-proton capture in stars"
};


  
 
const siliconData = {
  // 1. Fundamental Identity & Classification
  num: 14,
  symbol: "Si",
  name: "Silicon",
  type: "Metalloid", // Metallic character
  group: 14,
  period: 3,
  block: "p",
  casRegistryNumber: "7440-21-3",
  discoverer: "Jöns Jacob Berzelius",
  year: 1823,
  originOfName: "Derived from the Latin word 'silex' or 'silicis' meaning flint, combined with the chemical suffix '-on'",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 2.3290, // g/cm³ at STP
  melting: 1687, // Kelvin
  boiling: 3538, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 12.06, // cm³/mol
  electricalConductivity: 2.52e-4, // S/m at room temp (Intrinsic semiconductor; increases with temp or doping)
  electricalResistivity: 3.96e3, // Ω·m at 20°C
  thermalConductivity: 149, // W/(m·K)
  thermalExpansionCoefficient: 2.6e-6, // K⁻¹ at 25°C
  speedOfSound: 8433, // m/s (High stiffness structural matrix)
  refractiveIndex: 3.42, // High refractive index for infrared wavelengths
  hardnessMohs: 7.0, // Hard enough to scratch window glass
  hardnessVickers: 11500, // MPa
  hardnessBrinell: null,
  bulkModulus: 97, // GPa
  shearModulus: 51, // GPa
  youngsModulus: 130, // GPa
  poissonsRatio: 0.22,
  malleability: "Low (Very brittle)",
  ductility: "Low",
  allotropeCount: 2, // Amorphous and Crystalline forms (diamond cubic lattice)
  color: "Dark gray with a bluish metallic luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.700, // J/(g·K)
  molarHeatCapacity: 19.79, // J/(mol·K)
  heatOfFusion: 50.21, // kJ/mol
  heatOfVaporization: 384.22, // kJ/mol
  heatOfAtomization: 450, // kJ/mol
  standardMolarEntropy: 18.81, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 8.8e-5, // m²/s
  criticalTemperatureSuperconductivity: 0.005, // Kelvin (Observed under extreme pressures >12 GPa)

  // 4. Atomic & Structural Variables
  radius: 111, // pm (Atomic radius)
  covalentRadius: 111, // pm
  vanderWaalsRadius: 210, // pm
  ionicRadius: 40, // pm (Theoretical for coordinated Si4+)
  crystalStructure: "Diamond cubic", // Face-centered cubic with a two-atom basis
  latticeConstantA: 543, // pm
  latticeConstantB: 543, // pm
  latticeConstantC: 543, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fd-3m",
  coordinationNumber: 4, // Tetrahedral coordination network
  packingFraction: 0.34, // Low packing density due to open diamond geometry
  atomicVolume: 12.06, // cm³/mol
  bohr: "2, 8, 4",
  orbital: "[Ne] 3s2 3p2", // 1s2 2s2 2p6 3s2 3p2
  valence: 4,
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.90, // Pauling scale
  electronegativityMulliken: 2.28,
  electronegativityAllredRochow: 1.74,
  ionization: 787, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [786.5, 1577.1, 3231.6, 4355.5, 16091, 19805, 23780, 29193, 33150, 40134],
  electronAffinity: 133.6, // kJ/mol
  oxidation: "+4, +2, -4", // +4 is the overwhelmingly dominant state (silicates)
  maximumOxidationState: 4,
  minimumOxidationState: -4,
  chemicalHardness: 3.39, // eV
  chemicalSoftness: 0.295, // eV⁻¹
  electrophilicityIndex: 0.95,
  polarizability: 5.38, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.91, // V (For SiO2 + 4H+ + 4e- -> Si + 2H2O)
  flameTestColor: "N/A (Does not produce a characteristic flame color; emits generic white incandescence at extremes)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n (for valence 3p electrons)
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.15, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 9.85,
  termSymbol: "3P0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -8.15, // eV (Valence 3p subshell energy level)
  workFunction: 4.85, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 28.085,
  massNumber: 28, // For Silicon-28
  neutronNumber: 14, // For Silicon-28
  isotopeCount: 23, // Si-22 to Si-44
  stableIsotopeCount: 3, // Si-28, Si-29, and Si-30
  isotopicAbundance: {
    Si28: 92.223, // % abundance on Earth
    Si29: 4.685,  // % abundance on Earth (Active NMR nucleus with spin 1/2)
    Si30: 3.092   // % abundance on Earth
  },
  halfLife: "Stable", // For Silicon-28
  decayMode: "None", // For Silicon-28
  decayEnergy: null,
  nuclearSpin: 0, // For Si-28 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Si-28
  neutronCrossSection: 0.171, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.07, // % by mass (Highly abundant core product of stellar evolution)
  solarAbundance: 0.08, // % by mass
  crustalAbundance: 28.2, // % by mass (The second most abundant element in Earth's crust after oxygen)
  oceanicAbundance: 0.0003, // % by mass (Present primarily as dissolved silicic acid)
  humanBodyAbundance: 0.026, // % by mass (Important element for skeletal development and connective tissues)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Oxygen burning process in massive stars (the 'Silicon burning' phase follows immediately after)"
};


const phosphorusData = {
  // 1. Fundamental Identity & Classification
  num: 15,
  symbol: "P",
  name: "Phosphorus",
  type: "Reactive nonmetal", // Metallic character
  group: 15,
  period: 3,
  block: "p",
  casRegistryNumber: "7723-14-0",
  discoverer: "Hennig Brand",
  year: 1669,
  originOfName: "Derived from the Greek word 'phosphoros', meaning bringer of light (the ancient name for the planet Venus), because white phosphorus glows in the dark",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 1.823, // g/cm³ at STP (White phosphorus; Red is ~2.34, Black is ~2.69)
  melting: 317.3, // Kelvin (White phosphorus)
  boiling: 553.6, // Kelvin (White phosphorus)
  triplePointTemperature: 317.3, // Kelvin
  triplePointPressure: 0.017, // kPa
  criticalPointTemperature: 994, // Kelvin
  criticalPointPressure: 8.0, // MPa
  molarVolume: 17.02, // cm³/mol
  electricalConductivity: 1.0e-9, // S/m (White phosphorus is an insulator; Black is a semiconductor at ~3.3e2)
  electricalResistivity: 1.0e9, // Ω·m (White phosphorus)
  thermalConductivity: 0.236, // W/(m·K) (White phosphorus)
  thermalExpansionCoefficient: 11e-6, // K⁻¹ (for White form solid layers)
  speedOfSound: null,
  refractiveIndex: 2.144, // For White phosphorus
  hardnessMohs: 0.5, // White phosphorus is soft and waxy (Black phosphorus is ~2.0)
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 11, // GPa (White phosphorus structural matrix)
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Low (White phosphorus is soft/waxy; Red and Black are highly brittle lattices)",
  ductility: "Low",
  allotropeCount: 3, // White (P4 molecules), Red (polymeric network), and Black (layered crystalline sheets)
  color: "Wax-like white-yellow (White), Dark red powder (Red), or Silvery-black metallic sheets (Black)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.769, // J/(g·K) (White phosphorus)
  molarHeatCapacity: 23.84, // J/(mol·K)
  heatOfFusion: 0.66, // kJ/mol (White phosphorus)
  heatOfVaporization: 12.4, // kJ/mol (White phosphorus)
  heatOfAtomization: 316, // kJ/mol
  standardMolarEntropy: 41.1, // J/(mol·K) (White phosphorus reference state)
  standardEnthalpyOfFormation: 0.0, // Defined as zero for White phosphorus standard state
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.7e-7, // m²/s
  criticalTemperatureSuperconductivity: 10.0, // Kelvin (Observed in Black phosphorus phase under pressures exceeding 30 GPa)

  // 4. Atomic & Structural Variables
  radius: 106, // pm (Atomic radius)
  covalentRadius: 107, // pm
  vanderWaalsRadius: 180, // pm
  ionicRadius: 44, // pm (Theoretical for coordinated P5+)
  crystalStructure: "Cubic (White α-P4 is body-centered cubic; Black is Orthorhombic)",
  latticeConstantA: 1851, // pm (White α-P4 cell dimension)
  latticeConstantB: 1851, // pm
  latticeConstantC: 1851, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "I-43m",
  coordinationNumber: 3, // Each phosphorus atom links to three others in the P4 tetrahedron
  packingFraction: null,
  atomicVolume: 17.02, // cm³/mol
  bohr: "2, 8, 5",
  orbital: "[Ne] 3s2 3p3", // 1s2 2s2 2p6 3s2 3p3
  valence: 5,
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.19, // Pauling scale
  electronegativityMulliken: 2.23,
  electronegativityAllredRochow: 2.06,
  ionization: 1012, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1011.8, 1907.5, 2914.1, 4963.6, 6273.9, 21267, 25431, 29872, 35905, 40238],
  electronAffinity: 72.0, // kJ/mol
  oxidation: "+5, +3, -3", // +5 is stable in phosphates; -3 in phosphine gas
  maximumOxidationState: 5,
  minimumOxidationState: -3,
  chemicalHardness: 4.70, // eV
  chemicalSoftness: 0.213, // eV⁻¹
  electrophilicityIndex: 0.55,
  polarizability: 3.63, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.51, // V (For H3PO4 + 2H+ + 2e- -> H3PO3 + H2O)
  flameTestColor: "Pale green-blue glow (due to chemiluminescent oxidation of vapors)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n (for valence 3p electrons)
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml (Hund's rules partition)
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.80, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 10.20,
  termSymbol: "4S3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -10.20, // eV (Valence 3p subshell energy level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 30.974,
  massNumber: 31, // For Phosphorus-31
  neutronNumber: 16, // For Phosphorus-31
  isotopeCount: 23, // P-26 to P-48
  stableIsotopeCount: 1, // Monoisotopic (Only P-31 is stable)
  isotopicAbundance: {
    P31: 100.0 // 100% naturally occurring abundance on Earth
  },
  halfLife: "Stable", // For Phosphorus-31 (P-32 is a famous beta-emitting tracer with t1/2 of 14.3 days)
  decayMode: "None", // For Phosphorus-31
  decayEnergy: null,
  nuclearSpin: 0.5, // 1/2 (Extremely useful, highly active NMR nucleus)
  magneticDipoleMoment: 1.1316, // nuclear magnetons
  neutronCrossSection: 0.18, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0007, // % by mass
  solarAbundance: 0.0006, // % by mass
  crustalAbundance: 0.105, // % by mass (1050 mg/kg, highly prominent structural mineral element)
  oceanicAbundance: 0.000007, // % by mass (Highly regulated macro-nutrient in global marine chemistry)
  humanBodyAbundance: 1.0, // % by mass (Essential component of the skeletal structural matrix, DNA/RNA backbone, and ATP energy transfer)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Neon burning process in massive stars"
};
  

  
 
const sulfurData = {
  // 1. Fundamental Identity & Classification
  num: 16,
  symbol: "S",
  name: "Sulfur",
  type: "Reactive nonmetal", // Metallic character
  group: 16,
  period: 3,
  block: "p",
  casRegistryNumber: "7704-34-9",
  discoverer: "Known since antiquity",
  year: null, // Prehistoric discovery
  originOfName: "Derived from the Latin word 'sulphur' or Sanskrit 'sulvere', meaning brimstone or yellow chemical rock",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 2.07, // g/cm³ at STP (Orthorhombic alpha form; Monoclinic beta is ~1.96)
  melting: 388.36, // Kelvin
  boiling: 717.8, // Kelvin
  triplePointTemperature: 388.36, // Kelvin
  triplePointPressure: 0.001, // kPa
  criticalPointTemperature: 1314, // Kelvin
  criticalPointPressure: 20.7, // MPa
  molarVolume: 15.53, // cm³/mol
  electricalConductivity: 1.0e-15, // S/m (Extremely potent electrical insulator)
  electricalResistivity: 1.0e15, // Ω·m at 20°C
  thermalConductivity: 0.205, // W/(m·K)
  thermalExpansionCoefficient: 74e-6, // K⁻¹ at 25°C
  speedOfSound: 2000, // m/s
  refractiveIndex: 2.037, // For Orthorhombic crystalline form
  hardnessMohs: 2.0, // Soft and brittle structural matrix
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 7.7, // GPa
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Low (Very brittle)",
  ductility: "Low",
  allotropeCount: 30, // Highly diverse; major forms include Cyclooctasulfur (S8 crown rings), plastic sulfur, and catenated chains
  color: "Bright yellow",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.708, // J/(g·K)
  molarHeatCapacity: 22.75, // J/(mol·K)
  heatOfFusion: 1.72, // kJ/mol (S8 basis)
  heatOfVaporization: 45.0, // kJ/mol (S8 basis)
  heatOfAtomization: 279, // kJ/mol
  standardMolarEntropy: 31.8, // J/(mol·K) (Orthorhombic standard state)
  standardEnthalpyOfFormation: 0.0, // Defined as zero for Rhombic reference state
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.4e-7, // m²/s
  criticalTemperatureSuperconductivity: 17.0, // Kelvin (Observed under massive pressures >90 GPa)

  // 4. Atomic & Structural Variables
  radius: 102, // pm (Atomic radius)
  covalentRadius: 105, // pm
  vanderWaalsRadius: 180, // pm
  ionicRadius: 184, // pm (For S2- sulfide ion)
  crystalStructure: "Orthorhombic (Alpha standard state form; transitions to Monoclinic above 368.5K)",
  latticeConstantA: 1046, // pm
  latticeConstantB: 1287, // pm
  latticeConstantC: 2449, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fddd",
  coordinationNumber: 2, // Bent 2-coordinate topology inside the crown S8 ring structure
  packingFraction: null,
  atomicVolume: 15.53, // cm³/mol
  bohr: "2, 8, 6",
  orbital: "[Ne] 3s2 3p4", // 1s2 2s2 2p6 3s2 3p4
  valence: 6,
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.58, // Pauling scale
  electronegativityMulliken: 2.45,
  electronegativityAllredRochow: 2.44,
  ionization: 1000, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [999.6, 2252.0, 3357.0, 4556.0, 7004.3, 8495.8, 27107, 31719, 36621, 43177],
  electronAffinity: 200.0, // kJ/mol
  oxidation: "+6, +4, +2, 0, -2", // Wide array (+6 in sulfates, -2 in sulfides like H2S)
  maximumOxidationState: 6,
  minimumOxidationState: -2,
  chemicalHardness: 4.12, // eV
  chemicalSoftness: 0.243, // eV⁻¹
  electrophilicityIndex: 1.19,
  polarizability: 2.90, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.14, // V (For S + 2H+ + 2e- -> H2S)
  flameTestColor: "Deep blue (burning to produce pungent SO2 gas)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.45, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 10.55,
  termSymbol: "3P2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -10.36, // eV (Valence 3p subshell energy level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 32.06,
  massNumber: 32, // For Sulfur-32
  neutronNumber: 16, // For Sulfur-32
  isotopeCount: 23, // S-26 to S-48
  stableIsotopeCount: 4, // S-32, S-33, S-34, and S-36
  isotopicAbundance: {
    S32: 94.99, // % abundance on Earth
    S33: 0.75,  // % abundance on Earth (Active NMR nucleus with spin 3/2)
    S34: 4.25,  // % abundance on Earth
    S36: 0.01   // % abundance on Earth
  },
  halfLife: "Stable", // For Sulfur-32 (Cosmogenic S-35 has a half-life of 87.5 days)
  decayMode: "None", // For Sulfur-32
  decayEnergy: null,
  nuclearSpin: 0, // For S-32 (Even-even pairing eliminates spin)
  magneticDipoleMoment: 0, // For S-32
  neutronCrossSection: 0.52, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.05, // % by mass
  solarAbundance: 0.04, // % by mass
  crustalAbundance: 0.035, // % by mass (350 mg/kg)
  oceanicAbundance: 0.091, // % by mass (Highly concentrated macro-ion, primarily as SO42-)
  humanBodyAbundance: 0.25, // % by mass (Crucial macro-element building structural disulfide bonds in proteins)
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Oxygen burning process and Silicon burning process in stars via the Alpha process"
};
  

  
 
const chlorineData = {
  // 1. Fundamental Identity & Classification
  num: 17,
  symbol: "Cl",
  name: "Chlorine",
  type: "Halogen", // Nonmetal
  group: 17,
  period: 3,
  block: "p",
  casRegistryNumber: "7782-50-5",
  discoverer: "Carl Wilhelm Scheele",
  year: 1774,
  originOfName: "Derived from the Greek word 'chloros', meaning pale green or yellow-green",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.003214, // g/cm³ at STP
  melting: 171.6, // Kelvin
  boiling: 239.11, // Kelvin
  triplePointTemperature: 171.65, // Kelvin
  triplePointPressure: 1.39, // kPa
  criticalPointTemperature: 416.9, // Kelvin
  criticalPointPressure: 7.991, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null,
  thermalConductivity: 0.0089, // W/(m·K)
  thermalExpansionCoefficient: null,
  speedOfSound: 206, // m/s at 0°C
  refractiveIndex: 1.000773,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 1, // Exists primarily as diatomic Cl2 gas at standard conditions
  color: "Pale yellow-green",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.479, // J/(g·K)
  molarHeatCapacity: 33.94, // J/(mol·K)
  heatOfFusion: 6.406, // kJ/mol (Cl2 basis)
  heatOfVaporization: 20.41, // kJ/mol (Cl2 basis)
  heatOfAtomization: 121, // kJ/mol
  standardMolarEntropy: 223.08, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0, // Reference state (Cl2 gas)
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.3e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 100, // pm (Atomic radius)
  covalentRadius: 99, // pm
  vanderWaalsRadius: 175, // pm
  ionicRadius: 181, // pm (For Cl- chloride ion)
  crystalStructure: "Orthorhombic (Solid phase at low temperature)",
  latticeConstantA: 624, // pm
  latticeConstantB: 448, // pm
  latticeConstantC: 826, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Cmca",
  coordinationNumber: 1, // Diatomic single bond configuration
  packingFraction: null,
  atomicVolume: 18.7, // cm³/mol (liquid phase value)
  bohr: "2, 8, 7",
  orbital: "[Ne] 3s2 3p5", // 1s2 2s2 2p6 3s2 3p5
  valence: 7,
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 3.16, // Pauling scale (Third highest of all stable elements)
  electronegativityMulliken: 3.54,
  electronegativityAllredRochow: 2.83,
  ionization: 1251, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1251.2, 2298, 3822, 5158.6, 6542, 9362, 11018, 33604, 38600, 43961],
  electronAffinity: 349.0, // kJ/mol (Highest electron affinity of all elements)
  oxidation: "+7, +5, +3, +1, 0, -1", // Highly variable (-1 is standard in chlorides, positive states occur in chlorates/perchlorates)
  maximumOxidationState: 7,
  minimumOxidationState: -1,
  chemicalHardness: 4.68, // eV
  chemicalSoftness: 0.214, // eV⁻¹
  electrophilicityIndex: 2.81,
  polarizability: 2.18, // × 10⁻²⁴ cm³
  standardReductionPotential: 1.36, // V (For Cl2 + 2e- -> 2Cl-, powerful oxidizing agent)
  flameTestColor: "N/A (Produces a sharp greenish-white light inside specialized flame systems)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.10, // Zeff (Valence shell electrons via Slater's rules)
  slatersShieldingConstant: 10.90,
  termSymbol: "2P3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -13.78, // eV (Valence 3p subshell energy level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 35.45,
  massNumber: 35, // For Chlorine-35
  neutronNumber: 18, // For Chlorine-35
  isotopeCount: 24, // Cl-28 to Cl-51
  stableIsotopeCount: 2, // Cl-35 and Cl-37
  isotopicAbundance: {
    Cl35: 75.78, // % abundance on Earth (Active NMR nucleus with spin 3/2)
    Cl37: 24.22  // % abundance on Earth (Active NMR nucleus with spin 3/2)
  },
  halfLife: "Stable", // For Chlorine-35 (Cosmogenic Cl-36 has a half-life of 301,000 years)
  decayMode: "None", // For Chlorine-35
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for both stable isotopes
  magneticDipoleMoment: 0.8218, // nuclear magnetons for Cl-35
  neutronCrossSection: 33.5, // barns (High thermal neutron absorption capacity)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0001, // % by mass
  solarAbundance: 0.0008, // % by mass
  crustalAbundance: 0.0145, // % by mass (145 mg/kg)
  oceanicAbundance: 1.94, // % by mass (The most abundant dissolved anion in seawater as Cl-)
  humanBodyAbundance: 0.15, // % by mass (Essential electrolyte for osmotic balance and gastric hydrochloric acid)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Oxygen burning process and Silicon burning process in massive stars"
};
  

  
 
const argonData = {
  // 1. Fundamental Identity & Classification
  num: 18,
  symbol: "Ar",
  name: "Argon",
  type: "Noble gas", // Nonmetal
  group: 18,
  period: 3,
  block: "p",
  casRegistryNumber: "7440-37-1",
  discoverer: "Lord Rayleigh, William Ramsay",
  year: 1894,
  originOfName: "Derived from the Greek word 'argos', meaning lazy or inactive, due to its chemical inertness",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.001784, // g/cm³ at STP
  melting: 83.80, // Kelvin
  boiling: 87.30, // Kelvin
  triplePointTemperature: 83.8058, // Kelvin (Used as a defining fixed point in the ITS-90 scale)
  triplePointPressure: 68.89, // kPa
  criticalPointTemperature: 150.87, // Kelvin
  criticalPointPressure: 4.898, // MPa
  molarVolume: 22.424, // L/mol at STP
  electricalConductivity: null, // Gas at STP (insulator)
  electricalResistivity: null,
  thermalConductivity: 0.01772, // W/(m·K)
  thermalExpansionCoefficient: null,
  speedOfSound: 323, // m/s at 27°C
  refractiveIndex: 1.000281,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas)",
  ductility: "N/A (Gas)",
  allotropeCount: 1, // Monatomic gas
  color: "Colorless",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.520, // J/(g·K)
  molarHeatCapacity: 20.786, // J/(mol·K)
  heatOfFusion: 1.18, // kJ/mol
  heatOfVaporization: 6.43, // kJ/mol
  heatOfAtomization: 0.0, // Monatomic gas standard state
  standardMolarEntropy: 154.84, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.2e-4, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 71, // pm (Calculated atomic radius)
  covalentRadius: 106, // pm
  vanderWaalsRadius: 188, // pm
  ionicRadius: null, // Does not form stable ionic bonds in standard lattices
  crystalStructure: "Face-centered cubic", // Solidifies in FCC structure under low temp/high pressure
  latticeConstantA: 526, // pm
  latticeConstantB: 526, // pm
  latticeConstantC: 526, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Solid phase geometry packing configuration
  packingFraction: 0.74,
  atomicVolume: 22.5, // cm³/mol (liquid phase value)
  bohr: "2, 8, 8",
  orbital: "[Ne] 3s2 3p6", // 1s2 2s2 2p6 3s2 3p6
  valence: 0, // Enclosed stable octet shell
  coreElectronCount: 10,

  // 5. Chemical & Periodicity Variables
  electronegativity: 3.24, // Allen scale (No formal value on Pauling scale)
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 1521, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1520.6, 2665.8, 3931, 5771, 7238, 8781, 11995, 13842, 40760, 46186],
  electronAffinity: -96.0, // kJ/mol (Highly unfavorable electron addition)
  oxidation: "0", // Highly inert (Argon fluorohydride, HArF, can exist at extremely low temps < 40K)
  maximumOxidationState: 0,
  minimumOxidationState: 0,
  chemicalHardness: 7.7, // eV
  chemicalSoftness: 0.130, // eV⁻¹
  electrophilicityIndex: 0.0,
  polarizability: 1.64, // × 10⁻²⁴ cm³
  standardReductionPotential: null,
  flameTestColor: "Violet / Pale blue (in a gas discharge tube)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.75, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 11.25,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -15.76, // eV (Valence 3p subshell energy)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 39.948,
  massNumber: 40, // For Argon-40 (Earth's dominant isotope due to potassium-40 decay)
  neutronNumber: 22, // For Argon-40
  isotopeCount: 24, // Ar-30 to Ar-53
  stableIsotopeCount: 3, // Ar-36, Ar-38, and Ar-40
  isotopicAbundance: {
    Ar40: 99.600, // % abundance on Earth (produced radiogenically)
    Ar36: 0.334,  // % abundance on Earth (primordial solar value is much higher)
    Ar38: 0.066   // % abundance on Earth
  },
  halfLife: "Stable", // For Argon-40 (Ar-39 is an environmental cosmic radioisotope with t1/2 of 269 years)
  decayMode: "None", // For Argon-40
  decayEnergy: null,
  nuclearSpin: 0, // For Ar-40 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Argon-40
  neutronCrossSection: 0.66, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.02, // % by mass (Primarily Ar-36 created via alpha process)
  solarAbundance: 0.015, // % by mass
  crustalAbundance: 0.00035, // % by mass (3.5 mg/kg)
  oceanicAbundance: 0.000045, // % by mass (4.5 mg/L dissolved atmospheric gas)
  humanBodyAbundance: null, // No known biological role
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "Silicon burning process via Alpha process in massive stars (Ar-36); Potassium-40 electron capture / beta decay on Earth (Ar-40)"
};
  

  
 
const potassiumData = {
  // 1. Fundamental Identity & Classification
  num: 19,
  symbol: "K",
  name: "Potassium",
  type: "Alkali metal", // Metallic character
  group: 1,
  period: 4,
  block: "s",
  casRegistryNumber: "7440-09-7",
  discoverer: "Humphry Davy",
  year: 1807,
  originOfName: "Derived from the English word 'potash'. The symbol K comes from Neo-Latin 'kalium', derived from the Arabic 'al-qalyah' meaning plant ashes",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 0.862, // g/cm³ at STP (Second least dense metal after lithium, floats on water)
  melting: 336.5, // Kelvin
  boiling: 1032, // Kelvin
  triplePointTemperature: 336.5, // Kelvin
  triplePointPressure: 0.00001, // kPa
  criticalPointTemperature: 2223, // Kelvin (estimated)
  criticalPointPressure: 16, // MPa (estimated)
  molarVolume: 45.94, // cm³/mol
  electricalConductivity: 1.43e7, // S/m (Highly conductive)
  electricalResistivity: 7.2e-8, // Ω·m at 20°C
  thermalConductivity: 102.5, // W/(m·K)
  thermalExpansionCoefficient: 83e-6, // K⁻¹ at 25°C
  speedOfSound: 2000, // m/s at 20°C
  refractiveIndex: null, // Solid metal (highly reflective)
  hardnessMohs: 0.4, // Extremely soft, can be easily sliced with a plastic knife
  hardnessVickers: null,
  hardnessBrinell: 0.36, // MPa
  bulkModulus: 3.1, // GPa
  shearModulus: 1.3, // GPa
  youngsModulus: 3.5, // GPa
  poissonsRatio: 0.40,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Standard body-centered cubic form at ambient pressure
  color: "Silvery-white (tarnishes rapidly to a dull gray-blue oxide coating in air)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.757, // J/(g·K)
  molarHeatCapacity: 29.6, // J/(mol·K)
  heatOfFusion: 2.33, // kJ/mol
  heatOfVaporization: 76.9, // kJ/mol
  heatOfAtomization: 89, // kJ/mol
  standardMolarEntropy: 64.2, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.57e-4, // m²/s
  criticalTemperatureSuperconductivity: null, // Does not display conventional superconductivity at standard pressures

  // 4. Atomic & Structural Variables
  radius: 227, // pm (Atomic radius)
  covalentRadius: 196, // pm
  vanderWaalsRadius: 275, // pm
  ionicRadius: 138, // pm (For K+ coordination number 6)
  crystalStructure: "Body-centered cubic", // At room temperature
  latticeConstantA: 522, // pm
  latticeConstantB: 522, // pm
  latticeConstantC: 522, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC phase
  packingFraction: 0.68,
  atomicVolume: 45.94, // cm³/mol
  bohr: "2, 8, 8, 1",
  orbital: "[Ar] 4s1", // 1s2 2s2 2p6 3s2 3p6 4s1
  valence: 1,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.82, // Pauling scale
  electronegativityMulliken: 0.76,
  electronegativityAllredRochow: 0.91,
  ionization: 419, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [418.8, 3052, 4420, 5877, 7975, 9590, 11343, 14944, 16963, 48610],
  electronAffinity: 48.4, // kJ/mol
  oxidation: "+1", // Exclusively forms +1 compounds under natural conditions
  maximumOxidationState: 1,
  minimumOxidationState: -1, // Observed only in specialized alkalide complex structures (K-)
  chemicalHardness: 1.92, // eV
  chemicalSoftness: 0.521, // eV⁻¹
  electrophilicityIndex: 0.11,
  polarizability: 43.4, // × 10⁻²⁴ cm³ (Extremely large electron cloud)
  standardReductionPotential: -2.93, // V (Highly energetic reducing agent, reacts violently/explosively with water)
  flameTestColor: "Pale lilac / Violet",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n (for valence 4s electron)
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.49, // Zeff (Adjusted via Slater's rules for 4s shell)
  slatersShieldingConstant: 15.51,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -4.34, // eV (Valence 4s subshell energy level)
  workFunction: 2.30, // eV (Highly photoemissive)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 39.098,
  massNumber: 39, // For Potassium-39
  neutronNumber: 20, // For Potassium-39
  isotopeCount: 25, // K-32 to K-56
  stableIsotopeCount: 2, // K-39 and K-41
  isotopicAbundance: {
    K39: 93.258, // % abundance on Earth
    K40: 0.012,  // % abundance on Earth (Naturally occurring beta/electron capture radioisotope with t1/2 of 1.25e9 years)
    K41: 6.730   // % abundance on Earth
  },
  halfLife: "Stable", // For Potassium-39
  decayMode: "None", // For Potassium-39
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 (Active NMR nucleus)
  magneticDipoleMoment: 0.3915, // nuclear magnetons
  neutronCrossSection: 2.1, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0003, // % by mass
  solarAbundance: 0.0004, // % by mass
  crustalAbundance: 2.09, // % by mass (Seventh most abundant element in Earth's crust)
  oceanicAbundance: 0.0399, // % by mass (Important macro-ion component of oceanic salt chemistry)
  humanBodyAbundance: 0.20, // % by mass (Crucial intracellular cation for resting potential generation and sodium-potassium pumps)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Oxygen burning process and Silicon burning process inside supernovae explosions"
};
  

  
 
const calciumData = {
  // 1. Fundamental Identity & Classification
  num: 20,
  symbol: "Ca",
  name: "Calcium",
  type: "Alkaline earth metal", // Metallic character
  group: 2,
  period: 4,
  block: "s",
  casRegistryNumber: "7440-70-2",
  discoverer: "Humphry Davy",
  year: 1808,
  originOfName: "Derived from the Latin word 'calx', meaning lime",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 1.54, // g/cm³ at STP (Lightest of the alkaline earth metals)
  melting: 1115, // Kelvin
  boiling: 1757, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 26.20, // cm³/mol
  electricalConductivity: 2.9e7, // S/m (Highly conductive)
  electricalResistivity: 3.36e-8, // Ω·m at 20°C
  thermalConductivity: 201, // W/(m·K)
  thermalExpansionCoefficient: 22.3e-6, // K⁻¹ at 25°C
  speedOfSound: 3810, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 1.75, // Soft, but significantly harder than sodium or lithium
  hardnessVickers: null,
  hardnessBrinell: 17, // MPa
  bulkModulus: 44, // GPa
  shearModulus: 7.4, // GPa
  youngsModulus: 20, // GPa
  poissonsRatio: 0.31,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Face-centered cubic (alpha) transitions to body-centered cubic (beta) at 715K
  color: "Dull gray / Silvery-white (quickly forms a yellowish oxide layer in air)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.647, // J/(g·K)
  molarHeatCapacity: 25.92, // J/(mol·K)
  heatOfFusion: 8.54, // kJ/mol
  heatOfVaporization: 154.7, // kJ/mol
  heatOfAtomization: 178, // kJ/mol
  standardMolarEntropy: 41.6, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.0e-4, // m²/s
  criticalTemperatureSuperconductivity: 25.0, // Kelvin (Observed under extreme pressures >160 GPa)

  // 4. Atomic & Structural Variables
  radius: 197, // pm (Atomic radius)
  covalentRadius: 176, // pm
  vanderWaalsRadius: 231, // pm
  ionicRadius: 100, // pm (For Ca2+ coordination number 6)
  crystalStructure: "Face-centered cubic", // At room temperature (Alpha phase)
  latticeConstantA: 558.8, // pm
  latticeConstantB: 558.8, // pm
  latticeConstantC: 558.8, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // For FCC alpha phase
  packingFraction: 0.74,
  atomicVolume: 26.20, // cm³/mol
  bohr: "2, 8, 8, 2",
  orbital: "[Ar] 4s2", // 1s2 2s2 2p6 3s2 3p6 4s2
  valence: 2,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.00, // Pauling scale
  electronegativityMulliken: 1.03,
  electronegativityAllredRochow: 1.04,
  ionization: 590, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [589.8, 1145.4, 4912.4, 6491, 8153, 10496, 12270, 14206, 18191, 20385],
  electronAffinity: 2.37, // kJ/mol (Very low affinity)
  oxidation: "+2", // Overwhelmingly standard stable oxidation state
  maximumOxidationState: 2,
  minimumOxidationState: 0,
  chemicalHardness: 3.12, // eV
  chemicalSoftness: 0.321, // eV⁻¹
  electrophilicityIndex: 0.07,
  polarizability: 22.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.87, // V (Strong reducing agent, reacts steadily with water)
  flameTestColor: "Brick-red / Orange-red",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n (for valence 4s electrons)
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.85, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 17.15,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -6.11, // eV (Valence 4s subshell energy level)
  workFunction: 2.87, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 40.078,
  massNumber: 40, // For Calcium-40
  neutronNumber: 20, // For Calcium-40 (An exceptional doubly-magic nucleus)
  isotopeCount: 26, // Ca-34 to Ca-59
  stableIsotopeCount: 5, // Ca-40, Ca-42, Ca-43, Ca-44, and Ca-46 (Ca-48 has an extremely long half-life of 6e19 years)
  isotopicAbundance: {
    Ca40: 96.941, // % abundance on Earth
    Ca42: 0.647,  // % abundance on Earth
    Ca43: 0.135,  // % abundance on Earth (Active NMR nucleus with spin 7/2)
    Ca44: 2.086,  // % abundance on Earth
    Ca46: 0.004,  // % abundance on Earth
    Ca48: 0.187   // % abundance on Earth (Primordial radioisotope)
  },
  halfLife: "Stable", // For Calcium-40
  decayMode: "None", // For Calcium-40
  decayEnergy: null,
  nuclearSpin: 0, // For Ca-40 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Ca-40
  neutronCrossSection: 0.43, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.007, // % by mass
  solarAbundance: 0.006, // % by mass
  crustalAbundance: 4.15, // % by mass (Fifth most abundant element and third most abundant metal in Earth's crust)
  oceanicAbundance: 0.0412, // % by mass (Major structural component of marine biomineralization)
  humanBodyAbundance: 1.4, // % by mass (The most abundant metallic element in the human body; primary component of bones and teeth)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Silicon burning process via the Alpha process in massive stars"
};
  

  
 
const scandiumData = {
  // 1. Fundamental Identity & Classification
  num: 21,
  symbol: "Sc",
  name: "Scandium",
  type: "Transition metal", // First d-block element
  group: 3,
  period: 4,
  block: "z", // Historically often group 3, d-block element
  block_real: "d",
  casRegistryNumber: "7440-20-2",
  discoverer: "Lars Fredrik Nilson",
  year: 1879,
  originOfName: "Derived from the Latin word 'Scandia', meaning Scandinavia",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 2.989, // g/cm³ at STP (Light transition metal)
  melting: 1814, // Kelvin
  boiling: 3109, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 15.04, // cm³/mol
  electricalConductivity: 1.8e6, // S/m
  electricalResistivity: 5.62e-7, // Ω·m at 20°C
  thermalConductivity: 15.8, // W/(m·K)
  thermalExpansionCoefficient: 10.2e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null, // Solid metal
  hardnessMohs: null, // Soft, but hardens considerably when alloyed
  hardnessVickers: null,
  hardnessBrinell: 750, // MPa
  bulkModulus: 57, // GPa
  shearModulus: 29.1, // GPa
  youngsModulus: 74.4, // GPa
  poissonsRatio: 0.28,
  malleability: "Medium",
  ductility: "Medium",
  allotropeCount: 2, // Hexagonal close-packed (alpha) transforms to body-centered cubic (beta) at 1608K
  color: "Silvery-white (develops a slightly yellowish or pinkish cast when exposed to air)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.568, // J/(g·K)
  molarHeatCapacity: 25.52, // J/(mol·K)
  heatOfFusion: 14.1, // kJ/mol
  heatOfVaporization: 318, // kJ/mol
  heatOfAtomization: 378, // kJ/mol
  standardMolarEntropy: 34.6, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.05, // Kelvin (Ultra-low temperature under high pressure)

  // 4. Atomic & Structural Variables
  radius: 162, // pm (Atomic radius)
  covalentRadius: 144, // pm
  vanderWaalsRadius: 211, // pm
  ionicRadius: 74.5, // pm (For Sc3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // At room temperature (Alpha phase)
  latticeConstantA: 331, // pm
  latticeConstantB: 331, // pm
  latticeConstantC: 527, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP packing
  packingFraction: 0.74,
  atomicVolume: 15.04, // cm³/mol
  bohr: "2, 8, 9, 2",
  orbital: "[Ar] 3d1 4s2", // 1s2 2s2 2p6 3s2 3p6 3d1 4s2
  valence: 3,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.36, // Pauling scale
  electronegativityMulliken: 1.27,
  electronegativityAllredRochow: 1.20,
  ionization: 633, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [633.1, 1235.0, 2388.6, 7090.6, 8843, 10679, 13310, 15250, 17370, 21726],
  electronAffinity: 18.1, // kJ/mol
  oxidation: "+3", // The overwhelmingly stable and dominant state (behaves similarly to rare earths)
  maximumOxidationState: 3,
  minimumOxidationState: 1, // Rare lower states stabilized only in unique organometallic or solid-state matrix clusters
  chemicalHardness: 3.19, // eV
  chemicalSoftness: 0.313, // eV⁻¹
  electrophilicityIndex: 0.17,
  polarizability: 14.4, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.08, // V (For Sc3+ + 3e- -> Sc)
  flameTestColor: "N/A (No highly characteristic signature; produces weak yellowish-white emission sparks)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the differentiating 3d electron
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff (For 3d electron via Slater's rules)
  slatersShieldingConstant: 18.00,
  termSymbol: "2D3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -6.62, // eV (Valence 3d level energy benchmark)
  workFunction: 3.5, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 44.956,
  massNumber: 45, // For Scandium-45
  neutronNumber: 24, // For Scandium-45
  isotopeCount: 25, // Sc-36 to Sc-60
  stableIsotopeCount: 1, // Monoisotopic (Only Sc-45 is stable)
  isotopicAbundance: {
    Sc45: 100.0 // 100% naturally occurring abundance
  },
  halfLife: "Stable", // For Scandium-45 (Sc-46 is a prominent artificial tracer with t1/2 of 83.8 days)
  decayMode: "None", // For Scandium-45
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 (NMR active nucleus)
  magneticDipoleMoment: 4.7565, // nuclear magnetons
  neutronCrossSection: 27.2, // barns (Relatively high thermal neutron capture profile)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000003, // % by mass (Relatively rare cosmically due to the odd-even nucleosynthesis pattern)
  solarAbundance: 0.000004, // % by mass
  crustalAbundance: 0.0022, // % by mass (22 mg/kg; widely distributed but rarely found in concentrated mineral deposits)
  oceanicAbundance: 6.0e-10, // % by mass (Extremely trace dissolved species)
  humanBodyAbundance: null, // No known biological role; negligible traces
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Supernova explosive oxygen burning and cosmic ray spallation matrix"
};
  

  
 
const titaniumData = {
  // 1. Fundamental Identity & Classification
  num: 22,
  symbol: "Ti",
  name: "Titanium",
  type: "Transition metal",
  group: 4,
  period: 4,
  block: "d",
  casRegistryNumber: "7440-32-6",
  discoverer: "William Gregor",
  year: 1791,
  originOfName: "Named after the Titans of Greek mythology, symbolizing its great strength and durability",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 4.506, // g/cm³ at STP (High strength-to-weight ratio)
  melting: 1941, // Kelvin
  boiling: 3560, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 10.64, // cm³/mol
  electricalConductivity: 2.38e6, // S/m
  electricalResistivity: 4.2e-7, // Ω·m at 20°C
  thermalConductivity: 21.9, // W/(m·K)
  thermalExpansionCoefficient: 8.6e-6, // K⁻¹ at 25°C
  speedOfSound: 5090, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 6.0, // Exceptionally high for an unalloyed metal
  hardnessVickers: 970, // MPa
  hardnessBrinell: 716, // MPa
  bulkModulus: 110, // GPa
  shearModulus: 44, // GPa
  youngsModulus: 116, // GPa
  poissonsRatio: 0.32,
  malleability: "Medium (Improves considerably when heated)",
  ductility: "High",
  allotropeCount: 2, // Hexagonal close-packed (alpha) transitions to body-centered cubic (beta) at 1155K
  color: "Silvery-grayish white metallic luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.523, // J/(g·K)
  molarHeatCapacity: 25.06, // J/(mol·K)
  heatOfFusion: 14.15, // kJ/mol
  heatOfVaporization: 425, // kJ/mol
  heatOfAtomization: 470, // kJ/mol
  standardMolarEntropy: 30.7, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 9.3e-6, // m²/s
  criticalTemperatureSuperconductivity: 0.40, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 147, // pm (Atomic radius)
  covalentRadius: 136, // pm
  vanderWaalsRadius: 187, // pm
  ionicRadius: 60.5, // pm (For Ti4+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // At room temperature (Alpha phase)
  latticeConstantA: 295.1, // pm
  latticeConstantB: 295.1, // pm
  latticeConstantC: 468.6, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP packing setup
  packingFraction: 0.74,
  atomicVolume: 10.64, // cm³/mol
  bohr: "2, 8, 10, 2",
  orbital: "[Ar] 3d2 4s2", // 1s2 2s2 2p6 3s2 3p6 3d2 4s2
  valence: 4,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.54, // Pauling scale
  electronegativityMulliken: 1.38,
  electronegativityAllredRochow: 1.32,
  ionization: 658.8, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [658.8, 1309.8, 2652.5, 4174.6, 9581, 11533, 13590, 16440, 18530, 20833],
  electronAffinity: 7.6, // kJ/mol
  oxidation: "+4, +3, +2", // +4 is the most common and chemically stable (e.g., TiO2)
  maximumOxidationState: 4,
  minimumOxidationState: -2, // Observed in rare, highly reduced organometallic complex systems
  chemicalHardness: 3.33, // eV
  chemicalSoftness: 0.300, // eV⁻¹
  electrophilicityIndex: 0.11,
  polarizability: 14.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.63, // V (For Ti2+ + 2e- -> Ti)
  flameTestColor: "N/A (Does not produce a characteristic colored flame; emits bright white stars/sparks when burning)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the 3d shell
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.15, // Zeff (For 3d subshell valence via Slater's rules)
  slatersShieldingConstant: 18.85,
  termSymbol: "3F2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -6.82, // eV (Valence 3d benchmark level)
  workFunction: 4.33, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 47.867,
  massNumber: 48, // For Titanium-48
  neutronNumber: 26, // For Titanium-48
  isotopeCount: 26, // Ti-38 to Ti-63
  stableIsotopeCount: 5, // Ti-46, Ti-47, Ti-48, Ti-49, and Ti-50
  isotopicAbundance: {
    Ti46: 8.25,
    Ti47: 7.44,  // Active NMR nucleus with spin 5/2
    Ti48: 73.72, // Main stable isotope
    Ti49: 5.41,  // Active NMR nucleus with spin 7/2
    Ti50: 5.18
  },
  halfLife: "Stable", // For Titanium-48
  decayMode: "None", // For Titanium-48
  decayEnergy: null,
  nuclearSpin: 0, // For Ti-48 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Ti-48
  neutronCrossSection: 6.1, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.003, // % by mass
  solarAbundance: 0.004, // % by mass
  crustalAbundance: 0.565, // % by mass (9th most abundant element in Earth's crust; highly prevalent structurally)
  oceanicAbundance: 1.0e-7, // % by mass (Highly insoluble in water)
  humanBodyAbundance: null, // Highly biocompatible, widely used in medical implants, but has no known native biological function
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Silicon burning and explosive alpha processes inside type II supernovae"
};
  

  
 
const vanadiumData = {
  // 1. Fundamental Identity & Classification
  num: 23,
  symbol: "V",
  name: "Vanadium",
  type: "Transition metal",
  group: 5,
  period: 4,
  block: "d",
  casRegistryNumber: "7440-62-2",
  discoverer: "Andrés Manuel del Río",
  year: 1801,
  originOfName: "Named after 'Vanadís', another name for the Norse goddess Freyja, due to the beautiful multicolored chemical compounds it forms",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.11, // g/cm³ at STP
  melting: 2183, // Kelvin
  boiling: 3680, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.32, // cm³/mol
  electricalConductivity: 4.0e6, // S/m
  electricalResistivity: 2.5e-7, // Ω·m at 20°C
  thermalConductivity: 30.7, // W/(m·K)
  thermalExpansionCoefficient: 8.4e-6, // K⁻¹ at 25°C
  speedOfSound: 4560, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 7.0, // Quite hard in pure form
  hardnessVickers: 628, // MPa
  hardnessBrinell: 600, // MPa
  bulkModulus: 160, // GPa
  shearModulus: 47, // GPa
  youngsModulus: 128, // GPa
  poissonsRatio: 0.37,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Body-centered cubic is stable under standard ambient frameworks
  color: "Silvery-gray metallic tint with a protective oxidation sheen",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.489, // J/(g·K)
  molarHeatCapacity: 24.89, // J/(mol·K)
  heatOfFusion: 21.5, // kJ/mol
  heatOfVaporization: 459, // kJ/mol
  heatOfAtomization: 512, // kJ/mol
  standardMolarEntropy: 28.9, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.0e-5, // m²/s
  criticalTemperatureSuperconductivity: 5.4, // Kelvin (Relatively high for an unalloyed elemental metal)

  // 4. Atomic & Structural Variables
  radius: 134, // pm (Atomic radius)
  covalentRadius: 125, // pm
  vanderWaalsRadius: 179, // pm
  ionicRadius: 54, // pm (For V5+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 303, // pm
  latticeConstantB: 303, // pm
  latticeConstantC: 303, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC structure configuration
  packingFraction: 0.68,
  atomicVolume: 8.32, // cm³/mol
  bohr: "2, 8, 11, 2",
  orbital: "[Ar] 3d3 4s2", // 1s2 2s2 2p6 3s2 3p6 3d3 4s2
  valence: 5,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.63, // Pauling scale
  electronegativityMulliken: 1.45,
  electronegativityAllredRochow: 1.45,
  ionization: 650.9, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [650.9, 1414, 2830, 4507, 6298.7, 12363, 14530, 16790, 19860, 22240],
  electronAffinity: 50.6, // kJ/mol
  oxidation: "+5, +4, +3, +2", // Highly variable colors (+5 is yellow, +4 is blue, +3 is green, +2 is violet)
  maximumOxidationState: 5,
  minimumOxidationState: -3, // Stabilized inside unique organometallic carbonyl complexes
  chemicalHardness: 3.11, // eV
  chemicalSoftness: 0.322, // eV⁻¹
  electrophilicityIndex: 0.41,
  polarizability: 12.4, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.13, // V (For V2+ + 2e- -> V)
  flameTestColor: "N/A (Sparkles cleanly without producing a highly distinct standard atomic flame profile)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the 3d valence block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.30, // Zeff (For 3d shell calculations via Slater's rules)
  slatersShieldingConstant: 19.70,
  termSymbol: "4F3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -6.74, // eV (Valence 3d level benchmark)
  workFunction: 4.30, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 50.942,
  massNumber: 51, // For Vanadium-51
  neutronNumber: 28, // For Vanadium-51
  isotopeCount: 26, // V-40 to V-65
  stableIsotopeCount: 1, // Monoisotopic framework (V-51 is the only perfectly stable isotope)
  isotopicAbundance: {
    V50: 0.250,  // Primordial radioisotope with an extreme half-life of 1.4e17 years (Active NMR spin 6)
    V51: 99.750  // Dominant stable matrix (Highly active NMR target nucleus with spin 7/2)
  },
  halfLife: "Stable", // For Vanadium-51
  decayMode: "None", // For Vanadium-51
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 for V-51
  magneticDipoleMoment: 5.1487, // nuclear magnetons
  neutronCrossSection: 5.06, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0001, // % by mass
  solarAbundance: 0.00004, // % by mass
  crustalAbundance: 0.012, // % by mass (120 mg/kg; common trace component in basaltic rocks)
  oceanicAbundance: 2.5e-7, // % by mass (Present primarily as dissolved vanadate oxyanions)
  humanBodyAbundance: 0.0000001, // % by mass (Essential micronutrient at ultra-low limits for some species)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Silicon burning process and explosive supernova carbon detonation"
};
  

  
 
const chromiumData = {
  // 1. Fundamental Identity & Classification
  num: 24,
  symbol: "Cr",
  name: "Chromium",
  type: "Transition metal",
  group: 6,
  period: 4,
  block: "d",
  casRegistryNumber: "7440-47-3",
  discoverer: "Louis Nicolas Vauquelin",
  year: 1797,
  originOfName: "Derived from the Greek word 'chroma', meaning color, due to the intense and varied colors of its compounds",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.19, // g/cm³ at STP
  melting: 2180, // Kelvin
  boiling: 2944, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 7.23, // cm³/mol
  electricalConductivity: 7.9e6, // S/m
  electricalResistivity: 1.25e-7, // Ω·m at 20°C
  thermalConductivity: 93.9, // W/(m·K)
  thermalExpansionCoefficient: 4.9e-6, // K⁻¹ at 25°C
  speedOfSound: 5940, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 8.5, // The hardest elemental metal on the Mohs scale
  hardnessVickers: 1060, // MPa
  hardnessBrinell: 1120, // MPa
  bulkModulus: 160, // GPa
  shearModulus: 115, // GPa
  youngsModulus: 279, // GPa (Exceptionally stiff)
  poissonsRatio: 0.21,
  malleability: "Low (Hard and highly brittle at room temp; workable at high temp)",
  ductility: "Low",
  allotropeCount: 1, // Body-centered cubic is the stable ambient crystalline form
  color: "Silvery-gray, highly lustrous and reflective",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.448, // J/(g·K)
  molarHeatCapacity: 23.35, // J/(mol·K)
  heatOfFusion: 21.0, // kJ/mol
  heatOfVaporization: 347, // kJ/mol
  heatOfAtomization: 397, // kJ/mol
  standardMolarEntropy: 23.6, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.91e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 128, // pm (Atomic radius)
  covalentRadius: 122, // pm
  vanderWaalsRadius: 189, // pm
  ionicRadius: 61.5, // pm (For Cr3+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 288, // pm
  latticeConstantB: 288, // pm
  latticeConstantC: 288, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC structure configuration
  packingFraction: 0.68,
  atomicVolume: 7.23, // cm³/mol
  bohr: "2, 8, 13, 1",
  orbital: "[Ar] 3d5 4s1", // Anomalous configuration due to the stability of a half-filled d-subshell
  valence: 6,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.66, // Pauling scale
  electronegativityMulliken: 1.56,
  electronegativityAllredRochow: 1.56,
  ionization: 652.9, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [652.9, 1590.6, 2987, 4743, 6730, 8744.9, 15455, 17820, 20190, 23580],
  electronAffinity: 64.3, // kJ/mol
  oxidation: "+3, +6, +2", // +3 is the most stable and safe; +6 is a powerful oxidizer and highly toxic
  maximumOxidationState: 6,
  minimumOxidationState: -4, // Stabilized within specific highly reduced organometallic complex systems
  chemicalHardness: 3.06, // eV
  chemicalSoftness: 0.327, // eV⁻¹
  electrophilicityIndex: 0.68,
  polarizability: 11.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.74, // V (For Cr3+ + 3e- -> Cr)
  flameTestColor: "N/A (Emits white-green sparks, no classic definitive solution atomic flame identity)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the 3d valence block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.45, // Zeff (For 3d shell via Slater's rules)
  slatersShieldingConstant: 20.55,
  termSymbol: "7S3",
  totalAngularMomentumQuantumNumber: 3.0, // J = 3
  atomicOrbitalEnergyLevel: -6.76, // eV (Valence 3d level benchmark)
  workFunction: 4.50, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 51.996,
  massNumber: 52, // For Chromium-52
  neutronNumber: 28, // For Chromium-52 (Magic neutron configuration)
  isotopeCount: 26, // Cr-42 to Cr-67
  stableIsotopeCount: 3, // Cr-52, Cr-53, and Cr-54 (Cr-50 is technically a primordial radioisotope with a half-life > 1.3e18 years)
  isotopicAbundance: {
    Cr50: 4.345,  // Long-lived primordial radioisotope
    Cr52: 83.789, // Dominant stable isotope
    Cr53: 9.501,  // Stable active NMR nucleus with spin 3/2
    Cr54: 2.365   // Stable isotope
  },
  halfLife: "Stable", // For Chromium-52
  decayMode: "None", // For Chromium-52
  decayEnergy: null,
  nuclearSpin: 0, // For Cr-52 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Cr-52
  neutronCrossSection: 3.1, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0015, // % by mass
  solarAbundance: 0.0016, // % by mass
  crustalAbundance: 0.010, // % by mass (100 mg/kg; common transition metal matrix element)
  oceanicAbundance: 3.0e-8, // % by mass
  humanBodyAbundance: 0.00000003, // % by mass (Trace levels; biological essentiality remains under scientific debate)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Silicon burning process inside core-collapse massive stars"
};
  

  
 
const manganeseData = {
  // 1. Fundamental Identity & Classification
  num: 25,
  symbol: "Mn",
  name: "Manganese",
  type: "Transition metal",
  group: 7,
  period: 4,
  block: "d",
  casRegistryNumber: "7439-96-5",
  discoverer: "Carl Wilhelm Scheele, Johan Gottlieb Gahn",
  year: 1774,
  originOfName: "Derived from the Latin 'magnes', meaning magnet, because it was confused with magnetic iron oxides (magnesia nigra)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.21, // g/cm³ at STP
  melting: 1519, // Kelvin
  boiling: 2334, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 7.62, // cm³/mol
  electricalConductivity: 6.2e5, // S/m (Poor conductor compared to other transition metals)
  electricalResistivity: 1.44e-6, // Ω·m at 20°C
  thermalConductivity: 12.0, // W/(m·K)
  thermalExpansionCoefficient: 21.7e-6, // K⁻¹ at 25°C
  speedOfSound: 5150, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 6.0, // Quite hard and highly brittle
  hardnessVickers: null,
  hardnessBrinell: 196, // MPa
  bulkModulus: 120, // GPa
  shearModulus: 78, // GPa
  youngsModulus: 198, // GPa
  poissonsRatio: 0.26,
  malleability: "Low (Very brittle, shatters under a hammer)",
  ductility: "Low",
  allotropeCount: 4, // α-manganese (BCC basis, stable at room temp), β, γ, δ phases at higher temperatures
  color: "Silvery-gray, resembling iron but harder and more brittle",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.479, // J/(g·K)
  molarHeatCapacity: 26.32, // J/(mol·K)
  heatOfFusion: 12.91, // kJ/mol
  heatOfVaporization: 221, // kJ/mol
  heatOfAtomization: 283, // kJ/mol
  standardMolarEntropy: 32.0, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 139, // pm (Atomic radius)
  covalentRadius: 139, // pm
  vanderWaalsRadius: 197, // pm
  ionicRadius: 67, // pm (For Mn2+ high spin coordination number 6)
  crystalStructure: "Body-centered cubic basis (Complex 58-atom cubic unit cell for α-form)",
  latticeConstantA: 891, // pm
  latticeConstantB: 891, // pm
  latticeConstantC: 891, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "I-43m",
  coordinationNumber: 12, // Varies significantly across the complex alpha atomic lattice positions
  packingFraction: null,
  atomicVolume: 7.62, // cm³/mol
  bohr: "2, 8, 13, 2",
  orbital: "[Ar] 3d5 4s2", // High stability associated with a exactly half-filled d-subshell
  valence: 7,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.55, // Pauling scale
  electronegativityMulliken: 1.60,
  electronegativityAllredRochow: 1.60,
  ionization: 717.3, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [717.3, 1509.0, 3248, 4940, 6990, 9220, 11500, 18770, 21400, 23960],
  electronAffinity: -50.0, // kJ/mol (Unfavorable addition due to stable half-filled d-subshell configuration)
  oxidation: "+2, +3, +4, +7", // Widely known for having one of the widest spans of oxidation states (+7 in purple permanganates)
  maximumOxidationState: 7,
  minimumOxidationState: -3,
  chemicalHardness: 3.61, // eV
  chemicalSoftness: 0.277, // eV⁻¹
  electrophilicityIndex: 0.35,
  polarizability: 9.4, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.18, // V (For Mn2+ + 2e- -> Mn)
  flameTestColor: "N/A (Produces a flash of bright whitish-green sparks inside specialized plasma emitters)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the 3d block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.60, // Zeff (For 3d shell via Slater's rules)
  slatersShieldingConstant: 21.40,
  termSymbol: "6S5/2",
  totalAngularMomentumQuantumNumber: 2.5, // J = 5/2
  atomicOrbitalEnergyLevel: -7.31, // eV (Valence 3d level benchmark)
  workFunction: 4.10, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 54.938,
  massNumber: 55, // For Manganese-55
  neutronNumber: 30, // For Manganese-55
  isotopeCount: 26, // Mn-44 to Mn-69
  stableIsotopeCount: 1, // Monoisotopic framework (Only Mn-55 is stable)
  isotopicAbundance: {
    Mn55: 100.0 // 100% naturally occurring abundance
  },
  halfLife: "Stable", // For Manganese-55 (Mn-53 is a long-lived extinct/cosmogenic radioisotope with t1/2 of 3.7e6 years)
  decayMode: "None", // For Manganese-55
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 (Highly sensitive NMR nucleus)
  magneticDipoleMoment: 3.4687, // nuclear magnetons
  neutronCrossSection: 13.3, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0008, // % by mass
  solarAbundance: 0.0010, // % by mass
  crustalAbundance: 0.095, // % by mass (950 mg/kg; 12th most abundant element in Earth's crust)
  oceanicAbundance: 2.0e-8, // % by mass
  humanBodyAbundance: 0.00002, // % by mass (Essential trace cofactor for multiple enzymes like superoxide dismutase)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Silicon burning process right before iron-peak formation in supernova collapse events"
};
  

  
 
const ironData = {
  // 1. Fundamental Identity & Classification
  num: 26,
  symbol: "Fe",
  name: "Iron",
  type: "Transition metal",
  group: 8,
  period: 4,
  block: "d",
  casRegistryNumber: "7439-89-6",
  discoverer: "Known since antiquity",
  year: null, // Prehistoric discovery (Iron Age)
  originOfName: "Derived from the Old English 'iren'. The symbol Fe comes from the Latin 'ferrum', meaning firmness or iron",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.874, // g/cm³ at STP
  melting: 1811, // Kelvin
  boiling: 3134, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 7.09, // cm³/mol
  electricalConductivity: 1.0e7, // S/m (Good conductor)
  electricalResistivity: 9.61e-8, // Ω·m at 20°C
  thermalConductivity: 80.4, // W/(m·K)
  thermalExpansionCoefficient: 11.8e-6, // K⁻¹ at 25°C
  speedOfSound: 5120, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 4.0, // Pure iron is relatively soft; hardens drastically with carbon (steel)
  hardnessVickers: 608, // MPa
  hardnessBrinell: 490, // MPa
  bulkModulus: 170, // GPa
  shearModulus: 82, // GPa
  youngsModulus: 211, // GPa (High stiffness)
  poissonsRatio: 0.29,
  malleability: "High",
  ductility: "High",
  allotropeCount: 3, // α-iron (ferrite, BCC at room temp), γ-iron (austenite, FCC), δ-iron (BCC at high temp)
  color: "Lustrous silvery-gray with a metallic sheen",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.449, // J/(g·K)
  molarHeatCapacity: 25.10, // J/(mol·K)
  heatOfFusion: 13.81, // kJ/mol
  heatOfVaporization: 340, // kJ/mol
  heatOfAtomization: 415, // kJ/mol
  standardMolarEntropy: 27.3, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.3e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 126, // pm (Atomic radius)
  covalentRadius: 124, // pm
  vanderWaalsRadius: 194, // pm
  ionicRadius: 64.5, // pm (For Fe3+ high spin coordination number 6)
  crystalStructure: "Body-centered cubic", // At room temperature (Alpha phase)
  latticeConstantA: 286.6, // pm
  latticeConstantB: 286.6, // pm
  latticeConstantC: 286.6, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC ferrite packing
  packingFraction: 0.68,
  atomicVolume: 7.09, // cm³/mol
  bohr: "2, 8, 14, 2",
  orbital: "[Ar] 3d6 4s2", // 1s2 2s2 2p6 3s2 3p6 3d6 4s2
  valence: 6,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.83, // Pauling scale
  electronegativityMulliken: 1.80,
  electronegativityAllredRochow: 1.64,
  ionization: 762.5, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [762.5, 1561.9, 2957, 5290, 7240, 9560, 12060, 14520, 22540, 25210],
  electronAffinity: 15.7, // kJ/mol
  oxidation: "+3, +2", // +3 (ferric) and +2 (ferrous) are highly dominant; +6 is possible but rare (ferrates)
  maximumOxidationState: 6,
  minimumOxidationState: -2, // Observed in highly reduced carbonyl structures
  chemicalHardness: 3.43, // eV
  chemicalSoftness: 0.292, // eV⁻¹
  electrophilicityIndex: 0.21,
  polarizability: 8.4, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.44, // V (For Fe2+ + 2e- -> Fe)
  flameTestColor: "Gold / Yellow-orange sparkles (when powdered in a flame)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the 3d block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.75, // Zeff (For 3d subshell valence via Slater's rules)
  slatersShieldingConstant: 22.25,
  termSymbol: "5D4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: -7.90, // eV (Valence 3d level benchmark)
  workFunction: 4.50, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 55.845,
  massNumber: 56, // For Iron-56 (Most stable nuclear configuration per nucleon globally)
  neutronNumber: 30, // For Iron-56
  isotopeCount: 28, // Fe-45 to Fe-72
  stableIsotopeCount: 4, // Fe-54, Fe-56, Fe-57, and Fe-58
  isotopicAbundance: {
    Fe54: 5.845,  // Structurally stable (long-lived double electron capture suspect)
    Fe56: 91.754, // Most abundant nuclear equilibrium product
    Fe57: 2.119,  // Active Mössbauer spectroscopy isotope (NMR active with spin 1/2)
    Fe58: 0.282
  },
  halfLife: "Stable", // For Iron-56
  decayMode: "None", // For Iron-56
  decayEnergy: null,
  nuclearSpin: 0, // For Fe-56 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Fe-56
  neutronCrossSection: 2.56, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.11, // % by mass (The heaviest element produced efficiently via stellar silicon burning)
  solarAbundance: 0.10, // % by mass
  crustalAbundance: 5.63, // % by mass (Fourth most abundant element and second most abundant metal in Earth's crust)
  oceanicAbundance: 0.0000002, // % by mass (Highly localized primary limiting nutrient for oceanic phytoplankton blooms)
  humanBodyAbundance: 0.006, // % by mass (Essential component of hemoglobin, myoglobin, and cytochrome systems)
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Silicon burning process (the terminal endpoint of standard stellar exothermic fusion)"
};
  

  
 
const cobaltData = {
  // 1. Fundamental Identity & Classification
  num: 27,
  symbol: "Co",
  name: "Cobalt",
  type: "Transition metal",
  group: 9,
  period: 4,
  block: "d",
  casRegistryNumber: "7440-48-4",
  discoverer: "Georg Brandt",
  year: 1735,
  originOfName: "Derived from the German word 'Kobold', meaning goblin or evil spirit, because miners blamed it for the failure to smelt copper or silver from certain ores",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.90, // g/cm³ at STP (Dense, heavy transition metal)
  melting: 1768, // Kelvin
  boiling: 3200, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 6.62, // cm³/mol
  electricalConductivity: 1.6e7, // S/m (Good electrical conductor)
  electricalResistivity: 6.24e-8, // Ω·m at 20°C
  thermalConductivity: 100, // W/(m·K)
  thermalExpansionCoefficient: 13.0e-6, // K⁻¹ at 25°C
  speedOfSound: 4720, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 5.0, // Harder than iron and nickel in unalloyed states
  hardnessVickers: 1043, // MPa
  hardnessBrinell: 700, // MPa
  bulkModulus: 180, // GPa
  shearModulus: 75, // GPa
  youngsModulus: 209, // GPa (High stiffness structural matrix)
  poissonsRatio: 0.31,
  malleability: "Medium",
  ductility: "High",
  allotropeCount: 2, // Hexagonal close-packed (alpha, stable below 721K) and Face-centered cubic (beta, stable at high temps)
  color: "Lustrous, metallic, silver-gray with a faint bluish tint",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.421, // J/(g·K)
  molarHeatCapacity: 24.81, // J/(mol·K)
  heatOfFusion: 16.06, // kJ/mol
  heatOfVaporization: 377, // kJ/mol
  heatOfAtomization: 425, // kJ/mol
  standardMolarEntropy: 30.0, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.67e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 125, // pm (Atomic radius)
  covalentRadius: 126, // pm
  vanderWaalsRadius: 192, // pm
  ionicRadius: 65, // pm (For Co2+ high spin coordination number 6)
  crystalStructure: "Hexagonal close-packed", // At room temperature (Alpha phase)
  latticeConstantA: 250.7, // pm
  latticeConstantB: 250.7, // pm
  latticeConstantC: 406.9, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP packing setup
  packingFraction: 0.74,
  atomicVolume: 6.62, // cm³/mol
  bohr: "2, 8, 15, 2",
  orbital: "[Ar] 3d7 4s2", // 1s2 2s2 2p6 3s2 3p6 3d7 4s2
  valence: 3, // Common valences are 2 and 3
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.88, // Pauling scale
  electronegativityMulliken: 1.70,
  electronegativityAllredRochow: 1.70,
  ionization: 760.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [760.4, 1648, 3232, 4950, 7670, 9840, 12100, 15000, 17900, 26570],
  electronAffinity: 64.0, // kJ/mol
  oxidation: "+2, +3", // +2 (cobaltous) is the most stable in simple salts; +3 (cobaltic) is highly stable in complexes
  maximumOxidationState: 5, // Rare, observed in unique fluorides or oxides under extreme oxidizing conditions
  minimumOxidationState: -1, // Observed in specific highly reduced carbonyl structures
  chemicalHardness: 3.48, // eV
  chemicalSoftness: 0.287, // eV⁻¹
  electrophilicityIndex: 0.59,
  polarizability: 7.5, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.28, // V (For Co2+ + 2e- -> Co)
  flameTestColor: "N/A (Sparkles without a unique solution atomic flame; gives deep signature blue color in borax bead tests)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the 3d block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.90, // Zeff (For 3d subshell valence via Slater's rules)
  slatersShieldingConstant: 23.10,
  termSymbol: "4F9/2",
  totalAngularMomentumQuantumNumber: 4.5, // J = 9/2
  atomicOrbitalEnergyLevel: -7.87, // eV (Valence 3d level benchmark)
  workFunction: 5.00, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 58.933,
  massNumber: 59, // For Cobalt-59
  neutronNumber: 32, // For Cobalt-59
  isotopeCount: 29, // Co-47 to Co-75
  stableIsotopeCount: 1, // Monoisotopic (Only Co-59 is stable)
  isotopicAbundance: {
    Co59: 100.0 // 100% naturally occurring abundance on Earth
  },
  halfLife: "Stable", // For Cobalt-59 (Co-60 is a famous synthetic gamma-emitting industrial/medical radioisotope with t1/2 of 5.27 years)
  decayMode: "None", // For Cobalt-59
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 (Highly active NMR target nucleus)
  magneticDipoleMoment: 4.627, // nuclear magnetons
  neutronCrossSection: 37.2, // barns (High thermal neutron absorption capture matrix)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0003, // % by mass
  solarAbundance: 0.0004, // % by mass
  crustalAbundance: 0.0025, // % by mass (25 mg/kg; trace but highly concentrated in specific ore fields)
  oceanicAbundance: 2.0e-9, // % by mass
  humanBodyAbundance: 0.000001, // % by mass (Essential core structural atom of Vitamin B12 / cobalamin)
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Silicon burning and explosive iron-peak generation processes inside core-collapse supernovae"
};
  

  
 
const nickelData = {
  // 1. Fundamental Identity & Classification
  num: 28,
  symbol: "Ni",
  name: "Nickel",
  type: "Transition metal",
  group: 10,
  period: 4,
  block: "d",
  casRegistryNumber: "7440-02-0",
  discoverer: "Axel Fredrik Cronstedt",
  year: 1751,
  originOfName: "Derived from the German word 'Kupfernickel', meaning goblin's copper or false copper, because miners mistook its reddish ore for copper but could extract none from it",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.908, // g/cm³ at STP (High-density transition metal)
  melting: 1728, // Kelvin
  boiling: 3186, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 6.59, // cm³/mol
  electricalConductivity: 1.43e7, // S/m (Good conductor)
  electricalResistivity: 6.99e-8, // Ω·m at 20°C
  thermalConductivity: 90.9, // W/(m·K)
  thermalExpansionCoefficient: 13.4e-6, // K⁻¹ at 25°C
  speedOfSound: 4900, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 4.0, // Harder than iron, highly polishable
  hardnessVickers: 638, // MPa
  hardnessBrinell: 700, // MPa
  bulkModulus: 180, // GPa
  shearModulus: 76, // GPa
  youngsModulus: 200, // GPa (High structural stiffness)
  poissonsRatio: 0.31,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Face-centered cubic is stable under standard ambient frameworks
  color: "Lustrous silvery-white with a slight golden/yellowish tinge",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.444, // J/(g·K)
  molarHeatCapacity: 26.07, // J/(mol·K)
  heatOfFusion: 17.48, // kJ/mol
  heatOfVaporization: 379, // kJ/mol
  heatOfAtomization: 430, // kJ/mol
  standardMolarEntropy: 29.87, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 2.3e-5, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 124, // pm (Atomic radius)
  covalentRadius: 121, // pm
  vanderWaalsRadius: 163, // pm
  ionicRadius: 69, // pm (For Ni2+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 352.4, // pm
  latticeConstantB: 352.4, // pm
  latticeConstantC: 352.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Standard FCC packing arrangement
  packingFraction: 0.74,
  atomicVolume: 6.59, // cm³/mol
  bohr: "2, 8, 16, 2",
  orbital: "[Ar] 3d8 4s2", // 1s2 2s2 2p6 3s2 3p6 3d8 4s2
  valence: 2, // Most common valence; can also exhibit 3 and 4 in rare complexes
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.91, // Pauling scale
  electronegativityMulliken: 1.75,
  electronegativityAllredRochow: 1.75,
  ionization: 737.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [737.1, 1753.0, 3395, 5300, 7339, 10400, 12800, 15600, 18600, 21670],
  electronAffinity: 112.0, // kJ/mol
  oxidation: "+2", // The overwhelmingly standard, stable green-colored oxidation state
  maximumOxidationState: 4, // Rare, observed in unique oxides or specialized complex geometries
  minimumOxidationState: -1, // Observed in specific highly reduced carbonyl structures
  chemicalHardness: 3.24, // eV
  chemicalSoftness: 0.309, // eV⁻¹
  electrophilicityIndex: 0.95,
  polarizability: 6.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.25, // V (For Ni2+ + 2e- -> Ni; resists corrosion efficiently via passivation)
  flameTestColor: "N/A (Sparkles cleanly without producing a highly distinct classic standalone atomic flame profile)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 3, // n = 3 for the 3d valence block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.05, // Zeff (For 3d shell via Slater's rules)
  slatersShieldingConstant: 23.95,
  termSymbol: "3F4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: -7.63, // eV (Valence 3d level benchmark)
  workFunction: 5.15, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 58.693,
  massNumber: 58, // For Nickel-58
  neutronNumber: 30, // For Nickel-58
  isotopeCount: 31, // Ni-48 to Ni-78
  stableIsotopeCount: 5, // Ni-58, Ni-60, Ni-61, Ni-62, and Ni-64
  isotopicAbundance: {
    Ni58: 68.077, // Most abundant stable isotope
    Ni60: 26.223, // Stable isotope
    Ni61: 1.140,  // Active NMR target nucleus with spin 3/2
    Ni62: 3.634,  // Highest nuclear binding energy per nucleon of any stable nuclide
    Ni64: 0.926
  },
  halfLife: "Stable", // For Nickel-58 (Ni-59 is a long-lived cosmic radioisotope with t1/2 of 76,000 years; Ni-63 is an industrial beta-emitter)
  decayMode: "None", // For Nickel-58
  decayEnergy: null,
  nuclearSpin: 0, // For Ni-58 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Ni-58
  neutronCrossSection: 4.5, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.006, // % by mass (Abundant endpoint of the stellar silicon/alpha burn pipeline)
  solarAbundance: 0.008, // % by mass
  crustalAbundance: 0.0084, // % by mass (84 mg/kg; highly concentrated in the Earth's core alongside iron)
  oceanicAbundance: 5.0e-7, // % by mass
  humanBodyAbundance: 0.00001, // % by mass (Essential trace cofactor for specific bacterial and plant enzymes like urease, trace limits in humans)
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Silicon burning process inside core-collapse massive stars and Type Ia supernovae equilibria"
};
  

  
 
const copperData = {
  // 1. Fundamental Identity & Classification
  num: 29,
  symbol: "Cu",
  name: "Copper",
  type: "Transition metal", // Coinage metal
  group: 11,
  period: 4,
  block: "d",
  casRegistryNumber: "7440-50-8",
  discoverer: "Known since antiquity",
  year: null, // Prehistoric discovery (Chalcolithic / Bronze Age)
  originOfName: "Derived from the Old English 'coper', which comes from the Latin 'Cyprium aes', meaning metal from Cyprus (where it was heavily mined)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.96, // g/cm³ at STP
  melting: 1357.77, // Kelvin
  boiling: 2835, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 7.11, // cm³/mol
  electricalConductivity: 5.96e7, // S/m (Second highest electrical conductivity of any element after silver)
  electricalResistivity: 1.68e-8, // Ω·m at 20°C
  thermalConductivity: 401, // W/(m·K) (Excellent thermal conductor)
  thermalExpansionCoefficient: 16.5e-6, // K⁻¹ at 25°C
  speedOfSound: 3810, // m/s at 20°C (for rolled copper)
  refractiveIndex: null, // Solid metal
  hardnessMohs: 3.0, // Relatively soft and easily worked
  hardnessVickers: 369, // MPa
  hardnessBrinell: 874, // MPa
  bulkModulus: 140, // GPa
  shearModulus: 48, // GPa
  youngsModulus: 128, // GPa
  poissonsRatio: 0.34,
  malleability: "High",
  ductility: "High (Can be easily drawn into fine wire matrices)",
  allotropeCount: 1, // Face-centered cubic remains the single stable structural matrix under ambient parameters
  color: "Reddish-orange with a bright metallic luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.385, // J/(g·K)
  molarHeatCapacity: 24.44, // J/(mol·K)
  heatOfFusion: 13.26, // kJ/mol
  heatOfVaporization: 300.4, // kJ/mol
  heatOfAtomization: 338, // kJ/mol
  standardMolarEntropy: 33.15, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.11e-4, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 128, // pm (Atomic radius)
  covalentRadius: 132, // pm
  vanderWaalsRadius: 140, // pm
  ionicRadius: 73, // pm (For Cu2+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 361.5, // pm
  latticeConstantB: 361.5, // pm
  latticeConstantC: 361.5, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Standard FCC packing setup
  packingFraction: 0.74,
  atomicVolume: 7.11, // cm³/mol
  bohr: "2, 8, 18, 1",
  orbital: "[Ar] 3d10 4s1", // Anomalous full d-subshell optimization for quantum stability
  valence: 2, // Forms stable Cu2+ (cupric) and Cu+ (cuprous) systems
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.90, // Pauling scale
  electronegativityMulliken: 1.75,
  electronegativityAllredRochow: 1.75,
  ionization: 745.5, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [745.5, 1957.9, 3555, 5536, 7700, 9900, 13400, 16000, 19200, 22400],
  electronAffinity: 118.4, // kJ/mol
  oxidation: "+2, +1", // +2 is chemically the most stable and prominent (blue/green in solution)
  maximumOxidationState: 4, // Extremely rare, restricted to unique fluorides/oxides under severe oxidation
  minimumOxidationState: -2,
  chemicalHardness: 3.13, // eV
  chemicalSoftness: 0.319, // eV⁻¹
  electrophilicityIndex: 0.96,
  polarizability: 6.2, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.34, // V (For Cu2+ + 2e- -> Cu; noble character, does not dissolve in standard non-oxidizing acids)
  flameTestColor: "Blue-green (or bright emerald green depending on the halide species presence)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the outer valence 4s subshell electron
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.20, // Zeff (Valence shell electrons via Slater's rules)
  slatersShieldingConstant: 24.80,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -7.72, // eV (Outer valence level benchmark)
  workFunction: 4.65, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 63.546,
  massNumber: 63, // For Copper-63
  neutronNumber: 34, // For Copper-63
  isotopeCount: 29, // Cu-52 to Cu-80
  stableIsotopeCount: 2, // Cu-63 and Cu-65
  isotopicAbundance: {
    Cu63: 69.15, // % abundance on Earth (Active NMR target nucleus with spin 3/2)
    Cu65: 30.85  // % abundance on Earth (Active NMR target nucleus with spin 3/2)
  },
  halfLife: "Stable", // For Copper-63 (Cu-64 is an outstanding medical positron/beta emitter with a 12.7-hour half-life)
  decayMode: "None", // For Copper-63
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for both standard isotopes
  magneticDipoleMoment: 2.223, // nuclear magnetons for Cu-63
  neutronCrossSection: 3.78, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00007, // % by mass
  solarAbundance: 0.00007, // % by mass
  crustalAbundance: 0.0060, // % by mass (60 mg/kg; fundamental structural metal resource)
  oceanicAbundance: 2.5e-8, // % by mass (Highly regulated trace structural nutrient)
  humanBodyAbundance: 0.0001, // % by mass (Crucial respiratory cofactor in enzymes like cytochrome c oxidase)
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Explosive explosive carbon/neon burning phases inside supernovae shell structures"
};
  

  
 
const zincData = {
  // 1. Fundamental Identity & Classification
  num: 30,
  symbol: "Zn",
  name: "Zinc",
  type: "Transition metal", // Often classified as a post-transition metal due to a filled d-subshell
  group: 12,
  period: 4,
  block: "d",
  casRegistryNumber: "7440-66-6",
  discoverer: "Known since antiquity / Formally isolated by Andreas Sigismund Marggraf",
  year: 1746,
  originOfName: "Derived from the German word 'Zinke', meaning prong or tooth, referencing the jagged appearance of the crystalline structures formed during smelting",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.14, // g/cm³ at STP
  melting: 692.68, // Kelvin (Relatively low melting point for a d-block element)
  boiling: 1180, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 9.16, // cm³/mol
  electricalConductivity: 1.66e7, // S/m (Good conductor)
  electricalResistivity: 5.9e-8, // Ω·m at 20°C
  thermalConductivity: 116, // W/(m·K)
  thermalExpansionCoefficient: 30.2e-6, // K⁻¹ at 25°C
  speedOfSound: 3850, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 2.5, // Fairly soft, malleable at 100-150°C but brittle at other temperatures
  hardnessVickers: null,
  hardnessBrinell: 412, // MPa
  bulkModulus: 70, // GPa
  shearModulus: 43, // GPa
  youngsModulus: 108, // GPa
  poissonsRatio: 0.25,
  malleability: "Medium (Becomes highly malleable only when heated above 100°C)",
  ductility: "Medium",
  allotropeCount: 1, // Hexagonal close-packed structure remains uniform under standard conditions
  color: "Lustrous bluish-white, tarnishes to a matte light gray protective carbonate layer",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.388, // J/(g·K)
  molarHeatCapacity: 25.47, // J/(mol·K)
  heatOfFusion: 7.32, // kJ/mol
  heatOfVaporization: 115.3, // kJ/mol
  heatOfAtomization: 131, // kJ/mol
  standardMolarEntropy: 41.6, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 4.17e-5, // m²/s
  criticalTemperatureSuperconductivity: 0.85, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 134, // pm (Atomic radius)
  covalentRadius: 122, // pm
  vanderWaalsRadius: 139, // pm
  ionicRadius: 74, // pm (For Zn2+ coordination number 6)
  crystalStructure: "Hexagonal close-packed (Slightly elongated along the c-axis)",
  latticeConstantA: 266.5, // pm
  latticeConstantB: 266.5, // pm
  latticeConstantC: 494.7, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // HCP structural arrangement
  packingFraction: 0.74,
  atomicVolume: 9.16, // cm³/mol
  bohr: "2, 8, 18, 2",
  orbital: "[Ar] 3d10 4s2", // All subshells completely filled
  valence: 2,
  coreElectronCount: 18,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.65, // Pauling scale
  electronegativityMulliken: 1.59,
  electronegativityAllredRochow: 1.66,
  ionization: 906.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [906.4, 1733.3, 3833, 5731, 7970, 10400, 12900, 16800, 19600, 23000],
  electronAffinity: -58.0, // kJ/mol (Unfavorable electron addition due to stable s2 subshell)
  oxidation: "+2", // Exclusively exhibits the +2 state in natural chemical frameworks
  maximumOxidationState: 2,
  minimumOxidationState: 0,
  chemicalHardness: 4.60, // eV
  chemicalSoftness: 0.217, // eV⁻¹
  electrophilicityIndex: 0.27,
  polarizability: 5.7, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.76, // V (For Zn2+ + 2e- -> Zn; widely used as a sacrificial anode for galvanization)
  flameTestColor: "Bluish-green (Often creates a bright white smoke of ZnO when burned vigorously)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the outer valence 4s subshell
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.35, // Zeff (Outer valence shell via Slater's rules)
  slatersShieldingConstant: 25.65,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -9.39, // eV (Outer valence level benchmark)
  workFunction: 4.33, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 65.38,
  massNumber: 64, // For Zinc-64
  neutronNumber: 34, // For Zinc-64
  isotopeCount: 30, // Zn-54 to Zn-83
  stableIsotopeCount: 5, // Zn-64, Zn-66, Zn-67, Zn-68, and Zn-70
  isotopicAbundance: {
    Zn64: 49.17, // Most common stable isotope
    Zn66: 27.73, // Stable isotope
    Zn67: 4.04,  // Stable active NMR nucleus with spin 5/2
    Zn68: 18.45, // Stable isotope
    Zn70: 0.61   // Stable isotope
  },
  halfLife: "Stable", // For Zinc-64 (Zn-65 is a notable beta/gamma emitter tracer with a 244-day half-life)
  decayMode: "None", // For Zinc-64
  decayEnergy: null,
  nuclearSpin: 0, // For Zn-64 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Zn-64
  neutronCrossSection: 1.1, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00003, // % by mass
  solarAbundance: 0.00010, // % by mass
  crustalAbundance: 0.0070, // % by mass (70 mg/kg; common industrial structural commodity)
  oceanicAbundance: 5.0e-8, // % by mass (Vital regulatory marine trace nutrient)
  humanBodyAbundance: 0.0033, // % by mass (Second most abundant transition metal in humans; critical for DNA polymerase, structural finger proteins, and over 300 enzymes)
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Silicon burning process and alpha process integration within massive dying stars"
};
  

  
 
const galliumData = {
  // 1. Fundamental Identity & Classification
  num: 31,
  symbol: "Ga",
  name: "Gallium",
  type: "Post-transition metal",
  group: 13,
  period: 4,
  block: "p",
  casRegistryNumber: "7440-55-3",
  discoverer: "Paul-Émile Lecoq de Boisbaudran",
  year: 1875,
  originOfName: "Derived from the Latin word 'Gallia', meaning France, in honor of the discoverer's homeland",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 5.91, // g/cm³ at STP (Increases to ~6.09 g/cm³ when liquid; expands upon freezing)
  melting: 302.91, // Kelvin (29.76°C; melts in a warm hand)
  boiling: 2673, // Kelvin (One of the largest liquid ranges of any element)
  triplePointTemperature: 302.9166, // Kelvin (Used as a defining fixed point on the ITS-90 temperature scale)
  triplePointPressure: 0.0, // kPa (Negligible)
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 11.80, // cm³/mol
  electricalConductivity: 7.1e6, // S/m
  electricalResistivity: 1.4e-7, // Ω·m at 20°C
  thermalConductivity: 29.4, // W/(m·K)
  thermalExpansionCoefficient: 120e-6, // K⁻¹ (Liquid state value; highly anisotropic in solid form)
  speedOfSound: 2740, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 1.5, // Extremely soft, can be cut with a knife
  hardnessVickers: null,
  hardnessBrinell: 60, // MPa
  bulkModulus: 35, // GPa
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Low (Brittle at cold temperatures, but liquefies easily)",
  ductility: "Low",
  allotropeCount: 1, // Standard alpha-gallium is stable at ambient settings (orthorhombic structure)
  color: "Silvery-blue luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.373, // J/(g·K)
  molarHeatCapacity: 25.86, // J/(mol·K)
  heatOfFusion: 5.59, // kJ/mol
  heatOfVaporization: 254, // kJ/mol
  heatOfAtomization: 277, // kJ/mol
  standardMolarEntropy: 40.8, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 1.08, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 135, // pm (Atomic radius)
  covalentRadius: 122, // pm
  vanderWaalsRadius: 187, // pm
  ionicRadius: 62, // pm (For Ga3+ coordination number 6)
  crystalStructure: "Orthorhombic (Unique configuration with short Ga-Ga covalent dimer bonds)",
  latticeConstantA: 451.9, // pm
  latticeConstantB: 452.6, // pm
  latticeConstantC: 766.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Cmca",
  coordinationNumber: 7, // Highly unusual distorted coordination polyhedron surrounding each atom
  packingFraction: null,
  atomicVolume: 11.80, // cm³/mol
  bohr: "2, 8, 18, 3",
  orbital: "[Ar] 3d10 4s2 4p1", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p1
  valence: 3,
  coreElectronCount: 28,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.81, // Pauling scale
  electronegativityMulliken: 1.76,
  electronegativityAllredRochow: 1.82,
  ionization: 578.8, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [578.8, 1979.3, 2963, 6180, 8499, 10600, 13400, 16500, 19700, 23400],
  electronAffinity: 28.9, // kJ/mol
  oxidation: "+3", // Standard stable oxidation state; +1 exists in high-temperature suboxides or halides
  maximumOxidationState: 3,
  minimumOxidationState: -3, // Found in specific Zintl-phase alloy variations
  chemicalHardness: 3.43, // eV
  chemicalSoftness: 0.292, // eV⁻¹
  electrophilicityIndex: 0.12,
  polarizability: 8.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.53, // V (For Ga3+ + 3e- -> Ga)
  flameTestColor: "Bright violet-blue",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4p valence electron
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.00, // Zeff (Valence p electron via Slater's rules)
  slatersShieldingConstant: 26.00,
  termSymbol: "2P1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -6.01, // eV (Outer valence 4p subshell energy level)
  workFunction: 4.20, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 69.723,
  massNumber: 69, // For Gallium-69
  neutronNumber: 38, // For Gallium-69
  isotopeCount: 32, // Ga-56 to Ga-87
  stableIsotopeCount: 2, // Ga-69 and Ga-71
  isotopicAbundance: {
    Ga69: 60.11, // % abundance on Earth (Highly active NMR target nucleus with spin 3/2)
    Ga71: 39.89  // % abundance on Earth (Highly active NMR target nucleus with spin 3/2)
  },
  halfLife: "Stable", // For Gallium-69 (Ga-67 and Ga-68 are critically important medical radiopharmaceuticals)
  decayMode: "None", // For Gallium-69
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for both stable isotopes
  magneticDipoleMoment: 2.0165, // nuclear magnetons for Ga-69
  neutronCrossSection: 2.3, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000004, // % by mass
  solarAbundance: 0.000004, // % by mass
  crustalAbundance: 0.0019, // % by mass (19 mg/kg; trace constituent of bauxite and sphalerite ores)
  oceanicAbundance: 3.0e-9, // % by mass
  humanBodyAbundance: null, // No known active biological profile; behaves as an iron analog in plasma proteins
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Neutron capture reactions via s-process and r-process branches in evolving stars"
};
  

  
 
const germaniumData = {
  // 1. Fundamental Identity & Classification
  num: 32,
  symbol: "Ge",
  name: "Germanium",
  type: "Metalloid", // Semiconductor
  group: 14,
  period: 4,
  block: "p",
  casRegistryNumber: "7440-56-4",
  discoverer: "Clemens Winkler",
  year: 1886,
  originOfName: "Named after the Latin word 'Germania', meaning Germany, in honor of the discoverer's home country",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 5.323, // g/cm³ at STP
  melting: 1211.4, // Kelvin
  boiling: 3106, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 13.63, // cm³/mol
  electricalConductivity: 2.0, // S/m (Native semiconductor value; highly variable with doping)
  electricalResistivity: 0.46, // Ω·m at 20°C
  thermalConductivity: 60.2, // W/(m·K)
  thermalExpansionCoefficient: 5.9e-6, // K⁻¹ at 25°C
  speedOfSound: 5400, // m/s at 20°C
  refractiveIndex: 4.004, // Very high refractive index (crucial for infrared optics)
  hardnessMohs: 6.0, // Relatively hard and highly brittle
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 75, // GPa
  shearModulus: 41, // GPa
  youngsModulus: 103, // GPa
  poissonsRatio: 0.26,
  malleability: "Low (Highly brittle, shatters easily)",
  ductility: "Low",
  allotropeCount: 1, // Standard alpha-germanium possesses a stable diamond-cubic matrix under ambient regimes
  color: "Lustrous, hard, grayish-white metallic sheen",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.32, // J/(g·K)
  molarHeatCapacity: 23.22, // J/(mol·K)
  heatOfFusion: 36.94, // kJ/mol
  heatOfVaporization: 334, // kJ/mol
  heatOfAtomization: 377, // kJ/mol
  standardMolarEntropy: 31.1, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 3.5e-5, // m²/s
  criticalTemperatureSuperconductivity: null, // Only becomes superconductive under ultra-high pressures

  // 4. Atomic & Structural Variables
  radius: 122, // pm (Atomic radius)
  covalentRadius: 122, // pm
  vanderWaalsRadius: 211, // pm
  ionicRadius: 53, // pm (For Ge4+ coordination number 6)
  crystalStructure: "Diamond cubic",
  latticeConstantA: 565.8, // pm
  latticeConstantB: 565.8, // pm
  latticeConstantC: 565.8, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fd-3m",
  coordinationNumber: 4, // Tetrahedral coordination arrangement
  packingFraction: 0.34,
  atomicVolume: 13.63, // cm³/mol
  bohr: "2, 8, 18, 4",
  orbital: "[Ar] 3d10 4s2 4p2", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p2
  valence: 4,
  coreElectronCount: 28,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.01, // Pauling scale
  electronegativityMulliken: 1.82,
  electronegativityAllredRochow: 2.02,
  ionization: 762.2, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [762.2, 1537.5, 3302.1, 4411, 9020, 11900, 14300, 17200, 20200, 23800],
  electronAffinity: 119.0, // kJ/mol
  oxidation: "+4, +2", // +4 is standard and most stable; +2 is well characterized but behaves as a reducing agent
  maximumOxidationState: 4,
  minimumOxidationState: -4, // Found in specific germanide intermetallic systems
  chemicalHardness: 3.41, // eV
  chemicalSoftness: 0.293, // eV⁻¹
  electrophilicityIndex: 1.11,
  polarizability: 6.1, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.12, // V (For Ge4+ + 4e- -> Ge)
  flameTestColor: "N/A (Produces a pale light blue/white color spectrum under custom ionization setups)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4p valence shell
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.65, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 26.35,
  termSymbol: "3P0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -7.51, // eV (Outer valence 4p level benchmark)
  workFunction: 5.00, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 72.63,
  massNumber: 74, // For Germanium-74
  neutronNumber: 42, // For Germanium-74
  isotopeCount: 32, // Ge-58 to Ge-89
  stableIsotopeCount: 4, // Ge-70, Ge-72, Ge-73, and Ge-74 (Ge-76 is a primordial radioisotope with t1/2 of 1.8e21 years)
  isotopicAbundance: {
    Ge70: 20.38,
    Ge72: 27.31,
    Ge73: 7.76,  // Active NMR target nucleus with spin 9/2
    Ge74: 36.72, // Main abundant stable isotope
    Ge76: 7.83   // Primordial double-beta decaying nuclide
  },
  halfLife: "Stable", // For Germanium-74
  decayMode: "None", // For Germanium-74
  decayEnergy: null,
  nuclearSpin: 0, // For Ge-74 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Germanium-74
  neutronCrossSection: 2.3, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00002, // % by mass
  solarAbundance: 0.00006, // % by mass
  crustalAbundance: 0.00015, // % by mass (1.5 mg/kg; trace element often recovered from zinc ore processing residuals)
  oceanicAbundance: 5.0e-11, // % by mass
  humanBodyAbundance: null, // No native biological profile; historically explored in certain dietary supplements with safety limits
  goldschmidtClassification: "Lithophile / Chalcophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process and r-process) inside stellar evolutionary frameworks"
};
  

  
 
const arsenicData = {
  // 1. Fundamental Identity & Classification
  num: 33,
  symbol: "As",
  name: "Arsenic",
  type: "Metalloid",
  group: 14,
  period: 4,
  block: "p",
  casRegistryNumber: "7440-38-2",
  discoverer: "Albertus Magnus",
  year: 1250,
  originOfName: "Derived from the Greek word 'arsenikon', meaning potent or masculine, historically adapted via Persian 'zarnik' for yellow orpiment",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 5.727, // g/cm³ at STP (for gray metallic arsenic)
  melting: 1090, // Kelvin (under pressure of 3.58 MPa; sublimes at atmospheric pressure)
  boiling: null, // Sublimes cleanly at 887 K (614°C) under standard atmospheric conditions
  triplePointTemperature: 1090, // Kelvin
  triplePointPressure: 3628, // kPa (3.58 atm)
  criticalPointTemperature: 1673, // Kelvin
  criticalPointPressure: null,
  molarVolume: 12.95, // cm³/mol
  electricalConductivity: 3.3e6, // S/m (Gray allotrope behaves as a semimetal)
  electricalResistivity: 3.33e-7, // Ω·m at 20°C
  thermalConductivity: 50.2, // W/(m·K)
  thermalExpansionCoefficient: 4.7e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null, // Solid crystalline metalloid
  hardnessMohs: 3.5, // Brittle, easily crushed
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 22, // GPa
  shearModulus: null,
  youngsModulus: 8, // GPa
  poissonsRatio: null,
  malleability: "Low (Extremely brittle, fractures under mechanical stress)",
  ductility: "Low",
  allotropeCount: 3, // Gray (metallic, stable), Yellow (molecular, metastable), Black (amorphous)
  color: "Metallic gray, metallic luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.329, // J/(g·K)
  molarHeatCapacity: 24.65, // J/(mol·K)
  heatOfFusion: 24.44, // kJ/mol
  heatOfVaporization: 34.76, // kJ/mol (Sublimation enthalpy payload)
  heatOfAtomization: 302, // kJ/mol
  standardMolarEntropy: 35.1, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 120, // pm (Atomic radius)
  covalentRadius: 119, // pm
  vanderWaalsRadius: 185, // pm
  ionicRadius: 58, // pm (For As3+ coordination number 6)
  crystalStructure: "Rhombohedral (For the standard gray metallic phase)",
  latticeConstantA: 413.5, // pm
  latticeConstantB: 413.5, // pm
  latticeConstantC: 1054.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "R-3m",
  coordinationNumber: 3, // Layered corrugated sheet packing network arrangement
  packingFraction: null,
  atomicVolume: 12.95, // cm³/mol
  bohr: "2, 8, 18, 5",
  orbital: "[Ar] 3d10 4s2 4p3", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p3
  valence: 5, // Exhibits primary valences of 3 and 5
  coreElectronCount: 28,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.18, // Pauling scale
  electronegativityMulliken: 2.20,
  electronegativityAllredRochow: 2.20,
  ionization: 947.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [947.0, 1798, 2735, 4837, 6043, 12310, 15400, 18400, 21500, 25400],
  electronAffinity: 78.0, // kJ/mol
  oxidation: "+3, +5, -3", // +3 (arsenites) and +5 (arsenates) are chemically prominent and toxic
  maximumOxidationState: 5,
  minimumOxidationState: -3, // Found in specific metal arsenide structures (e.g., GaAs)
  chemicalHardness: 3.53, // eV
  chemicalSoftness: 0.283, // eV⁻¹
  electrophilicityIndex: 1.33,
  polarizability: 4.3, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.24, // V (For H3AsO3 + 3H+ + 3e- -> As + 3H2O)
  flameTestColor: "Blue / Pale lavender emission characteristic profile",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the outer 4p valence tier
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.30, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 26.70,
  termSymbol: "4S3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -8.70, // eV (Outer valence 4p benchmark level)
  workFunction: 3.75, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 74.922,
  massNumber: 75, // For Arsenic-75
  neutronNumber: 42, // For Arsenic-75
  isotopeCount: 33, // As-60 to As-92
  stableIsotopeCount: 1, // Monoisotopic (Only As-75 is stable)
  isotopicAbundance: {
    As75: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Arsenic-75 (As-73 and As-74 are tracking radioisotopes used in metabolic research)
  decayMode: "None", // For Arsenic-75
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 (Highly active NMR target nucleus)
  magneticDipoleMoment: 1.4395, // nuclear magnetons
  neutronCrossSection: 4.3, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000001, // % by mass
  solarAbundance: 0.000002, // % by mass
  crustalAbundance: 0.00018, // % by mass (1.8 mg/kg; trace element bound heavily within sulfide mineralization)
  oceanicAbundance: 2.3e-7, // % by mass (Primarily distributed as dissolved toxic/regulated oxyanions)
  humanBodyAbundance: 0.0000001, // % by mass (Ultra-trace element; highly potent toxin that interferes with ATP generation mechanisms)
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process) in aging stars and stellar explosions"
};
  

  
 
const seleniumData = {
  // 1. Fundamental Identity & Classification
  num: 34,
  symbol: "Se",
  name: "Selenium",
  type: "Polyatomic nonmetal",
  group: 16, // Chalcogen
  period: 4,
  block: "p",
  casRegistryNumber: "7782-49-2",
  discoverer: "Jöns Jacob Berzelius",
  year: 1817,
  originOfName: "Derived from the Greek word 'selene', meaning Moon, because it was found associated with tellurium (named after the Earth)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 4.81, // g/cm³ at STP (for gray hexagonal form; red amorphous is ~4.28)
  melting: 494, // Kelvin (221°C)
  boiling: 958, // Kelvin (685°C)
  triplePointTemperature: 494, // Kelvin
  triplePointPressure: 0.0, // Negligible
  criticalPointTemperature: 1766, // Kelvin
  criticalPointPressure: 27.2, // MPa
  molarVolume: 16.42, // cm³/mol
  electricalConductivity: 1.0e-3, // S/m (Highly photovoltaic/photoconductive; conductivity increases massively in light)
  electricalResistivity: 1.0e-3, // Ω·m at 20°C (Highly dependent on allotrope and light exposure)
  thermalConductivity: 0.52, // W/(m·K) (Poor thermal conductor)
  thermalExpansionCoefficient: 37.0e-6, // K⁻¹ at 25°C
  speedOfSound: 3350, // m/s at 20°C
  refractiveIndex: 3.00, // For amorphous red form
  hardnessMohs: 2.0, // Soft and brittle
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 8.3, // GPa
  shearModulus: null,
  youngsModulus: 10, // GPa
  poissonsRatio: 0.33,
  malleability: "Low (Brittle, breaks easily under impact)",
  ductility: "Low",
  allotropeCount: 3, // Gray (hexagonal, metallic/stable), Red (monoclinic, molecular), Black (amorphous)
  color: "Gray metallic luster (or deep red powder depending on structural allotrope)",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.321, // J/(g·K)
  molarHeatCapacity: 25.36, // J/(mol·K)
  heatOfFusion: 6.69, // kJ/mol
  heatOfVaporization: 26.3, // kJ/mol
  heatOfAtomization: 227, // kJ/mol
  standardMolarEntropy: 42.4, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 116, // pm (Atomic radius)
  covalentRadius: 116, // pm
  vanderWaalsRadius: 190, // pm
  ionicRadius: 198, // pm (For Se2- coordination number 6)
  crystalStructure: "Hexagonal (For the standard stable gray form, consisting of helical atomic chains)",
  latticeConstantA: 436.6, // pm
  latticeConstantB: 436.6, // pm
  latticeConstantC: 495.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P3121",
  coordinationNumber: 2, // Bound to adjacent atoms within its extended polymeric chains
  packingFraction: null,
  atomicVolume: 16.42, // cm³/mol
  bohr: "2, 8, 18, 6",
  orbital: "[Ar] 3d10 4s2 4p4", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p4
  valence: 6, // Exhibits common chemical valences of -2, +4, and +6
  coreElectronCount: 28,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.55, // Pauling scale
  electronegativityMulliken: 2.48,
  electronegativityAllredRochow: 2.48,
  ionization: 941.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [941.0, 2045, 2973.7, 4144, 6590, 7880, 14990, 17700, 20400, 23900],
  electronAffinity: 195.0, // kJ/mol (Exothermic addition, typical nonmetal character)
  oxidation: "-2, +4, +6", // Forms selenides (-2), selenites (+4), and selenates (+6)
  maximumOxidationState: 6,
  minimumOxidationState: -2,
  chemicalHardness: 3.44, // eV
  chemicalSoftness: 0.291, // eV⁻¹
  electrophilicityIndex: 2.76,
  polarizability: 3.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.92, // V (For Se + 2H+ + 2e- -> H2Se)
  flameTestColor: "Azure blue emission signature when burned",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the outer 4p valence shell
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.95, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 27.05,
  termSymbol: "3P2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -9.75, // eV (Outer valence 4p energy level benchmark)
  workFunction: 5.90, // eV (Gray form)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 78.971,
  massNumber: 80, // For Selenium-80
  neutronNumber: 46, // For Selenium-80
  isotopeCount: 30, // Se-65 to Se-94
  stableIsotopeCount: 5, // Se-74, Se-76, Se-77, Se-78, and Se-80 (Se-82 is an exceptionally long-lived double-beta emitter, t1/2 of 1e20 years)
  isotopicAbundance: {
    Se74: 0.89,
    Se76: 9.37,
    Se77: 7.63,  // Stable active NMR target nucleus with spin 1/2
    Se78: 23.77,
    Se80: 49.61, // Most abundant stable isotope
    Se82: 8.73   // Primordial long-lived radioisotope
  },
  halfLife: "Stable", // For Selenium-80 (Se-75 is a key industrial gamma radiography tracer with a 119.8-day half-life)
  decayMode: "None", // For Selenium-80
  decayEnergy: null,
  nuclearSpin: 0, // For Se-80 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Se-80
  neutronCrossSection: 11.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000003, // % by mass
  solarAbundance: 0.000005, // % by mass
  crustalAbundance: 0.000005, // % by mass (0.05 mg/kg; extremely trace element, primarily extracted as a byproduct of copper refining)
  oceanicAbundance: 4.5e-8, // % by mass
  humanBodyAbundance: 0.0000002, // % by mass (Vital micronutrient essential for life; incorporated as selenocysteine into critical antioxidant enzymes like glutathione peroxidase)
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Neutron capture reactions (s-process) inside red giant shell zones and r-process branches in stellar detonations"
};
  

  
 
const bromineData = {
  // 1. Fundamental Identity & Classification
  num: 35,
  symbol: "Br",
  name: "Bromine",
  type: "Diatomic nonmetal",
  group: 17, // Halogen
  period: 4,
  block: "p",
  casRegistryNumber: "7726-95-6",
  discoverer: "Antoine Jérôme Balard, Carl Jacob Löwig",
  year: 1826,
  originOfName: "Derived from the Greek word 'bromos', meaning stench, due to its sharp, pungent, and irritating odor",

  // 2. Bulk Physical Properties
  state: "Liquid", // One of only two elements that are liquid at standard room temperature and pressure (the other being mercury)
  density: 3.1028, // g/cm³ at STP (Highly dense, heavy dark-red liquid)
  melting: 265.8, // Kelvin (-7.2°C)
  boiling: 332.0, // Kelvin (58.8°C; readily volatilizes at room temperature)
  triplePointTemperature: 265.9, // Kelvin
  triplePointPressure: 5.8, // kPa
  criticalPointTemperature: 588, // Kelvin
  criticalPointPressure: 10.3, // MPa
  molarVolume: 25.59, // cm³/mol (for Br2 liquid)
  electricalConductivity: 1.0e-10, // S/m (Excellent electrical insulator)
  electricalResistivity: 1.0e10, // Ω·m at 20°C
  thermalConductivity: 0.122, // W/(m·K)
  thermalExpansionCoefficient: 1100e-6, // K⁻¹ (Liquid state value; very high thermal expansion profile)
  speedOfSound: 206, // m/s inside liquid bromine at 20°C
  refractiveIndex: 1.661, // For the liquid phase
  hardnessMohs: null, // Liquid at standard conditions
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Liquid phase)",
  ductility: "N/A",
  allotropeCount: 1, // Exists uniformly as covalent diatomic Br2 molecules under standard conditions
  color: "Deep reddish-brown liquid that evaporates into an intense, suffocating orange-brown gas",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.474, // J/(g·K) (for liquid Br2)
  molarHeatCapacity: 75.69, // J/(mol·K) (for liquid Br2 payload)
  heatOfFusion: 5.29, // kJ/mol (per mole of Br2)
  heatOfVaporization: 29.96, // kJ/mol (per mole of Br2)
  heatOfAtomization: 112, // kJ/mol (per mole of Br atoms)
  standardMolarEntropy: 152.23, // J/(mol·K) (for liquid Br2)
  standardEnthalpyOfFormation: 0.0, // Defined standard elemental reference phase
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 114, // pm (Atomic radius)
  covalentRadius: 120, // pm
  vanderWaalsRadius: 185, // pm
  ionicRadius: 196, // pm (For Br- coordination number 6)
  crystalStructure: "Orthorhombic", // Formed when frozen below -7.2°C; layered structure of Br2 molecules
  latticeConstantA: 667, // pm
  latticeConstantB: 448, // pm
  latticeConstantC: 872, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Cmca",
  coordinationNumber: 1, // Monovalent molecular bond limit within the baseline Br2 molecule
  packingFraction: null,
  atomicVolume: 25.59, // cm³/mol
  bohr: "2, 8, 18, 7",
  orbital: "[Ar] 3d10 4s2 4p5", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p5
  valence: 7, // Highly reactive valence; easily captures 1 electron to satisfy octet rule
  coreElectronCount: 28,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.96, // Pauling scale (Highly electronegative nonmetal)
  electronegativityMulliken: 2.75,
  electronegativityAllredRochow: 2.74,
  ionization: 1139.9, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1139.9, 2103, 3470, 4560, 5760, 8550, 9940, 18600, 21600, 24700],
  electronAffinity: 324.6, // kJ/mol (Highly exothermic electron capture affinity)
  oxidation: "-1, +1, +3, +5", // -1 (bromides) is overwhelmingly stable; positive states exist in oxyanions
  maximumOxidationState: 7, // Observed in the highly unstable perbromate (BrO4-) ion system
  minimumOxidationState: -1,
  chemicalHardness: 4.22, // eV
  chemicalSoftness: 0.237, // eV⁻¹
  electrophilicityIndex: 4.63,
  polarizability: 3.1, // × 10⁻²⁴ cm³
  standardReductionPotential: 1.07, // V (For Br2 + 2e- -> 2Br-; powerful chemical oxidizing agent)
  flameTestColor: "N/A (Does not yield a classic atomic solution flame color; generates a weak yellowish-green emission under specialized excitation halos)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4p valence tier
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 7.60, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 27.40,
  termSymbol: "2P3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -11.84, // eV (Outer valence 4p subshell baseline energy level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 79.904,
  massNumber: 79, // For Bromine-79
  neutronNumber: 44, // For Bromine-79
  isotopeCount: 32, // Br-66 to Br-97
  stableIsotopeCount: 2, // Bromine-79 and Bromine-81
  isotopicAbundance: {
    Br79: 50.69, // % abundance on Earth (Highly active NMR target nucleus with spin 3/2)
    Br81: 49.31  // % abundance on Earth (Highly active NMR target nucleus with spin 3/2)
  },
  halfLife: "Stable", // For Bromine-79 (Br-82 is a key short-lived tracer radioisotope with t1/2 of 35.3 hours)
  decayMode: "None", // For Bromine-79
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for both stable isotopes
  magneticDipoleMoment: 2.1064, // nuclear magnetons for Br-79
  neutronCrossSection: 6.8, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000007, // % by mass
  solarAbundance: 0.000002, // % by mass
  crustalAbundance: 0.00024, // % by mass (2.4 mg/kg; highly dispersed element rarely concentrated in minerals)
  oceanicAbundance: 0.00673, // % by mass (67.3 mg/L; abundant in seawater as dissolved bromide ions)
  humanBodyAbundance: 0.00029, // % by mass (Essential trace cofactor element uniquely required for tissue basement membrane biosynthesis via peroxidasin enzymes)
  goldschmidtClassification: "Chalcophile / Lithophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process) inside asymptotic giant branch stars and r-process branches in stellar explosions"
};
  

  
 
const kryptonData = {
  // 1. Fundamental Identity & Classification
  num: 36,
  symbol: "Kr",
  name: "Krypton",
  type: "Noble gas",
  group: 18,
  period: 4,
  block: "p",
  casRegistryNumber: "7439-90-9",
  discoverer: "William Ramsay, Morris Travers",
  year: 1898,
  originOfName: "Derived from the Greek word 'kryptos', meaning hidden, because it was discovered in the residue left after liquid air had nearly boiled away",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.003733, // g/cm³ at STP (Highly dense relative to air)
  melting: 115.79, // Kelvin (-157.36°C)
  boiling: 119.93, // Kelvin (-153.22°C; extremely narrow liquid range)
  triplePointTemperature: 115.775, // Kelvin
  triplePointPressure: 73.53, // kPa
  criticalPointTemperature: 209.41, // Kelvin
  criticalPointPressure: 5.50, // MPa
  molarVolume: 22.41, // L/mol at STP (gas volume metric)
  electricalConductivity: 0.0, // Non-conductive under standard conditions
  electricalResistivity: null, // Insulator
  thermalConductivity: 0.00943, // W/(m·K) (Very low thermal conductivity)
  thermalExpansionCoefficient: null, // Gas phase profile
  speedOfSound: 220, // m/s inside standard gaseous krypton at 20°C
  refractiveIndex: 1.000428, // Gaseous state standard value
  hardnessMohs: null, // Gas phase
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gas phase)",
  ductility: "N/A",
  allotropeCount: 1, // Exists exclusively as a monatomic gas under standard ambient settings
  color: "Colorless gas; exhibits a brilliant whitish-green or purple glow when ionized inside a discharge tube",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.248, // J/(g·K)
  molarHeatCapacity: 20.786, // J/(mol·K) (Classic monotonic gas value)
  heatOfFusion: 1.64, // kJ/mol
  heatOfVaporization: 9.08, // kJ/mol
  heatOfAtomization: 0, // Gaseous element reference standard
  standardMolarEntropy: 164.08, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 110, // pm (Atomic radius)
  covalentRadius: 116, // pm
  vanderWaalsRadius: 202, // pm
  ionicRadius: null, // Does not form conventional isolated stable ions easily
  crystalStructure: "Face-centered cubic", // Solidified matrix state below 115.79K
  latticeConstantA: 572.0, // pm
  latticeConstantB: 572.0, // pm
  latticeConstantC: 572.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // For frozen solid FCC noble gas packing matrix
  packingFraction: 0.74,
  atomicVolume: 22.41,
  bohr: "2, 8, 18, 8",
  orbital: "[Ar] 3d10 4s2 4p6", // Stable, fully-closed valence shell configuration (octet rule fulfilled)
  valence: 0, // Highly unreactive; forms rare clathrates or extreme laboratory fluorides (e.g., KrF2)
  coreElectronCount: 28,

  // 5. Chemical & Periodicity Variables
  electronegativity: 3.00, // Pauling scale (Revised value; exhibits high ionization baseline resistance)
  electronegativityMulliken: 2.94,
  electronegativityAllredRochow: 3.10,
  ionization: 1350.8, // kJ/mol (First Ionization Energy; extremely high)
  successiveIonizationEnergies: [1350.8, 2350.4, 3565, 5070, 6240, 7570, 10710, 12190, 22240, 25880],
  electronAffinity: -96.0, // kJ/mol (Endothermic addition; highly unfavorable due to closed outer subshell)
  oxidation: "0, +2", // +2 state successfully verified via laboratory synthesis of KrF2 and corresponding complexes
  maximumOxidationState: 2,
  minimumOxidationState: 0,
  chemicalHardness: 6.75, // eV (Very hard chemically, resists perturbation)
  chemicalSoftness: 0.148, // eV⁻¹
  electrophilicityIndex: 0.0,
  polarizability: 2.5, // × 10⁻²⁴ cm³
  standardReductionPotential: null, // Highly transient non-aqueous electrochemical limits
  flameTestColor: "N/A (Emits an intense, sharp whitish-blue spectrum inside electrical arc configurations)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the completed outer 4p valence tier
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 8.25, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 27.75,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -14.00, // eV (Outer valence 4p block energy benchmark level)
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 83.798,
  massNumber: 84, // For Krypton-84
  neutronNumber: 48, // For Krypton-84
  isotopeCount: 34, // Kr-69 to Kr-102
  stableIsotopeCount: 6, // Kr-78, Kr-80, Kr-82, Kr-83, Kr-84, and Kr-86
  isotopicAbundance: {
    Kr78: 0.355,  // Highly stable (suspected cosmic double-beta emitter with t1/2 ~ 9.2e21 years)
    Kr80: 2.286,
    Kr82: 11.593,
    Kr83: 11.500, // Only stable isotope active in NMR with a spin of 9/2
    Kr84: 56.987, // Dominant stable isotope on Earth
    Kr86: 17.279  // Highly stable isotope (formerly used to benchmark the international standard meter scale definition)
  },
  halfLife: "Stable", // For Krypton-84 (Kr-81 and Kr-85 are critical environmental tracer radioisotopes)
  decayMode: "None", // For Krypton-84
  decayEnergy: null,
  nuclearSpin: 0, // For Kr-84 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Krypton-84
  neutronCrossSection: 25.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000004, // % by mass
  solarAbundance: 0.00001, // % by mass
  crustalAbundance: 0.00000001, // % by mass (0.1 µg/kg; vanishingly rare across standard rock matrices)
  oceanicAbundance: 2.1e-8, // % by mass (Dissolved gas tracing benchmark component)
  humanBodyAbundance: null, // Completely chemically inert inside physiological tissue structures
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process) inside pulsating red giant stellar structures"
};
  

  
 
const rubidiumData = {
  // 1. Fundamental Identity & Classification
  num: 37,
  symbol: "Rb",
  name: "Rubidium",
  type: "Alkali metal",
  group: 1,
  period: 5,
  block: "s",
  casRegistryNumber: "7440-17-7",
  discoverer: "Robert Bunsen, Gustav Kirchhoff",
  year: 1861,
  originOfName: "Derived from the Latin word 'rubidus', meaning dark red, due to the prominent dark red emission lines in its flame spectroscopy profile",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 1.532, // g/cm³ at STP (Lightweight, low-density metal)
  melting: 312.46, // Kelvin (39.31°C; melts on a hot summer day or in a sealed ampoule against body heat)
  boiling: 961, // Kelvin (688°C)
  triplePointTemperature: 312.47, // Kelvin
  triplePointPressure: 0.0, // Negligible
  criticalPointTemperature: 2093, // Kelvin
  criticalPointPressure: 16.0, // MPa
  molarVolume: 55.76, // cm³/mol (Extremely large due to diffuse 5s single electron cloud)
  electricalConductivity: 7.7e6, // S/m (Good electrical conductor)
  electricalResistivity: 1.28e-7, // Ω·m at 20°C
  thermalConductivity: 58.2, // W/(m·K)
  thermalExpansionCoefficient: 90.0e-6, // K⁻¹ at 25°C
  speedOfSound: 1300, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 0.3, // Exceptionally soft, possesses a wax-like consistency that can be sliced effortlessly
  hardnessVickers: null,
  hardnessBrinell: 0.21, // MPa
  bulkModulus: 2.5, // GPa (Highly compressible atomic framework)
  shearModulus: null,
  youngsModulus: 2.4, // GPa
  poissonsRatio: null,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Standard body-centered cubic phase remains uniform until high-pressure transitions
  color: "Bright silvery-white with a highly reflective surface when pristine",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.364, // J/(g·K)
  molarHeatCapacity: 31.06, // J/(mol·K)
  heatOfFusion: 2.19, // kJ/mol
  heatOfVaporization: 69.0, // kJ/mol
  heatOfAtomization: 81, // kJ/mol
  standardMolarEntropy: 76.78, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 248, // pm (Atomic radius; massive spatial presence)
  covalentRadius: 220, // pm
  vanderWaalsRadius: 303, // pm
  ionicRadius: 152, // pm (For Rb+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 558.5, // pm
  latticeConstantB: 558.5, // pm
  latticeConstantC: 558.5, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC atomic packing profile
  packingFraction: 0.68,
  atomicVolume: 55.76, // cm³/mol
  bohr: "2, 8, 18, 8, 1",
  orbital: "[Kr] 5s1", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s1
  valence: 1,
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.82, // Pauling scale (Highly electropositive)
  electronegativityMulliken: 0.79,
  electronegativityAllredRochow: 0.89,
  ionization: 403.0, // kJ/mol (First Ionization Energy; very low)
  successiveIonizationEnergies: [403.0, 2633, 3860, 5080, 6850, 8140, 9570, 13120, 14500, 26740],
  electronAffinity: 46.9, // kJ/mol
  oxidation: "+1", // Exclusively stable state in chemical formulations
  maximumOxidationState: 1,
  minimumOxidationState: -1, // Found in specialized alkalide salt complex solutions under total isolation
  chemicalHardness: 1.85, // eV (Extremely soft chemical profile)
  chemicalSoftness: 0.541, // eV⁻¹
  electrophilicityIndex: 0.36,
  polarizability: 47.3, // × 10⁻²⁴ cm³ (Highly polarizable outer electron)
  standardReductionPotential: -2.98, // V (For Rb+ + e- -> Rb; violently reactive reducing agent)
  flameTestColor: "Reddish-violet / Magenta signature emission spectrum",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the single outer 5s valence electron
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.20, // Zeff (Outer valence electron via Slater's rules)
  slatersShieldingConstant: 34.80,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -4.18, // eV (Outer valence 5s tier energy benchmark)
  workFunction: 2.26, // eV (Very low, easily emits electrons via photoelectric effect)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 85.468,
  massNumber: 85, // For Rubidium-85
  neutronNumber: 48, // For Rubidium-85
  isotopeCount: 32, // Rb-71 to Rb-102
  stableIsotopeCount: 1, // Only Rubidium-85 is perfectly stable
  isotopicAbundance: {
    Rb85: 72.17, // Perfectly stable isotope (Active NMR target nucleus with spin 5/2)
    Rb87: 27.83  // Primordial radioisotope with a half-life of 4.9e10 years (Critical for Rubidium-Strontium geochronology dating; active NMR spin 3/2)
  },
  halfLife: "Stable", // For Rubidium-85
  decayMode: "None", // For Rubidium-85
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 for Rb-85
  magneticDipoleMoment: 1.353, // nuclear magnetons for Rb-85
  neutronCrossSection: 0.48, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000001, // % by mass
  solarAbundance: 0.000003, // % by mass
  crustalAbundance: 0.0090, // % by mass (90 mg/kg; relatively common trace element, mirrors potassium systems structurally)
  oceanicAbundance: 1.2e-5, // % by mass (120 µg/L; dissolved uniformly as trace monovalent cations)
  humanBodyAbundance: 0.00046, // % by mass (Present in trace tissue fluids; acts as a structural analog to potassium without dedicated essential biological paths)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process) in stellar envelopes and r-process variants in core collapses"
};
  

  
 
const strontiumData = {
  // 1. Fundamental Identity & Classification
  num: 38,
  symbol: "Sr",
  name: "Strontium",
  type: "Alkaline earth metal",
  group: 2,
  period: 5,
  block: "s",
  casRegistryNumber: "7440-24-6",
  discoverer: "Adair Crawford",
  year: 1790,
  originOfName: "Named after the Scottish village of Strontian, where the mineral strontianite was first discovered",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 2.64, // g/cm³ at STP
  melting: 1050, // Kelvin
  boiling: 1655, // Kelvin
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 33.19, // cm³/mol
  electricalConductivity: 7.5e6, // S/m
  electricalResistivity: 1.32e-7, // Ω·m at 20°C
  thermalConductivity: 35.4, // W/(m·K)
  thermalExpansionCoefficient: 22.5e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null, // Solid metal
  hardnessMohs: 1.5, // Softer than calcium; can be cut with a knife
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 12, // GPa
  shearModulus: 6.1, // GPa
  youngsModulus: 16, // GPa
  poissonsRatio: 0.28,
  malleability: "High",
  ductility: "High",
  allotropeCount: 3, // Face-centered cubic (alpha, room temp), Hexagonal close-packed (beta), Body-centered cubic (gamma)
  color: "Silvery-white with a pale yellow tint when freshly cut; rapidly oxidizes to a dark yellowish color",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.301, // J/(g·K)
  molarHeatCapacity: 26.4, // J/(mol·K)
  heatOfFusion: 7.43, // kJ/mol
  heatOfVaporization: 136.9, // kJ/mol
  heatOfAtomization: 164, // kJ/mol
  standardMolarEntropy: 52.3, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 215, // pm (Atomic radius)
  covalentRadius: 195, // pm
  vanderWaalsRadius: 249, // pm
  ionicRadius: 118, // pm (For Sr2+ coordination number 6)
  crystalStructure: "Face-centered cubic", // At room temperature (Alpha phase)
  latticeConstantA: 608.4, // pm
  latticeConstantB: 608.4, // pm
  latticeConstantC: 608.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Standard FCC packing setup
  packingFraction: 0.74,
  atomicVolume: 33.19, // cm³/mol
  bohr: "2, 8, 18, 8, 2",
  orbital: "[Kr] 5s2", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s2
  valence: 2,
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.95, // Pauling scale
  electronegativityMulliken: 0.99,
  electronegativityAllredRochow: 0.99,
  ionization: 549.5, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [549.5, 1064.2, 4138, 5500, 6910, 8760, 10200, 11800, 15600, 17100],
  electronAffinity: 5.0, // kJ/mol
  oxidation: "+2", // Exclusively stable oxidation state; highly reactive with water and air
  maximumOxidationState: 2,
  minimumOxidationState: 0,
  chemicalHardness: 2.38, // eV
  chemicalSoftness: 0.420, // eV⁻¹
  electrophilicityIndex: 0.04,
  polarizability: 27.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.89, // V (For Sr2+ + 2e- -> Sr)
  flameTestColor: "Intense Crimson / Bright Red",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the 5s subshell
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.85, // Zeff (Outer valence shell via Slater's rules)
  slatersShieldingConstant: 35.15,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -5.70, // eV (Valence 5s level benchmark)
  workFunction: 2.59, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 87.62,
  massNumber: 88, // For Strontium-88
  neutronNumber: 50, // For Strontium-88 (Magic number configuration)
  isotopeCount: 34, // Sr-73 to Sr-106
  stableIsotopeCount: 4, // Sr-84, Sr-86, Sr-87, and Sr-88
  isotopicAbundance: {
    Sr84: 0.56,
    Sr86: 9.86,
    Sr87: 7.00,  // Stable active NMR nucleus with spin 9/2; critical for radiogenic isotope tracing
    Sr88: 82.58  // Most dominant stable isotope
  },
  halfLife: "Stable", // For Strontium-88 (Sr-90 is a dangerous nuclear fission byproduct with a half-life of 28.8 years that mimics calcium in bones)
  decayMode: "None", // For Strontium-88
  decayEnergy: null,
  nuclearSpin: 0, // For Sr-88 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Sr-88
  neutronCrossSection: 1.21, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000001, // % by mass
  solarAbundance: 0.000004, // % by mass
  crustalAbundance: 0.037, // % by mass (370 mg/kg; 15th most abundant element in Earth's crust)
  oceanicAbundance: 0.00079, // % by mass (7.9 mg/L; major conservative ion in seawater matrix)
  humanBodyAbundance: 0.00046, // % by mass (Absorbed readily into bone frameworks as a chemical analogue to calcium)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Neutron capture reactions via s-process in massive low-to-intermediate-mass stars"
};
  

  
 
const yttriumData = {
  // 1. Fundamental Identity & Classification
  num: 39,
  symbol: "Y",
  name: "Yttrium",
  type: "Transition metal", // Often group-classified with rare-earth elements (lanthanides) due to chemical similarity
  group: 3,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-65-5",
  discoverer: "Johan Gadolin",
  year: 1794,
  originOfName: "Named after Ytterby, a village in Sweden where the mineral ytterbite (gadolinite) was discovered",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 4.472, // g/cm³ at STP
  melting: 1799, // Kelvin (1526°C)
  boiling: 3609, // Kelvin (3336°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 19.88, // cm³/mol
  electricalConductivity: 1.7e6, // S/m
  electricalResistivity: 5.96e-7, // Ω·m at 20°C
  thermalConductivity: 17.2, // W/(m·K)
  thermalExpansionCoefficient: 10.6e-6, // K⁻¹ at 25°C
  speedOfSound: 3300, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 4.75, // Fairly hard transition metal
  hardnessVickers: 589, // MPa
  hardnessBrinell: 581, // MPa
  bulkModulus: 41.2, // GPa
  shearModulus: 25.6, // GPa
  youngsModulus: 63.5, // GPa
  poissonsRatio: 0.24,
  malleability: "Medium",
  ductility: "Medium",
  allotropeCount: 2, // alpha (HCP, stable at room temp), beta (BCC, stable above 1752 K)
  color: "Silvery-metallic, lustrous, darkens slightly when exposed to air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.298, // J/(g·K)
  molarHeatCapacity: 26.53, // J/(mol·K)
  heatOfFusion: 11.42, // kJ/mol
  heatOfVaporization: 365, // kJ/mol
  heatOfAtomization: 423, // kJ/mol
  standardMolarEntropy: 44.4, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 1.3, // Kelvin (increases under multi-GPa high pressure regimes)

  // 4. Atomic & Structural Variables
  radius: 180, // pm (Atomic radius)
  covalentRadius: 162, // pm
  vanderWaalsRadius: 219, // pm
  ionicRadius: 90, // pm (For Y3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // Room temperature alpha phase
  latticeConstantA: 364.8, // pm
  latticeConstantB: 364.8, // pm
  latticeConstantC: 573.2, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP structural layout
  packingFraction: 0.74,
  atomicVolume: 19.88, // cm³/mol
  bohr: "2, 8, 18, 9, 2",
  orbital: "[Kr] 4d1 5s2", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d1 5s2
  valence: 3,
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.22, // Pauling scale
  electronegativityMulliken: 1.11,
  electronegativityAllredRochow: 1.11,
  ionization: 600.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [600.0, 1180.2, 1979.9, 5417, 7460, 9390, 11590, 13700, 16100, 18400],
  electronAffinity: 29.6, // kJ/mol
  oxidation: "+3", // Nearly uniform stable state in compounds (highly basic oxide Y2O3)
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 3.11, // eV
  chemicalSoftness: 0.322, // eV⁻¹
  electrophilicityIndex: 0.44,
  polarizability: 22.7, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.38, // V (For Y3+ + 3e- -> Y)
  flameTestColor: "N/A (Sparkles cleanly without producing a highly distinctive classic atomic solution flame color profile)"

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4d valence tier
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.15, // Zeff (Valence electrons via Slater's rules)
  slatersShieldingConstant: 35.85,
  termSymbol: "2D3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -6.38, // eV (Outer valence 4d energy benchmark)
  workFunction: 3.10, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 88.905,
  massNumber: 89, // For Yttrium-89
  neutronNumber: 50, // For Yttrium-89 (Magic number configuration)
  isotopeCount: 33, // Y-76 to Y-108
  stableIsotopeCount: 1, // Monoisotopic (Only Yttrium-89 is stable)
  isotopicAbundance: {
    Y89: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Yttrium-89 (Y-90 is a major therapeutic beta-emitting radioisotope used in cancer brachytherapy)
  decayMode: "None", // For Yttrium-89
  decayEnergy: null,
  nuclearSpin: -0.5, // -1/2 (Sharp low-sensitivity NMR target nucleus)
  magneticDipoleMoment: -0.1374, // nuclear magnetons
  neutronCrossSection: 1.28, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000007, // % by mass
  solarAbundance: 0.0000010, // % by mass
  crustalAbundance: 0.0033, // % by mass (33 mg/kg; relatively abundant compared to heavier rare earths)
  oceanicAbundance: 1.3e-9, // % by mass
  humanBodyAbundance: null, // Trace non-toxic accumulator; used extensively in high-Tc superconductors (YBCO) and laser crystals (YAG)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Neutron capture reactions (s-process and r-process branches) inside stellar nucleosynthesis engines"
};
  

  
 
const zirconiumData = {
  // 1. Fundamental Identity & Classification
  num: 40,
  symbol: "Zr",
  name: "Zirconium",
  type: "Transition metal",
  group: 4,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-67-7",
  discoverer: "Martin Heinrich Klaproth",
  year: 1789,
  originOfName: "Derived from the Persian word 'zargun', meaning gold-colored, describing the appearance of the gemstone zircon",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.52, // g/cm³ at STP
  melting: 2128, // Kelvin (1855°C)
  boiling: 4682, // Kelvin (4409°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 14.02, // cm³/mol
  electricalConductivity: 2.4e6, // S/m
  electricalResistivity: 4.2e-7, // Ω·m at 20°C
  thermalConductivity: 22.6, // W/(m·K)
  thermalExpansionCoefficient: 5.7e-6, // K⁻¹ at 25°C
  speedOfSound: 3800, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 5.0, // Hard, lustrous transition metal
  hardnessVickers: 903, // MPa
  hardnessBrinell: 650, // MPa
  bulkModulus: 106, // GPa
  shearModulus: 33, // GPa
  youngsModulus: 88, // GPa
  poissonsRatio: 0.34,
  malleability: "High (When highly pure)",
  ductility: "High (When highly pure)",
  allotropeCount: 2, // alpha (HCP, stable under standard conditions), beta (BCC, stable above 1135 K)
  color: "Silvery-gray, metallic, highly corrosion-resistant",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.278, // J/(g·K)
  molarHeatCapacity: 25.36, // J/(mol·K)
  heatOfFusion: 14.0, // kJ/mol
  heatOfVaporization: 573, // kJ/mol
  heatOfAtomization: 608, // kJ/mol
  standardMolarEntropy: 39.0, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.61, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 160, // pm (Atomic radius)
  covalentRadius: 148, // pm
  vanderWaalsRadius: 186, // pm
  ionicRadius: 72, // pm (For Zr4+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // Room temperature alpha phase
  latticeConstantA: 323.2, // pm
  latticeConstantB: 323.2, // pm
  latticeConstantC: 514.7, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP layout
  packingFraction: 0.74,
  atomicVolume: 14.02, // cm³/mol
  bohr: "2, 8, 18, 10, 2",
  orbital: "[Kr] 4d2 5s2", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d2 5s2
  valence: 4,
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.33, // Pauling scale
  electronegativityMulliken: 1.32,
  electronegativityAllredRochow: 1.22,
  ionization: 640.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [640.1, 1270, 2218, 3313, 7752, 9500, 11200, 13800, 15700, 18500],
  electronAffinity: 41.1, // kJ/mol
  oxidation: "+4", // Overwhelmingly standard state; +3, +2, and +1 can be produced in unique low-temperature structures
  maximumOxidationState: 4,
  minimumOxidationState: -2,
  chemicalHardness: 3.03, // eV
  chemicalSoftness: 0.330, // eV⁻¹
  electrophilicityIndex: 0.52,
  polarizability: 17.9, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.55, // V (For Zr4+ + 4e- -> Zr)
  flameTestColor: "N/A (Sparkles without a unique solution atomic flame configuration)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4d block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.30, // Zeff via Slater's rules
  slatersShieldingConstant: 36.70,
  termSymbol: "3F2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -6.49, // eV (Valence 4d benchmark)
  workFunction: 4.05, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 91.224,
  massNumber: 90, // For Zirconium-90
  neutronNumber: 50, // For Zirconium-90 (Magic number configuration)
  isotopeCount: 34, // Zr-78 to Zr-111
  stableIsotopeCount: 4, // Zr-90, Zr-91, Zr-92, and Zr-94 (Zr-96 is a primordial double-beta emitter with t1/2 of 2.0e19 years)
  isotopicAbundance: {
    Zr90: 51.45, // Most dominant stable isotope
    Zr91: 11.22, // Active NMR target nucleus with spin 5/2
    Zr92: 17.15,
    Zr94: 17.38,
    Zr96: 2.80   // Radionuclide with exceptionally long half-life
  },
  halfLife: "Stable", // For Zirconium-90
  decayMode: "None", // For Zirconium-90
  decayEnergy: null,
  nuclearSpin: 0, // For Zr-90 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Zr-90
  neutronCrossSection: 0.185, // barns (Exceptionally low thermal neutron cross section; critical for nuclear reactor fuel cladding)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000005, // % by mass
  solarAbundance: 0.000006, // % by mass
  crustalAbundance: 0.0165, // % by mass (165 mg/kg; relatively abundant lithophile element)
  oceanicAbundance: 3.0e-9, // % by mass
  humanBodyAbundance: null, // Low toxicity bio-inert element; heavily exploited in high-end joint prosthetics and dental implants (zirconia)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process) inside red giant shell operations"
};
  

  
 
const niobiumData = {
  // 1. Fundamental Identity & Classification
  num: 41,
  symbol: "Nb",
  name: "Niobium",
  type: "Transition metal",
  group: 5,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-03-1",
  discoverer: "Charles Hatchett",
  year: 1801,
  originOfName: "Named after Niobe, daughter of Tantalus in Greek mythology, because of the element's intense chemical similarity to tantalum",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.57, // g/cm³ at STP
  melting: 2750, // Kelvin (2477°C)
  boiling: 5017, // Kelvin (4744°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 10.83, // cm³/mol
  electricalConductivity: 6.6e6, // S/m
  electricalResistivity: 1.52e-7, // Ω·m at 20°C
  thermalConductivity: 53.7, // W/(m·K)
  thermalExpansionCoefficient: 7.3e-6, // K⁻¹ at 25°C
  speedOfSound: 3480, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 6.0, // High structural hardness; softer when ultra-pure
  hardnessVickers: 1320, // MPa
  hardnessBrinell: 736, // MPa
  bulkModulus: 170, // GPa
  shearModulus: 40, // GPa
  youngsModulus: 105, // GPa
  poissonsRatio: 0.40,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Body-centered cubic remains standard and stable under ambient parameters
  color: "Lustrous, light gray, crystalline metallic look; develops a blue tint when exposed to air for long periods",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.265, // J/(g·K)
  molarHeatCapacity: 24.60, // J/(mol·K)
  heatOfFusion: 30.0, // kJ/mol
  heatOfVaporization: 689.9, // kJ/mol
  heatOfAtomization: 726, // kJ/mol
  standardMolarEntropy: 36.4, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 9.25, // Kelvin (Highest elemental critical temperature for Type-II superconductivity under normal pressure)

  // 4. Atomic & Structural Variables
  radius: 146, // pm (Atomic radius)
  covalentRadius: 137, // pm
  vanderWaalsRadius: 207, // pm
  ionicRadius: 64, // pm (For Nb5+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 330.0, // pm
  latticeConstantB: 330.0, // pm
  latticeConstantC: 330.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC packing arrangement
  packingFraction: 0.68,
  atomicVolume: 10.83, // cm³/mol
  bohr: "2, 8, 18, 12, 1",
  orbital: "[Kr] 4d4 5s1", // Anomalous single electron in 5s shell due to d-subshell spatial stability optimizations
  valence: 5, // Forms exceptionally stable +5 pentoxides (Nb2O5) and halides
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.60, // Pauling scale
  electronegativityMulliken: 1.42,
  electronegativityAllredRochow: 1.23,
  ionization: 652.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [652.1, 1380, 2416, 3700, 4877, 9851, 12100, 14300, 16900, 19300],
  electronAffinity: 86.1, // kJ/mol
  oxidation: "+5, +3", // +5 is standard; lower states like +4, +3, +2 are found in specific cluster complexes
  maximumOxidationState: 5,
  minimumOxidationState: -1, // Observed in unique cluster complexes or specialized carbonyl frameworks
  chemicalHardness: 3.03, // eV
  chemicalSoftness: 0.330, // eV⁻¹
  electrophilicityIndex: 0.77,
  polarizability: 15.7, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.10, // V (For Nb2O5 + 10H+ + 10e- -> 2Nb + 5H2O)
  flameTestColor: "N/A (Produces yellowish/green sparks without a classic isolated atomic flame footprint)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4d subshell block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.30, // Zeff via Slater's rules
  slatersShieldingConstant: 37.70,
  termSymbol: "6D1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -6.18, // eV (Valence 4d benchmark)
  workFunction: 4.30, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 92.906,
  massNumber: 93, // For Niobium-93
  neutronNumber: 52, // For Niobium-93
  isotopeCount: 34, // Nb-81 to Nb-114
  stableIsotopeCount: 1, // Monoisotopic (Only Niobium-93 is stable)
  isotopicAbundance: {
    Nb93: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Niobium-93 (Nb-92 is a long-lived extinct radioisotope with t1/2 of 3.47e7 years)
  decayMode: "None", // For Niobium-93
  decayEnergy: null,
  nuclearSpin: 4.5, // 9/2 (Highly active NMR target nucleus with vast quadrupole moments)
  magneticDipoleMoment: 6.1705, // nuclear magnetons
  neutronCrossSection: 1.16, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000002, // % by mass
  solarAbundance: 0.0000004, // % by mass
  crustalAbundance: 0.0020, // % by mass (20 mg/kg; trace structural component found inside columbite matrices)
  oceanicAbundance: 1.0e-11, // % by mass
  humanBodyAbundance: null, // Physiologically inert, non-toxic biocompatible metal used extensively in jewelry and medical implants
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Neutron capture systems (s-process and r-process configurations) inside dying stars"
};
  

  
 
const molybdenumData = {
  // 1. Fundamental Identity & Classification
  num: 42,
  symbol: "Mo",
  name: "Molybdenum",
  type: "Transition metal",
  group: 6,
  period: 5,
  block: "d",
  casRegistryNumber: "7439-98-7",
  discoverer: "Carl Wilhelm Scheele",
  year: 1778,
  originOfName: "Derived from the Greek word 'molybdos', meaning lead, because its principal ore (molybdenite) was historically confused with graphite and lead ores",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 10.28, // g/cm³ at STP (High-density refractory metal)
  melting: 2896, // Kelvin (2623°C; one of the highest melting points among all elements)
  boiling: 4912, // Kelvin (4639°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 9.38, // cm³/mol
  electricalConductivity: 1.9e7, // S/m (Highly conductive)
  electricalResistivity: 5.34e-8, // Ω·m at 20°C
  thermalConductivity: 138, // W/(m·K) (Excellent high-temperature thermal dissipation)
  thermalExpansionCoefficient: 4.8e-6, // K⁻¹ at 25°C (Exceptionally low thermal expansion)
  speedOfSound: 5400, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 5.5, // Hard, structurally sound refractory metal
  hardnessVickers: 1530, // MPa
  hardnessBrinell: 1500, // MPa
  bulkModulus: 230, // GPa
  shearModulus: 20, // GPa
  youngsModulus: 329, // GPa (Extremely high elastic stiffness)
  poissonsRatio: 0.31,
  malleability: "Medium (Requires mechanical shaping at elevated thermal thresholds)",
  ductility: "Medium",
  allotropeCount: 1, // Body-centered cubic forms a uniquely stable baseline arrangement across ambient spectrums
  color: "Silvery-gray, metallic, lustrous",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.251, // J/(g·K)
  molarHeatCapacity: 24.06, // J/(mol·K)
  heatOfFusion: 37.48, // kJ/mol
  heatOfVaporization: 598, // kJ/mol
  heatOfAtomization: 651, // kJ/mol
  standardMolarEntropy: 28.66, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 5.4e-5, // m²/s
  criticalTemperatureSuperconductivity: 0.92, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 139, // pm (Atomic radius)
  covalentRadius: 130, // pm
  vanderWaalsRadius: 209, // pm
  ionicRadius: 65, // pm (For Mo4+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 314.7, // pm
  latticeConstantB: 314.7, // pm
  latticeConstantC: 314.7, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8, // Standard BCC atomic packing setup
  packingFraction: 0.68,
  atomicVolume: 9.38, // cm³/mol
  bohr: "2, 8, 18, 13, 1",
  orbital: "[Kr] 4d5 5s1", // Anomalous half-filled d and s subshells maximizing spin polarization stability
  valence: 6, // Shows highly variable chemical valencies ranging from -2 to +6
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.16, // Pauling scale
  electronegativityMulliken: 1.47,
  electronegativityAllredRochow: 1.30,
  ionization: 684.3, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [684.3, 1560, 2618, 4480, 5257, 6640.8, 12125, 13800, 16300, 18800],
  electronAffinity: 71.9, // kJ/mol
  oxidation: "+6, +4", // +6 (molybdates) and +4 (molybdenum disulfide lubricant) are chemically dominant
  maximumOxidationState: 6,
  minimumOxidationState: -2, // Discovered within highly specialized zero-valent metal carbonyl complexes
  chemicalHardness: 3.17, // eV
  chemicalSoftness: 0.315, // eV⁻¹
  electrophilicityIndex: 0.82,
  polarizability: 12.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.20, // V (For Mo3+ + 3e- -> Mo)
  flameTestColor: "Yellowish-green execution signature profile",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4d valence shell
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.45, // Zeff via Slater's rules
  slatersShieldingConstant: 38.55,
  termSymbol: "7S3",
  totalAngularMomentumQuantumNumber: 3.0, // J = 3
  atomicOrbitalEnergyLevel: -6.32, // eV (Valence 4d benchmark)
  workFunction: 4.60, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 95.95,
  massNumber: 98, // For Molybdenum-98
  neutronNumber: 56, // For Molybdenum-98
  isotopeCount: 33, // Mo-83 to Mo-115
  stableIsotopeCount: 6, // Mo-92, Mo-94, Mo-95, Mo-96, Mo-97, and Mo-98 (Mo-100 is a primordial double-beta emitter with t1/2 of 8.5e18 years)
  isotopicAbundance: {
    Mo92: 14.77,
    Mo94: 9.23,
    Mo95: 15.90, // Active NMR target nucleus with spin 5/2
    Mo96: 16.68,
    Mo97: 9.56,  // Active NMR target nucleus with spin 5/2
    Mo98: 24.13, // Most naturally abundant stable isotope
    Mo100: 9.63  // Extremely long-lived primordial radioisotope
  },
  halfLife: "Stable", // For Molybdenum-98 (Mo-99 is uniquely critical as the transient parent generator for medical Technetium-99m)
  decayMode: "None", // For Molybdenum-98
  decayEnergy: null,
  nuclearSpin: 0, // For Mo-98 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Molybdenum-98
  neutronCrossSection: 130, // barns (High overall thermal capture capability relative to neighbors)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000005, // % by mass
  solarAbundance: 0.0000009, // % by mass
  crustalAbundance: 0.00012, // % by mass (1.2 mg/kg; trace metallurgical commodity found in molybdenite ores)
  oceanicAbundance: 1.0e-6, // % by mass (10 µg/L; most abundant transition metal dissolved in open marine systems as MoO4 2-)
  humanBodyAbundance: 0.00001, // % by mass (Vital, indispensable trace micronutrient; works as a catalytic core across nitrogenase, xanthine oxidase, and sulfite oxidase systems)
  goldschmidtClassification: "Lithophile / Chalcophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process and r-process dynamics) inside evolving massive stellar shells"
};
  

  
 
const technetiumData = {
  // 1. Fundamental Identity & Classification
  num: 43,
  symbol: "Tc",
  name: "Technetium",
  type: "Transition metal", // The lightest element that has no stable isotopes
  group: 7,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-26-8",
  discoverer: "Emilio Segrè, Carlo Perrier",
  year: 1937,
  originOfName: "Derived from the Greek word 'technetos', meaning artificial, as it was the first element to be produced artificially",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 11.5, // g/cm³ at STP
  melting: 2430, // Kelvin (2157°C)
  boiling: 4538, // Kelvin (4265°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.63, // cm³/mol
  electricalConductivity: 4.5e6, // S/m
  electricalResistivity: 2.26e-7, // Ω·m at 20°C
  thermalConductivity: 50.6, // W/(m·K)
  thermalExpansionCoefficient: 7.0e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Radioactive metal, typically handled in micro-quantities or custom alloys
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Medium",
  ductility: "Medium",
  allotropeCount: 1, // Hexagonal close-packed structure remains uniform
  color: "Silvery-gray, metallic, looks similar to platinum but typically obtained as a gray powder",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.243, // J/(g·K)
  molarHeatCapacity: 24.0, // J/(mol·K)
  heatOfFusion: 33.2, // kJ/mol
  heatOfVaporization: 585, // kJ/mol
  heatOfAtomization: 650, // kJ/mol
  standardMolarEntropy: 33.5, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 7.46, // Kelvin (Notably high for a pure metal)

  // 4. Atomic & Structural Variables
  radius: 136, // pm (Atomic radius)
  covalentRadius: 131, // pm
  vanderWaalsRadius: 205, // pm
  ionicRadius: 64, // pm (For Tc4+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 274.1, // pm
  latticeConstantB: 274.1, // pm
  latticeConstantC: 439.8, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP packing setup
  packingFraction: 0.74,
  atomicVolume: 8.63, // cm³/mol
  bohr: "2, 8, 18, 13, 2",
  orbital: "[Kr] 4d5 5s2", // 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d5 5s2
  valence: 7, // Highly variable chemical valencies ranging from -1 to +7
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.9, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.36,
  ionization: 702.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [702.0, 1470, 2850, 4100, 5700, 7200, 9100],
  electronAffinity: 53.0, // kJ/mol
  oxidation: "+7, +6, +4", // +7 (pertechnetates, TcO4-) and +4 are the most stable chemical forms
  maximumOxidationState: 7,
  minimumOxidationState: -1,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: 11.4, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.40, // V (For TcO4- + 4H+ + 3e- -> TcO2 + 2H2O)
  flameTestColor: "N/A (Radioactive, unsafe for regular flame spectroscopy testing)",
  

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4d subshell
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.60, // Zeff via Slater's rules
  slatersShieldingConstant: 39.40,
  termSymbol: "6S5/2",
  totalAngularMomentumQuantumNumber: 2.5, // J = 5/2
  atomicOrbitalEnergyLevel: -7.15, // eV
  workFunction: 4.40, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 98, // Appraised based on the most common long-lived isotopes
  massNumber: 98, // For Technetium-98
  neutronNumber: 55, // For Technetium-98
  isotopeCount: 35, // Tc-85 to Tc-119
  stableIsotopeCount: 0, // Zero stable isotopes exist natively
  isotopicAbundance: {
    Tc97: 0.0, // Synthetic/Trace cosmic radioisotope (t1/2 = 4.2e6 years)
    Tc98: 0.0, // Synthetic/Trace cosmic radioisotope (t1/2 = 4.2e6 years)
    Tc99: 0.0  // Most significant synthetic byproduct from uranium fission (t1/2 = 2.11e5 years)
  },
  halfLife: "4.2e6 years", // For Technetium-98 (Tc-99m is the premier medical isomer tracer with a 6-hour half-life)
  decayMode: "Beta minus decay", // For Technetium-98 (Decays into Ru-98)
  decayEnergy: 0.4, // MeV
  nuclearSpin: 6, // For Technetium-98
  magneticDipoleMoment: null,
  neutronCrossSection: 22.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0, // Traces found inside unique red giant stars (technetium stars) proving active nucleosynthesis
  solarAbundance: null,
  crustalAbundance: 3.0e-15, // % by mass (Virtually zero; transient trace atoms arise from spontaneous fission of uranium ores)
  oceanicAbundance: 0.0,
  humanBodyAbundance: 0.0, // No biological utility; highly specialized radiation hazard profile outside strict nuclear medicine diagnostics
  goldschmidtClassification: "Chalcophile / Siderophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process mechanism) observed inside highly evolved asymptotic giant branch stars"
};
  

  
 
const rutheniumData = {
  // 1. Fundamental Identity & Classification
  num: 44,
  symbol: "Ru",
  name: "Ruthenium",
  type: "Transition metal", // Member of the platinum group metals (PGM)
  group: 8,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-18-8",
  discoverer: "Karl Ernst Claus",
  year: 1844,
  originOfName: "Derived from the Latin word 'Ruthenia', meaning Russia, in honor of the discoverer's homeland and where the ore was mined",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 12.45, // g/cm³ at STP (High-density platinum-group metal)
  melting: 2606, // Kelvin (2333°C)
  boiling: 4423, // Kelvin (4150°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.12, // cm³/mol
  electricalConductivity: 1.4e7, // S/m
  electricalResistivity: 7.1e-8, // Ω·m at 20°C
  thermalConductivity: 117, // W/(m·K)
  thermalExpansionCoefficient: 6.4e-6, // K⁻¹ at 25°C
  speedOfSound: 5970, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 6.5, // Exceptionally hard, brittle, and wear-resistant
  hardnessVickers: 2160, // MPa
  hardnessBrinell: 2160, // MPa
  bulkModulus: 220, // GPa
  shearModulus: 183, // GPa
  youngsModulus: 447, // GPa (Remarkably high stiffness modulus)
  poissonsRatio: 0.25,
  malleability: "Low (Very brittle at room temperature, resists deformation)",
  ductility: "Low",
  allotropeCount: 1, // Hexagonal close-packed structure is highly stable across standard thermal spectrums
  color: "Silvery-white, lustrous, metallic",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.238, // J/(g·K)
  molarHeatCapacity: 24.06, // J/(mol·K)
  heatOfFusion: 38.5, // kJ/mol
  heatOfVaporization: 591, // kJ/mol
  heatOfAtomization: 642, // kJ/mol
  standardMolarEntropy: 28.53, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.49, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 134, // pm (Atomic radius)
  covalentRadius: 126, // pm
  vanderWaalsRadius: 207, // pm
  ionicRadius: 62, // pm (For Ru4+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 270.6, // pm
  latticeConstantB: 270.6, // pm
  latticeConstantC: 428.2, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12, // Standard HCP layout
  packingFraction: 0.74,
  atomicVolume: 8.12, // cm³/mol
  bohr: "2, 8, 18, 15, 1",
  orbital: "[Kr] 4d7 5s1", // Anomalous outer valence distribution optimizing inner shell d-orbital exchange energy
  valence: 8, // Exhibits exceptionally versatile chemistry; oxidizes from -2 up to +8
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.20, // Pauling scale
  electronegativityMulliken: 1.56,
  electronegativityAllredRochow: 1.42,
  ionization: 710.2, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [710.2, 1620, 2747, 4500, 5700, 7500, 9100, 10700],
  electronAffinity: 101.3, // kJ/mol
  oxidation: "+3, +4, +8", // +3 and +4 are common; +8 is realized in the highly volatile, toxic yellow liquid RuO4
  maximumOxidationState: 8,
  minimumOxidationState: -2, // Synthesized within specific carbon monoxide cluster configurations
  chemicalHardness: 3.11, // eV
  chemicalSoftness: 0.322, // eV⁻¹
  electrophilicityIndex: 1.65,
  polarizability: 9.6, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.45, // V (For Ru2+ + 2e- -> Ru)
  flameTestColor: "N/A (Refractory metal; does not yield a characteristic flame test emission color profile)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4d block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.60, // Zeff via Slater's rules
  slatersShieldingConstant: 40.40,
  termSymbol: "5F5",
  totalAngularMomentumQuantumNumber: 5.0, // J = 5
  atomicOrbitalEnergyLevel: -6.90, // eV (Valence 4d level benchmark)
  workFunction: 4.71, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 101.07,
  massNumber: 102, // For Ruthenium-102
  neutronNumber: 58, // For Ruthenium-102
  isotopeCount: 34, // Ru-87 to Ru-120
  stableIsotopeCount: 7, // Ru-96, Ru-98, Ru-99, Ru-100, Ru-101, Ru-102, and Ru-104
  isotopicAbundance: {
    Ru96: 5.54,
    Ru98: 1.87,
    Ru99: 12.76,  // Active NMR target nucleus with spin 5/2
    Ru100: 12.60,
    Ru101: 17.06, // Active NMR target nucleus with spin 5/2
    Ru102: 31.55, // Most dominant stable isotope
    Ru104: 18.62
  },
  halfLife: "Stable", // For Ruthenium-102 (Ru-103 and Ru-106 are prominent radioactive fission indicators)
  decayMode: "None", // For Ruthenium-102
  decayEnergy: null,
  nuclearSpin: 0, // For Ru-102 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Ruthenium-102
  neutronCrossSection: 1.3, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000004, // % by mass
  solarAbundance: 0.0000005, // % by mass
  crustalAbundance: 0.0000001, // % by mass (0.1 µg/kg; one of the rarest elements found on Earth)
  oceanicAbundance: 7.0e-13, // % by mass
  humanBodyAbundance: null, // Highly biological-inert; vital as a structural component for catalytic converters and solar cells
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process and r-process branches) within exploding supernovas and neutron star mergers"
};
  

  
 
const rhodiumData = {
  // 1. Fundamental Identity & Classification
  num: 45,
  symbol: "Rh",
  name: "Rhodium",
  type: "Transition metal", // Noble platinum-group metal (PGM)
  group: 9,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-16-5",
  discoverer: "William Hyde Wollaston",
  year: 1803,
  originOfName: "Derived from the Greek word 'rhodon', meaning rose, because of the distinct rose-pink color of its diluted chloro-complex salts",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 12.41, // g/cm³ at STP
  melting: 2237, // Kelvin (1964°C)
  boiling: 3968, // Kelvin (3695°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.28, // cm³/mol
  electricalConductivity: 2.3e7, // S/m (Highly conductive)
  electricalResistivity: 4.3e-8, // Ω·m at 20°C
  thermalConductivity: 150, // W/(m·K) (Excellent thermal dissipation profile)
  thermalExpansionCoefficient: 8.2e-6, // K⁻¹ at 25°C
  speedOfSound: 4700, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 6.0, // High structural hardness relative to other noble metals
  hardnessVickers: 1246, // MPa
  hardnessBrinell: 1100, // MPa
  bulkModulus: 345, // GPa (Extremely high resistance to uniform compression)
  shearModulus: 150, // GPa
  youngsModulus: 380, // GPa
  poissonsRatio: 0.26,
  malleability: "Medium (Work-hardens rapidly; requires careful annealing)",
  ductility: "Medium",
  allotropeCount: 1, // Face-centered cubic structure remains highly uniform under standard metrics
  color: "Silvery-white, highly reflective, mirror-like luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.243, // J/(g·K)
  molarHeatCapacity: 24.98, // J/(mol·K)
  heatOfFusion: 26.5, // kJ/mol
  heatOfVaporization: 494, // kJ/mol
  heatOfAtomization: 556, // kJ/mol
  standardMolarEntropy: 31.5, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.00032, // Kelvin (Extremely low superconducting critical threshold)

  // 4. Atomic & Structural Variables
  radius: 135, // pm (Atomic radius)
  covalentRadius: 125, // pm
  vanderWaalsRadius: 195, // pm
  ionicRadius: 66, // pm (For Rh3+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 380.3, // pm
  latticeConstantB: 380.3, // pm
  latticeConstantC: 380.3, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Standard FCC close-packed setup
  packingFraction: 0.74,
  atomicVolume: 8.28, // cm³/mol
  bohr: "2, 8, 18, 16, 1",
  orbital: "[Kr] 4d8 5s1", // Anomalous outer valence layer balancing electron pairing optimization
  valence: 3, // +3 is the standard dominant stable configuration across coordination frameworks
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.28, // Pauling scale
  electronegativityMulliken: 1.54,
  electronegativityAllredRochow: 1.45,
  ionization: 719.7, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [719.7, 1740, 2997, 4400, 6500, 8200],
  electronAffinity: 109.7, // kJ/mol
  oxidation: "+3, +4, +1", // +3 is common; +1 is critical within standard organometallic catalysis loops
  maximumOxidationState: 6, // Found in exceptionally transient rhodium hexafluoride (RhF6) structures
  minimumOxidationState: -1,
  chemicalHardness: 3.16, // eV
  chemicalSoftness: 0.316, // eV⁻¹
  electrophilicityIndex: 1.91,
  polarizability: 8.6, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.76, // V (For Rh3+ + 3e- -> Rh)
  flameTestColor: "N/A (Refractory noble metal; does not display a simple solution flame signature)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the 4d block
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.75, // Zeff via Slater's rules
  slatersShieldingConstant: 41.25,
  termSymbol: "4F9/2",
  totalAngularMomentumQuantumNumber: 4.5, // J = 9/2
  atomicOrbitalEnergyLevel: -7.31, // eV (Valence 4d energy baseline parameter)
  workFunction: 4.98, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 102.905,
  massNumber: 103, // For Rhodium-103
  neutronNumber: 58, // For Rhodium-103
  isotopeCount: 34, // Rh-89 to Rh-122
  stableIsotopeCount: 1, // Monoisotopic (Only Rhodium-103 is stable)
  isotopicAbundance: {
    Rh103: 100.0 // 100% naturally occurring terrestrial abundance (Active low-sensitivity NMR spin 1/2)
  },
  halfLife: "Stable", // For Rhodium-103 (Rh-101 is a tracking radioisotope with a 3.3-year half-life)
  decayMode: "None", // For Rhodium-103
  decayEnergy: null,
  nuclearSpin: -0.5, // -1/2 (Sharp NMR profile with low magnetogyric ratio)
  magneticDipoleMoment: -0.0884, // nuclear magnetons
  neutronCrossSection: 145, // barns (Extremely high thermal capture cross-section; utilized in core neutron flux detectors)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000006, // % by mass
  solarAbundance: 0.0000002, // % by mass
  crustalAbundance: 0.00000001, // % by mass (0.1 µg/kg; highly valued, extremely scarce precious commodity)
  oceanicAbundance: 1.2e-12, // % by mass
  humanBodyAbundance: null, // Complete bio-inert profiling; prized globally for automotive catalytic reduction nodes
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Neutron capture processing (r-process and s-process dynamics) inside stellar core degradation fields"
};
  

  
 
const palladiumData = {
  // 1. Fundamental Identity & Classification
  num: 46,
  symbol: "Pal", // Note: The standard IUPAC chemical symbol is "Pd". Provided here to match strict custom dataset schemas if applicable.
  name: "Palladium",
  type: "Transition metal", // Platinum-group metal (PGM)
  group: 10,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-05-3",
  discoverer: "William Hyde Wollaston",
  year: 1803,
  originOfName: "Named after the asteroid Pallas, which had been discovered two years prior, itself named after the Greek goddess of wisdom",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 12.023, // g/cm³ at STP (Least dense of the platinum-group metals)
  melting: 1828.05, // Kelvin (1554.9°C)
  boiling: 3236, // Kelvin (2963°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.85, // cm³/mol
  electricalConductivity: 9.5e6, // S/m
  electricalResistivity: 1.05e-7, // Ω·m at 20°C
  thermalConductivity: 71.8, // W/(m·K)
  thermalExpansionCoefficient: 11.8e-6, // K⁻¹ at 25°C
  speedOfSound: 3070, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 4.75, // Relatively soft compared to other PGMs; easily worked
  hardnessVickers: 461, // MPa
  hardnessBrinell: 37.3, // MPa
  bulkModulus: 180, // GPa
  shearModulus: 44, // GPa
  youngsModulus: 121, // GPa
  poissonsRatio: 0.39,
  malleability: "High (Most malleable of the platinum group metals)",
  ductility: "High",
  allotropeCount: 1, // Face-centered cubic remains the uniform stable standard phase
  color: "Silvery-white metallic, lustrous, resists tarnish under ambient settings",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.244, // J/(g·K)
  molarHeatCapacity: 25.98, // J/(mol·K)
  heatOfFusion: 16.74, // kJ/mol
  heatOfVaporization: 362, // kJ/mol
  heatOfAtomization: 378, // kJ/mol
  standardMolarEntropy: 37.5, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.0032, // Kelvin (Can increase significantly when heavily hydrided)

  // 4. Atomic & Structural Variables
  radius: 137, // pm (Atomic radius)
  covalentRadius: 131, // pm
  vanderWaalsRadius: 163, // pm
  ionicRadius: 86, // pm (For Pd2+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 389.0, // pm
  latticeConstantB: 389.0, // pm
  latticeConstantC: 389.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Standard FCC close-packed layout
  packingFraction: 0.74,
  atomicVolume: 8.85, // cm³/mol
  bohr: "2, 8, 18, 18", 
  orbital: "[Kr] 4d10", // Unique closed-shell configuration; has 0 electrons in its outermost s-subshell (5s0)
  valence: 2, // Common stable oxidation states are +2 and +4
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.20, // Pauling scale
  electronegativityMulliken: 1.83,
  electronegativityAllredRochow: 1.35,
  ionization: 804.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [804.4, 1870, 3177, 4700, 6300, 8700],
  electronAffinity: 53.7, // kJ/mol
  oxidation: "+2, +4", // +2 is highly stable and dominant; +4 is well known; 0 is vital in organometallic cross-coupling loops
  maximumOxidationState: 6, // Synthesized under specialized high-pressure fluoride matrices
  minimumOxidationState: 0,
  chemicalHardness: 3.89, // eV
  chemicalSoftness: 0.257, // eV⁻¹
  electrophilicityIndex: 0.37,
  polarizability: 4.8, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.95, // V (For Pd2+ + 2e- -> Pd)
  flameTestColor: "N/A (Noble transition metal; does not generate a distinctive flame test light color profile)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 4, // n = 4 for the fully filled 4d valence shell
  azimuthalQuantumNumber: 2, // l = 2 (d orbital)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.05, // Zeff via Slater's rules
  slatersShieldingConstant: 41.95,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -7.73, // eV (Valence 4d level benchmark energy)
  workFunction: 5.22, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 106.42,
  massNumber: 106, // For Palladium-106
  neutronNumber: 60, // For Palladium-106
  isotopeCount: 34, // Pd-91 to Pd-124
  stableIsotopeCount: 6, // Pd-102, Pd-104, Pd-105, Pd-106, Pd-108, and Pd-110
  isotopicAbundance: {
    Pd102: 1.02,
    Pd104: 11.14,
    Pd105: 22.33, // Active NMR target nucleus with spin 5/2
    Pd106: 27.33, // Most dominant stable isotope
    Pd108: 26.46,
    Pd110: 11.72
  },
  halfLife: "Stable", // For Palladium-106 (Pd-103 is an important brachytherapy isotope with a 17-day half-life)
  decayMode: "None", // For Palladium-106
  decayEnergy: null,
  nuclearSpin: 0, // For Pd-106 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Palladium-106
  neutronCrossSection: 20, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000002, // % by mass
  solarAbundance: 0.0000003, // % by mass
  crustalAbundance: 0.0000015, // % by mass (15 µg/kg; highly rare and precious metal commodity)
  oceanicAbundance: 6.0e-13, // % by mass
  humanBodyAbundance: null, // No native biological profile; highly famous for its ability to absorb up to 900 times its own volume of hydrogen gas at room temperature
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process and r-process variants) in giant stars and stellar explosions"
};
  

  
 
const silverData = {
  // 1. Fundamental Identity & Classification
  num: 47,
  symbol: "Ag",
  name: "Silver",
  type: "Transition metal", // Coinage metal / Noble metal
  group: 11,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-22-4",
  discoverer: "Known since antiquity",
  year: -3000,
  originOfName: "Derived from the Old English word 'seolfor'; the symbol 'Ag' comes from the Latin 'argentum', meaning shiny or white",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 10.49, // g/cm³ at STP
  melting: 1234.93, // Kelvin (961.78°C)
  boiling: 2435, // Kelvin (2162°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 10.27, // cm³/mol
  electricalConductivity: 6.3e7, // S/m (Highest electrical conductivity of any element)
  electricalResistivity: 1.59e-8, // Ω·m at 20°C (Lowest electrical resistivity of any metal)
  thermalConductivity: 429, // W/(m·K) (Highest thermal conductivity of any element)
  thermalExpansionCoefficient: 18.9e-6, // K⁻¹ at 25°C
  speedOfSound: 2680, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 2.5, // Relatively soft, highly polishable precious metal
  hardnessVickers: 251, // MPa
  hardnessBrinell: 24.5, // MPa
  bulkModulus: 100, // GPa
  shearModulus: 30, // GPa
  youngsModulus: 83, // GPa
  poissonsRatio: 0.37,
  malleability: "High (Extremely malleable, second only to gold)",
  ductility: "High (Extremely ductile; can be drawn into incredibly thin wires)",
  allotropeCount: 1, // Face-centered cubic remains the uniform stable phase under standard ambient conditions
  color: "Brilliant, lustrous silvery-white metallic finish",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.235, // J/(g·K)
  molarHeatCapacity: 25.35, // J/(mol·K)
  heatOfFusion: 11.28, // kJ/mol
  heatOfVaporization: 254, // kJ/mol
  heatOfAtomization: 284, // kJ/mol
  standardMolarEntropy: 42.55, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: 1.74e-4, // m²/s
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 144, // pm (Atomic radius)
  covalentRadius: 136, // pm
  vanderWaalsRadius: 172, // pm
  ionicRadius: 115, // pm (For Ag+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 408.6, // pm
  latticeConstantB: 408.6, // pm
  latticeConstantC: 408.6, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // Standard FCC close-packed setup
  packingFraction: 0.74,
  atomicVolume: 10.27, // cm³/mol
  bohr: "2, 8, 18, 18, 1",
  orbital: "[Kr] 4d10 5s1", // Full 4d subshell configuration promoting high atomic stability
  valence: 1, // +1 is overwhelmingly common; +2 and +3 exist in rare, highly oxidizing chemical conditions
  coreElectronCount: 36,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.93, // Pauling scale
  electronegativityMulliken: 1.42,
  electronegativityAllredRochow: 1.42,
  ionization: 731.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [731.0, 2070, 3361, 5000, 6700, 8600],
  electronAffinity: 125.6, // kJ/mol
  oxidation: "+1", // Natively forms stable univalent compounds (e.g., AgNO3, AgCl)
  maximumOxidationState: 3, // Realized in rare fluorides like AgF3
  minimumOxidationState: -1, // Observed in unique alkali metal argentide solutions
  chemicalHardness: 2.90, // eV
  chemicalSoftness: 0.345, // eV⁻¹
  electrophilicityIndex: 1.71,
  polarizability: 7.9, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.80, // V (For Ag+ + e- -> Ag; noble metal reduction benchmark)
  flameTestColor: "N/A (Does not yield a simple atomic solution flame color profile; can impart a faint yellowish-white tint under strong excitation arc parameters)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the single outer 5s valence electron
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.20, // Zeff via Slater's rules
  slatersShieldingConstant: 42.80,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -7.57, // eV
  workFunction: 4.26, // eV (Varies slightly between crystal faces)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 107.8682,
  massNumber: 107, // For Silver-107
  neutronNumber: 60, // For Silver-107
  isotopeCount: 38, // Ag-93 to Ag-130
  stableIsotopeCount: 2, // Silver-107 and Silver-109
  isotopicAbundance: {
    Ag107: 51.84, // Stable target nucleus active in NMR (spin 1/2)
    Ag109: 48.16  // Stable target nucleus active in NMR (spin 1/2)
  },
  halfLife: "Stable", // For Silver-107 (Ag-110m is a prominent industrial nuclear tracer with t1/2 of 249.8 days)
  decayMode: "None", // For Silver-107
  decayEnergy: null,
  nuclearSpin: -0.5, // -1/2 for both stable isotopes (Low sensitivity but clean NMR resolution profiles)
  magneticDipoleMoment: -0.1135, // nuclear magnetons for Ag-107
  neutronCrossSection: 63.0, // barns (Relatively high overall thermal neutron absorption capacity)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000006, // % by mass
  solarAbundance: 0.0000001, // % by mass
  crustalAbundance: 0.0000075, // % by mass (0.075 mg/kg; rare, highly sought-after precious metal)
  oceanicAbundance: 4.0e-11, // % by mass
  humanBodyAbundance: null, // Non-essential element; exhibits potent oligodynamic antimicrobial behavior (disrupts bacterial respiration via sulfhydryl binding)
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Neutron capture processing (primarily via r-process events in stellar disruptions and neutron star mergers, supplemented by s-process loops)"
};
  

  
 
const cadmiumData = {
  // 1. Fundamental Identity & Classification
  num: 48,
  symbol: "Cd",
  name: "Cadmium",
  type: "Transition metal", // Post-transition characteristics, group 12 volatile metal
  group: 12,
  period: 5,
  block: "d",
  casRegistryNumber: "7440-43-9",
  discoverer: "Karl Samuel Leberecht Hermann, Friedrich Stromeyer",
  year: 1817,
  originOfName: "Derived from the Latin word 'cadmia' and the Greek 'kadmeia', ancient names for calamine (zinc carbonate), in which cadmium was discovered as an impurity",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.65, // g/cm³ at STP
  melting: 594.22, // Kelvin (321.07°C)
  boiling: 1040, // Kelvin (767°C; relatively volatile metal with a low boiling point)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 13.00, // cm³/mol
  electricalConductivity: 1.4e7, // S/m
  electricalResistivity: 7.27e-8, // Ω·m at 20°C
  thermalConductivity: 96.6, // W/(m·K)
  thermalExpansionCoefficient: 30.8e-6, // K⁻¹ at 25°C
  speedOfSound: 2800, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 2.0, // Soft, malleable metal; can be easily sliced with a knife
  hardnessVickers: null,
  hardnessBrinell: 203, // MPa
  bulkModulus: 42, // GPa
  shearModulus: 24, // GPa
  youngsModulus: 50, // GPa
  poissonsRatio: 0.30,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Hexagonal close-packed structure remains uniform under ambient constraints
  color: "Silvery-white metallic with a distinct bluish tinge; tarnishes in air to form a dull oxide layer",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.232, // J/(g·K)
  molarHeatCapacity: 26.02, // J/(mol·K)
  heatOfFusion: 6.21, // kJ/mol
  heatOfVaporization: 99.87, // kJ/mol
  heatOfAtomization: 112, // kJ/mol
  standardMolarEntropy: 51.8, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.52, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 151, // pm (Atomic radius)
  covalentRadius: 144, // pm
  vanderWaalsRadius: 158, // pm
  ionicRadius: 95, // pm (For Cd2+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // Possesses an elongated c-axis relative to standard HCP geometries
  latticeConstantA: 297.9, // pm
  latticeConstantB: 297.9, // pm
  latticeConstantC: 561.8, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 13.00, // cm³/mol
  bohr: "2, 8, 18, 18, 2",
  orbital: "[Kr] 4d10 5s2", // Fully filled d and s subshells
  valence: 2, // Forms uniform divalent salts (+2)
  coreElectronCount: 46,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.69, // Pauling scale
  electronegativityMulliken: 1.52,
  electronegativityAllredRochow: 1.46,
  ionization: 867.8, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [867.8, 1631.4, 6168],
  electronAffinity: -68.0, // kJ/mol (Endothermic addition; stabilized by completed 5s2 configuration)
  oxidation: "+2", // Stable oxidation state across nearly all known chemical frameworks
  maximumOxidationState: 2,
  minimumOxidationState: 1, // Found in unstable diatomic cluster species like Cd2 2+
  chemicalHardness: 3.84, // eV
  chemicalSoftness: 0.260, // eV⁻¹
  electrophilicityIndex: 0.24,
  polarizability: 8.0, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.40, // V (For Cd2+ + 2e- -> Cd)
  flameTestColor: "Faint yellowish-green to blue emission line configurations",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the 5s outer valence tier
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.35, // Zeff via Slater's rules
  slatersShieldingConstant: 43.65,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -8.99, // eV
  workFunction: 4.22, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 112.414,
  massNumber: 114, // For Cadmium-114
  neutronNumber: 66, // For Cadmium-114
  isotopeCount: 38, // Cd-95 to Cd-132
  stableIsotopeCount: 6, // Cd-106, Cd-108, Cd-110, Cd-111, Cd-112, and Cd-114 (Cd-113 and Cd-116 are primordial long-lived beta emitters)
  isotopicAbundance: {
    Cd106: 1.25,
    Cd108: 0.89,
    Cd110: 12.49,
    Cd111: 12.80, // Active NMR target nucleus with spin 1/2
    Cd112: 24.13,
    Cd113: 12.22, // Long-lived radioisotope (t1/2 = 7.7e15 years); highly active NMR target with spin 1/2
    Cd114: 28.73, // Most dominant stable isotope on Earth
    Cd116: 7.49   // Ultra long-lived double-beta emitter (t1/2 = 3.1e19 years)
  },
  halfLife: "Stable", // For Cadmium-114
  decayMode: "None", // For Cadmium-114
  decayEnergy: null,
  nuclearSpin: 0, // For Cd-114 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Cadmium-114
  neutronCrossSection: 2520, // barns (Natural isotopic average; exceptionally high due to Cd-113, making it vital for nuclear reactor control rods)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000002, // % by mass
  solarAbundance: 0.0000006, // % by mass
  crustalAbundance: 0.000015, // % by mass (0.15 mg/kg; trace chalcophile element obtained as a byproduct of zinc mining)
  oceanicAbundance: 5.0e-11, // % by mass
  humanBodyAbundance: 0.00007, // % by mass (Highly cumulative, toxic heavy metal; acts as an environmental pollutant that replaces zinc in enzymes and damages renal systems)
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Neutron capture reactions via s-process tracks in red giant interior envelopes and r-process branches in stellar collapses"
};
  

  
 
const indiumData = {
  // 1. Fundamental Identity & Classification
  num: 49,
  symbol: "In",
  name: "Indium",
  type: "Post-transition metal",
  group: 13,
  period: 5,
  block: "p",
  casRegistryNumber: "7440-74-6",
  discoverer: "Ferdinand Reich, Hieronymous Theodor Richter",
  year: 1863,
  originOfName: "Named after the indigo line in its atomic spectrum",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.31, // g/cm³ at STP
  melting: 429.75, // Kelvin (156.6°C; notably low melting point for a structural metal)
  boiling: 2345, // Kelvin (2072°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 15.71, // cm³/mol
  electricalConductivity: 1.2e7, // S/m
  electricalResistivity: 8.37e-8, // Ω·m at 20°C
  thermalConductivity: 81.8, // W/(m·K)
  thermalExpansionCoefficient: 32.1e-6, // K⁻¹ at 25°C
  speedOfSound: 1215, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 1.2, // Exceptionally soft; can be scratched with a fingernail and chewed like wax
  hardnessVickers: null,
  hardnessBrinell: 8.8, // MPa
  bulkModulus: 33, // GPa
  shearModulus: 3.5, // GPa
  youngsModulus: 11, // GPa
  poissonsRatio: 0.45,
  malleability: "Extremely High (Retains high plasticity down to near absolute zero temperatures)",
  ductility: "High",
  allotropeCount: 1, // Body-centered tetragonal structure remains standard under ambient guidelines
  color: "Bright silvery-white with a brilliant luster; emits a high-pitched 'metal cry' when bent",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.233, // J/(g·K)
  molarHeatCapacity: 26.74, // J/(mol·K)
  heatOfFusion: 3.28, // kJ/mol
  heatOfVaporization: 231.8, // kJ/mol
  heatOfAtomization: 243, // kJ/mol
  standardMolarEntropy: 57.8, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 3.41, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 167, // pm (Atomic radius)
  covalentRadius: 142, // pm
  vanderWaalsRadius: 193, // pm
  ionicRadius: 80, // pm (For In3+ coordination number 6)
  crystalStructure: "Body-centered tetragonal",
  latticeConstantA: 325.2, // pm
  latticeConstantB: 325.2, // pm
  latticeConstantC: 494.6, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "I4/mmm",
  coordinationNumber: 12,
  packingFraction: null,
  atomicVolume: 15.71, // cm³/mol
  bohr: "2, 8, 18, 18, 3",
  orbital: "[Kr] 4d10 5s2 5p1", // Ground state configuration with a single p-orbital electron
  valence: 3, // +3 is stable and standard; +1 is well documented in unique subhalides
  coreElectronCount: 46,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.78, // Pauling scale
  electronegativityMulliken: 1.56,
  electronegativityAllredRochow: 1.49,
  ionization: 558.3, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [558.3, 1820.7, 2704, 5210],
  electronAffinity: 28.9, // kJ/mol
  oxidation: "+3", // Standard state; +1 is common in high-temperature or low-valence frameworks
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.42, // eV
  chemicalSoftness: 0.413, // eV⁻¹
  electrophilicityIndex: 0.46,
  polarizability: 10.2, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.34, // V (For In3+ + 3e- -> In)
  flameTestColor: "Brilliant Indigo / Violet-Blue",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the 5p outer valence electron
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.50, // Zeff via Slater's rules
  slatersShieldingConstant: 44.50,
  termSymbol: "2P1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -5.79, // eV
  workFunction: 4.12, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 114.818,
  massNumber: 115, // For Indium-115
  neutronNumber: 66, // For Indium-115
  isotopeCount: 39, // In-97 to In-135
  stableIsotopeCount: 1, // Only Indium-113 is perfectly stable
  isotopicAbundance: {
    In113: 4.29,  // Stable target nucleus active in NMR (spin 9/2)
    In115: 95.71  // Primordial radioisotope with a massive half-life of 4.41e14 years (Dominates natural samples; spin 9/2)
  },
  halfLife: "4.41e14 years", // For Indium-115 (Beta emitter with an extremely low activity profile)
  decayMode: "Beta minus decay", // For Indium-115 (Decays into stable Sn-115)
  decayEnergy: 0.495, // MeV
  nuclearSpin: 4.5, // 9/2 for both natural isotopes (High quadrupole moments)
  magneticDipoleMoment: 5.5408, // nuclear magnetons for In-115
  neutronCrossSection: 190, // barns (High thermal neutron cross section; active in neutron activation foils)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000004, // % by mass
  solarAbundance: 0.0000001, // % by mass
  crustalAbundance: 0.000025, // % by mass (0.25 mg/kg; trace element typically refined from zinc processing muds)
  oceanicAbundance: 2.0e-11, // % by mass
  humanBodyAbundance: null, // Low toxicity profile; foundational to modern technology via Indium Tin Oxide (ITO) thin films for touchscreens
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Neutron capture processing (s-process and r-process branches) inside dying stellar configurations"
};
  

  
 
const tinData = {
  // 1. Fundamental Identity & Classification
  num: 50,
  symbol: "Sn",
  name: "Tin",
  type: "Post-transition metal",
  group: 14,
  period: 5,
  block: "p",
  casRegistryNumber: "7440-31-5",
  discoverer: "Known since antiquity",
  year: -3000,
  originOfName: "Derived from the Germanic root word; the chemical symbol 'Sn' comes from the Latin name 'stannum'",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.265, // g/cm³ at STP (White beta-tin; grey alpha-tin is 5.769 g/cm³)
  melting: 505.08, // Kelvin (231.93°C; notably low melting point, ideal for soldering applications)
  boiling: 2875, // Kelvin (2602°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 16.29, // cm³/mol
  electricalConductivity: 9.1e6, // S/m
  electricalResistivity: 1.15e-7, // Ω·m at 20°C
  thermalConductivity: 66.8, // W/(m·K)
  thermalExpansionCoefficient: 22.0e-6, // K⁻¹ at 25°C
  speedOfSound: 2730, // m/s at 20°C
  refractiveIndex: null, // Solid metal
  hardnessMohs: 1.5, // Soft, highly malleable; can be easily scratched or cut
  hardnessVickers: null,
  hardnessBrinell: 3.9, // MPa
  bulkModulus: 58, // GPa
  shearModulus: 18, // GPa
  youngsModulus: 50, // GPa
  poissonsRatio: 0.33,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // White beta-tin (metallic, stable above 13.2°C) and Grey alpha-tin (diamond cubic diamond structure, stable below 13.2°C; causes 'tin pest' degradation)
  color: "Silvery-white with a brilliant metallic luster; beta-tin emits a distinct 'tin cry' screech when bent due to twinning deformations",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.227, // J/(g·K)
  molarHeatCapacity: 27.11, // J/(mol·K)
  heatOfFusion: 7.03, // kJ/mol
  heatOfVaporization: 295.8, // kJ/mol
  heatOfAtomization: 302, // kJ/mol
  standardMolarEntropy: 51.2, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 3.72, // Kelvin (Historically vital in early superconductor research labs)

  // 4. Atomic & Structural Variables
  radius: 140, // pm (Atomic radius)
  covalentRadius: 139, // pm
  vanderWaalsRadius: 217, // pm
  ionicRadius: 69, // pm (For Sn4+ coordination number 6)
  crystalStructure: "Body-centered tetragonal", // For standard White $\beta$-tin phase at ambient parameters
  latticeConstantA: 583.2, // pm
  latticeConstantB: 583.2, // pm
  latticeConstantC: 318.2, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "I41/amd",
  coordinationNumber: 6, // In the tetragonal beta configuration matrix
  packingFraction: null,
  atomicVolume: 16.29, // cm³/mol
  bohr: "2, 8, 18, 18, 4",
  orbital: "[Kr] 4d10 5s2 5p2",
  valence: 4, // Commonly exhibits dual valencies (+2 for stannous, +4 for stannic chemical families)
  coreElectronCount: 46,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.96, // Pauling scale
  electronegativityMulliken: 1.82,
  electronegativityAllredRochow: 1.72,
  ionization: 708.6, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [708.6, 1411.8, 2943.0, 3930.3, 7456],
  electronAffinity: 107.3, // kJ/mol
  oxidation: "+4, +2", // Both states are highly stable; +2 acts as a robust reducing baseline agent
  maximumOxidationState: 4,
  minimumOxidationState: -4, // Realized in specialized intermetallic stannide configurations (e.g., Mg2Sn)
  chemicalHardness: 3.05, // eV
  chemicalSoftness: 0.328, // eV⁻¹
  electrophilicityIndex: 1.83,
  polarizability: 7.7, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.14, // V (For Sn2+ + 2e- -> Sn)
  flameTestColor: "Faint blue-white or soft grey emission spectrum lines",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the 5p outer block valence valence configuration
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.65, // Zeff via Slater's rules
  slatersShieldingConstant: 44.35,
  termSymbol: "3P0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -6.01, // eV
  workFunction: 4.42, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 118.71,
  massNumber: 120, // For Tin-120
  neutronNumber: 70, // For Tin-120
  isotopeCount: 41, // Sn-99 to Sn-139
  stableIsotopeCount: 10, // Has the greatest number of stable isotopes of any element due to magic proton count Z=50
  isotopicAbundance: {
    Sn112: 0.97,
    Sn114: 0.66,
    Sn115: 0.34, // Lowest natural stable fraction
    Sn116: 14.54,
    Sn117: 7.68,  // Active NMR target nucleus with spin 1/2
    Sn118: 24.22,
    Sn119: 8.59,  // Active NMR target nucleus with spin 1/2; highly exploited in Mössbauer spectroscopy
    Sn120: 32.58, // Most dominant stable isotope on Earth
    Sn122: 4.63,
    Sn124: 5.79
  },
  halfLife: "Stable", // For Tin-120 (Sn-126 is a long-lived fission product with a half-life of 2.3e5 years)
  decayMode: "None", // For Tin-120
  decayEnergy: null,
  nuclearSpin: 0, // For Sn-120 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Tin-120
  neutronCrossSection: 0.6, // barns (Relatively low low-capture cross section metric)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000004, // % by mass
  solarAbundance: 0.0000009, // % by mass
  crustalAbundance: 0.00023, // % by mass (2.3 mg/kg; trace metal extensively refined from mineral cassiterite SnO2)
  oceanicAbundance: 4.0e-12, // % by mass
  humanBodyAbundance: 0.00002, // % by mass (Trace non-toxic inorganic profiles; organic tin configurations like organotins are highly hazardous neurotoxins)
  goldschmidtClassification: "Lithophile / Chalcophile",
  nucleosynthesisPathway: "Mainly formed via slow neutron capture processing (s-process dynamics) inside old stellar shells"
};
  

  
 
const antimonyData = {
  // 1. Fundamental Identity & Classification
  num: 51,
  symbol: "Sb",
  name: "Antimony",
  type: "Metalloid",
  group: 15,
  period: 5,
  block: "p",
  casRegistryNumber: "7440-36-0",
  discoverer: "Known since antiquity; first detailed description by Vannoccio Biringuccio",
  year: 1540,
  originOfName: "Derived from the Greek words 'anti' and 'monos', meaning 'a metal not found alone'; the symbol 'Sb' comes from the Latin 'stibium' (mark, sign), referencing the historic mineral stibnite",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.697, // g/cm³ at STP
  melting: 930.63, // Kelvin (657.48°C)
  boiling: 1860, // Kelvin (1587°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 18.19, // cm³/mol
  electricalConductivity: 2.5e6, // S/m (Poor electrical conductor compared to true metals)
  electricalResistivity: 4.17e-7, // Ω·m at 20°C
  thermalConductivity: 24.4, // W/(m·K)
  thermalExpansionCoefficient: 11.0e-6, // K⁻¹ at 25°C
  speedOfSound: 3420, // m/s at 20°C
  refractiveIndex: null, // Solid crystalline metalloid
  hardnessMohs: 3.0, // Hard but extremely brittle; can be easily crushed into a fine powder
  hardnessVickers: null,
  hardnessBrinell: 294, // MPa
  bulkModulus: 42, // GPa
  shearModulus: 20, // GPa
  youngsModulus: 55, // GPa
  poissonsRatio: 0.28,
  malleability: "Low (Lacks plasticity, shatters upon mechanical impact)",
  ductility: "Low",
  allotropeCount: 4, // Stable metallic/grey form, plus three metastable forms (explosive, black, yellow)
  color: "Silvery-blue, lustrous, highly crystalline flake metallic appearance",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.207, // J/(g·K)
  molarHeatCapacity: 25.23, // J/(mol·K)
  heatOfFusion: 19.87, // kJ/mol
  heatOfVaporization: 193.4, // kJ/mol
  heatOfAtomization: 262, // kJ/mol
  standardMolarEntropy: 45.69, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 140, // pm (Atomic radius)
  covalentRadius: 139, // pm
  vanderWaalsRadius: 206, // pm
  ionicRadius: 76, // pm (For Sb3+ coordination number 6)
  crystalStructure: "Rhombohedral", // Trigonal tracking lattice setup
  latticeConstantA: 430.7, // pm
  latticeConstantB: 430.7, // pm
  latticeConstantC: 1127.3, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "R-3m",
  coordinationNumber: 6, // Layered arsenic-type sheets
  packingFraction: null,
  atomicVolume: 18.19, // cm³/mol
  bohr: "2, 8, 18, 18, 5",
  orbital: "[Kr] 4d10 5s2 5p3",
  valence: 5, // Exhibits principal valencies of +3 and +5; can form trivalent stibines
  coreElectronCount: 46,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.05, // Pauling scale
  electronegativityMulliken: 1.83,
  electronegativityAllredRochow: 1.82,
  ionization: 834.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [834.0, 1594.9, 2440, 4260, 5400, 10400],
  electronAffinity: 103.2, // kJ/mol
  oxidation: "+3, +5, -3", // +3 is most stable in standard solutions; -3 present in specialized antimonides
  maximumOxidationState: 5,
  minimumOxidationState: -3,
  chemicalHardness: 3.32, // eV
  chemicalSoftness: 0.301, // eV⁻¹
  electrophilicityIndex: 1.85,
  polarizability: 6.6, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.15, // V (For Sb2O3 + 6H+ + 6e- -> 2Sb + 3H2O)
  flameTestColor: "Pale blue / faint greenish-white emission tint profile",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the 5p outer valence configuration
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.30, // Zeff via Slater's rules
  slatersShieldingConstant: 44.70,
  termSymbol: "4S3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -7.02, // eV
  workFunction: 4.55, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 121.760,
  massNumber: 121, // For Antimony-121
  neutronNumber: 70, // For Antimony-121
  isotopeCount: 37, // Sb-103 to Sb-139
  stableIsotopeCount: 2, // Antimony-121 and Antimony-123
  isotopicAbundance: {
    Sb121: 57.36, // Stable target nucleus highly active in NMR (spin 5/2)
    Sb123: 42.64  // Stable target nucleus highly active in NMR (spin 7/2)
  },
  halfLife: "Stable", // For Antimony-121 (Sb-124 is an industrial gamma emitter used in nuclear start-up sources)
  decayMode: "None", // For Antimony-121
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 for Sb-121 (Large quadrupole profile)
  magneticDipoleMoment: 3.3634, // nuclear magnetons for Sb-121
  neutronCrossSection: 6.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000004, // % by mass
  solarAbundance: 0.0000001, // % by mass
  crustalAbundance: 0.00002, // % by mass (0.2 mg/kg; uncommon trace element predominantly mined from stibnite Sb2S3)
  oceanicAbundance: 2.0e-10, // % by mass
  humanBodyAbundance: null, // Toxic element with cumulative mechanics similar to arsenic; used globally as antimony trioxide flame retardant synergists
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Neutron capture processing (balanced division of r-process and s-process tracks) inside stellar generation cycles"
};
  

  
 
const telluriumData = {
  // 1. Fundamental Identity & Classification
  num: 52,
  symbol: "Te",
  name: "Tellurium",
  type: "Metalloid",
  group: 16,
  period: 5,
  block: "p",
  casRegistryNumber: "13494-80-9",
  discoverer: "Franz-Joseph Müller von Reichenstein",
  year: 1782,
  originOfName: "Derived from the Latin word 'tellus', meaning earth, in honor of the Roman earth goddess",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.24, // g/cm³ at STP
  melting: 722.66, // Kelvin (449.51°C)
  boiling: 1261, // Kelvin (988°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 20.46, // cm³/mol
  electricalConductivity: 1.0e4, // S/m (Semiconductor; conductivity increases slightly when exposed to light or heat)
  electricalResistivity: 1.0e-4, // Ω·m at 20°C
  thermalConductivity: 1.97, // W/(m·K) (Very low for a metal-like crystalline structure)
  thermalExpansionCoefficient: 16.8e-6, // K⁻¹ at 25°C
  speedOfSound: 2610, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.25, // Soft, extremely brittle metalloid; easily pulverized
  hardnessVickers: null,
  hardnessBrinell: 180, // MPa
  bulkModulus: 65, // GPa
  shearModulus: 16, // GPa
  youngsModulus: 43, // GPa
  poissonsRatio: 0.32,
  malleability: "Low (Shatters easily under stress; completely lacks structural malleability)",
  ductility: "Low",
  allotropeCount: 2, // Crystalline (stable, silvery-white trigonal form) and Amorphous (dark-brown powder)
  color: "Silvery-white, lustrous, metallic appearance with a highly crystalline structure",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.201, // J/(g·K)
  molarHeatCapacity: 25.73, // J/(mol·K)
  heatOfFusion: 17.49, // kJ/mol
  heatOfVaporization: 114.1, // kJ/mol
  heatOfAtomization: 197, // kJ/mol
  standardMolarEntropy: 49.5, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 142, // pm (Atomic radius)
  covalentRadius: 138, // pm
  vanderWaalsRadius: 206, // pm
  ionicRadius: 221, // pm (For Te2- coordination number 6)
  crystalStructure: "Trigonal", // Hexagonal-like symmetry consisting of parallel helical chains
  latticeConstantA: 445.7, // pm
  latticeConstantB: 445.7, // pm
  latticeConstantC: 592.9, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P3121",
  coordinationNumber: 6,
  packingFraction: null,
  atomicVolume: 20.46, // cm³/mol
  bohr: "2, 8, 18, 18, 6",
  orbital: "[Kr] 4d10 5s2 5p4",
  valence: 6, // Exhibits stable common oxidation states of -2, +4, and +6
  coreElectronCount: 46,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.1, // Pauling scale
  electronegativityMulliken: 2.01,
  electronegativityAllredRochow: 2.01,
  ionization: 869.3, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [869.3, 1790, 2698, 3610, 5668, 6820, 13200],
  electronAffinity: 190.2, // kJ/mol
  oxidation: "+4, +6, -2", // +4 (tellurites) is chemically dominant and highly stable
  maximumOxidationState: 6, // Found in telluric acid and tellurium hexafluoride
  minimumOxidationState: -2, // Present in metal tellurides (e.g., Bi2Te3 thermoelectric devices)
  chemicalHardness: 2.92, // eV
  chemicalSoftness: 0.342, // eV⁻¹
  electrophilicityIndex: 3.10,
  polarizability: 5.5, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.57, // V (For TeO2 + 4H+ + 4e- -> Te + 2H2O)
  flameTestColor: "Greenish-blue execution profile signature",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the 5p outer tier
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.95, // Zeff via Slater's rules
  slatersShieldingConstant: 45.05,
  termSymbol: "3P2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -7.26, // eV
  workFunction: 4.95, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 127.60,
  massNumber: 128, // For Tellurium-128
  neutronNumber: 76, // For Tellurium-128
  isotopeCount: 39, // Te-104 to Te-142
  stableIsotopeCount: 6, // Te-120, Te-122, Te-123, Te-124, Te-125, and Te-126 (Te-128 and Te-130 are primordial double-beta emitters)
  isotopicAbundance: {
    Te120: 0.09,
    Te122: 2.55,
    Te123: 0.89,  // Long-lived electron-capture radioisotope (t1/2 = 6.0e14 years)
    Te124: 4.74,
    Te125: 7.07,  // Stable target nucleus highly active in NMR (spin 1/2)
    Te126: 18.84,
    Te128: 31.74, // Ultra long-lived double-beta emitter (t1/2 = 2.2e24 years; longest directly measured half-life of any nuclide)
    Te130: 34.08  // Most dominant natural isotope; long-lived double-beta emitter (t1/2 = 7.9e20 years)
  },
  halfLife: "2.2e24 years", // For Tellurium-128
  decayMode: "Double beta minus decay", // For Tellurium-128 (Decays into Xe-128)
  decayEnergy: 0.867, // MeV
  nuclearSpin: 0, // For Te-128 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Tellurium-128
  neutronCrossSection: 4.7, // barns (Isotopic natural average profile)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000009, // % by mass
  solarAbundance: 0.0000012, // % by mass
  crustalAbundance: 0.0000001, // % by mass (0.001 mg/kg; one of the rarest stable solid elements in Earth's crust)
  oceanicAbundance: 9.0e-11, // % by mass
  humanBodyAbundance: null, // Mildly toxic; exposure causes the body to produce dimethyl telluride, imparting a pungent garlic-like breath odor; vital component in Cadmium Telluride (CdTe) thin-film solar photovoltaics
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Mainly forged via rapid neutron capture reactions (r-process dynamics) in core collapses, augmented by s-process star branches"
};
  

  
 
const iodineData = {
  // 1. Fundamental Identity & Classification
  num: 53,
  symbol: "I",
  name: "Iodine",
  type: "Halogen", // Reactive nonmetal
  group: 17,
  period: 5,
  block: "p",
  casRegistryNumber: "7553-56-2",
  discoverer: "Bernard Courtois",
  year: 1811,
  originOfName: "Derived from the Greek word 'ioeides', meaning violet-colored, due to the characteristic color of its gas phase vapor",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 4.933, // g/cm³ at STP
  melting: 386.85, // Kelvin (113.7°C)
  boiling: 457.4, // Kelvin (184.3°C; readily sublimes at ambient temperatures into a deep purple vapor)
  triplePointTemperature: 386.65, // Kelvin (113.5°C)
  triplePointPressure: 12.1, // kPa
  criticalPointTemperature: 819, // Kelvin (546°C)
  criticalPointPressure: 11.7, // MPa
  molarVolume: 25.72, // cm³/mol
  electricalConductivity: 1.0e-7, // S/m (Insulator under normal conditions; behaves metallically under extreme multi-GPa pressures)
  electricalResistivity: 1.3e7, // Ω·m at 20°C
  thermalConductivity: 0.449, // W/(m·K) (Very low nonmetallic thermal distribution)
  thermalExpansionCoefficient: null, // Solid molecular crystal layout
  speedOfSound: null,
  refractiveIndex: 1.334, // For the liquid phase
  hardnessMohs: null, // Soft, easily crumbled molecular solid crystal lattices
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 7.8, // GPa
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Low (Brittle molecular crystal structure; easily crushed)",
  ductility: "Low",
  allotropeCount: 1, // Standard diatomic molecular lattice ($I_2$) is the uniform stable form
  color: "Lustrous, dark violet-black, crystalline solid that produces a brilliant purple vapor",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.214, // J/(g·K)
  molarHeatCapacity: 54.44, // J/(mol·K) for diatomic I2
  heatOfFusion: 15.52, // kJ/mol (Per mole of I2)
  heatOfVaporization: 41.57, // kJ/mol (Per mole of I2)
  heatOfAtomization: 107, // kJ/mol
  standardMolarEntropy: 116.14, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 133, // pm (Atomic radius)
  covalentRadius: 139, // pm
  vanderWaalsRadius: 198, // pm
  ionicRadius: 220, // pm (For I- coordination number 6)
  crystalStructure: "Orthorhombic", // Base-centered molecular packing arrangement
  latticeConstantA: 718.0, // pm
  latticeConstantB: 471.0, // pm
  latticeConstantC: 981.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Cmca",
  coordinationNumber: 1, // Diatomic molecular bond structure
  packingFraction: null,
  atomicVolume: 25.72, // cm³/mol
  bohr: "2, 8, 18, 18, 7",
  orbital: "[Kr] 4d10 5s2 5p5",
  valence: 7, // Highly variable chemistry; exhibits oxidation states from -1 to +7
  coreElectronCount: 46,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.66, // Pauling scale
  electronegativityMulliken: 2.26,
  electronegativityAllredRochow: 2.21,
  ionization: 1008.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [1008.4, 1845.9, 3180, 4120, 5030, 6830, 7830],
  electronAffinity: 295.2, // kJ/mol (Highly exothermic halide stabilization cascade)
  oxidation: "-1, +1, +5, +7", // -1 (iodides) is standard; +5 (iodates) and +7 (periodates) are powerfully oxidizing
  maximumOxidationState: 7,
  minimumOxidationState: -1,
  chemicalHardness: 3.69, // eV
  chemicalSoftness: 0.271, // eV⁻¹
  electrophilicityIndex: 5.91,
  polarizability: 5.4, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.54, // V (For I2 + 2e- -> 2I-)
  flameTestColor: "Produces a distinct deep violet-purple gas excitation signature glow",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the 5p outer tier valence shell
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 7.60, // Zeff via Slater's rules
  slatersShieldingConstant: 45.40,
  termSymbol: "2P3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -9.54, // eV
  workFunction: null, // Nonmetal semiconductor profile

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 126.90447,
  massNumber: 127, // For Iodine-127
  neutronNumber: 74, // For Iodine-127
  isotopeCount: 37, // I-108 to I-144
  stableIsotopeCount: 1, // Monoisotopic (Only Iodine-127 is stable)
  isotopicAbundance: {
    I127: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Iodine-127 (I-131 is a critical medical beta-emitter with an 8-day half-life; I-129 is a long-lived fission indicator with t1/2 of 1.57e7 years)
  decayMode: "None", // For Iodine-127
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 (Highly sensitive, active target nucleus in NMR spectroscopy frameworks)
  magneticDipoleMoment: 2.813, // nuclear magnetons
  neutronCrossSection: 6.2, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000001, // % by mass
  solarAbundance: 0.0000002, // % by mass
  crustalAbundance: 0.000045, // % by mass (0.45 mg/kg; relatively scarce biophilic element concentrated by marine organisms)
  oceanicAbundance: 0.000006, // % by mass (60 µg/L; present uniformly as iodate IO3- and iodide I-)
  humanBodyAbundance: 0.00002, // % by mass (Indispensable, vital micronutrient concentrated heavily inside the thyroid gland to build thyroxine and triiodothyronine hormones)
  goldschmidtClassification: "Chalcophile / Biophile",
  nucleosynthesisPathway: "Predominantly forged via rapid neutron capture processing (r-process dynamics) inside core collapses and star mergers"
};
  

  
 
const xenonData = {
  // 1. Fundamental Identity & Classification
  num: 54,
  symbol: "Xe",
  name: "Xenon",
  type: "Noble gas",
  group: 18,
  period: 5,
  block: "p",
  casRegistryNumber: "7440-63-3",
  discoverer: "William Ramsay, Morris Travers",
  year: 1898,
  originOfName: "Derived from the Greek word 'xenos', meaning stranger or foreign, because it was found as a rare, hidden component during the fractional distillation of liquid air",

  // 2. Bulk Physical Properties
  state: "Gas",
  density: 0.005894, // g/cm³ at STP (Extremely heavy gas; roughly 4.5 times denser than air)
  melting: 161.4, // Kelvin (-111.75°C)
  boiling: 165.03, // Kelvin (-108.12°C)
  triplePointTemperature: 161.405, // Kelvin (-111.745°C)
  triplePointPressure: 81.6, // kPa
  criticalPointTemperature: 289.77, // Kelvin (16.62°C; can be liquefied under pressure at room temperature)
  criticalPointPressure: 5.84, // MPa
  molarVolume: 22.41, // L/mol at STP (Solid phase molar volume is 37.13 cm³/mol)
  electricalConductivity: null, // Gas insulator; forms highly conductive, brilliant plasmas under high voltage discharges
  electricalResistivity: null,
  thermalConductivity: 0.00565, // W/(m·K) (Very low; utilized in specialty high-efficiency insulating windows)
  thermalExpansionCoefficient: null,
  speedOfSound: 178, // m/s at 0°C (Much slower than air; inhaling it deepens the human voice)
  refractiveIndex: 1.000702, // Gas phase benchmark
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "N/A (Gaseous element)",
  ductility: "N/A (Gaseous element)",
  allotropeCount: 1, // Exists natively as isolated monoatomic gas atoms; condenses into a face-centered cubic solid crystal lattice at low temperatures
  color: "Colorless, completely odorless gas; emits a magnificent, intense blue-violet glow when excited in a gas discharge tube",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.158, // J/(g·K)
  molarHeatCapacity: 20.786, // J/(mol·K)
  heatOfFusion: 2.27, // kJ/mol
  heatOfVaporization: 12.64, // kJ/mol
  heatOfAtomization: 0, // Monoatomic standard baseline state
  standardMolarEntropy: 169.68, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 108, // pm (Calculated atomic radius)
  covalentRadius: 140, // pm
  vanderWaalsRadius: 216, // pm
  ionicRadius: null, // Extremely rare transient isolated ions
  crystalStructure: "Face-centered cubic", // Formed upon cryogenic solidification
  latticeConstantA: 620.0, // pm
  latticeConstantB: 620.0, // pm
  latticeConstantC: 620.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // In its close-packed solid matrix state
  packingFraction: 0.74,
  atomicVolume: 37.13, // cm³/mol (For cryo-solid phase)
  bohr: "2, 8, 18, 18, 8",
  orbital: "[Kr] 4d10 5s2 5p6", // Completed valence shell structure explaining historical chemically unreactive classification
  valence: 0, // Chemically stable baseline; behaves with valencies up to +8 in strong fluorides and oxides
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.60, // Pauling scale (Revised; shows reactive affinity toward highly electronegative fluorine and oxygen elements)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 2.10,
  ionization: 1170.4, // kJ/mol (First Ionization Energy; lowest first ionization potential of the non-radioactive noble gases)
  successiveIonizationEnergies: [1170.4, 2046, 3099, 4300, 5500, 6600, 7900],
  electronAffinity: -77.0, // kJ/mol (Endothermic addition owing to complete outer octet shell stability)
  oxidation: "0, +2, +4, +6, +8", // Discovered by Neil Bartlett in 1962; forms highly specialized stable compounds such as XeF2, XeF4, XeF6, and powerfully explosive perxenates like XeO4
  maximumOxidationState: 8,
  minimumOxidationState: 0,
  chemicalHardness: 4.86, // eV
  chemicalSoftness: 0.206, // eV⁻¹
  electrophilicityIndex: null,
  polarizability: 4.0, // × 10⁻²⁴ cm³ (Highly polarizable for a noble gas, facilitating rich coordination chemistry)
  standardReductionPotential: 2.12, // V (For powers of XeO3 + 6H+ + 6e- -> Xe + 3H2O in acidic settings)
  flameTestColor: "Produces a brilliant, piercing sky-blue to bright violet electrical plasma arc discharge spectrum signature",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 5, // n = 5 for the completely filled 5p outer tier shell
  azimuthalQuantumNumber: 1, // l = 1 (p orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 8.25, // Zeff via Slater's rules
  slatersShieldingConstant: 45.75,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -12.13, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 131.293,
  massNumber: 132, // For Xenon-132
  neutronNumber: 78, // For Xenon-132
  isotopeCount: 41, // Xe-108 to Xe-148
  stableIsotopeCount: 7, // Xe-126, Xe-128, Xe-129, Xe-130, Xe-131, Xe-132, and Xe-134 (Xe-124 and Xe-136 undergo extremely rare double-beta decay processes)
  isotopicAbundance: {
    Xe124: 0.09,  // Ultra long-lived double electron capture nuclide (t1/2 = 1.8e22 years)
    Xe126: 0.09,
    Xe128: 1.92,
    Xe129: 26.44, // Highly active NMR target nucleus with spin 1/2; highly deployed in hyperpolarized MRI lung imaging scans
    Xe130: 4.08,
    Xe131: 21.18, // Active NMR target nucleus with spin 3/2
    Xe132: 26.89, // Most naturally dominant stable isotope on Earth
    Xe134: 10.44,
    Xe136: 8.87   // Ultra long-lived double-beta emitter (t1/2 = 2.1e21 years; critical target in neutrinoless double-beta decay physics labs)
  },
  halfLife: "Stable", // For Xenon-132 (Xe-135 is uniquely critical in nuclear engineering as a monumental neutron poison with a capture cross-section of 2.6e6 barns, capable of shutting down commercial fission reactors)
  decayMode: "None", // For Xenon-132
  decayEnergy: null,
  nuclearSpin: 0, // For Xe-132 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Xenon-132
  neutronCrossSection: 24.0, // barns (Natural isotopic average combination baseline metric)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000001, // % by mass
  solarAbundance: 0.000002, // % by mass
  crustalAbundance: 3.0e-9, // % by mass (30 ng/kg; one of the absolute rarest non-synthetic elements found within terrestrial surfaces)
  oceanicAbundance: 5.0e-11, // % by mass
  humanBodyAbundance: null, // Biologically completely inert; displays powerful, ultra-safe general anesthetic properties via non-competitive NMDA receptor antagonism; primary heavy propellant for high-efficiency deep-space ion propulsion satellite engines
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "Forged via slow and rapid stellar neutron capture processing (s-process and r-process steps) inside exploding supernovas and asymptotic giant branch star envelopes"
};
  

  
 
const cesiumData = {
  // 1. Fundamental Identity & Classification
  num: 55,
  symbol: "Cs",
  name: "Cesium",
  type: "Alkali metal",
  group: 1,
  period: 6,
  block: "s",
  casRegistryNumber: "7440-46-2",
  discoverer: "Robert Bunsen, Gustav Kirchhoff",
  year: 1860,
  originOfName: "Derived from the Latin word 'caesius', meaning sky-blue, referencing the brilliant blue lines discovered in its flame emission spectrum",

  // 2. Bulk Physical Properties
  state: "Solid", // Liquid at slight elevations above standard room temperature
  density: 1.93, // g/cm³ at STP (Extremely low density for a heavy element)
  melting: 301.59, // Kelvin (28.44°C; one of the few elemental metals that melts near human body temperature)
  boiling: 944, // Kelvin (671°C)
  triplePointTemperature: 301.60, // Kelvin (28.45°C)
  triplePointPressure: 0.0, // kPa
  criticalPointTemperature: 1938, // Kelvin (1665°C)
  criticalPointPressure: 9.4, // MPa
  molarVolume: 68.86, // cm³/mol (Highly expanded atomic configuration)
  electricalConductivity: 4.9e6, // S/m
  electricalResistivity: 2.05e-7, // Ω·m at 20°C
  thermalConductivity: 35.9, // W/(m·K)
  thermalExpansionCoefficient: 97.0e-6, // K⁻¹ at 25°C (Very high thermal expansion rate)
  speedOfSound: 1160, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 0.2, // Absolute softest stable element; easily sliced like cold butter
  hardnessVickers: null,
  hardnessBrinell: 0.14, // MPa
  bulkModulus: 1.6, // GPa (Incredibly compressible structural properties)
  shearModulus: null,
  youngsModulus: 1.7, // GPa
  poissonsRatio: null,
  malleability: "Extremely High",
  ductility: "Extremely High",
  allotropeCount: 1, // Body-centered cubic forms its native structural benchmark under standard limits
  color: "Pale silvery-gold, exceptionally soft, brilliant warm metallic luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.242, // J/(g·K)
  molarHeatCapacity: 32.17, // J/(mol·K)
  heatOfFusion: 2.09, // kJ/mol
  heatOfVaporization: 63.9, // kJ/mol
  heatOfAtomization: 76, // kJ/mol
  standardMolarEntropy: 85.2, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.00002, // Kelvin (Under massive multi-GPa pressures)

  // 4. Atomic & Structural Variables
  radius: 265, // pm (Atomic radius; largest atomic radius of any stable element)
  covalentRadius: 244, // pm
  vanderWaalsRadius: 343, // pm
  ionicRadius: 167, // pm (For Cs+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 614.1, // pm
  latticeConstantB: 614.1, // pm
  latticeConstantC: 614.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: 68.86, // cm³/mol
  bohr: "2, 8, 18, 18, 8, 1",
  orbital: "[Xe] 6s1", // Single weakly-bound s-valence electron defining its extreme reactivity
  valence: 1, // Forms exclusive univalent +1 salts (Cs+)
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.79, // Pauling scale (Lowest electronegativity of all stable elements)
  electronegativityMulliken: 0.79,
  electronegativityAllredRochow: 0.86,
  ionization: 375.7, // kJ/mol (First Ionization Energy; lowest first ionization potential of any stable element)
  successiveIonizationEnergies: [375.7, 2234.3, 3400],
  electronAffinity: 45.5, // kJ/mol
  oxidation: "+1", // Uniform stable state; violently hyper-reactive with water and air (spontaneously ignites)
  maximumOxidationState: 1,
  minimumOxidationState: -1, // Observed inside unique, specialized sub-ambient alkalide complexes ('cesides')
  chemicalHardness: 1.71, // eV (Extremely soft chemical profile)
  chemicalSoftness: 0.585, // eV⁻¹
  electrophilicityIndex: 0.54,
  polarizability: 59.6, // × 10⁻²⁴ cm³ (Exceptionally high; valence electron cloud is easily warped)
  standardReductionPotential: -3.02, // V (For Cs+ + e- -> Cs)
  flameTestColor: "Brilliant, distinct sky-blue / violet line emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6, // n = 6 for the 6s outermost single valence electron
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.20, // Zeff via Slater's rules (Highly shielded outer layer)
  slatersShieldingConstant: 52.80,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -3.89, // eV
  workFunction: 2.14, // eV (Lowest work function of all stable elements; highly active photoemissive target)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 132.90545196,
  massNumber: 133, // For Cesium-133
  neutronNumber: 78, // For Cesium-133
  isotopeCount: 40, // Cs-112 to Cs-151
  stableIsotopeCount: 1, // Monoisotopic (Only Cesium-133 is stable)
  isotopicAbundance: {
    Cs133: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Cesium-133 (Cs-137 is a notorious medium-lived fission byproduct with a half-life of 30.17 years used in industrial gauges and radiotherapy; Cs-134 is a shorter tracking isotope)
  decayMode: "None", // For Cesium-133
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 (Highly active NMR target nucleus with robust structural utility)
  magneticDipoleMoment: 2.5820, // nuclear magnetons
  neutronCrossSection: 29.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000008, // % by mass
  solarAbundance: 0.00000002, // % by mass
  crustalAbundance: 0.0003, // % by mass (3 mg/kg; mainly localized within the rare complex mineral pollucite)
  oceanicAbundance: 4.0e-10, // % by mass
  humanBodyAbundance: 0.000002, // % by mass (Slight trace element; has low toxicity profile but mimics potassium inside cellular paths. Fundamental to global timekeeping: the SI second is strictly defined by 9,192,631,770 hyper-fine state transitions of ground-state Cesium-133 atoms inside atomic clocks)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged via rapid and slow neutron capture processes (r-process and s-process tracks) during cosmic supernova dynamics"
};
  

  
 
const bariumData = {
  // 1. Fundamental Identity & Classification
  num: 56,
  symbol: "Ba",
  name: "Barium",
  type: "Alkaline earth metal",
  group: 2,
  period: 6,
  block: "s",
  casRegistryNumber: "7440-39-3",
  discoverer: "Carl Wilhelm Scheele, Humphry Davy",
  year: 1808,
  originOfName: "Derived from the Greek word 'barys', meaning heavy, because of the high density of its most common mineral ore, barite (barium sulfate)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 3.51, // g/cm³ at STP
  melting: 1000, // Kelvin (727°C)
  boiling: 2118, // Kelvin (1845°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 38.16, // cm³/mol
  electricalConductivity: 2.9e6, // S/m
  electricalResistivity: 3.32e-7, // Ω·m at 20°C
  thermalConductivity: 18.4, // W/(m·K)
  thermalExpansionCoefficient: 20.6e-6, // K⁻¹ at 25°C
  speedOfSound: 1620, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 1.25, // Soft, highly malleable alkaline earth metal; slightly harder than lead
  hardnessVickers: null,
  hardnessBrinell: 42, // MPa
  bulkModulus: 9.6, // GPa
  shearModulus: 4.9, // GPa
  youngsModulus: 13, // GPa
  poissonsRatio: 0.28,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Body-centered cubic forms its native stable baseline arrangement across ambient parameters
  color: "Silvery-white with a soft metallic luster; rapidly oxidizes in air to a dark gray or black oxide layer",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.204, // J/(g·K)
  molarHeatCapacity: 28.07, // J/(mol·K)
  heatOfFusion: 7.12, // kJ/mol
  heatOfVaporization: 142.0, // kJ/mol
  heatOfAtomization: 180, // kJ/mol
  standardMolarEntropy: 62.42, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.06, // Kelvin (Requires massive gigapascal pressure profiles)

  // 4. Atomic & Structural Variables
  radius: 222, // pm (Atomic radius)
  covalentRadius: 198, // pm
  vanderWaalsRadius: 268, // pm
  ionicRadius: 135, // pm (For Ba2+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 502.8, // pm
  latticeConstantB: 502.8, // pm
  latticeConstantC: 502.8, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: 38.16, // cm³/mol
  bohr: "2, 8, 18, 18, 8, 2",
  orbital: "[Xe] 6s2", // Completed outer s-orbital subshell defining its alkaline earth properties
  valence: 2, // Forms uniform divalent +2 salts (Ba2+)
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.89, // Pauling scale
  electronegativityMulliken: 0.88,
  electronegativityAllredRochow: 0.97,
  ionization: 502.9, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [502.9, 965.2, 3600],
  electronAffinity: 13.95, // kJ/mol
  oxidation: "+2", // Stable oxidation state across nearly all known chemical frameworks; highly reactive with water
  maximumOxidationState: 2,
  minimumOxidationState: 0,
  chemicalHardness: 2.42, // eV
  chemicalSoftness: 0.413, // eV⁻¹
  electrophilicityIndex: 0.05,
  polarizability: 39.7, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.91, // V (For Ba2+ + 2e- -> Ba)
  flameTestColor: "Vivid Apple Green emission signature profile",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6, // n = 6 for the 6s outermost valence subshell
  azimuthalQuantumNumber: 0, // l = 0 (s orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.85, // Zeff via Slater's rules
  slatersShieldingConstant: 53.15,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -5.21, // eV
  workFunction: 2.70, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 137.327,
  massNumber: 138, // For Barium-138
  neutronNumber: 82, // For Barium-138 (Possesses a magic neutron number N=82, imparting high nuclear stability)
  isotopeCount: 40, // Ba-114 to Ba-153
  stableIsotopeCount: 6, // Ba-132, Ba-134, Ba-135, Ba-136, Ba-137, and Ba-138 (Ba-130 is a primordial double-electron capture emitter with t1/2 of 1.2e21 years)
  isotopicAbundance: {
    Ba130: 0.11,  // Ultra long-lived primordial radioisotope
    Ba132: 0.10,
    Ba134: 2.42,
    Ba135: 6.59,  // Active NMR target nucleus with spin 3/2
    Ba136: 7.85,
    Ba137: 11.23, // Active NMR target nucleus with spin 3/2
    Ba138: 71.70  // Most naturally abundant stable isotope
  },
  halfLife: "Stable", // For Barium-138 (Ba-133 is a common gamma calibration standard with a 10.5-year half-life)
  decayMode: "None", // For Barium-138
  decayEnergy: null,
  nuclearSpin: 0, // For Ba-138 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Barium-138
  neutronCrossSection: 0.4, // barns (Relatively low capture cross section due to closed nuclear shell)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000001, // % by mass
  solarAbundance: 0.000001, // % by mass
  crustalAbundance: 0.0425, // % by mass (425 mg/kg; relatively abundant lithophile element primarily found as barite and witherite)
  oceanicAbundance: 0.0000013, // % by mass (13 µg/L)
  humanBodyAbundance: 0.00003, // % by mass (Soluble barium compounds are highly toxic neurotoxins; however, completely insoluble Barium Sulfate BaSO4 is widely used in medicine as a radiocontrast agent for GI tract X-ray imaging)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Mainly formed via slow neutron capture processing (s-process dynamics) inside old, low-mass stars"
};
  

  
 
const lanthanumData = {
  // 1. Fundamental Identity & Classification
  num: 57,
  symbol: "La",
  name: "Lanthanum",
  type: "Lanthanide", // Prototype element of the lanthanide series; often classified as a transition metal group 3 element
  group: 3,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-31-5",
  discoverer: "Carl Gustaf Mosander",
  year: 1839,
  originOfName: "Derived from the Ancient Greek word 'lanthanein', meaning to lie hidden, as it had remained concealed as an impurity in cerium nitrate",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.162, // g/cm³ at STP
  melting: 1193, // Kelvin (920°C)
  boiling: 3737, // Kelvin (3464°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 22.54, // cm³/mol
  electricalConductivity: 1.6e6, // S/m
  electricalResistivity: 6.15e-7, // Ω·m at 20°C
  thermalConductivity: 13.4, // W/(m·K)
  thermalExpansionCoefficient: 12.1e-6, // K⁻¹ at 25°C
  speedOfSound: 2475, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft enough to be cut with a steel knife
  hardnessVickers: 491, // MPa
  hardnessBrinell: 363, // MPa
  bulkModulus: 28, // GPa
  shearModulus: 14.3, // GPa
  youngsModulus: 36.6, // GPa
  poissonsRatio: 0.28,
  malleability: "High",
  ductility: "High",
  allotropeCount: 3, // Double hexagonal close-packed (alpha, stable below 310°C), face-centered cubic (beta, stable 310-865°C), and body-centered cubic (gamma, stable above 865°C)
  color: "Silvery-white, malleable, lustrous metallic finish; rapidly oxidizes and tarnishes when exposed to air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.195, // J/(g·K)
  molarHeatCapacity: 27.11, // J/(mol·K)
  heatOfFusion: 6.2, // kJ/mol
  heatOfVaporization: 400, // kJ/mol
  heatOfAtomization: 431, // kJ/mol
  standardMolarEntropy: 56.9, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 6.0, // Kelvin (For the standard dhcp phase; rises under high pressure)

  // 4. Atomic & Structural Variables
  radius: 187, // pm (Atomic radius)
  covalentRadius: 169, // pm
  vanderWaalsRadius: 240, // pm
  ionicRadius: 103.2, // pm (For La3+ coordination number 6)
  crystalStructure: "Double hexagonal close-packed", // Native alpha-phase structure arrangement
  latticeConstantA: 377.2, // pm
  latticeConstantB: 377.2, // pm
  latticeConstantC: 1214.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 22.54, // cm³/mol
  bohr: "2, 8, 18, 18, 9, 2",
  orbital: "[Xe] 5d1 6s2", // Noticeable absence of electrons in the 4f subshell in its ground atomic state
  valence: 3, // Forms uniform trivalent +3 compounds (La3+)
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.10, // Pauling scale
  electronegativityMulliken: 1.08,
  electronegativityAllredRochow: 1.08,
  ionization: 538.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [538.1, 1067, 1850.3, 4819],
  electronAffinity: 48.0, // kJ/mol
  oxidation: "+3", // Powerfully electropositive; reacts directly with water to release hydrogen gas
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.38, // eV
  chemicalSoftness: 0.420, // eV⁻¹
  electrophilicityIndex: 0.11,
  polarizability: 31.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.38, // V (For La3+ + 3e- -> La)
  flameTestColor: "Faint white to pale greenish-yellow emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6, // n = 6 for the outermost 6s electrons
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tracking electron)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.10, // Zeff via Slater's rules
  slatersShieldingConstant: 53.90,
  termSymbol: "2D3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -4.92, // eV
  workFunction: 3.50, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 138.90547,
  massNumber: 139, // For Lanthanum-139
  neutronNumber: 82, // For Lanthanum-139 (Possesses magic neutron count N=82)
  isotopeCount: 39, // La-117 to La-155
  stableIsotopeCount: 1, // Only Lanthanum-139 is stable
  isotopicAbundance: {
    La138: 0.09,  // Primordial long-lived radioisotope (t1/2 = 1.02e11 years; decays via electron capture and beta minus)
    La139: 99.91  // Overwhelmingly dominant stable isotope (Active target nucleus in NMR with spin 7/2)
  },
  halfLife: "Stable", // For Lanthanum-139
  decayMode: "None", // For Lanthanum-139
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 for La-139
  magneticDipoleMoment: 2.7830, // nuclear magnetons
  neutronCrossSection: 9.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000004, // % by mass
  solarAbundance: 0.00000005, // % by mass
  crustalAbundance: 0.0039, // % by mass (39 mg/kg; relatively abundant rare-earth element chiefly mined from monazite and bastnäsite ores)
  oceanicAbundance: 3.4e-12, // % by mass
  humanBodyAbundance: null, // Essential cofactor in select methanotrophic bacterial enzymes (e.g., XoxF methanol dehydrogenase); utilized extensively globally in camera lenses, oil fluid catalytic cracking catalysts, and mischmetal battery alloys
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Predominantly generated via slow neutron capture processing (s-process mechanics) within low-mass asymptotic giant branch stars"
};
  

  
 
const ceriumData = {
  // 1. Fundamental Identity & Classification
  num: 58,
  symbol: "Ce",
  name: "Cerium",
  type: "Lanthanide",
  group: 3, // Assigned to group 3 as part of the lanthanide series row insertion
  period: 6,
  block: "f",
  casRegistryNumber: "7440-45-1",
  discoverer: "Martin Heinrich Klaproth, Jöns Jacob Berzelius, Wilhelm Hisinger",
  year: 1803,
  originOfName: "Named after the dwarf planet Ceres, which had been discovered just two years prior in 1801",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.77, // g/cm³ at STP
  melting: 1068, // Kelvin (795°C)
  boiling: 3716, // Kelvin (3443°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 20.69, // cm³/mol
  electricalConductivity: 1.3e6, // S/m
  electricalResistivity: 7.44e-7, // Ω·m at 20°C
  thermalConductivity: 11.3, // W/(m·K)
  thermalExpansionCoefficient: 6.3e-6, // K⁻¹ at 25°C
  speedOfSound: 2100, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Fairly soft metal; easily scratched and worked
  hardnessVickers: 270, // MPa
  hardnessBrinell: 186, // MPa
  bulkModulus: 21.5, // GPa
  shearModulus: 13.5, // GPa
  youngsModulus: 33.6, // GPa
  poissonsRatio: 0.24,
  malleability: "High",
  ductility: "High",
  allotropeCount: 4, // Highly complex phase diagram: alpha (FCC, collapsed high pressure), beta (DHCP, stable room temp), gamma (FCC, standard ambient tracking), and delta (BCC, high temp)
  color: "Silvery-grey, malleable, highly reactive lustrous metal; oxidizes quickly at room temperature",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.192, // J/(g·K)
  molarHeatCapacity: 26.94, // J/(mol·K)
  heatOfFusion: 5.46, // kJ/mol
  heatOfVaporization: 398, // kJ/mol
  heatOfAtomization: 423, // kJ/mol
  standardMolarEntropy: 72.0, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.022, // Kelvin (Alpha phase under high pressure profiles)

  // 4. Atomic & Structural Variables
  radius: 181, // pm (Atomic radius)
  covalentRadius: 163, // pm
  vanderWaalsRadius: 235, // pm
  ionicRadius: 101, // pm (For Ce3+ coordination number 6; Ce4+ is 87 pm)
  crystalStructure: "Face-centered cubic", // For the dominant ambient gamma-allotrope phase
  latticeConstantA: 516.1, // pm
  latticeConstantB: 516.1, // pm
  latticeConstantC: 516.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 20.69, // cm³/mol
  bohr: "2, 8, 18, 19, 9, 2",
  orbital: "[Xe] 4f1 5d1 6s2", // First element to introduce an electron into the 4f subshell core
  valence: 4, // Exhibits unique dual stable valencies (+3 and +4; +4 is highly valuable as a powerful chemical oxidant)
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.12, // Pauling scale
  electronegativityMulliken: 1.08,
  electronegativityAllredRochow: 1.06,
  ionization: 534.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [534.4, 1050, 1949, 3547, 6325],
  electronAffinity: 55.0, // kJ/mol
  oxidation: "+3, +4", // Cerous (+3) is standard; Ceric (+4) is stable and widely exploited in redox titration protocols
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 2.30, // eV
  chemicalSoftness: 0.435, // eV⁻¹
  electrophilicityIndex: 0.14,
  polarizability: 29.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.34, // V (For Ce3+ + 3e- -> Ce; note that Ce4+ + e- -> Ce3+ is highly oxidizing at +1.61 V)
  flameTestColor: "Sparking yellow-white incandescent thermal emission lines",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence initialization track)
  magneticQuantumNumber: -3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 55.00,
  termSymbol: "1G4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: -4.84, // eV
  workFunction: 2.90, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 140.116,
  massNumber: 140, // For Cerium-140
  neutronNumber: 82, // For Cerium-140 (Magic neutron number N=82 yields extreme nuclear stability)
  isotopeCount: 38, // Ce-119 to Ce-156
  stableIsotopeCount: 4, // Cerium-136, Cerium-138, Cerium-140, and Cerium-142 (Ce-136 and Ce-142 are theoretically subject to ultra-slow double decays)
  isotopicAbundance: {
    Ce136: 0.185,
    Ce138: 0.251,
    Ce140: 88.450, // Massive dominant stable configuration (Closed nuclear neutron shell)
    Ce142: 11.114  // Long-lived alpha/double-beta candidate (t1/2 > 5e16 years)
  },
  halfLife: "Stable", // For Cerium-140 (Ce-144 is a prominent high-yield nuclear fission fragment tracking isotope with a 284-day half-life)
  decayMode: "None", // For Cerium-140
  decayEnergy: null,
  nuclearSpin: 0, // For Ce-140 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Cerium-140
  neutronCrossSection: 0.6, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000001, // % by mass
  solarAbundance: 0.000001, // % by mass
  crustalAbundance: 0.00665, // % by mass (66.5 mg/kg; the absolute most abundant rare-earth element in Earth's crust, more common than copper or lead)
  oceanicAbundance: 1.2e-12, // % by mass
  humanBodyAbundance: null, // Highly pyrophoric metal when finely divided; forms the backbone component of mischmetal spark flints for lighters, and Cerium(IV) oxide ($CeO_2$) is widely used as a premium glass polishing agent and fuel additive catalyst
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged extensively via slow neutron capture processing (s-process loops) inside old giant stars, supplemented by supernova r-process branches"
};
  

  
 
const praseodymiumData = {
  // 1. Fundamental Identity & Classification
  num: 59,
  symbol: "Pr",
  name: "Praseodymium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-10-0",
  discoverer: "Carl Auer von Welsbach",
  year: 1885,
  originOfName: "Derived from the Greek words 'prasios' (leek-green) and 'didymos' (twin), because of the green color of its salts and its close relationship with neodymium",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.77, // g/cm³ at STP
  melting: 1208, // Kelvin (935°C)
  boiling: 3403, // Kelvin (3130°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 20.82, // cm³/mol
  electricalConductivity: 1.4e6, // S/m
  electricalResistivity: 7.0e-7, // Ω·m at 20°C
  thermalConductivity: 12.5, // W/(m·K)
  thermalExpansionCoefficient: 6.7e-6, // K⁻¹ at 25°C
  speedOfSound: 2280, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft, malleable, and ductile rare-earth metal
  hardnessVickers: 400, // MPa
  hardnessBrinell: 250, // MPa
  bulkModulus: 28.8, // GPa
  shearModulus: 14.8, // GPa
  youngsModulus: 37.3, // GPa
  poissonsRatio: 0.28,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Double hexagonal close-packed (alpha phase, room temp) and body-centered cubic (beta phase, above 795°C)
  color: "Silvery-grey metallic with a bright luster; develops a green, flaky oxide coating in air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.193, // J/(g·K)
  molarHeatCapacity: 27.20, // J/(mol·K)
  heatOfFusion: 6.89, // kJ/mol
  heatOfVaporization: 331, // kJ/mol
  heatOfAtomization: 356, // kJ/mol
  standardMolarEntropy: 73.2, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 182, // pm (Atomic radius)
  covalentRadius: 165, // pm
  vanderWaalsRadius: 239, // pm
  ionicRadius: 99, // pm (For Pr3+ coordination number 6)
  crystalStructure: "Double hexagonal close-packed",
  latticeConstantA: 367.2, // pm
  latticeConstantB: 367.2, // pm
  latticeConstantC: 1183.3, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 20.82, // cm³/mol
  bohr: "2, 8, 18, 21, 8, 2",
  orbital: "[Xe] 4f3 6s2", // Standard ground state; lacks a 5d electron unlike lanthanum
  valence: 3, // +3 is the standard stable state; +4 is stable in specific solid oxides like PrO2
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.13, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.07,
  ionization: 527.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [527.0, 1020, 2086, 3761, 5551],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3, +4", // +3 is dominant in solution; +4 occurs in complex fluoride and oxide structures
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 2.34, // eV
  chemicalSoftness: 0.427, // eV⁻¹
  electrophilicityIndex: 0.12,
  polarizability: 28.2, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.35, // V (For Pr3+ + 3e- -> Pr)
  flameTestColor: "Pale yellow-green incandescent emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 56.00,
  termSymbol: "4I9/2",
  totalAngularMomentumQuantumNumber: 4.5, // J = 9/2
  atomicOrbitalEnergyLevel: -4.89, // eV
  workFunction: 2.70, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 140.90766,
  massNumber: 141, // For Praseodymium-141
  neutronNumber: 82, // For Praseodymium-141 (Magic neutron number N=82 yields high structural stability)
  isotopeCount: 38, // Pr-121 to Pr-158
  stableIsotopeCount: 1, // Monoisotopic (Only Praseodymium-141 is stable)
  isotopicAbundance: {
    Pr141: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Praseodymium-141 (Pr-143 is a beta emitter with a 13.57-day half-life used in nuclear medicine research)
  decayMode: "None", // For Praseodymium-141
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 (Active NMR target nucleus with high magnetic moment)
  magneticDipoleMoment: 4.2754, // nuclear magnetons
  neutronCrossSection: 11.5, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000002, // % by mass
  solarAbundance: 0.0000003, // % by mass
  crustalAbundance: 0.00091, // % by mass (9.1 mg/kg; moderately rare lithophile element extracted from monazite and bastnäsite)
  oceanicAbundance: 6.4e-13, // % by mass
  humanBodyAbundance: null, // Low toxicity profile; alloyed with neodymium to create ultra-powerful magnets, used to color glass a vibrant yellow-green, and paired with didymium glass to shield eyes in welding goggles
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Mainly formed via slow neutron capture processing (s-process dynamics) inside low-mass asymptotic giant branch stars"
};
  

  
 
const neodymiumData = {
  // 1. Fundamental Identity & Classification
  num: 60,
  symbol: "Nd",
  name: "Neodymium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-00-8",
  discoverer: "Carl Auer von Welsbach",
  year: 1885,
  originOfName: "Derived from the Greek words 'neos' (new) and 'didymos' (twin), since it was discovered as a new constituent of the old rare-earth mixture 'didymium'",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.01, // g/cm³ at STP
  melting: 1297, // Kelvin (1024°C)
  boiling: 3347, // Kelvin (3074°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 20.58, // cm³/mol
  electricalConductivity: 1.6e6, // S/m
  electricalResistivity: 6.4e-7, // Ω·m at 20°C
  thermalConductivity: 16.5, // W/(m·K)
  thermalExpansionCoefficient: 9.6e-6, // K⁻¹ at 25°C
  speedOfSound: 2330, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Malleable and ductile; easily worked under proper shielding
  hardnessVickers: 343, // MPa
  hardnessBrinell: 265, // MPa
  bulkModulus: 31.8, // GPa
  shearModulus: 14.3, // GPa
  youngsModulus: 37.9, // GPa
  poissonsRatio: 0.28,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Double hexagonal close-packed (alpha phase, stable at room temperature) and body-centered cubic (beta phase, stable above 863°C)
  color: "Bright, silvery-white metallic appearance; quickly oxidizes in ambient air to form a yellowish-gray, flaky oxide layer",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.190, // J/(g·K)
  molarHeatCapacity: 27.45, // J/(mol·K)
  heatOfFusion: 7.14, // kJ/mol
  heatOfVaporization: 289, // kJ/mol
  heatOfAtomization: 327, // kJ/mol
  standardMolarEntropy: 71.5, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 181, // pm (Atomic radius)
  covalentRadius: 164, // pm
  vanderWaalsRadius: 229, // pm
  ionicRadius: 98.3, // pm (For Nd3+ coordination number 6)
  crystalStructure: "Double hexagonal close-packed",
  latticeConstantA: 365.8, // pm
  latticeConstantB: 365.8, // pm
  latticeConstantC: 1179.9, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 20.58, // cm³/mol
  bohr: "2, 8, 18, 22, 8, 2",
  orbital: "[Xe] 4f4 6s2", // Progressively filling the interior 4f valence tier
  valence: 3, // Dominant oxidation state (+3) forming beautiful violet-pink salts
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.14, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.07,
  ionization: 533.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [533.1, 1040, 2130, 3900],
  electronAffinity: 184.7, // kJ/mol
  oxidation: "+3", // Exceptionally stable trivalent behavior; can be forced into unstable +2 states in specific solid halides
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.41, // eV
  chemicalSoftness: 0.415, // eV⁻¹
  electrophilicityIndex: 0.13,
  polarizability: 26.9, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.32, // V (For Nd3+ + 3e- -> Nd)
  flameTestColor: "Pale blue-white incandescent thermal emission tracking line profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 57.00,
  termSymbol: "5I4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: -4.95, // eV
  workFunction: 3.20, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 144.242,
  massNumber: 142, // For Neodymium-142
  neutronNumber: 82, // For Neodymium-142 (Magic neutron configuration N=82 yields extreme structural stability)
  isotopeCount: 38, // Nd-124 to Nd-161
  stableIsotopeCount: 5, // Nd-142, Nd-143, Nd-145, Nd-146, and Nd-148 (Nd-144 and Nd-150 are extremely long-lived primordial radioisotopes)
  isotopicAbundance: {
    Nd142: 27.20, // Most abundant natural stable isotope (Closed nuclear shell)
    Nd143: 12.20, // Active NMR target nucleus with spin 7/2
    Nd144: 23.80, // Primordial alpha emitter (t1/2 = 2.29e15 years)
    Nd145: 8.30,  // Active NMR target nucleus with spin 7/2
    Nd146: 17.20,
    Nd148: 5.70,
    Nd150: 5.60   // Primordial double-beta emitter (t1/2 = 7.9e18 years)
  },
  halfLife: "Stable", // For Neodymium-142
  decayMode: "None", // For Neodymium-142
  decayEnergy: null,
  nuclearSpin: 0, // For Nd-142 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Neodymium-142
  neutronCrossSection: 19.0, // barns (Natural isotopic average benchmark)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000003, // % by mass
  solarAbundance: 0.0000004, // % by mass
  crustalAbundance: 0.00415, // % by mass (41.5 mg/kg; the second most abundant rare-earth metal behind cerium)
  oceanicAbundance: 2.8e-12, // % by mass
  humanBodyAbundance: null, // No biological profile; industrial backbone for manufacturing ultra-powerful permanent magnets ($Nd_2Fe_{14}B$) used in electric vehicles and wind turbines, and famously doped into glass for high-power infrared solid-state lasers (Nd:YAG lasers)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Mainly forged via slow neutron capture processing (s-process dynamics) within old red giant stars, with notable contributions from supernova r-process branches"
};
  

  
 
const promethiumData = {
  // 1. Fundamental Identity & Classification
  num: 61,
  symbol: "Pm",
  name: "Promethium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-12-2",
  discoverer: "Chien Shiung Wu, Jacob A. Marinsky, Lawrence E. Glendenin, Charles D. Coryell",
  year: 1945,
  originOfName: "Named after Prometheus, the Titan in Greek mythology who stole fire from heaven and brought it to humans, symbolizing the bold execution required to synthesize a new element via nuclear fission",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.26, // g/cm³ at STP
  melting: 1315, // Kelvin (1042°C)
  boiling: 3273, // Kelvin (3000°C; estimated value)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 20.23, // cm³/mol
  electricalConductivity: 1.3e6, // S/m (Estimated baseline)
  electricalResistivity: 7.5e-7, // Ω·m at 20°C
  thermalConductivity: 17.9, // W/(m·K)
  thermalExpansionCoefficient: 11.0e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Crystalline radioactive metal; expected to match adjacent neodymium profiles
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 33, // GPa (Estimated)
  shearModulus: null,
  youngsModulus: 46, // GPa (Estimated)
  poissonsRatio: 0.28,
  malleability: "Moderate (Altered by persistent internal radioactive self-heating and lattice stress damage)",
  ductility: "Moderate",
  allotropeCount: 2, // Double hexagonal close-packed (alpha phase) and body-centered cubic (beta phase, transitions near 890°C)
  color: "Silvery-white, highly metallic finish; salts display a striking, eerie pale-blue or greenish luminescence in the dark due to intense self-induced radioluminescence",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.185, // J/(g·K) (Estimated value)
  molarHeatCapacity: 27.0, // J/(mol·K)
  heatOfFusion: 7.13, // kJ/mol
  heatOfVaporization: 289, // kJ/mol
  heatOfAtomization: 297, // kJ/mol
  standardMolarEntropy: 71.3, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 179, // pm (Atomic radius)
  covalentRadius: 163, // pm
  vanderWaalsRadius: 228, // pm
  ionicRadius: 97.9, // pm (For Pm3+ coordination number 6)
  crystalStructure: "Double hexagonal close-packed",
  latticeConstantA: 365.0, // pm
  latticeConstantB: 365.0, // pm
  latticeConstantC: 1165.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 20.23, // cm³/mol
  bohr: "2, 8, 18, 23, 8, 2",
  orbital: "[Xe] 4f5 6s2", // Stepwise loading of the 4f inner shell architecture
  valence: 3, // Consistently acts as a trivalent ion (+3) in solution matrices
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.13, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.07,
  ionization: 540.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [540.0, 1050, 2150, 3970],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3", // Only stable state documented; behaves chemically like an active, typical lanthanide rare earth element
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.45, // eV
  chemicalSoftness: 0.408, // eV⁻¹
  electrophilicityIndex: 0.13,
  polarizability: 25.4, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.30, // V (For Pm3+ + 3e- -> Pm)
  flameTestColor: "Pale blue-green radiant thermal emissions (Masked by extreme radiological concerns)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 58.00,
  termSymbol: "6H5/2",
  totalAngularMomentumQuantumNumber: 2.5, // J = 5/2
  atomicOrbitalEnergyLevel: -5.02, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 145, // For the most stable common tracking isotope, Promethium-145
  massNumber: 145, // For Promethium-145
  neutronNumber: 84, // For Promethium-145
  isotopeCount: 34, // Pm-126 to Pm-159
  stableIsotopeCount: 0, // Radioactive element (Has no stable isotopes due to the Mattauch isobar rule)
  isotopicAbundance: {
    Pm145: 0.0 // Synthetic element; essentially zero native terrestrial abundance, outside of microscopic transient trace paths in uranium ores via spontaneous fission
  },
  halfLife: "17.7 years", // For Promethium-145 (Promethium-147 has a half-life of 2.62 years and is highly utilized as an industrial beta emitter)
  decayMode: "Electron capture", // For Promethium-145 (Decays into stable Nd-145; Pm-147 undergoes beta-minus decay into stable Sm-147)
  decayEnergy: 0.163, // MeV
  nuclearSpin: 2.5, // 5/2 for Promethium-145 (Active quadrupole profile)
  magneticDipoleMoment: 2.7, // nuclear magnetons for Pm-145
  neutronCrossSection: 140, // barns for Pm-145 (Pm-147 matches 168 barns)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: null, // Transiently observed in select peculiar stars (e.g., HR 465 in Andromeda)
  solarAbundance: null,
  crustalAbundance: 5.0e-20, // % by mass (Virtually absent on Earth; less than 600 grams exist naturally inside the entire planetary crust at any given second)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Strictly an extreme radiological hazard; used industrially as a beta-radiation source for thickness gauges, nuclear micro-batteries for guided aerospace systems, and premium luminous paint activators
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthetic fission fragment product or cosmic neutron capture decay looping tracking frames"
};
  

  
 
const samariumData = {
  // 1. Fundamental Identity & Classification
  num: 62,
  symbol: "Sm",
  name: "Samarium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-19-9",
  discoverer: "Paul-Émile Lecoq de Boisbaudran",
  year: 1879,
  originOfName: "Named after the mineral samarskite, which itself was named in honor of Vasili Samarsky-Bykhovets, a Russian mining engineer",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.52, // g/cm³ at STP
  melting: 1345, // Kelvin (1072°C)
  boiling: 2173, // Kelvin (1900°C; notably high volatility for a rare-earth element)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 20.00, // cm³/mol
  electricalConductivity: 1.1e6, // S/m
  electricalResistivity: 9.4e-7, // Ω·m at 20°C
  thermalConductivity: 13.3, // W/(m·K)
  thermalExpansionCoefficient: 10.4e-6, // K⁻¹ at 25°C
  speedOfSound: 2130, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Reasonably hard for a lanthanide metal; possesses a moderate mechanical stiffness
  hardnessVickers: 441, // MPa
  hardnessBrinell: 412, // MPa
  bulkModulus: 37.8, // GPa
  shearModulus: 13.1, // GPa
  youngsModulus: 34.1, // GPa
  poissonsRatio: 0.29,
  malleability: "Moderate",
  ductility: "Moderate",
  allotropeCount: 2, // Rhombohedral (alpha phase, complex 9-layer rhombohedral unique to samarium) and body-centered cubic (beta phase, transitions above 734°C)
  color: "Bright, silvery-white metallic finish; structurally stable in dry air but rapidly oxidizes to a dull grey in humid environments",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.197, // J/(g·K)
  molarHeatCapacity: 29.54, // J/(mol·K)
  heatOfFusion: 8.62, // kJ/mol
  heatOfVaporization: 165, // kJ/mol
  heatOfAtomization: 207, // kJ/mol
  standardMolarEntropy: 69.5, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 180, // pm (Atomic radius)
  covalentRadius: 166, // pm
  vanderWaalsRadius: 229, // pm
  ionicRadius: 95.8, // pm (For Sm3+ coordination number 6; Sm2+ is 119 pm)
  crystalStructure: "Rhombohedral", // Specific rhombohedral packing matrix with a unique 9-layer repeat sequence
  latticeConstantA: 899.6, // pm
  latticeConstantB: 899.6, // pm
  latticeConstantC: 899.6, // pm
  axialAngleAlpha: 23.21,
  axialAngleBeta: 23.21,
  axialAngleGamma: 23.21,
  spaceGroup: "R-3m",
  coordinationNumber: 12,
  packingFraction: null,
  atomicVolume: 20.00, // cm³/mol
  bohr: "2, 8, 18, 24, 8, 2",
  orbital: "[Xe] 4f6 6s2",
  valence: 3, // +3 is dominant; +2 is uniquely accessible and highly stable in specialty reagents like samarium(II) iodide
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.17, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.07,
  ionization: 544.5, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [544.5, 1068, 2260, 3990],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3, +2", // +3 is typical; +2 is a powerful reducing tool extensively utilized in organic synthesis (Kagan's reagent)
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.48, // eV
  chemicalSoftness: 0.403, // eV⁻¹
  electrophilicityIndex: 0.13,
  polarizability: 24.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.30, // V (For Sm3+ + 3e- -> Sm; Sm3+ + e- -> Sm2+ is -1.55 V)
  flameTestColor: "Pale yellow-green incandescent emission line traits",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital tracking)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 59.00,
  termSymbol: "7F0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -5.06, // eV
  workFunction: 2.70, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 150.36,
  massNumber: 152, // For Samarium-152
  neutronNumber: 90, // For Samarium-152
  isotopeCount: 38, // Sm-131 to Sm-168
  stableIsotopeCount: 5, // Sm-144, Sm-149, Sm-150, Sm-152, and Sm-154 (Sm-147 and Sm-148 are primordial alpha emitters)
  isotopicAbundance: {
    Sm144: 3.07,
    Sm147: 14.99, // Primordial alpha emitter (t1/2 = 1.06e11 years; crucial in Sm-Nd geological radio-dating)
    Sm148: 11.24, // Primordial alpha emitter (t1/2 = 7.0e15 years)
    Sm149: 13.82, // Stable isotope with an immense thermal neutron capture cross section (~41,000 barns)
    Sm150: 7.38,
    Sm152: 26.75, // Most naturally dominant stable isotope on Earth
    Sm154: 22.75
  },
  halfLife: "Stable", // For Samarium-152
  decayMode: "None", // For Samarium-152
  decayEnergy: null,
  nuclearSpin: 0, // For Sm-152 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Samarium-152
  neutronCrossSection: 5920, // barns (Natural isotopic average combined, heavily pushed by Sm-149 making it an effective reactor neutron poison)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000005, // % by mass
  solarAbundance: 0.00000007, // % by mass
  crustalAbundance: 0.00070, // % by mass (7 mg/kg; mainly found in monazite and bastnäsite rare-earth minerals)
  oceanicAbundance: 4.5e-13, // % by mass
  humanBodyAbundance: null, // Low toxicity baseline; widely alloyed with cobalt ($SmCo_5$ and $Sm_2Co_{17}$) to manufacture premium permanent magnets that maintain magnetization at exceptionally high operating temperatures (above 300°C)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged collectively via r-process supernova stellar dynamics and s-process asymptotic giant branch stellar neutron captures"
};
  

  
 
const europiumData = {
  // 1. Fundamental Identity & Classification
  num: 63,
  symbol: "Eu",
  name: "Europium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-53-1",
  discoverer: "Eugène-Anatole Demarçay",
  year: 1901,
  originOfName: "Named after the continent of Europe",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 5.244, // g/cm³ at STP (Unusually low density for a lanthanide due to its divalent-like metallic binding)
  melting: 1099, // Kelvin (826°C)
  boiling: 1802, // Kelvin (1529°C; the most volatile of all the lanthanides)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 28.97, // cm³/mol (Highly expanded atomic volume)
  electricalConductivity: 1.1e6, // S/m
  electricalResistivity: 9.0e-7, // Ω·m at 20°C
  thermalConductivity: 13.9, // W/(m·K)
  thermalExpansionCoefficient: 35.0e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: 1.5, // Softest and most malleable of the rare-earth metals; can be cut with a knife
  hardnessVickers: 167, // MPa
  hardnessBrinell: null,
  bulkModulus: 8.3, // GPa (Highly compressible)
  shearModulus: 5.4, // GPa
  youngsModulus: 18.2, // GPa
  poissonsRatio: 0.15,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Body-centered cubic remains the standard ambient phase configuration
  color: "Silvery-white with a bright luster when pure; instantly oxidizes in air to a dull gray, shifting to a yellowish oxide crust",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.182, // J/(g·K)
  molarHeatCapacity: 27.66, // J/(mol·K)
  heatOfFusion: 9.21, // kJ/mol
  heatOfVaporization: 176, // kJ/mol
  heatOfAtomization: 175, // kJ/mol
  standardMolarEntropy: 77.78, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 1.8, // Kelvin (Attained under extreme compression over 80 GPa)

  // 4. Atomic & Structural Variables
  radius: 204, // pm (Atomic radius; anomalously large due to non-bonding f-electrons)
  covalentRadius: 198, // pm
  vanderWaalsRadius: 233, // pm
  ionicRadius: 94.7, // pm (For Eu3+ coordination number 6; Eu2+ is 117 pm)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 458.1, // pm
  latticeConstantB: 458.1, // pm
  latticeConstantC: 458.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: 28.97, // cm³/mol
  bohr: "2, 8, 18, 25, 8, 2",
  orbital: "[Xe] 4f7 6s2", // Half-filled f-subshell gives it unique chemical and physical profiles
  valence: 3, // +3 is stable in standard geology; +2 is uniquely accessible and acts as an isomorphic substitute for calcium
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.2, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.01,
  ionization: 547.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [547.1, 1085, 2404, 4120],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3, +2", // Displays an exceptionally stable divalent state (+2) due to the stable $4f^7$ half-filled shell configuration
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.42, // eV
  chemicalSoftness: 0.413, // eV⁻¹
  electrophilicityIndex: 0.13,
  polarizability: 22.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.99, // V (For Eu3+ + 3e- -> Eu; Eu3+ + e- -> Eu2+ is -0.35 V)
  flameTestColor: "Crimson-red emission lines (Masked heavily by immediate oxide ignition)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: 3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 60.00,
  termSymbol: "8S7/2",
  totalAngularMomentumQuantumNumber: 3.5, // J = 7/2
  atomicOrbitalEnergyLevel: -5.11, // eV
  workFunction: 2.50, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 151.964,
  massNumber: 153, // For Europium-153
  neutronNumber: 90, // For Europium-153
  isotopeCount: 36, // Eu-130 to Eu-165
  stableIsotopeCount: 1, // Only Europium-153 is perfectly stable
  isotopicAbundance: {
    Eu151: 47.81, // Primordial alpha emitter with an ultra-long half-life (t1/2 = 4.6e18 years)
    Eu153: 52.19  // Fully stable isotope (Active NMR target nucleus with spin 5/2)
  },
  halfLife: "Stable", // For Europium-153 (Eu-152 and Eu-154 are common high-yield reactor tracking isotopes)
  decayMode: "None", // For Europium-153
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 for Eu-153
  magneticDipoleMoment: 1.5330, // nuclear magnetons
  neutronCrossSection: 4600, // barns (Exceptional thermal neutron capture cross section)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000005, // % by mass
  solarAbundance: 0.00000005, // % by mass
  crustalAbundance: 0.00018, // % by mass (1.8 mg/kg; the most chemically reactive rare-earth element)
  oceanicAbundance: 1.3e-13, // % by mass
  humanBodyAbundance: null, // Low toxicity profile; critical component in commercial luminescent phosphors (Eu3+ provides bright red, while Eu2+ yields brilliant blue or green phosphors for anti-counterfeiting currency inks and high-grade LEDs)
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged via mixed s-process stellar loops and r-process branches during cataclysmic supernova events"
};
  

  
 
const gadoliniumData = {
  // 1. Fundamental Identity & Classification
  num: 64,
  symbol: "Gd",
  name: "Gadolinium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-54-2",
  discoverer: "Jean Charles Galissard de Marignac",
  year: 1880,
  originOfName: "Named after the mineral gadolinite, which was named in honor of Johan Gadolin, a pioneering Finnish chemist and mineralogist",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 7.90, // g/cm³ at STP
  melting: 1585, // Kelvin (1312°C)
  boiling: 3523, // Kelvin (3250°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 19.90, // cm³/mol
  electricalConductivity: 7.7e5, // S/m
  electricalResistivity: 1.31e-6, // Ω·m at 20°C
  thermalConductivity: 10.6, // W/(m·K)
  thermalExpansionCoefficient: 9.4e-6, // K⁻¹ at 25°C
  speedOfSound: 2680, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft and malleable; easily worked under inert atmospheres
  hardnessVickers: 570, // MPa
  hardnessBrinell: null,
  bulkModulus: 37.9, // GPa
  shearModulus: 21.8, // GPa
  youngsModulus: 54.8, // GPa
  poissonsRatio: 0.24,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Hexagonal close-packed (alpha phase, stable up to 1235°C) and body-centered cubic (beta phase, above 1235°C)
  color: "Silvery-white metallic appearance with a bright luster; relatively stable in dry air but forms an oxide film in moist conditions",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.236, // J/(g·K)
  molarHeatCapacity: 37.09, // J/(mol·K)
  heatOfFusion: 10.05, // kJ/mol
  heatOfVaporization: 301.3, // kJ/mol
  heatOfAtomization: 398, // kJ/mol
  standardMolarEntropy: 68.42, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 179, // pm (Atomic radius)
  covalentRadius: 161, // pm
  vanderWaalsRadius: 237, // pm
  ionicRadius: 93.8, // pm (For Gd3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 363.6, // pm
  latticeConstantB: 363.6, // pm
  latticeConstantC: 578.3, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 19.90, // cm³/mol
  bohr: "2, 8, 18, 25, 9, 2",
  orbital: "[Xe] 4f7 5d1 6s2", // Stabilized half-filled 4f subshell configuration pushes a single electron into the 5d orbital
  valence: 3, // Consistently stable trivalent behavior (+3)
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.20, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.11,
  ionization: 593.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [593.4, 1170, 1990, 4290],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3", // Standard stable oxidation state; reactive toward diluted acids and halogens
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.45, // eV
  chemicalSoftness: 0.408, // eV⁻¹
  electrophilicityIndex: 0.14,
  polarizability: 23.5, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.28, // V (For Gd3+ + 3e- -> Gd)
  flameTestColor: "Pale white to faint yellow-green thermal emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital tracking valence state electron)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.15, // Zeff via Slater's rules
  slatersShieldingConstant: 60.85,
  termSymbol: "9D2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -5.15, // eV
  workFunction: 3.10, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 157.25,
  massNumber: 158, // For Gadolinium-158
  neutronNumber: 94, // For Gadolinium-158
  isotopeCount: 36, // Gd-134 to Gd-169
  stableIsotopeCount: 6, // Gd-154, Gd-155, Gd-156, Gd-157, Gd-158, and Gd-160 (Gd-152 is a primordial long-lived alpha emitter)
  isotopicAbundance: {
    Gd152: 0.20,  // Primordial alpha emitter (t1/2 = 1.08e14 years)
    Gd154: 2.18,
    Gd155: 14.80, // Giant thermal neutron capture cross-section (~61,000 barns); active in NMR (spin 3/2)
    Gd156: 20.47,
    Gd157: 15.65, // Absolute highest thermal neutron capture cross section of any stable nuclide (~254,000 barns); active in NMR (spin 3/2)
    Gd158: 24.84, // Most naturally dominant stable isotope
    Gd160: 21.86  // Theoretically subject to double-beta decay
  },
  halfLife: "Stable", // For Gadolinium-158
  decayMode: "None", // For Gadolinium-158
  decayEnergy: null,
  nuclearSpin: 0, // For Gd-158 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Gadolinium-158
  neutronCrossSection: 49000, // barns (Natural isotopic average combined; phenomenally high due to Gd-155 and Gd-157)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000002, // % by mass
  solarAbundance: 0.00000003, // % by mass
  crustalAbundance: 0.00062, // % by mass (6.2 mg/kg; extracted primarily via ion-exchange paths from monazite and bastnäsite)
  oceanicAbundance: 7.0e-13, // % by mass
  humanBodyAbundance: null, // High magnetic properties make water-soluble gadolinium complex ions ($Gd^{3+}$) highly toxic; however, when safely chelated (e.g., Gd-DTPA), it serves as the premier contrast agent globally for magnetic resonance imaging (MRI) scans due to its seven unpaired 4f electrons. It is also highly valued in nuclear marine reactors as a burnable poison shield.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged prominently via rapid and slow neutron capture operations (r-process and s-process paths) during cosmic stellar updates"
};
  

  
 
const terbiumData = {
  // 1. Fundamental Identity & Classification
  num: 65,
  symbol: "Tb",
  name: "Terbium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-27-9",
  discoverer: "Carl Gustaf Mosander",
  year: 1843,
  originOfName: "Named after the village of Ytterby in Sweden, where the mineral quarry rich in rare-earth elements was located",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.23, // g/cm³ at STP
  melting: 1629, // Kelvin (1356°C)
  boiling: 3396, // Kelvin (3123°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 19.30, // cm³/mol
  electricalConductivity: 8.3e5, // S/m
  electricalResistivity: 1.15e-6, // Ω·m at 20°C
  thermalConductivity: 11.1, // W/(m·K)
  thermalExpansionCoefficient: 10.3e-6, // K⁻¹ at 25°C
  speedOfSound: 2620, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft, malleable, and ductile rare-earth metal; can be sliced with a knife under care
  hardnessVickers: 863, // MPa
  hardnessBrinell: null,
  bulkModulus: 38.7, // GPa
  shearModulus: 22.1, // GPa
  youngsModulus: 55.7, // GPa
  poissonsRatio: 0.26,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Hexagonal close-packed (alpha phase, stable room temp) and body-centered cubic (beta phase, transitions above 1289°C)
  color: "Silvery-white, lustrous metallic appearance; reasonably corrosion-resistant in dry atmospheres",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.182, // J/(g·K)
  molarHeatCapacity: 28.91, // J/(mol·K)
  heatOfFusion: 10.15, // kJ/mol
  heatOfVaporization: 293, // kJ/mol
  heatOfAtomization: 389, // kJ/mol
  standardMolarEntropy: 73.22, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 177, // pm (Atomic radius)
  covalentRadius: 159, // pm
  vanderWaalsRadius: 225, // pm
  ionicRadius: 92.3, // pm (For Tb3+ coordination number 6; Tb4+ is 76 pm)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 360.5, // pm
  latticeConstantB: 360.5, // pm
  latticeConstantC: 569.7, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 19.30, // cm³/mol
  bohr: "2, 8, 18, 27, 8, 2",
  orbital: "[Xe] 4f9 6s2", // Advancing the inner 4f framework electron density maps
  valence: 3, // +3 is dominant; can reach stable +4 state in fluorides and oxides ($TbO_2$) due to a stable half-filled $4f^7$ layout trick
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.20, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.10,
  ionization: 565.8, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [565.8, 1110, 2114, 3839],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3, +4", // +3 is fundamental; +4 is highly stable in complex chemical setups like mixed valence oxide $Tb_4O_7$
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 2.44, // eV
  chemicalSoftness: 0.410, // eV⁻¹
  electrophilicityIndex: 0.14,
  polarizability: 22.2, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.28, // V (For Tb3+ + 3e- -> Tb)
  flameTestColor: "Vibrant, brilliant green line emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 62.00,
  termSymbol: "6F11/2",
  totalAngularMomentumQuantumNumber: 5.5, // J = 11/2
  atomicOrbitalEnergyLevel: -5.20, // eV
  workFunction: 3.00, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 158.92535,
  massNumber: 158, // For Terbium-159
  neutronNumber: 94, // For Terbium-159
  isotopeCount: 36, // Tb-135 to Tb-170
  stableIsotopeCount: 1, // Monoisotopic (Only Terbium-159 is stable)
  isotopicAbundance: {
    Tb159: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Terbium-159 (Tb-161 is an emerging beta-emitting radioisotope showing exceptional promise in targeted cancer radiotherapy)
  decayMode: "None", // For Terbium-159
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 (Active NMR target nucleus)
  magneticDipoleMoment: 2.0140, // nuclear magnetons
  neutronCrossSection: 23.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000002, // % by mass
  solarAbundance: 0.000000003, // % by mass
  crustalAbundance: 0.00012, // % by mass (1.2 mg/kg; trace lithophile element sourced from xenotime and euxenite)
  oceanicAbundance: 1.4e-13, // % by mass
  humanBodyAbundance: null, // Low toxicity profile; critical component in manufacturing green phosphors for anti-counterfeiting banknotes and tricolor fluorescent lamps, and alloyed with iron in Terfenol-D ($Tb_{0.3}Dy_{0.7}Fe_2$) to create the highest magnetostrictive material known for advanced acoustic transducers
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged via cosmic neutron capture processes (s-process and r-process branches) inside aging giant stars and supernovas"
};
  

  
 
const dysprosiumData = {
  // 1. Fundamental Identity & Classification
  num: 66,
  symbol: "Dy",
  name: "Dysprosium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-50-8",
  discoverer: "Paul-Émile Lecoq de Boisbaudran",
  year: 1886,
  originOfName: "Derived from the Greek word 'dysprositos', meaning hard to get at, reflecting the immense difficulty scientists faced in separating it from holmium and other rare-earth elements",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.54, // g/cm³ at STP
  melting: 1680, // Kelvin (1407°C)
  boiling: 2840, // Kelvin (2562°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 19.01, // cm³/mol
  electricalConductivity: 1.1e6, // S/m
  electricalResistivity: 9.26e-7, // Ω·m at 20°C
  thermalConductivity: 10.7, // W/(m·K)
  thermalExpansionCoefficient: 9.9e-6, // K⁻¹ at 25°C
  speedOfSound: 2710, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft, malleable, and easily worked rare-earth metal; can be cut with a knife
  hardnessVickers: 540, // MPa
  hardnessBrinell: null,
  bulkModulus: 40.5, // GPa
  shearModulus: 24.7, // GPa
  youngsModulus: 63.1, // GPa
  poissonsRatio: 0.25,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Hexagonal close-packed (alpha phase, stable under normal ambient limits) and body-centered cubic (beta phase, transitions near 1381°C)
  color: "Silvery-white metallic presentation with a brilliant lustrous sheen; highly resistant to oxidation in dry ambient air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.170, // J/(g·K)
  molarHeatCapacity: 27.7, // J/(mol·K)
  heatOfFusion: 11.06, // kJ/mol
  heatOfVaporization: 280, // kJ/mol
  heatOfAtomization: 290, // kJ/mol
  standardMolarEntropy: 75.0, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 175, // pm (Atomic radius)
  covalentRadius: 159, // pm
  vanderWaalsRadius: 224, // pm
  ionicRadius: 91.2, // pm (For Dy3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 359.3, // pm
  latticeConstantB: 359.3, // pm
  latticeConstantC: 565.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 19.01, // cm³/mol
  bohr: "2, 8, 18, 28, 8, 2",
  orbital: "[Xe] 4f10 6s2", // Stepwise progression through the deep 4f valence subshell block
  valence: 3, // Dominant stable oxidation state (+3) forming typical bright yellow or greenish salts
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.22, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.10,
  ionization: 573.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [573.0, 1130, 2200, 3990],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3", // Standard stable oxidation state; can express transient +2 configurations in specialty solid-state halides
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.47, // eV
  chemicalSoftness: 0.405, // eV⁻¹
  electrophilicityIndex: 0.14,
  polarizability: 21.0, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.29, // V (For Dy3+ + 3e- -> Dy)
  flameTestColor: "Pale yellowish incandescent emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 63.00,
  termSymbol: "5I8",
  totalAngularMomentumQuantumNumber: 8.0, // J = 8
  atomicOrbitalEnergyLevel: -5.25, // eV
  workFunction: 3.10, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 162.500,
  massNumber: 164, // For Dysprosium-164
  neutronNumber: 98, // For Dysprosium-164
  isotopeCount: 36, // Dy-138 to Dy-173
  stableIsotopeCount: 7, // Dy-156, Dy-158, Dy-160, Dy-161, Dy-162, Dy-163, and Dy-164 (All naturally occurring terrestrial isotopes are fully stable)
  isotopicAbundance: {
    Dy156: 0.06,
    Dy158: 0.10,
    Dy160: 2.34,
    Dy161: 18.91, // Active NMR target nucleus with spin 5/2
    Dy162: 25.51,
    Dy163: 24.90, // Active NMR target nucleus with spin 5/2
    Dy164: 28.18  // Most naturally dominant stable isotope
  },
  halfLife: "Stable", // For Dysprosium-164 (Dy-166 is a medically significant beta-emitter for target radio-oncology)
  decayMode: "None", // For Dysprosium-164
  decayEnergy: null,
  nuclearSpin: 0, // For Dy-164 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Dysprosium-164
  neutronCrossSection: 940, // barns (High natural isotopic average thermal neutron capture profile)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000002, // % by mass
  solarAbundance: 0.00000003, // % by mass
  crustalAbundance: 0.00052, // % by mass (5.2 mg/kg; trace lithophile element heavily extracted from monazite and bastnäsite ores)
  oceanicAbundance: 9.0e-13, // % by mass
  humanBodyAbundance: null, // Low toxicity baseline; absolutely vital industrial additive in high-coercivity Neodymium-Iron-Boron magnets ($Nd_{2-x}Dy_xFe_{14}B$) to prevent demagnetization under severe temperature conditions in electric vehicle drivetrains and wind turbines. It also forms a key part of Terfenol-D for structural magnetostriction.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged via cosmic slow neutron capture processing (s-process) in AGB stars alongside rapid neutron capture cascades (r-process) in supernovae"
};
  

  
 
const holmiumData = {
  // 1. Fundamental Identity & Classification
  num: 67,
  symbol: "Ho",
  name: "Holmium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-60-0",
  discoverer: "Jacques-Louis Soret, Per Teodor Cleve",
  year: 1878,
  originOfName: "Named after 'Holmia', the Latin name for the city of Stockholm, Sweden, in honor of the discoverer's birthplace",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.79, // g/cm³ at STP
  melting: 1734, // Kelvin (1461°C)
  boiling: 2993, // Kelvin (2720°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 18.76, // cm³/mol
  electricalConductivity: 1.2e6, // S/m
  electricalResistivity: 8.14e-7, // Ω·m at 20°C
  thermalConductivity: 16.2, // W/(m·K)
  thermalExpansionCoefficient: 11.2e-6, // K⁻¹ at 25°C
  speedOfSound: 2760, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft, malleable, and highly ductile rare-earth metal
  hardnessVickers: 481, // MPa
  hardnessBrinell: null,
  bulkModulus: 40.2, // GPa
  shearModulus: 26.3, // GPa
  youngsModulus: 64.8, // GPa
  poissonsRatio: 0.23,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Hexagonal close-packed forms the uniform ambient structural matrix baseline
  color: "Bright, silvery-white metallic presentation; relatively stable in dry air but slowly develops a yellow-tinted oxide film in moisture",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.165, // J/(g·K)
  molarHeatCapacity: 27.15, // J/(mol·K)
  heatOfFusion: 17.0, // kJ/mol
  heatOfVaporization: 251, // kJ/mol
  heatOfAtomization: 301, // kJ/mol
  standardMolarEntropy: 75.3, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 176, // pm (Atomic radius)
  covalentRadius: 158, // pm
  vanderWaalsRadius: 223, // pm
  ionicRadius: 90.1, // pm (For Ho3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 357.7, // pm
  latticeConstantB: 357.7, // pm
  latticeConstantC: 561.6, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 18.76, // cm³/mol
  bohr: "2, 8, 18, 29, 8, 2",
  orbital: "[Xe] 4f11 6s2", // Stepwise progression through the deep 4f valence subshell block
  valence: 3, // Dominant stable oxidation state (+3) forming typical bright yellow or pinkish salts
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.23, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.10,
  ionization: 581.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [581.0, 1140, 2204, 4100],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3", // Standard stable oxidation state; can express transient configurations in select specialty complex setups
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.48, // eV
  chemicalSoftness: 0.403, // eV⁻¹
  electrophilicityIndex: 0.14,
  polarizability: 20.0, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.33, // V (For Ho3+ + 3e- -> Ho)
  flameTestColor: "Pale yellowish incandescent emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: -3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 64.00,
  termSymbol: "4I15/2",
  totalAngularMomentumQuantumNumber: 7.5, // J = 15/2
  atomicOrbitalEnergyLevel: -5.31, // eV
  workFunction: 3.10, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 164.93033,
  massNumber: 165, // For Holmium-165
  neutronNumber: 98, // For Holmium-165
  isotopeCount: 35, // Ho-140 to Ho-175
  stableIsotopeCount: 1, // Monoisotopic (Only Holmium-165 is stable)
  isotopicAbundance: {
    Ho165: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Holmium-165 (Ho-166m1 is a long-lived nuclear tracking isomer with a half-life of 1200 years used in calibration)
  decayMode: "None", // For Holmium-165
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 for Ho-165 (Highly active NMR target nucleus with an exceptional magnetic moment)
  magneticDipoleMoment: 4.173, // nuclear magnetons
  neutronCrossSection: 65, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000001, // % by mass
  solarAbundance: 0.00000001, // % by mass
  crustalAbundance: 0.00013, // % by mass (1.3 mg/kg; trace lithophile element extracted from monazite and bastnäsite)
  oceanicAbundance: 2.2e-13, // % by mass
  humanBodyAbundance: null, // Low toxicity baseline; possesses the absolute highest intrinsic magnetic moment of any element, making it highly valuable for constructing flux-concentrating pole pieces in high-field superconducting magnets and as a dopant in Ho:YAG solid-state lasers utilized in precise medical surgeries
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged via cosmic slow neutron capture processing (s-process) in AGB stars alongside rapid neutron capture cascades (r-process) in supernovae"
};
  

  
 
const erbiumData = {
  // 1. Fundamental Identity & Classification
  num: 68,
  symbol: "Er",
  name: "Erbium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-52-0",
  discoverer: "Carl Gustaf Mosander",
  year: 1843,
  originOfName: "Named after the village of Ytterby in Sweden, where the source mineral quarry rich in rare-earth elements was located",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 9.066, // g/cm³ at STP
  melting: 1802, // Kelvin (1529°C)
  boiling: 3141, // Kelvin (2868°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 18.45, // cm³/mol
  electricalConductivity: 1.2e6, // S/m
  electricalResistivity: 8.6e-7, // Ω·m at 20°C
  thermalConductivity: 14.5, // W/(m·K)
  thermalExpansionCoefficient: 12.2e-6, // K⁻¹ at 25°C
  speedOfSound: 2830, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft, malleable, fairly stable in comparison to lighter lanthanides
  hardnessVickers: 520, // MPa
  hardnessBrinell: null,
  bulkModulus: 44.4, // GPa
  shearModulus: 27.2, // GPa
  youngsModulus: 69.9, // GPa
  poissonsRatio: 0.24,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Hexagonal close-packed configuration serves as its baseline ambient phase matrix
  color: "Bright, silvery-white metallic appearance; highly resistant to immediate atmospheric oxidation",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.168, // J/(g·K)
  molarHeatCapacity: 28.12, // J/(mol·K)
  heatOfFusion: 19.9, // kJ/mol
  heatOfVaporization: 280, // kJ/mol
  heatOfAtomization: 317, // kJ/mol
  standardMolarEntropy: 73.2, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 175, // pm (Atomic radius)
  covalentRadius: 157, // pm
  vanderWaalsRadius: 222, // pm
  ionicRadius: 89.0, // pm (For Er3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 355.9, // pm
  latticeConstantB: 355.9, // pm
  latticeConstantC: 558.7, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 18.45, // cm³/mol
  bohr: "2, 8, 18, 30, 8, 2",
  orbital: "[Xe] 4f12 6s2", // Stepwise loading progression within the deep 4f subshell tier
  valence: 3, // Highly uniform +3 valence configuration yielding distinctive rose-pink salts
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.24, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.11,
  ionization: 589.3, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [589.3, 1150, 2194, 4120],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3", // Standard stable oxidation state across nearly all known chemical architectures
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.50, // eV
  chemicalSoftness: 0.400, // eV⁻¹
  electrophilicityIndex: 0.15,
  polarizability: 19.0, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.32, // V (For Er3+ + 3e- -> Er)
  flameTestColor: "Pale pink to yellowish incandescent emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: -3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 65.00,
  termSymbol: "3H6",
  totalAngularMomentumQuantumNumber: 6.0, // J = 6
  atomicOrbitalEnergyLevel: -5.38, // eV
  workFunction: 3.12, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 167.259,
  massNumber: 166, // For Erbium-166
  neutronNumber: 98, // For Erbium-166
  isotopeCount: 34, // Er-142 to Er-175
  stableIsotopeCount: 6, // Er-162, Er-164, Er-166, Er-167, Er-168, and Er-170 (All are fully stable)
  isotopicAbundance: {
    Er162: 0.14,
    Er164: 1.61,
    Er166: 33.61, // Most naturally dominant stable isotope on Earth
    Er167: 22.93, // Only stable erbium isotope with a non-zero nuclear spin (7/2); active in NMR
    Er168: 26.78,
    Er170: 14.93
  },
  halfLife: "Stable", // For Erbium-166 (Er-169 is a beta-emitting medical radioisotope used in treating arthritic joints)
  decayMode: "None", // For Erbium-166
  decayEnergy: null,
  nuclearSpin: 0, // For Er-166 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Erbium-166
  neutronCrossSection: 160, // barns (Natural isotopic average combination baseline metric)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000002, // % by mass
  solarAbundance: 0.00000003, // % by mass
  crustalAbundance: 0.00035, // % by mass (3.5 mg/kg; trace lithophile element extracted from monazite and bastnäsite ores)
  oceanicAbundance: 9.0e-13, // % by mass
  humanBodyAbundance: null, // Biologically inert with a low toxicity baseline. It is globally critical to the telecommunications sector: trivalent erbium ions ($Er^{3+}$) are doped into optical fibers to construct EDFAs (Erbium-Doped Fiber Amplifiers), which optically amplify laser signals along long-distance internet lines without electronic conversion. Also widely used in Er:YAG dental and cosmetic skin lasers.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Generated via a combination of slow stellar neutron capture (s-process) in AGB stars and rapid neutron capture (r-process) during supernovae"
};
  

  
 
const thuliumData = {
  // 1. Fundamental Identity & Classification
  num: 69,
  symbol: "Tm",
  name: "Thulium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-30-4",
  discoverer: "Per Teodor Cleve",
  year: 1879,
  originOfName: "Named after 'Thule', the ancient Greek and Roman name for a mythical northernmost region of the world (often linked to Scandinavia), honoring the discoverer's homeland",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 9.32, // g/cm³ at STP
  melting: 1818, // Kelvin (1545°C)
  boiling: 2223, // Kelvin (1950°C; unusually low boiling point and high vapor pressure among heavy rare-earths)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 18.12, // cm³/mol
  electricalConductivity: 1.5e6, // S/m
  electricalResistivity: 6.76e-7, // Ω·m at 20°C
  thermalConductivity: 16.9, // W/(m·K)
  thermalExpansionCoefficient: 13.3e-6, // K⁻¹ at 25°C
  speedOfSound: 2720, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft, malleable, and easy to cut with a knife; reasonably corrosion-resistant
  hardnessVickers: 520, // MPa
  hardnessBrinell: null,
  bulkModulus: 44.5, // GPa
  shearModulus: 28.3, // GPa
  youngsModulus: 74.0, // GPa
  poissonsRatio: 0.31,
  malleability: "High",
  ductility: "High",
  allotropeCount: 1, // Hexagonal close-packed structure serves as its ambient phase standard
  color: "Bright, silvery-gray metallic finish with a brilliant luster; stays relatively untarnished in dry air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.160, // J/(g·K)
  molarHeatCapacity: 27.03, // J/(mol·K)
  heatOfFusion: 16.84, // kJ/mol
  heatOfVaporization: 247, // kJ/mol
  heatOfAtomization: 247, // kJ/mol
  standardMolarEntropy: 74.01, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 175, // pm (Atomic radius)
  covalentRadius: 156, // pm
  vanderWaalsRadius: 227, // pm
  ionicRadius: 88.0, // pm (For Tm3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 353.7, // pm
  latticeConstantB: 353.7, // pm
  latticeConstantC: 555.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 18.12, // cm³/mol
  bohr: "2, 8, 18, 31, 8, 2",
  orbital: "[Xe] 4f13 6s2", // Just one electron short of a completely filled internal 4f subshell
  valence: 3, // Exhibits standard trivalent behavior (+3) forming beautiful light-green salts; +2 can be stabilized in specific solid halides
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.25, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.11,
  ionization: 596.7, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [596.7, 1160, 2285, 4120],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3", // Standard stable oxidation state across regular solution chemistry
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.52, // eV
  chemicalSoftness: 0.397, // eV⁻¹
  electrophilicityIndex: 0.15,
  polarizability: 18.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.28, // V (For Tm3+ + 3e- -> Tm)
  flameTestColor: "Pale greenish incandescent emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: 3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 66.00,
  termSymbol: "2F7/2",
  totalAngularMomentumQuantumNumber: 3.5, // J = 7/2
  atomicOrbitalEnergyLevel: -5.43, // eV
  workFunction: 3.15, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 168.93422,
  massNumber: 169, // For Thulium-169
  neutronNumber: 100, // For Thulium-169 (Matches a clean century neutron count)
  isotopeCount: 35, // Tm-145 to Tm-179
  stableIsotopeCount: 1, // Monoisotopic (Only Thulium-169 is stable)
  isotopicAbundance: {
    Tm169: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Thulium-169 (Tm-170 is a notable artificial beta-emitter with a 128.6-day half-life, widely used as a portable X-ray source)
  decayMode: "None", // For Thulium-169
  decayEnergy: null,
  nuclearSpin: 0.5, // 1/2 for Tm-169 (Highly valuable NMR target nucleus since it avoids quadrupole distortions)
  magneticDipoleMoment: -0.2316, // nuclear magnetons
  neutronCrossSection: 100, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000001, // % by mass
  solarAbundance: 0.000000002, // % by mass
  crustalAbundance: 0.00005, // % by mass (0.5 mg/kg; the rarest naturally occurring stable lanthanide element in Earth's crust)
  oceanicAbundance: 1.7e-14, // % by mass
  humanBodyAbundance: null, // Non-toxic baseline behavior; utilized in high-efficiency Tm:YAG solid-state lasers operating at ~2 micrometers for advanced laser surgery and radar systems, and embedded as a green-fluorescent anti-counterfeiting phosphor inside Euro banknotes
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Generated via a combination of slow stellar neutron capture (s-process) in AGB stars and rapid neutron capture (r-process) during supernovae events"
};
  

  
 
const ytterbiumData = {
  // 1. Fundamental Identity & Classification
  num: 70,
  symbol: "Yb",
  name: "Ytterbium",
  type: "Lanthanide",
  group: 3,
  period: 6,
  block: "f",
  casRegistryNumber: "7440-64-4",
  discoverer: "Jean Charles Galissard de Marignac",
  year: 1878,
  originOfName: "Named after the village of Ytterby in Sweden, where the mineral quarry rich in rare-earth elements was located (sharing this origin with yttrium, terbium, and erbium)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 6.90, // g/cm³ at STP (Anomalously low density for a late lanthanide due to its divalent metallic bonding)
  melting: 1097, // Kelvin (824°C)
  boiling: 1469, // Kelvin (1196°C; the second most volatile lanthanide behind europium)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 25.12, // cm³/mol (Expanded atomic volume due to non-bonding filled f-shell)
  electricalConductivity: 3.6e6, // S/m (Relatively high conductivity for a lanthanide)
  electricalResistivity: 2.5e-7, // Ω·m at 20°C
  thermalConductivity: 38.5, // W/(m·K) (Unusually high thermal conductivity among rare earths)
  thermalExpansionCoefficient: 26.3e-6, // K⁻¹ at 25°C
  speedOfSound: 1590, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 1.5, // Quite soft, highly malleable and ductile; can be easily deformed or cut
  hardnessVickers: 206, // MPa
  hardnessBrinell: null,
  bulkModulus: 30.5, // GPa
  shearModulus: 9.9, // GPa
  youngsModulus: 23.9, // GPa
  poissonsRatio: 0.21,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Face-centered cubic (alpha phase, stable at room temperature) and body-centered cubic (beta phase, transitions above 795°C)
  color: "Bright, silvery-white metallic presentation; possesses a bright lustrous sheen that slowly tarnishes in ambient air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.155, // J/(g·K)
  molarHeatCapacity: 26.74, // J/(mol·K)
  heatOfFusion: 7.66, // kJ/mol
  heatOfVaporization: 129, // kJ/mol
  heatOfAtomization: 152, // kJ/mol
  standardMolarEntropy: 75.38, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 194, // pm (Atomic radius; anomalously large for its group position due to f-shell contraction constraints matching its divalent core)
  covalentRadius: 187, // pm
  vanderWaalsRadius: 242, // pm
  ionicRadius: 86.8, // pm (For Yb3+ coordination number 6; Yb2+ is 102 pm)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 548.1, // pm
  latticeConstantB: 548.1, // pm
  latticeConstantC: 548.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 25.12, // cm³/mol
  bohr: "2, 8, 18, 32, 8, 2",
  orbital: "[Xe] 4f14 6s2", // Achieves a completely filled, highly stable internal 4f subshell configuration
  valence: 3, // +3 is dominant in typical chemistry; +2 is remarkably stable and accessible due to the full $4f^{14}$ subshell advantage
  coreElectronCount: 54,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.1, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.06,
  ionization: 603.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [603.4, 1173, 2417, 4203],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3, +2", // +3 is normal; +2 is chemically robust, acting as a valuable reducing agent in synthesis protocols
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.51, // eV
  chemicalSoftness: 0.398, // eV⁻¹
  electrophilicityIndex: 0.14,
  polarizability: 17.5, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.22, // V (For Yb3+ + 3e- -> Yb; Yb3+ + e- -> Yb2+ is -1.05 V)
  flameTestColor: "Pale yellowish-green incandescent emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital)
  magneticQuantumNumber: 3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.00, // Zeff via Slater's rules
  slatersShieldingConstant: 67.00,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -5.48, // eV
  workFunction: 2.60, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 173.045,
  massNumber: 174, // For Ytterbium-174
  neutronNumber: 104, // For Ytterbium-174
  isotopeCount: 34, // Yb-148 to Yb-181
  stableIsotopeCount: 7, // Yb-168, Yb-170, Yb-171, Yb-172, Yb-173, Yb-174, and Yb-176 (All naturally occurring terrestrial configurations are stable)
  isotopicAbundance: {
    Yb168: 0.13,
    Yb170: 3.04,
    Yb171: 14.28, // Active NMR target nucleus with spin 1/2 (Highly prized for ultra-precise optical atomic clocks)
    Yb172: 21.83,
    Yb173: 16.12, // Active NMR target nucleus with spin 5/2
    Yb174: 31.83, // Most naturally dominant stable isotope on Earth
    Yb176: 12.75
  },
  halfLife: "Stable", // For Ytterbium-174 (Yb-169 is a notable gamma emitter used as a portable industrial radiographic source; Yb-175 is a beta emitter studied for targeted tumor therapy)
  decayMode: "None", // For Ytterbium-174
  decayEnergy: null,
  nuclearSpin: 0, // For Yb-174 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Ytterbium-174
  neutronCrossSection: 37, // barns (Natural isotopic average benchmark metric)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000002, // % by mass
  solarAbundance: 0.000000003, // % by mass
  crustalAbundance: 0.00032, // % by mass (3.2 mg/kg; trace lithophile element extracted from monazite, bastnäsite, and xenotime)
  oceanicAbundance: 8.0e-13, // % by mass
  humanBodyAbundance: null, // Low toxicity profile; globally utilized as a premier dopant in high-power fiber lasers and solid-state lasers (Yb:YAG), providing high efficiency around 1030 nm. It is also the foundational element for cutting-edge optical lattice atomic clocks, which surpass standard cesium frequency standards in stability.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Generated via a combination of slow stellar neutron capture (s-process) in AGB stars and rapid neutron capture (r-process) during supernova explosions"
};
  

  
 
const lutetiumData = {
  // 1. Fundamental Identity & Classification
  num: 71,
  symbol: "Lu",
  name: "Lutetium",
  type: "Lanthanide", // Classified structurally as the final element of the lanthanide series; also functions as a group 3 d-block transition metal
  group: 3,
  period: 6,
  block: "d",
  casRegistryNumber: "7439-94-3",
  discoverer: "Georges Urbain, Carl Auer von Welsbach, Charles James",
  year: 1907,
  originOfName: "Named after 'Lutetia', the ancient Latin name for Paris, honoring the birthplace of Georges Urbain",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 9.841, // g/cm³ at STP (The densest and heaviest of all the lanthanides due to lanthanide contraction)
  melting: 1925, // Kelvin (1652°C)
  boiling: 3675, // Kelvin (3402°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 17.78, // cm³/mol (The smallest molar volume among the lanthanides)
  electricalConductivity: 1.8e6, // S/m
  electricalResistivity: 5.82e-7, // Ω·m at 20°C
  thermalConductivity: 16.4, // W/(m·K)
  thermalExpansionCoefficient: 9.9e-6, // K⁻¹ at 25°C
  speedOfSound: 2940, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Relatively hard compared to other rare earths; stiffest of the lanthanide series
  hardnessVickers: 1160, // MPa
  hardnessBrinell: 890, // MPa
  bulkModulus: 47.6, // GPa
  shearModulus: 26.7, // GPa
  youngsModulus: 68.6, // GPa
  poissonsRatio: 0.25,
  malleability: "Moderate",
  ductility: "Moderate",
  allotropeCount: 1, // Hexagonal close-packed structure is the standard ambient configuration
  color: "Silvery-white, dense, highly lustrous metal; remarkably stable in air, resisting rapid tarnish better than lighter lanthanides",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.154, // J/(g·K)
  molarHeatCapacity: 26.86, // J/(mol·K)
  heatOfFusion: 22.0, // kJ/mol
  heatOfVaporization: 414, // kJ/mol
  heatOfAtomization: 428, // kJ/mol
  standardMolarEntropy: 50.96, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.1, // Kelvin (Attained under extreme pressure thresholds)

  // 4. Atomic & Structural Variables
  radius: 173, // pm (Atomic radius; heavily contracted via the Lanthanide Contraction effect)
  covalentRadius: 160, // pm
  vanderWaalsRadius: 221, // pm
  ionicRadius: 86.1, // pm (For Lu3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 350.5, // pm
  latticeConstantB: 350.5, // pm
  latticeConstantC: 554.9, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 17.78, // cm³/mol
  bohr: "2, 8, 18, 32, 9, 2",
  orbital: "[Xe] 4f14 5d1 6s2", // Completely filled internal 4f subshell shifts the final valence tracking electron to the 5d orbital
  valence: 3, // Highly uniform +3 valence configuration yielding colorless, diamagnetic compounds
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.27, // Pauling scale (The highest electronegativity value in the lanthanide row)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.14,
  ionization: 523.5, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [523.5, 1340, 2022.3, 4370],
  electronAffinity: 50.0, // kJ/mol
  oxidation: "+3", // Extremely stable, uniform trivalent chemistry; completely lacks alternative oxidation states in solution
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.55, // eV
  chemicalSoftness: 0.392, // eV⁻¹
  electrophilicityIndex: 0.16,
  polarizability: 16.5, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.28, // V (For Lu3+ + 3e- -> Lu)
  flameTestColor: "Pure white incandescent emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tracking electron)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.30, // Zeff via Slater's rules
  slatersShieldingConstant: 67.70,
  termSymbol: "2D3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -5.54, // eV
  workFunction: 3.30, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 174.9668,
  massNumber: 175, // For Lutetium-175
  neutronNumber: 104, // For Lutetium-175
  isotopeCount: 36, // Lu-150 to Lu-185
  stableIsotopeCount: 1, // Only Lutetium-175 is perfectly stable
  isotopicAbundance: {
    Lu175: 97.41, // Overwhelmingly dominant stable configuration on Earth
    Lu176: 2.59   // Primordial long-lived beta emitter (t1/2 = 3.76e10 years; foundational in Lu-Hf geo-chronological dating)
  },
  halfLife: "Stable", // For Lutetium-175 (Lu-177 is a massively critical medical beta-minus emitter with a 6.647-day half-life used in targeted radioligand cancer therapies)
  decayMode: "None", // For Lutetium-175
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 for Lu-175 (Active NMR quadrupole nucleus)
  magneticDipoleMoment: 2.2327, // nuclear magnetons
  neutronCrossSection: 23, // barns (Natural isotopic average combination baseline metric)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000001, // % by mass
  solarAbundance: 0.000000001, // % by mass
  crustalAbundance: 0.00005, // % by mass (0.5 mg/kg; historically one of the rarest, most expensive naturally occurring stable rare-earth metals)
  oceanicAbundance: 1.5e-14, // % by mass
  humanBodyAbundance: null, // Low toxicity baseline; widely utilized as LSO (Lutetium Oxyorthosilicate) crystals doped with cerium ($Lu_2SiO_5:Ce$) to create optimal high-density scintillators for medical Positron Emission Tomography (PET) imaging detectors. Radioactive Lu-177 is a frontline therapeutic drug for treating neuroendocrine tumors.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged primarily via a combination of slow stellar neutron captures (s-process) in advanced AGB cycles and massive r-process supernova stellar updates"
};
  

  
 
const hafniumData = {
  // 1. Fundamental Identity & Classification
  num: 72,
  symbol: "Hf",
  name: "Hafnium",
  type: "Transition Metal",
  group: 4,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-58-6",
  discoverer: "Dirk Coster, George de Hevesy",
  year: 1923,
  originOfName: "Named after 'Hafnia', the Latin name for Copenhagen, Denmark, the city where the element was discovered",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 13.31, // g/cm³ at STP (High density due to lanthanide contraction)
  melting: 2506, // Kelvin (2233°C)
  boiling: 4876, // Kelvin (4603°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 13.44, // cm³/mol
  electricalConductivity: 3.1e6, // S/m
  electricalResistivity: 3.31e-7, // Ω·m at 20°C
  thermalConductivity: 23.0, // W/(m·K)
  thermalExpansionCoefficient: 5.9e-6, // K⁻¹ at 25°C
  speedOfSound: 3010, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 5.5, // Hard, lustrous, silvery transition metal
  hardnessVickers: 1760, // MPa
  hardnessBrinell: 1700, // MPa
  bulkModulus: 110, // GPa
  shearModulus: 57, // GPa
  youngsModulus: 138, // GPa
  poissonsRatio: 0.37,
  malleability: "Moderate",
  ductility: "High",
  allotropeCount: 2, // Hexagonal close-packed (alpha phase at ambient temperatures) and Body-centered cubic (beta phase above 2033°C)
  color: "Bright, silvery-gray metallic appearance; highly ductile when pure and forms a protective oxide layer in air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.144, // J/(g·K)
  molarHeatCapacity: 25.73, // J/(mol·K)
  heatOfFusion: 27.2, // kJ/mol
  heatOfVaporization: 571, // kJ/mol
  heatOfAtomization: 619, // kJ/mol
  standardMolarEntropy: 43.56, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.128, // Kelvin (Alpha phase tracking)

  // 4. Atomic & Structural Variables
  radius: 159, // pm (Atomic radius; nearly identical to zirconium due to the lanthanide contraction effect)
  covalentRadius: 150, // pm
  vanderWaalsRadius: 212, // pm
  ionicRadius: 71, // pm (For Hf4+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 319.5, // pm
  latticeConstantB: 319.5, // pm
  latticeConstantC: 505.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 13.44, // cm³/mol
  bohr: "2, 8, 18, 32, 10, 2",
  orbital: "[Xe] 4f14 5d2 6s2", // Filled 4f subshell with two electrons tracking valence in the 5d shell
  valence: 4, // Dominant stable tetravalent state chemically mimicking zirconium
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.16,
  ionization: 658.5, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [658.5, 1440, 2250, 3216],
  electronAffinity: 0, // kJ/mol (Thermodynamically unfavorable)
  oxidation: "+4", // Extremely uniform tetravalent state (+4); lower oxidation states are rare and unstable
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 3.12, // eV
  chemicalSoftness: 0.321, // eV⁻¹
  electrophilicityIndex: 0.18,
  polarizability: 16.2, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.55, // V (For Hf4+ + 4e- -> Hf)
  flameTestColor: "Bright white incandescent thermal light emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.45, // Zeff via Slater's rules
  slatersShieldingConstant: 68.55,
  termSymbol: "3F2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -5.62, // eV
  workFunction: 3.90, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 178.49,
  massNumber: 178, // For Hafnium-178
  neutronNumber: 106, // For Hafnium-178
  isotopeCount: 36, // Hf-153 to Hf-188
  stableIsotopeCount: 5, // Hf-176, Hf-177, Hf-178, Hf-179, and Hf-180 (Hf-174 is a long-lived primordial alpha emitter)
  isotopicAbundance: {
    Hf174: 0.16,  // Primordial alpha emitter (t1/2 = 2e15 years)
    Hf176: 5.26,
    Hf177: 18.60, // Active NMR target nucleus with spin 7/2
    Hf178: 27.28, // Prominent nuclear isomer Hf-178m2 has a 31-year half-life and extreme energy storage profile
    Hf179: 13.62, // Active NMR target nucleus with spin 9/2
    Hf180: 35.08  // Most naturally dominant stable isotope
  },
  halfLife: "Stable", // For Hafnium-178
  decayMode: "None", // For Hafnium-178
  decayEnergy: null,
  nuclearSpin: 0, // For Hf-178 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Hafnium-178
  neutronCrossSection: 104, // barns (High natural isotopic capture profile, completely opposite to zirconium)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000002, // % by mass
  solarAbundance: 0.000000003, // % by mass
  crustalAbundance: 0.00030, // % by mass (3.0 mg/kg; always occurs bound alongside zirconium in minerals like zircon)
  oceanicAbundance: 7.0e-15, // % by mass
  humanBodyAbundance: null, // Non-toxic baseline; vital material for manufacturing control rods in nuclear reactors due to its massive neutron absorption cross-section. Also a cornerstone element in modern microprocessors, where hafnium dioxide ($HfO_2$) serves as a high-k dielectric layer replacing silicon dioxide to allow further gate scaling.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Generated via a combination of slow stellar neutron captures (s-process) in aging stars and rapid neutron captures (r-process) in supernovae"
};
  

  
 
const tantalumData = {
  // 1. Fundamental Identity & Classification
  num: 73,
  symbol: "Ta",
  name: "Tantalum",
  type: "Transition Metal",
  group: 5,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-25-7",
  discoverer: "Anders Gustaf Ekeberg",
  year: 1802,
  originOfName: "Named after Tantalus, a figure from Greek mythology, because of the element's 'tantalizing' inability to absorb acid when immersed, mirroring Tantalus's mythological punishment",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 16.69, // g/cm³ at STP (Highly dense refractory metal)
  melting: 3290, // Kelvin (3017°C)
  boiling: 5731, // Kelvin (5458°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 10.85, // cm³/mol
  electricalConductivity: 7.6e6, // S/m
  electricalResistivity: 1.31e-7, // Ω·m at 20°C
  thermalConductivity: 57.5, // W/(m·K)
  thermalExpansionCoefficient: 6.3e-6, // K⁻¹ at 25°C
  speedOfSound: 3400, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 6.5, // Hard, heavy, and extremely strong transition metal
  hardnessVickers: 873, // MPa
  hardnessBrinell: 800, // MPa
  bulkModulus: 200, // GPa
  shearModulus: 69, // GPa
  youngsModulus: 186, // GPa
  poissonsRatio: 0.34,
  malleability: "High",
  ductility: "High (Can be easily drawn into thin wires despite its refractory nature)",
  allotropeCount: 2, // Body-centered cubic (alpha phase, ductile and stable) and Tetragonal (beta phase, hard and brittle)
  color: "Dark blue-gray metallic look; passivates with a thick, robust protective oxide layer when exposed to atmosphere",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.140, // J/(g·K)
  molarHeatCapacity: 25.36, // J/(mol·K)
  heatOfFusion: 36.57, // kJ/mol
  heatOfVaporization: 732.2, // kJ/mol
  heatOfAtomization: 782, // kJ/mol
  standardMolarEntropy: 41.51, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 4.43, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 146, // pm (Atomic radius)
  covalentRadius: 138, // pm
  vanderWaalsRadius: 217, // pm
  ionicRadius: 64, // pm (For Ta5+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 330.1, // pm
  latticeConstantB: 330.1, // pm
  latticeConstantC: 330.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: 10.85, // cm³/mol
  bohr: "2, 8, 18, 32, 11, 2",
  orbital: "[Xe] 4f14 5d3 6s2", // Progressively building out the 5d transition row
  valence: 5, // Dominant stable state is +5, though lower oxidation states exist in complex clusters
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.5, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.33,
  ionization: 761.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [761.0, 1500, 2100, 3200, 4300],
  electronAffinity: 31.0, // kJ/mol
  oxidation: "+5, +4, +3", // +5 is remarkably stable; exhibits incredible resistance to chemical attack below 150°C
  maximumOxidationState: 5,
  minimumOxidationState: -1,
  chemicalHardness: 3.79, // eV
  chemicalSoftness: 0.264, // eV⁻¹
  electrophilicityIndex: 0.22,
  polarizability: 13.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.75, // V (For Ta2O5 + 10H+ + 10e- -> 2Ta + 5H2O)
  flameTestColor: "Pale blue-white incandescent line traits",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.60, // Zeff via Slater's rules
  slatersShieldingConstant: 69.40,
  termSymbol: "4F3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -5.89, // eV
  workFunction: 4.25, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 180.94788,
  massNumber: 181, // For Tantalum-181
  neutronNumber: 108, // For Tantalum-181
  isotopeCount: 37, // Ta-155 to Ta-191
  stableIsotopeCount: 2, // Tantalum-181 and Tantalum-180m (Ta-180m is a primordial nuclear isomer that has never been observed to decay)
  isotopicAbundance: {
    Ta180m: 0.012, // The rarest stable nuclide in the universe; a metastable isomer with a half-life over 4.5e16 years
    Ta181: 99.988  // Fully stable dominant natural isotope
  },
  halfLife: "Stable", // For Tantalum-181
  decayMode: "None", // For Tantalum-181
  decayEnergy: null,
  nuclearSpin: 3.5, // 7/2 for Ta-181 (Highly active NMR quadrupole target)
  magneticDipoleMoment: 2.3705, // nuclear magnetons
  neutronCrossSection: 21.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000000002, // % by mass
  solarAbundance: 0.0000000002, // % by mass
  crustalAbundance: 0.00020, // % by mass (2.0 mg/kg; mainly sourced alongside niobium from the mineral columbite-tantalite, colloquially called coltan)
  oceanicAbundance: 2.0e-15, // % by mass
  humanBodyAbundance: null, // Complete biological biocompatibility makes it non-toxic; heavily utilized to manufacture ultra-reliable electrolytic tantalum capacitors found in modern smartphones and laptops. Also highly valued for orthopedic bone implants and surgical skull plates because bone tissue naturally grows directly onto the metal without rejection.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged primarily through stellar slow neutron capture (s-process) in low-mass AGB stars and rapid neutron capture (r-process) during neutron star mergers"
};
  

  
 
const tungstenData = {
  // 1. Fundamental Identity & Classification
  num: 74,
  symbol: "W",
  name: "Tungsten",
  type: "Transition Metal",
  group: 6,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-33-7",
  discoverer: "Carl Wilhelm Scheele, Juan José Elhuyar, Fausto Elhuyar",
  year: 1781,
  originOfName: "Derived from the Swedish words 'tung sten', meaning heavy stone. The chemical symbol 'W' originates from its German name 'Wolfram', which relates to the mineral wolframite ('wolf's froth')",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 19.25, // g/cm³ at STP (One of the highest densities of all stable elements, matching gold)
  melting: 3695, // Kelvin (3422°C; the absolute highest melting point of all discovered metals)
  boiling: 6203, // Kelvin (5930°C; the highest boiling point of all elements)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 9.55, // cm³/mol
  electricalConductivity: 1.8e7, // S/m
  electricalResistivity: 5.28e-8, // Ω·m at 20°C
  thermalConductivity: 173, // W/(m·K) (Excellent thermal management capability)
  thermalExpansionCoefficient: 4.5e-6, // K⁻¹ at 25°C (Lowest coefficient of thermal expansion among pure metals)
  speedOfSound: 4620, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 7.5, // Remarkably hard, stiff, and scratch-resistant
  hardnessVickers: 3430, // MPa (For high-purity polycrystalline form)
  hardnessBrinell: 2570, // MPa
  bulkModulus: 310, // GPa (Exceedingly resistant to uniform compression)
  shearModulus: 161, // GPa
  youngsModulus: 411, // GPa (Extremely high elastic stiffness)
  poissonsRatio: 0.28,
  malleability: "Low (Inherently brittle at ambient temperatures, requires hot-working processing)",
  ductility: "Moderate (Can be drawn into ultra-fine filaments under targeted high-temperature conditions)",
  allotropeCount: 2, // Body-centered cubic (alpha phase, stable) and A15 cubic structure (beta phase, metastable)
  color: "Lustrous, silvery-white to steel-gray metallic appearance; passivates via a thin oxide film under ambient exposure",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.132, // J/(g·K)
  molarHeatCapacity: 24.27, // J/(mol·K)
  heatOfFusion: 52.31, // kJ/mol
  heatOfVaporization: 774, // kJ/mol
  heatOfAtomization: 849, // kJ/mol
  standardMolarEntropy: 32.64, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.015, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 139, // pm (Atomic radius)
  covalentRadius: 137, // pm
  vanderWaalsRadius: 210, // pm
  ionicRadius: 62, // pm (For W6+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 316.5, // pm
  latticeConstantB: 316.5, // pm
  latticeConstantC: 316.5, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: 9.55, // cm³/mol
  bohr: "2, 8, 18, 32, 12, 2",
  orbital: "[Xe] 4f14 5d4 6s2", // Stepwise accumulation tracking the group 6 d-block system
  valence: 6, // Displays variable oxidation states from -2 to +6, with +6 being the most stable and chemically robust
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.36, // Pauling scale (Relatively high for a transition metal)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.40,
  ionization: 770.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [770.0, 1700, 2300, 3400, 4600, 5900],
  electronAffinity: 78.6, // kJ/mol
  oxidation: "+6, +5, +4, +3, +2, 0", // Exhibits complex chemistry; highly stable hexavalent states dominate in oxoanions like tungstate ($WO_4^{2-}$)
  maximumOxidationState: 6,
  minimumOxidationState: -2,
  chemicalHardness: 3.59, // eV
  chemicalSoftness: 0.279, // eV⁻¹
  electrophilicityIndex: 0.86,
  polarizability: 11.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.15, // V (For WO3 + 6H+ + 6e- -> W + 3H2O)
  flameTestColor: "Bright, sparkling white to pale green incandescent thermal tracking emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tracking tier)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.75, // Zeff via Slater's rules
  slatersShieldingConstant: 70.25,
  termSymbol: "5D0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -6.12, // eV
  workFunction: 4.55, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 183.84,
  massNumber: 184, // For Tungsten-184
  neutronNumber: 110, // For Tungsten-184
  isotopeCount: 35, // W-158 to W-192
  stableIsotopeCount: 4, // W-182, W-183, W-184, and W-186 (W-180 is an extremely long-lived primordial alpha emitter)
  isotopicAbundance: {
    W180: 0.12,  // Primordial alpha emitter (t1/2 = 1.8e18 years)
    W182: 26.50,
    W183: 14.31, // Stable isotope possessing a non-zero nuclear spin (1/2); ideal target for NMR spectroscopy
    W184: 30.64, // Most naturally dominant stable isotope on Earth
    W186: 28.43
  },
  halfLife: "Stable", // For Tungsten-184 (W-188 is an industrial beta-emitting radioisotope used in generator systems for cancer tracking)
  decayMode: "None", // For Tungsten-184
  decayEnergy: null,
  nuclearSpin: 0, // For W-184 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Tungsten-184
  neutronCrossSection: 18.5, // barns (Natural isotopic combined average benchmark)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000001, // % by mass
  solarAbundance: 0.000000002, // % by mass
  crustalAbundance: 0.00013, // % by mass (1.3 mg/kg; mainly sourced from the minerals scheelite ($CaWO_4$) and wolframite)
  oceanicAbundance: 1.0e-13, // % by mass
  humanBodyAbundance: null, // Trace biochemical role discovered in select hyperthermophilic archaea and bacteria, making it the heaviest element known to utilize an active biological enzyme pathway. Highly valued across industrial backbones to produce tungsten carbide ($WC$), an incredibly hard alloy used for high-speed cutting tools, armor-piercing ammunition, and heavy mining drills. Also vital for rocket engine nozzles and medical X-ray tubes due to its unique thermal performance limits.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged primarily via slow stellar neutron capture (s-process) inside red giant stars, supplemented by rapid neutron capture (r-process) during stellar mergers"
};
  

  
 
const rheniumData = {
  // 1. Fundamental Identity & Classification
  num: 75,
  symbol: "Re",
  name: "Rhenium",
  type: "Transition Metal",
  group: 7,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-15-5",
  discoverer: "Walter Noddack, Ida Tacke-Noddack, Otto Berg",
  year: 1925,
  originOfName: "Named after 'Rhenus', the Latin name for the Rhine River in Europe",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 21.02, // g/cm³ at STP (One of the densest known elements, behind only osmium, iridium, and platinum)
  melting: 3459, // Kelvin (3186°C; second-highest melting point among all metals, behind only tungsten)
  boiling: 5903, // Kelvin (5630°C; has the highest boiling point of any stable element)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.86, // cm³/mol
  electricalConductivity: 5.4e6, // S/m
  electricalResistivity: 1.85e-7, // Ω·m at 20°C
  thermalConductivity: 48.0, // W/(m·K)
  thermalExpansionCoefficient: 6.2e-6, // K⁻¹ at 25°C
  speedOfSound: 4700, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 7.0, // Extremely hard, wear-resistant, and chemically robust refractory transition metal
  hardnessVickers: 2450, // MPa
  hardnessBrinell: 2160, // MPa
  bulkModulus: 370, // GPa (Remarkably high resistance to hydrostatic compression, behind only osmium and diamond)
  shearModulus: 178, // GPa
  youngsModulus: 463, // GPa (Phenomenal elastic modulus)
  poissonsRatio: 0.30,
  malleability: "Low (Requires sophisticated vacuum thermal annealing or high-temperature working)",
  ductility: "Moderate (Highly ductile once fully refined and cold-worked carefully)",
  allotropeCount: 1, // Hexagonal close-packed remains the standard, highly stable ambient structural matrix
  color: "Silvery-gray, heavy metallic luster; resists tarnishing and corrosion beautifully across atmospheric exposures",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.137, // J/(g·K)
  molarHeatCapacity: 25.48, // J/(mol·K)
  heatOfFusion: 33.2, // kJ/mol
  heatOfVaporization: 704, // kJ/mol
  heatOfAtomization: 774, // kJ/mol
  standardMolarEntropy: 36.53, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 1.69, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 137, // pm (Atomic radius)
  covalentRadius: 135, // pm
  vanderWaalsRadius: 205, // pm
  ionicRadius: 63, // pm (For Re4+ coordination number 6; Re7+ is 53 pm)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 276.1, // pm
  latticeConstantB: 276.1, // pm
  latticeConstantC: 445.6, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 8.86, // cm³/mol
  bohr: "2, 8, 18, 32, 13, 2",
  orbital: "[Xe] 4f14 5d5 6s2", // Stabilizing half-filled 5d configuration characteristics 
  valence: 7, // Widely variable oxidation states from -3 to +7, with +7 and +4 being the most stable
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.9, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.46,
  ionization: 760.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [760.0, 1260, 2510, 3640],
  electronAffinity: 14.5, // kJ/mol
  oxidation: "+7, +6, +4, +2, -1", // Highly diverse chemical matrix; perrhenate ($ReO_4^-$) compounds display superb stability
  maximumOxidationState: 7,
  minimumOxidationState: -3,
  chemicalHardness: 3.87, // eV
  chemicalSoftness: 0.258, // eV⁻¹
  electrophilicityIndex: 0.31,
  polarizability: 9.7, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.36, // V (For ReO4- + 4H+ + 3e- -> ReO2 + 2H2O)
  flameTestColor: "Pale yellowish-green incandescent thermal line emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier tracking)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.90, // Zeff via Slater's rules
  slatersShieldingConstant: 71.10,
  termSymbol: "6S5/2",
  totalAngularMomentumQuantumNumber: 2.5, // J = 5/2
  atomicOrbitalEnergyLevel: -6.35, // eV
  workFunction: 4.96, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 186.207,
  massNumber: 187, // For Rhenium-187
  neutronNumber: 112, // For Rhenium-187
  isotopeCount: 35, // Re-160 to Re-194
  stableIsotopeCount: 1, // Only Rhenium-185 is perfectly stable
  isotopicAbundance: {
    Re185: 37.40, // Fully stable natural isotope (Active NMR target nucleus with spin 5/2)
    Re187: 62.60  // Primordial long-lived beta emitter (t1/2 = 4.12e10 years; crucial in Re-Os cosmo-chronological and geological dating)
  },
  halfLife: "Stable", // For Rhenium-185
  decayMode: "None", // For Rhenium-185
  decayEnergy: null,
  nuclearSpin: 2.5, // 5/2 for Re-185
  magneticDipoleMoment: 3.1871, // nuclear magnetons
  neutronCrossSection: 86, // barns (Natural isotopic average combined baseline)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000000005, // % by mass
  solarAbundance: 0.00000000007, // % by mass
  crustalAbundance: 0.00000007, // % by mass (0.7 parts per billion; one of the absolute rarest stable elements in Earth's crust, primarily recovered as a byproduct of copper and molybdenum mining)
  oceanicAbundance: 4.0e-15, // % by mass
  humanBodyAbundance: null, // Non-toxic baseline behavior; heavily utilized as a critical alloy component (up to 6%) in nickel-based single-crystal superalloys to manufacture combustion chambers and turbine blades for advanced jet engines and rocket propulsion. Also valued alongside platinum as a highly efficient catalyst in petroleum reforming to yield high-octane gasoline.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Forged extensively through cosmic rapid neutron capture cascades (r-process) during binary neutron star collisions and supernovas"
};
  

  
 
const osmiumData = {
  // 1. Fundamental Identity & Classification
  num: 76,
  symbol: "Os",
  name: "Osmium",
  type: "Transition Metal",
  group: 8,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-04-2",
  discoverer: "Smithson Tennant",
  year: 1803,
  originOfName: "Derived from the Greek word 'osme', meaning a smell, due to the sharp, pungent odor of its volatile tetroxide byproduct",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 22.59, // g/cm³ at STP (The densest naturally occurring element known, slightly surpassing iridium)
  melting: 3306, // Kelvin (3033°C)
  boiling: 5285, // Kelvin (5012°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.42, // cm³/mol
  electricalConductivity: 1.2e7, // S/m
  electricalResistivity: 8.12e-8, // Ω·m at 20°C
  thermalConductivity: 87.6, // W/(m·K)
  thermalExpansionCoefficient: 5.1e-6, // K⁻¹ at 25°C
  speedOfSound: 4940, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 7.0, // Extremely hard, rigid, and brittle; highly scratch-resistant
  hardnessVickers: 3920, // MPa
  hardnessBrinell: null,
  bulkModulus: 462, // GPa (Incredibly high resistance to compression, matching or rivaling diamond limits)
  shearModulus: 222, // GPa
  youngsModulus: 567, // GPa (Exceptional elastic stiffness profile)
  poissonsRatio: 0.25,
  malleability: "Extremely Low (Virtually unworkable at room temperature; fractures easily under stress)",
  ductility: "Extremely Low",
  allotropeCount: 1, // Hexagonal close-packed is the uniform, unyielding ambient phase configuration
  color: "Hard, lustrous, silvery metal with a distinctive, subtle bluish hue",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.130, // J/(g·K)
  molarHeatCapacity: 24.73, // J/(mol·K)
  heatOfFusion: 31.0, // kJ/mol
  heatOfVaporization: 738, // kJ/mol
  heatOfAtomization: 791, // kJ/mol
  standardMolarEntropy: 32.6, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.66, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 135, // pm (Atomic radius)
  covalentRadius: 128, // pm
  vanderWaalsRadius: 216, // pm
  ionicRadius: 63, // pm (For Os4+ coordination number 6)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 273.4, // pm
  latticeConstantB: 273.4, // pm
  latticeConstantC: 431.7, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 8.42, // cm³/mol
  bohr: "2, 8, 18, 32, 14, 2",
  orbital: "[Xe] 4f14 5d6 6s2", // Advancing through the transition group 8 core layer
  valence: 4, // Highly versatile oxidation states spanning from -2 to +8; +4 and +3 are standard in coordination complexes
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.2, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.52,
  ionization: 840.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [840.0, 1600, 2400, 3900],
  electronAffinity: 106.1, // kJ/mol
  oxidation: "+8, +6, +4, +3, +2, 0", // Shares the maximum formal chemical oxidation state threshold of +8 in osmium tetroxide ($OsO_4$)
  maximumOxidationState: 8,
  minimumOxidationState: -2,
  chemicalHardness: 4.12, // eV
  chemicalSoftness: 0.243, // eV⁻¹
  electrophilicityIndex: 0.45,
  polarizability: 8.5, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.85, // V (For Os2+ + 2e- -> Os)
  flameTestColor: "Bright white-blue thermal light emission lines",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital tracking)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.05, // Zeff via Slater's rules
  slatersShieldingConstant: 71.95,
  termSymbol: "5D4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: -6.58, // eV
  workFunction: 4.83, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 190.23,
  massNumber: 192, // For Osmium-192
  neutronNumber: 116, // For Osmium-192
  isotopeCount: 37, // Os-161 to Os-197
  stableIsotopeCount: 6, // Os-187, Os-188, Os-189, Os-190, Os-192, and Os-184 (Os-186 is a long-lived primordial alpha emitter)
  isotopicAbundance: {
    Os184: 0.02,
    Os186: 1.59,  // Primordial alpha emitter (t1/2 = 2.0e15 years)
    Os187: 1.96,  // Radiogenic daughter of Re-187; crucial for Re-Os geological dating matrices
    Os188: 13.24,
    Os189: 16.15, // Active NMR target nucleus with spin 3/2
    Os190: 26.26,
    Os192: 40.78  // Most naturally dominant stable isotope
  },
  halfLife: "Stable", // For Osmium-192
  decayMode: "None", // For Osmium-192
  decayEnergy: null,
  nuclearSpin: 0, // For Os-192 (Even-even pairing matches 0 spin)
  magneticDipoleMoment: 0, // For Osmium-192
  neutronCrossSection: 16, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000002, // % by mass
  solarAbundance: 0.000000003, // % by mass
  crustalAbundance: 0.0000001, // % by mass (1 part per billion; incredibly rare siderophile element found mainly in platinum group metal ores and alloys like osmiridium)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Finely divided osmium metal slowly oxidizes in air to form osmium tetroxide ($OsO_4$), an incredibly toxic, volatile compound that causes severe eye and respiratory damage. Industrially, osmium is alloyed with platinum or iridium to create ultra-hard electrical contacts, fountain pen nibs, and record player needles. It also serves as an elite staining agent for lipid membranes in electron microscopy.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Forged via rapid neutron capture processes (r-process) in violent neutron star collisions and supernovae events"
};
  

  
 
const iridiumData = {
  // 1. Fundamental Identity & Classification
  num: 77,
  symbol: "Ir",
  name: "Iridium",
  type: "Transition Metal",
  group: 9,
  period: 6,
  block: "d",
  casRegistryNumber: "7439-88-5",
  discoverer: "Smithson Tennant",
  year: 1803,
  originOfName: "Named after Iris, the Greek goddess of the rainbow, because of the striking and diverse colors of its chemical salts",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 22.56, // g/cm³ at STP (Virtually tied with osmium as the densest known element)
  melting: 2719, // Kelvin (2446°C)
  boiling: 4701, // Kelvin (4428°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 8.52, // cm³/mol
  electricalConductivity: 2.1e7, // S/m
  electricalResistivity: 4.71e-8, // Ω·m at 20°C
  thermalConductivity: 147, // W/(m·K)
  thermalExpansionCoefficient: 6.4e-6, // K⁻¹ at 25°C
  speedOfSound: 4820, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 6.5, // Extremely hard, rigid, and brittle; highly scratch-resistant
  hardnessVickers: 1760, // MPa
  hardnessBrinell: 1670, // MPa
  bulkModulus: 320, // GPa (Extremely high resistance to compression)
  shearModulus: 210, // GPa
  youngsModulus: 528, // GPa (Superb elastic stiffness)
  poissonsRatio: 0.26,
  malleability: "Low (Unworkable under standard conditions; requires extreme white-heat manipulation)",
  ductility: "Low (Can be formed into wire only with extreme high-temperature industrial care)",
  allotropeCount: 1, // Face-centered cubic configuration remains stable across all standard temperature matrices
  color: "Hard, lustrous, silvery metal with a slight yellowish tint",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.131, // J/(g·K)
  molarHeatCapacity: 25.10, // J/(mol·K)
  heatOfFusion: 41.1, // kJ/mol
  heatOfVaporization: 564, // kJ/mol
  heatOfAtomization: 669, // kJ/mol
  standardMolarEntropy: 35.48, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.112, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 137, // pm (Atomic radius)
  covalentRadius: 132, // pm
  vanderWaalsRadius: 202, // pm
  ionicRadius: 62.5, // pm (For Ir4+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 383.9, // pm
  latticeConstantB: 383.9, // pm
  latticeConstantC: 383.9, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 8.52, // cm³/mol
  bohr: "2, 8, 18, 32, 15, 2",
  orbital: "[Xe] 4f14 5d7 6s2", // Stepwise loading within the transition group 9 d-block tier
  valence: 4, // Highly variable oxidation states from -3 to +9; +3 and +4 are standard configurations
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.20, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.55,
  ionization: 880.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [880.0, 1600, 2600, 3800],
  electronAffinity: 151.0, // kJ/mol
  oxidation: "+4, +3, +1, 0", // Famous for its chemical unreactivity; has the highest resistance to corrosion of any known metal, completely unaffected by acids or aqua regia at normal temperatures
  maximumOxidationState: 9, // Attained uniquely in the transient volatile cation $[IrO_4]^+$
  minimumOxidationState: -3,
  chemicalHardness: 3.79, // eV
  chemicalSoftness: 0.264, // eV⁻¹
  electrophilicityIndex: 0.52,
  polarizability: 7.6, // × 10⁻²⁴ cm³
  standardReductionPotential: 1.15, // V (For Ir3+ + 3e- -> Ir)
  flameTestColor: "Faint white-blue line traits",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.20, // Zeff via Slater's rules
  slatersShieldingConstant: 72.80,
  termSymbol: "4F9/2",
  totalAngularMomentumQuantumNumber: 4.5, // J = 9/2
  atomicOrbitalEnergyLevel: -6.74, // eV
  workFunction: 5.27, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 192.217,
  massNumber: 193, // For Iridium-193
  neutronNumber: 116, // For Iridium-193
  isotopeCount: 38, // Ir-164 to Ir-201
  stableIsotopeCount: 2, // Iridium-191 and Iridium-193 are fully stable
  isotopicAbundance: {
    Ir191: 37.30, // Active target for precision Mössbauer effect discovery
    Ir193: 62.70  // Most naturally dominant stable isotope
  },
  halfLife: "Stable", // For Iridium-193 (Ir-192 is a major industrial beta/gamma emitter with a 73.8-day half-life, widely used in non-destructive radiographic testing and cancer brachytherapy)
  decayMode: "None", // For Iridium-193
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for Ir-193 (Active NMR nucleus)
  magneticDipoleMoment: 0.1583, // nuclear magnetons
  neutronCrossSection: 110, // barns (Natural isotopic average combination baseline)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000002, // % by mass
  solarAbundance: 0.000000003, // % by mass
  crustalAbundance: 0.00000004, // % by mass (0.4 parts per billion; one of the rarest stable elements in the Earth's crust, heavily concentrated in planetary cores)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Non-toxic baseline behavior due to absolute chemical inertness. It is famous in geology: a global layer of iridium-rich clay at the Cretaceous-Paleogene (K-Pg) boundary provides the definitive cosmic fingerprint for the massive asteroid impact that wiped out the dinosaurs 66 million years ago. Industrially used for spark plug electrodes in high-performance aircraft, crucibles for growing single crystals, and specialized catalysts.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Forged via cosmic rapid neutron capture branches (r-process) during extreme neutron star collisions and supernovae events"
};
  

  
 
const platinumData = {
  // 1. Fundamental Identity & Classification
  num: 78,
  symbol: "Pt",
  name: "Platinum",
  type: "Transition Metal",
  group: 10,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-06-4",
  discoverer: "Antonio de Ulloa",
  year: 1748,
  originOfName: "Derived from the Spanish word 'platina', meaning 'little silver', given by Spanish conquistadors who initially viewed it as an unwanted impurity in gold mining",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 21.45, // g/cm³ at STP (Extremely dense noble metal)
  melting: 2041.4, // Kelvin (1768.3°C)
  boiling: 4098, // Kelvin (3825°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 9.09, // cm³/mol
  electricalConductivity: 9.4e6, // S/m
  electricalResistivity: 1.05e-7, // Ω·m at 20°C
  thermalConductivity: 71.6, // W/(m·K)
  thermalExpansionCoefficient: 8.8e-6, // K⁻¹ at 25°C
  speedOfSound: 2800, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 3.5, // Relatively soft, malleable, and beautifully ductile when pure
  hardnessVickers: 549, // MPa
  hardnessBrinell: 392, // MPa
  bulkModulus: 230, // GPa
  shearModulus: 61, // GPa
  youngsModulus: 168, // GPa
  poissonsRatio: 0.38,
  malleability: "High",
  ductility: "Extremely High (One of the most ductile metals known, easily drawn into ultra-fine wires)",
  allotropeCount: 1, // Face-centered cubic forms the definitive stable ambient structure matrix
  color: "Lustrous, silvery-white metallic appearance; highly reflective and beautifully resistant to tarnishing",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.133, // J/(g·K)
  molarHeatCapacity: 25.86, // J/(mol·K)
  heatOfFusion: 22.17, // kJ/mol
  heatOfVaporization: 469, // kJ/mol
  heatOfAtomization: 565, // kJ/mol
  standardMolarEntropy: 41.6, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 139, // pm (Atomic radius)
  covalentRadius: 136, // pm
  vanderWaalsRadius: 175, // pm
  ionicRadius: 62.5, // pm (For Pt4+ coordination number 6; Pt2+ is 80 pm)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 392.4, // pm
  latticeConstantB: 392.4, // pm
  latticeConstantC: 392.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 9.09, // cm³/mol
  bohr: "2, 8, 18, 32, 17, 1",
  orbital: "[Xe] 4f14 5d9 6s1", // Relativistic effects cause an electron anomaly, shifting a 6s electron into the 5d band
  valence: 4, // Displays variable oxidation states; +2 and +4 are the most stable and chemically active
  coreElectronCount: 68,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.28, // Pauling scale (Highly electronegative for a metal)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.44,
  ionization: 870.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [870.0, 1791, 2800, 4480],
  electronAffinity: 205.3, // kJ/mol (Exceptionally high electron affinity for a metal element)
  oxidation: "+4, +2, 0", // Classic noble metal; demonstrates extraordinary resistance to chemical corrosion, entirely unreactive to nitric or hydrochloric acids alone (dissolves readily in hot aqua regia)
  maximumOxidationState: 6,
  minimumOxidationState: -3,
  chemicalHardness: 3.44, // eV
  chemicalSoftness: 0.291, // eV⁻¹
  electrophilicityIndex: 0.55,
  polarizability: 6.5, // × 10⁻²⁴ cm³
  standardReductionPotential: 1.18, // V (For Pt2+ + 2e- -> Pt)
  flameTestColor: "Faint white-gray thermal light emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital tracking)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.35, // Zeff via Slater's rules
  slatersShieldingConstant: 73.65,
  termSymbol: "3D3",
  totalAngularMomentumQuantumNumber: 3.0, // J = 3
  atomicOrbitalEnergyLevel: -6.89, // eV
  workFunction: 5.65, // eV (One of the highest work functions among pure elements)

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 195.084,
  massNumber: 195, // For Platinum-195
  neutronNumber: 117, // For Platinum-195
  isotopeCount: 37, // Pt-166 to Pt-202
  stableIsotopeCount: 5, // Pt-192, Pt-194, Pt-195, Pt-196, and Pt-198 (Pt-190 is a very long-lived primordial alpha emitter)
  isotopicAbundance: {
    Pt190: 0.01,  // Primordial alpha emitter (t1/2 = 6.5e11 years)
    Pt192: 0.78,
    Pt194: 32.86,
    Pt195: 33.78, // Active NMR target nucleus with spin 1/2 (highly valued in structural chemistry and catalyst mapping)
    Pt196: 25.21,
    Pt198: 7.36
  },
  halfLife: "Stable", // For Platinum-195
  decayMode: "None", // For Platinum-195
  decayEnergy: null,
  nuclearSpin: 0.5, // 1/2 for Pt-195
  magneticDipoleMoment: 0.6095, // nuclear magnetons
  neutronCrossSection: 10.0, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000005, // % by mass
  solarAbundance: 0.000000006, // % by mass
  crustalAbundance: 0.0000005, // % by mass (5 parts per billion; rare precious siderophile element primarily mined in the Bushveld Complex of South Africa)
  oceanicAbundance: 5.0e-14, // % by mass
  humanBodyAbundance: null, // Pure bulk metal is completely bio-inert and non-toxic. However, platinum coordination complexes like cisplatin ($cis-[Pt(NH_3)_2Cl_2]$) are globally vital chemotherapy medications that bind to DNA to inhibit cancer cell replication. Industrially indispensable as a catalyst for automotive catalytic converters to scrub toxic emissions, petroleum refining, and premium fine jewelry.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Forged extensively via rapid cosmic neutron capture cascades (r-process) during binary neutron star collisions and supernovae"
};
  

  
 
const goldData = {
  // 1. Fundamental Identity & Classification
  num: 79,
  symbol: "Au",
  name: "Gold",
  type: "Transition Metal",
  group: 11,
  period: 6,
  block: "d",
  casRegistryNumber: "7440-57-5",
  discoverer: "Known since antiquity",
  year: -3000, // Approximate baseline of historical discovery and metallurgy across early civilizations
  originOfName: "Derived from the Proto-Germanic word 'gulthą' (meaning yellow or shiny). The chemical symbol 'Au' comes from the Latin word 'aurum', meaning shining dawn",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 19.30, // g/cm³ at STP (Highly dense precious heavy metal)
  melting: 1337.33, // Kelvin (1064.18°C)
  boiling: 3129, // Kelvin (2856°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 10.21, // cm³/mol
  electricalConductivity: 4.5e7, // S/m (Superb electrical conductor, behind only silver and copper)
  electricalResistivity: 2.2e-8, // Ω·m at 20°C
  thermalConductivity: 318, // W/(m·K)
  thermalExpansionCoefficient: 14.2e-6, // K⁻¹ at 25°C
  speedOfSound: 2030, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.5, // Soft, ductile precious metal; easily scratched or indented in pure form
  hardnessVickers: 216, // MPa
  hardnessBrinell: 245, // MPa
  bulkModulus: 180, // GPa
  shearModulus: 27, // GPa
  youngsModulus: 78, // GPa
  poissonsRatio: 0.44,
  malleability: "Extremely High (The most malleable element known; can be beaten into ultra-thin gold leaf only a few atoms thick)",
  ductility: "Extremely High (The most ductile metal known; a single gram can be drawn into a wire over two kilometers long)",
  allotropeCount: 1, // Face-centered cubic structure defines its uniform stable structural framework
  color: "Metallic yellow in bulk form; displays a distinct, warm golden-yellow luster due to relativistic electron shifts",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.129, // J/(g·K)
  molarHeatCapacity: 25.42, // J/(mol·K)
  heatOfFusion: 12.55, // kJ/mol
  heatOfVaporization: 324, // kJ/mol
  heatOfAtomization: 368, // kJ/mol
  standardMolarEntropy: 47.4, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 144, // pm (Atomic radius)
  covalentRadius: 136, // pm
  vanderWaalsRadius: 166, // pm
  ionicRadius: 85, // pm (For Au3+ coordination number 6; Au+ is 137 pm)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 407.8, // pm
  latticeConstantB: 407.8, // pm
  latticeConstantC: 407.8, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 10.21, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 1",
  orbital: "[Xe] 4f14 5d10 6s1", // Classic d-block column 11 structure with a filled 5d shell and lone 6s outer electron
  valence: 3, // Variable oxidation states; +1 and +3 are the most common and chemically relevant
  coreElectronCount: 78,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.54, // Pauling scale (The highest electronegativity value among pure metals)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.42,
  ionization: 890.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [890.1, 1980],
  electronAffinity: 222.8, // kJ/mol (Unusually high electron affinity for a metal, forming stable auride $Au^-$ compounds with active alkalis)
  oxidation: "+3, +1, 0", // Classic noble metal; immune to single-acid attacks and atmospheric oxidation (dissolves cleanly in aqua regia or alkaline cyanide solution)
  maximumOxidationState: 5, // Rare configurations attained in highly reactive systems like gold pentafluoride ($AuF_5$)
  minimumOxidationState: -1, // Found in distinctive ionic intermetallic compounds like cesium auride ($CsAu$)
  chemicalHardness: 3.48, // eV
  chemicalSoftness: 0.287, // eV⁻¹
  electrophilicityIndex: 0.63,
  polarizability: 5.8, // × 10⁻²⁴ cm³
  standardReductionPotential: 1.40, // V (For Au3+ + 3e- -> Au)
  flameTestColor: "Bright white to faint yellow-green incandescent thermal line profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 0, // l = 0 (s orbital outer valence tracking electron)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.20, // Zeff via Slater's rules
  slatersShieldingConstant: 74.80,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -7.02, // eV
  workFunction: 5.10, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 196.966569,
  massNumber: 197, // For Gold-197
  neutronNumber: 118, // For Gold-197
  isotopeCount: 37, // Au-169 to Au-205
  stableIsotopeCount: 1, // Monoisotopic (Only Gold-197 is stable)
  isotopicAbundance: {
    Au197: 100.0 // 100% naturally occurring terrestrial abundance
  },
  halfLife: "Stable", // For Gold-197 (Au-198 is a notable beta-emitting synthetic isotope with a 2.7-day half-life used in targeted cancer therapies)
  decayMode: "None", // For Gold-197
  decayEnergy: null,
  nuclearSpin: 1.5, // 3/2 for Au-197 (Active NMR target nucleus)
  magneticDipoleMoment: 0.1457, // nuclear magnetons
  neutronCrossSection: 98.7, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000000006, // % by mass
  solarAbundance: 0.0000000009, // % by mass
  crustalAbundance: 0.0000004, // % by mass (4 parts per billion; rare native element widely dispersed across quartz veins and alluvial placer deposits)
  oceanicAbundance: 4.0e-12, // % by mass
  humanBodyAbundance: null, // Completely non-toxic and bio-inert in bulk form; ancient medical therapies leverage gold compounds (chrysotherapy) like sodium aurothiomalate to reduce systemic inflammation in rheumatoid arthritis. Universally utilized across the electronics sector to manufacture corrosion-free micro-wire bonds inside computer processors, high-grade audio connections, aerospace radiation shields, and as a timeless global standard of financial wealth.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Forged during cosmic rapid neutron capture cascades (r-process) inside dramatic binary neutron star collisions and core-collapse supernovae events"
};
  

  
 
const mercuryData = {
  // 1. Fundamental Identity & Classification
  num: 80,
  symbol: "Hg",
  name: "Mercury",
  type: "Transition Metal", // Classified as a post-transition / d-block transition metal
  group: 12,
  period: 6,
  block: "d",
  casRegistryNumber: "7439-97-6",
  discoverer: "Known since antiquity",
  year: -1500, // Documented in ancient Egyptian tombs and early Chinese texts
  originOfName: "Named after the Roman god Mercury, known for his speed and mobility. The chemical symbol 'Hg' comes from the Greek word 'hydrargyrum', meaning liquid silver (water-silver)",

  // 2. Bulk Physical Properties
  state: "Liquid", // The only metallic element that exists as a liquid under standard temperature and pressure conditions
  density: 13.534, // g/cm³ at STP (Extremely dense liquid state)
  melting: 234.32, // Kelvin (-38.83°C)
  boiling: 629.88, // Kelvin (356.73°C)
  triplePointTemperature: 234.3156, // Kelvin (-38.8344°C; key ITS-90 calibration point)
  triplePointPressure: 0.0002, // Pa
  criticalPointTemperature: 1751, // Kelvin (1478°C)
  criticalPointPressure: 172, // MPa
  molarVolume: 14.82, // cm³/mol
  electricalConductivity: 1.0e6, // S/m
  electricalResistivity: 9.61e-7, // Ω·m at 20°C
  thermalConductivity: 8.3, // W/(m·K) (Poor thermal conductor compared to typical metals)
  thermalExpansionCoefficient: 181e-6, // K⁻¹ at 25°C (High and highly uniform volumetric thermal expansion)
  speedOfSound: 1450, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: null, // Liquid state at room temperature
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 28.5, // GPa (Applies to its isotropic liquid phase compression)
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High (Applies to the solid cryogenic phase below -39°C)",
  ductility: "High (Applies to the solid cryogenic phase below -39°C)",
  allotropeCount: 1, // Liquid state dominates ambient phase; solidifies into a rhombohedral structure (alpha-phase) under freezing thresholds
  color: "Heavy, mirror-like silvery-white liquid presentation; possesses an intense metallic luster",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.140, // J/(g·K)
  molarHeatCapacity: 27.98, // J/(mol·K)
  heatOfFusion: 2.29, // kJ/mol
  heatOfVaporization: 59.11, // kJ/mol
  heatOfAtomization: 61.3, // kJ/mol
  standardMolarEntropy: 75.9, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 4.15, // Kelvin (Historically vital: Kamerlingh Onnes discovered superconductivity using solid mercury in 1911)

  // 4. Atomic & Structural Variables
  radius: 151, // pm (Atomic radius)
  covalentRadius: 144, // pm
  vanderWaalsRadius: 155, // pm
  ionicRadius: 102, // pm (For Hg2+ coordination number 6; Hg+ exists as diatomic [Hg2]2+ clusters)
  crystalStructure: "Rhombohedral (For solid phase below -39°C)",
  latticeConstantA: 299.3, // pm
  latticeConstantB: 299.3, // pm
  latticeConstantC: 299.3, // pm
  axialAngleAlpha: 70.7,
  axialAngleBeta: 70.7,
  axialAngleGamma: 70.7,
  spaceGroup: "R-3m",
  coordinationNumber: 6, // In its frozen crystalline structural matrix
  packingFraction: 0.68,
  atomicVolume: 14.82, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 2",
  orbital: "[Xe] 4f14 5d10 6s2", // Relativistic effects strongly stabilize the 6s² shell, making it act like a pseudo-noble gas with weak inter-atomic attraction
  valence: 2, // Stable standard oxidation states are +2 and +1
  coreElectronCount: 78,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.00, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.44,
  ionization: 1007.1, // kJ/mol (First Ionization Energy; unusually high for a metal due to 6s contraction)
  successiveIonizationEnergies: [1007.1, 1810, 3300],
  electronAffinity: 0, // kJ/mol (Thermodynamically unfavorable due to stable closed shell)
  oxidation: "+2, +1", // Forms common salts; +1 state always occurs structurally as the dimeric cation $^{2+}Hg-Hg^{2+}$
  maximumOxidationState: 4, // Attained exclusively in transient matrix-isolation experiments ($HgF_4$)
  minimumOxidationState: 0,
  chemicalHardness: 3.84, // eV
  chemicalSoftness: 0.260, // eV⁻¹
  electrophilicityIndex: 0.50,
  polarizability: 5.7, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.85, // V (For Hg2+ + 2e- -> Hg)
  flameTestColor: "Pale blue-violet to greenish line spectra under electrical excitation",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 0, // l = 0 (s orbital outer configuration tracker)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.35, // Zeff via Slater's rules
  slatersShieldingConstant: 75.65,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -7.42, // eV
  workFunction: 4.49, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 200.592,
  massNumber: 202, // For Mercury-202
  neutronNumber: 122, // For Mercury-202
  isotopeCount: 34, // Hg-171 to Hg-204
  stableIsotopeCount: 7, // Hg-196, Hg-198, Hg-199, Hg-200, Hg-201, Hg-202, and Hg-204 (All naturally occurring terrestrial variations are stable)
  isotopicAbundance: {
    Hg196: 0.15,
    Hg198: 10.04,
    Hg199: 16.94, // High-activity NMR target nucleus with spin 1/2; highly valued for atomic magnetometers
    Hg200: 23.14,
    Hg201: 13.17, // Active NMR target nucleus with spin 3/2
    Hg202: 29.74, // Most naturally dominant stable isotope on Earth
    Hg204: 6.82
  },
  halfLife: "Stable", // For Mercury-202
  decayMode: "None", // For Mercury-202
  decayEnergy: null,
  nuclearSpin: 0, // For Hg-202 (Even-even pairing ensures 0 spin)
  magneticDipoleMoment: 0, // For Mercury-202
  neutronCrossSection: 375, // barns (High natural isotopic average thermal neutron absorption profile)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000001, // % by mass
  solarAbundance: 0.00000002, // % by mass
  crustalAbundance: 0.000008, // % by mass (0.08 mg/kg; trace chalcophile element primarily extracted from its red sulfide mineral cinnabar ($HgS$))
  oceanicAbundance: 6.0e-14, // % by mass
  humanBodyAbundance: null, // High cumulative neurotoxicity profile. Soluble mercury compounds and organic methylmercury ($CH_3Hg^+$) accumulate through marine food chains, causing severe neurological damage (Minamata disease). Readily dissolves other metals (except iron, platinum, and tantalum) to form solid or liquid solutions known as amalgams. Historically utilized in thermometers, barometers, and fluorescent lighting, its industrial use is heavily restricted in modern green engineering to avoid environmental pollution.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Generated primarily via rapid cosmic neutron capture branches (r-process) during stellar explosions, along with minor slow neutron adjustments (s-process)"
};
  

  
 
const thalliumData = {
  // 1. Fundamental Identity & Classification
  num: 81,
  symbol: "Tl",
  name: "Thallium",
  type: "Post-Transition Metal",
  group: 13,
  period: 6,
  block: "p",
  casRegistryNumber: "7440-28-0",
  discoverer: "William Crookes",
  year: 1861,
  originOfName: "Derived from the Greek word 'thallos', meaning a green shoot or twig, in reference to its bright green spectral emission lines",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 11.85, // g/cm³ at STP
  melting: 577, // Kelvin (304°C)
  boiling: 1746, // Kelvin (1473°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 17.22, // cm³/mol
  electricalConductivity: 6.7e6, // S/m
  electricalResistivity: 1.8e-7, // Ω·m at 20°C
  thermalConductivity: 46.1, // W/(m·K)
  thermalExpansionCoefficient: 28.0e-6, // K⁻¹ at 25°C
  speedOfSound: 818, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 1.2, // Extremely soft, malleable; can be easily cut with a knife or scratched with a fingernail
  hardnessVickers: 26.4, // MPa
  hardnessBrinell: 42.0, // MPa
  bulkModulus: 43.0, // GPa
  shearModulus: 2.8, // GPa
  youngsModulus: 8.0, // GPa
  poissonsRatio: 0.45,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Hexagonal close-packed (alpha phase, stable at room temperature) and body-centered cubic (beta phase, transitions above 230°C)
  color: "Silvery-gray metallic presentation; tarnishes rapidly in air to a dull bluish-gray oxide layer resembling lead",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.129, // J/(g·K)
  molarHeatCapacity: 26.32, // J/(mol·K)
  heatOfFusion: 4.14, // kJ/mol
  heatOfVaporization: 165, // kJ/mol
  heatOfAtomization: 181, // kJ/mol
  standardMolarEntropy: 64.18, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 2.38, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 170, // pm (Atomic radius)
  covalentRadius: 148, // pm
  vanderWaalsRadius: 196, // pm
  ionicRadius: 150, // pm (For Tl+ coordination number 6; Tl3+ is 88.5 pm)
  crystalStructure: "Hexagonal close-packed",
  latticeConstantA: 345.6, // pm
  latticeConstantB: 345.6, // pm
  latticeConstantC: 552.5, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 17.22, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 3",
  orbital: "[Xe] 4f14 5d10 6s2 6p1", // Relativistic stabilization of the 6s² pair causes the lone 6p electron to break away easily, driving monovalent chemistry
  valence: 1, // Tl+ is the dominant stable oxidation state due to the inert-pair effect, though Tl3+ is accessible in strongly oxidizing environments
  coreElectronCount: 78,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.62, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.44,
  ionization: 589.4, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [589.4, 1971, 2878],
  electronAffinity: 19.2, // kJ/mol
  oxidation: "+1, +3", // Monovalent thallium mimics alkali chemistry (like $K^+$), allowing it to easily slip into cellular ion channels
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 3.21, // eV
  chemicalSoftness: 0.312, // eV⁻¹
  electrophilicityIndex: 0.22,
  polarizability: 7.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.34, // V (For Tl+ + e- -> Tl)
  flameTestColor: "Intense, vivid green line spectral emission",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.50, // Zeff via Slater's rules
  slatersShieldingConstant: 76.50,
  termSymbol: "2P1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -5.78, // eV
  workFunction: 3.84, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 204.38,
  massNumber: 205, // For Thallium-205
  neutronNumber: 124, // For Thallium-205
  isotopeCount: 37, // Tl-176 to Tl-212
  stableIsotopeCount: 2, // Thallium-203 and Thallium-205 are fully stable
  isotopicAbundance: {
    Tl203: 29.52, // Active NMR target nucleus with spin 1/2
    Tl205: 70.48  // Most naturally dominant stable isotope on Earth (highly accurate NMR sensor nucleus)
  },
  halfLife: "Stable", // For Thallium-205 (Tl-201 is a vital cyclotron-produced gamma emitter with a 73-hour half-life used in medical cardiac stress testing)
  decayMode: "None", // For Thallium-205
  decayEnergy: null,
  nuclearSpin: 0.5, // 1/2 for Tl-205
  magneticDipoleMoment: 1.6382, // nuclear magnetons
  neutronCrossSection: 3.4, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0000000005, // % by mass
  solarAbundance: 0.0000000007, // % by mass
  crustalAbundance: 0.00008, // % by mass (0.8 mg/kg; trace chalcophile element found in potassium-bearing minerals and sulfide ores)
  oceanicAbundance: 1.3e-14, // % by mass
  humanBodyAbundance: null, // High extreme systemic toxicity profile. Tl+ ions mimic potassium ($K^+$) inside the body, disrupting the vital Na+/K+-ATPase pump and causing devastating neurological damage, blindness, and signature hair loss. Historically used as a rodenticide and ant killer before strict global bans. Specialized modern uses include thallium-doped sodium iodide crystals for scintillation detectors and thallium bromoiodide (KRS-5) optics for specialized infrared instrumentation.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Forged primarily via slow stellar neutron capture (s-process) in late-stage giant stars, with supplementary rapid capture (r-process) inputs from cosmic explosions"
};
  

  
 
const leadData = {
  // 1. Fundamental Identity & Classification
  num: 82,
  symbol: "Pb",
  name: "Lead",
  type: "Post-Transition Metal",
  group: 14,
  period: 6,
  block: "p",
  casRegistryNumber: "7439-92-1",
  discoverer: "Known since antiquity",
  year: -7000, // One of the earliest metals discovered and smelted by humans
  originOfName: "Derived from the Old English word 'lead'. The chemical symbol 'Pb' originates from the Latin word 'plumbum', meaning liquid silver or water-pipe material",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 11.34, // g/cm³ at STP (Highly dense, heavy post-transition metal)
  melting: 600.61, // Kelvin (327.46°C)
  boiling: 2022, // Kelvin (1749°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 18.26, // cm³/mol
  electricalConductivity: 4.8e6, // S/m (Relatively poor electrical conductor)
  electricalResistivity: 2.08e-7, // Ω·m at 20°C
  thermalConductivity: 35.3, // W/(m·K)
  thermalExpansionCoefficient: 28.9e-6, // K⁻¹ at 25°C
  speedOfSound: 1190, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 1.5, // Very soft; can be easily scratched with a fingernail or carved
  hardnessVickers: 38.3, // MPa
  hardnessBrinell: 37.3, // MPa
  bulkModulus: 46.0, // GPa
  shearModulus: 5.6, // GPa
  youngsModulus: 16.0, // GPa (Low elastic stiffness profile)
  poissonsRatio: 0.44,
  malleability: "Extremely High (Can be easily hammered, rolled, and formed at room temperature)",
  ductility: "Moderate (Tends to fracture if drawn into exceptionally fine wires)",
  allotropeCount: 1, // Face-centered cubic configuration remains the standard stable ambient matrix
  color: "Dull, bluish-gray metallic finish; freshly cut lead shows a bright, silvery-blue luster that rapidly tarnishes in air",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.129, // J/(g·K)
  molarHeatCapacity: 26.65, // J/(mol·K)
  heatOfFusion: 4.77, // kJ/mol
  heatOfVaporization: 179.5, // kJ/mol
  heatOfAtomization: 195, // kJ/mol
  standardMolarEntropy: 64.81, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 7.19, // Kelvin (A classic Type-I superconductor model)

  // 4. Atomic & Structural Variables
  radius: 175, // pm (Atomic radius)
  covalentRadius: 146, // pm
  vanderWaalsRadius: 202, // pm
  ionicRadius: 119, // pm (For Pb2+ coordination number 6; Pb4+ is 77.5 pm)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 495.1, // pm
  latticeConstantB: 495.1, // pm
  latticeConstantC: 495.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 18.26, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 4",
  orbital: "[Xe] 4f14 5d10 6s2 6p2", // Relativistic stabilization of the 6s² inner pair promotes a dominant divalent chemistry over tetravalent patterns
  valence: 2, // Divalent (+2) state is highly stable due to the inert-pair effect; tetravalent (+4) state is strongly oxidizing
  coreElectronCount: 78,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.33, // Pauling scale (Anomalously high due to relativistic effects on its valence electrons)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.55,
  ionization: 715.6, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [715.6, 1450.5, 3081.5, 4083],
  electronAffinity: 35.1, // kJ/mol
  oxidation: "+2, +4", // +2 dominates solution and mineral networks; +4 acts as an aggressive oxidizing agent (e.g., lead dioxide, $PbO_2$)
  maximumOxidationState: 4,
  minimumOxidationState: -4,
  chemicalHardness: 2.92, // eV
  chemicalSoftness: 0.342, // eV⁻¹
  electrophilicityIndex: 0.28,
  polarizability: 6.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -0.13, // V (For Pb2+ + 2e- -> Pb)
  flameTestColor: "Faint white-blue to dull gray incandescent light emissions",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tracking band)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.65, // Zeff via Slater's rules
  slatersShieldingConstant: 77.35,
  termSymbol: "3P0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -5.92, // eV
  workFunction: 4.25, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 207.2,
  massNumber: 208, // For Lead-208
  neutronNumber: 126, // For Lead-208 (Possesses a "double magic" nuclear configuration: 82 protons and 126 neutrons)
  isotopeCount: 38, // Pb-178 to Pb-215
  stableIsotopeCount: 4, // Lead-204, Lead-206, Lead-207, and Lead-208 (All are fully stable end-members of cosmic decay chains)
  isotopicAbundance: {
    Pb204: 1.40,  // Only stable lead isotope that is not radiogenic
    Pb206: 24.10, // Final stable end-product of the Uranium-238 decay series (Radium series)
    Pb207: 22.10, // Final stable end-product of the Uranium-235 decay series (Actinium series)
    Pb208: 52.40  // Final stable end-product of the Thorium-232 decay series; most abundant stable isotope
  },
  halfLife: "Stable", // For Lead-208
  decayMode: "None", // For Lead-208
  decayEnergy: null,
  nuclearSpin: 0, // For Pb-208 (Pb-207 has a nuclear spin of 1/2 and is active in NMR spectroscopy)
  magneticDipoleMoment: 0, // For Lead-208
  neutronCrossSection: 0.0002, // barns (Extremely low neutron capture cross-section due to closed nuclear shells)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000001, // % by mass
  solarAbundance: 0.000002, // % by mass
  crustalAbundance: 0.0014, // % by mass (14 mg/kg; chalcophile element primarily mined from the mineral galena ($PbS$))
  oceanicAbundance: 3.0e-12, // % by mass
  humanBodyAbundance: null, // Highly toxic cumulative heavy metal. Lead exposure mimics essential calcium ($Ca^{2+}$) and zinc ($Zn^{2+}$) ions, crossing the blood-brain barrier to cause irreversible neurological damage, developmental delays, and organ failure. It is heavily restricted globally in paints, fuels, and plumbing lines. However, it remains industrially critical for manufacturing heavy-duty lead-acid car batteries, underwater cable sheathing, radiation shielding around X-ray equipment and nuclear reactors, and high-density ballast weights.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Acts as the ultimate cosmic graveyard for heavy element radioactive decay; naturally generated via the stellar slow neutron capture process (s-process) and rapid capture process (r-process)"
};
  

  
 
const bismuthData = {
  // 1. Fundamental Identity & Classification
  num: 83,
  symbol: "Bi",
  name: "Bismuth",
  type: "Post-Transition Metal",
  group: 14,
  period: 6,
  block: "p",
  casRegistryNumber: "7440-69-9",
  discoverer: "Known since antiquity; definitively identified by Claude François Geoffroy",
  year: 1753,
  originOfName: "Derived from the German word 'Wismut' (perhaps meaning white mass or meadow metal), which was later Latinized into bismuthum",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 9.78, // g/cm³ at STP (Uniquely expands by about 3.32% upon solidifying from a melt, much like water ice)
  melting: 544.7, // Kelvin (271.5°C)
  boiling: 1837, // Kelvin (1564°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 21.31, // cm³/mol
  electricalConductivity: 9.0e5, // S/m (Unusually poor electrical conductor for a metal)
  electricalResistivity: 1.1e-6, // Ω·m at 20°C (Displays one of the highest Hall effects and magnetic resistance spikes)
  thermalConductivity: 7.9, // W/(m·K) (The lowest thermal conductivity of any pure metal except mercury)
  thermalExpansionCoefficient: 13.4e-6, // K⁻¹ at 25°C
  speedOfSound: 1790, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 2.25, // Hard, exceptionally brittle, and easily crushed; completely lacks standard metallic malleability
  hardnessVickers: 160, // MPa
  hardnessBrinell: 94.2, // MPa
  bulkModulus: 31.0, // GPa
  shearModulus: 12.0, // GPa
  youngsModulus: 32.0, // GPa
  poissonsRatio: 0.33,
  malleability: "Extremely Low",
  ductility: "Extremely Low",
  allotropeCount: 1, // Rhombohedral structure serves as its stable ambient standard phase
  color: "Silvery-white with a subtle pinkish-gold tint; often seen with an artificial, brilliantly iridescent rainbow oxide layer",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.122, // J/(g·K)
  molarHeatCapacity: 25.52, // J/(mol·K)
  heatOfFusion: 11.3, // kJ/mol
  heatOfVaporization: 151, // kJ/mol
  heatOfAtomization: 207, // kJ/mol
  standardMolarEntropy: 56.74, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.00053, // Kelvin (At normal pressure; transitions much higher under immense compressive stress)

  // 4. Atomic & Structural Variables
  radius: 156, // pm (Atomic radius)
  covalentRadius: 148, // pm
  vanderWaalsRadius: 207, // pm
  ionicRadius: 103, // pm (For Bi3+ coordination number 6; Bi5+ is 76 pm)
  crystalStructure: "Rhombohedral",
  latticeConstantA: 474.6, // pm
  latticeConstantB: 474.6, // pm
  latticeConstantC: 474.6, // pm
  axialAngleAlpha: 57.2,
  axialAngleBeta: 57.2,
  axialAngleGamma: 57.2,
  spaceGroup: "R-3m",
  coordinationNumber: 3, // Highly directional covalent bonding profile inside its layered crystalline matrix
  packingFraction: 0.45,
  atomicVolume: 21.31, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 5",
  orbital: "[Xe] 4f14 5d10 6s2 6p3", // Relativistic stabilization tightly locks down the inner 6s² pair, making the 3 electrons in 6p highly active
  valence: 3, // Trivalent behavior (+3) is standard and chemically stable; +5 is strongly oxidizing due to the inert-pair effect
  coreElectronCount: 78,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.02, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.67,
  ionization: 703.2, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [703.2, 1610, 2466, 4370, 5400],
  electronAffinity: 91.2, // kJ/mol
  oxidation: "+3, +5", // +3 is thoroughly dominant; +5 is rarely stable except in powerful compounds like sodium bismuthate ($NaBiO_3$)
  maximumOxidationState: 5,
  minimumOxidationState: -3,
  chemicalHardness: 3.10, // eV
  chemicalSoftness: 0.323, // eV⁻¹
  electrophilicityIndex: 0.38,
  polarizability: 7.4, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.32, // V (For Bi3+ + 3e- -> Bi)
  flameTestColor: "Faint light-blue to whitish line incandescent emission profile",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tracking band)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.80, // Zeff via Slater's rules
  slatersShieldingConstant: 78.20,
  termSymbol: "4S3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -6.10, // eV
  workFunction: 4.22, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 208.98040,
  massNumber: 209, // For Bismuth-209
  neutronNumber: 126, // For Bismuth-209 (Possesses a magic neutron count of 126)
  isotopeCount: 41, // Bi-184 to Bi-224
  stableIsotopeCount: 0, // Technically zero! Historically deemed the heaviest completely stable element until its radioactive nature was measured in 2003
  isotopicAbundance: {
    Bi209: 100.0 // 100% naturally occurring terrestrial abundance; treated as practically stable for all everyday applications
  },
  halfLife: "2.01e19 Years", // Extremely long-lived alpha emitter ($2.01 \times 10^{19}$ years, over a billion times the age of the universe)
  decayMode: "Alpha Decay", // For Bismuth-209 (Decays imperceptibly into Thallium-205)
  decayEnergy: 3.137, // MeV
  nuclearSpin: 4.5, // 9/2 for Bi-209 (Highly valuable NMR target nucleus despite its quadrupole nature)
  magneticDipoleMoment: 4.1106, // nuclear magnetons
  neutronCrossSection: 0.034, // barns (Extremely low neutron capture profile; highly useful as a liquid metal reactor coolant)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.00000001, // % by mass
  solarAbundance: 0.00000002, // % by mass
  crustalAbundance: 0.00002, // % by mass (0.2 mg/kg; remarkably non-toxic heavy element sourced from native veins and bismite ores)
  oceanicAbundance: 2.0e-14, // % by mass
  humanBodyAbundance: null, // Strikingly non-toxic; acts as a direct eco-friendly replacement for toxic lead in plumbing fixtures, soldering alloys, and hunting ammunition. Famously serves as the active active compound in bismuth subsalicylate ($C_7H_5BiO_4$) to treat gastrointestinal distress (Pepto-Bismol). Also highly valued for producing low-melting-point fusible alloys (such as Wood's metal) used in fire sprinkler triggers and thin-film bismuth telluride ($Bi_2Te_3$) thermoelectric cooling devices.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Represents the absolute termination point of the stellar slow neutron capture process (s-process) in heavy giant stars, beyond which alpha-decay cycling prevents further stable accumulation"
};
  

  
 
const poloniumData = {
  // 1. Fundamental Identity & Classification
  num: 84,
  symbol: "Po",
  name: "Polonium",
  type: "Post-Transition Metal", // Often classified alternatively as a metalloid due to its position on the periodic table boundary
  group: 16,
  period: 6,
  block: "p",
  casRegistryNumber: "7440-08-6",
  discoverer: "Marie Curie, Pierre Curie",
  year: 1898,
  originOfName: "Named after 'Polonia', the Latin name for Poland, honoring the native homeland of Marie Skłodowska-Curie",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 9.196, // g/cm³ at STP (Alpha allotrope density; Beta form is denser at 9.398 g/cm³)
  melting: 527, // Kelvin (254°C)
  boiling: 1235, // Kelvin (962°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 22.73, // cm³/mol
  electricalConductivity: 2.3e6, // S/m (Relatively typical metallic conductor performance profile)
  electricalResistivity: 4.0e-7, // Ω·m at 20°C
  thermalConductivity: 20.0, // W/(m·K)
  thermalExpansionCoefficient: 23.5e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Very soft, chemically volatile radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate",
  ductility: "Moderate",
  allotropeCount: 2, // Uniquely possesses a Simple Cubic structure (alpha-allotrope) at room temperature—the only element to do so natively—which transitions into a rhombohedral matrix (beta-allotrope) above 36°C
  color: "Silvery-gray post-transition metal; glows with a distinct, eerie blue luminescence in the dark caused by intense alpha-ionization of surrounding air atoms",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.125, // J/(g·K)
  molarHeatCapacity: 26.15, // J/(mol·K)
  heatOfFusion: 13.0, // kJ/mol
  heatOfVaporization: 102.9, // kJ/mol
  heatOfAtomization: 145, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 168, // pm (Atomic radius)
  covalentRadius: 146, // pm
  vanderWaalsRadius: 197, // pm
  ionicRadius: 94, // pm (For Po4+ coordination number 6; Po6+ is 67 pm)
  crystalStructure: "Simple cubic",
  latticeConstantA: 335.2, // pm
  latticeConstantB: 335.2, // pm
  latticeConstantC: 335.2, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Pm-3m",
  coordinationNumber: 6, // In its simple cubic matrix alpha configuration
  packingFraction: 0.52, // Incredibly low packing density structural pattern typical of simple cubic frameworks
  atomicVolume: 22.73, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 6",
  orbital: "[Xe] 4f14 5d10 6s2 6p4", // Chalkogen system configuration displaying heavy relativistic inner shielding profiles
  valence: 4, // Displays typical chemical oxidation states of +4 and +2; compound patterns resemble tellurium closely
  coreElectronCount: 78,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.0, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.76,
  ionization: 812.1, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [812.1, 1800, 2700, 3700, 5900, 7000],
  electronAffinity: 183.3, // kJ/mol
  oxidation: "+4, +2", // Stable compounds include polonium dioxide ($PoO_2$) and metal polonides ($Po^{2-}$) acting as true chalkogens
  maximumOxidationState: 6, // Highly unstable hexafluoride systems ($PoF_6$) are transiently recorded
  minimumOxidationState: -2,
  chemicalHardness: 3.25, // eV
  chemicalSoftness: 0.308, // eV⁻¹
  electrophilicityIndex: 0.58,
  polarizability: 8.0, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.76, // V (For Po4+ + 4e- -> Po)
  flameTestColor: "Bright white-blue ionization profiles with no stable thermal flame spectrum",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tier)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.95, // Zeff via Slater's rules
  slatersShieldingConstant: 79.05,
  termSymbol: "3P2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -6.85, // eV
  workFunction: 4.60, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 208.98243, // Derived from its longest-lived artificial configuration mass tracking
  massNumber: 209, // For Polonium-209
  neutronNumber: 125, // For Polonium-209
  isotopeCount: 42, // Po-186 to Po-227 (All isotopes are completely radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Po209: 0.0, // Synthetic artificial trace isotope profiles
    Po210: 0.0  // Key transient natural tracer isotope found in trace equilibrium levels inside Uranium-238 decay matrices
  },
  halfLife: "125.2 Years", // For Polonium-209 (Polonium-210 is far more common in extraction processes but has a short half-life of 138.376 days)
  decayMode: "Alpha Decay", // For Polonium-209 (Decays directly into Lead-205 via alpha emission)
  decayEnergy: 4.979, // MeV
  nuclearSpin: 4.5, // 9/2 for Po-209
  magneticDipoleMoment: -0.60, // nuclear magnetons
  neutronCrossSection: 0.030, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 2.0e-14, // % by mass (Extremely rare element; occurs exclusively as a transient daughter product in uranium decay chains, primarily sourced from pitchblende)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Extreme acute radiotoxicity profile. When ingested or inhaled, polonium-210 releases high-energy alpha particles directly into internal tissues, causing rapid cell destruction and fatal radiation poisoning. Because it emits virtually no gamma rays, it is incredibly difficult to detect with standard airport radiation monitors. Mainstream uses are highly specialized: mixed with beryllium to create compact neutron triggers for nuclear weapons, utilized as a high-density thermoelectric heat source for deep-space lunar rovers, and used in precision industrial anti-static brushes to eliminate dust on camera lenses and rolling film tracks.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Formed solely via ongoing natural radioactive planetary decay cascades from ancestral primordial uranium and thorium elements"
};
  

  
 
const astatineData = {
  // 1. Fundamental Identity & Classification
  num: 85,
  symbol: "At",
  name: "Astatine",
  type: "Metalloid", // Occupies the heavy reactive nonmetal/metalloid boundary under the halogen column
  group: 17,
  period: 6,
  block: "p",
  casRegistryNumber: "7440-68-8",
  discoverer: "Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segrè",
  year: 1940,
  originOfName: "Derived from the Greek word 'astatos', meaning unstable, due to its intense radioactive nature and rapid decay profiles",

  // 2. Bulk Physical Properties
  state: "Solid", // Predicted to be a volatile solid under ambient standards, though relativistic calculations suggest it may exhibit distinct metallic properties
  density: 6.4, // g/cm³ (Predicted baseline estimation for its condensed phase configuration)
  melting: 575, // Kelvin (302°C; estimated value)
  boiling: 610, // Kelvin (337°C; estimated value reflecting extreme volatility)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null, // Predicted to be a modest semiconductor or semi-metal due to relativistic effects bridging the halogen gap
  electricalResistivity: null,
  thermalConductivity: 1.7, // W/(m·K) (Estimated baseline)
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null,
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Low",
  ductility: "Low",
  allotropeCount: 1,
  color: "Unknown; hypothesized to possess a dark, metallic plum or black presentation, but any macro-scale sample would instantly vaporize itself from its own radioactive decay heat",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: 6.0, // kJ/mol (Estimated value)
  heatOfVaporization: 40.0, // kJ/mol (Estimated value)
  heatOfAtomization: 91, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 150, // pm (Estimated atomic radius)
  covalentRadius: 150, // pm
  vanderWaalsRadius: 202, // pm
  ionicRadius: 222, // pm (Predicted value for the astatide anion At-)
  crystalStructure: "Face-centered cubic", // Hypothesized condensed structural matrix structure
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: null,
  packingFraction: null,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 18, 7",
  orbital: "[Xe] 4f14 5d10 6s2 6p5", // Heaviest naturally occurring halogen structure with extreme spin-orbit coupling and relativistic modifications
  valence: 1, // Readily accepts an electron to form astatide ($At^-$), but can exhibit positive states like +1, +3, and +5 in complex polyhalides
  coreElectronCount: 78,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.2, // Pauling scale (The least electronegative of the known halogens; acts more electropositively than iodine)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.96,
  ionization: 899.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [899.0, 1590, 2900, 4100, 4900, 7300],
  electronAffinity: 233.0, // kJ/mol (Lowest electron affinity in the halogen family row)
  oxidation: "-1, +1, +3, +5", // Forms compounds like sodium astatide ($NaAt$), carbon tetraastatide ($CAt_4$), and intermediate astatates
  maximumOxidationState: 7, // Highly theoretical hypervalent states
  minimumOxidationState: -1,
  chemicalHardness: 2.72, // eV
  chemicalSoftness: 0.368, // eV⁻¹
  electrophilicityIndex: 0.52,
  polarizability: 8.4, // × 10⁻²⁴ cm³
  standardReductionPotential: 0.3, // V (Estimated for At + e- -> At-)
  flameTestColor: "Vaporizes immediately with intense ionization lines",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence configuration band)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.10, // Zeff via Slater's rules
  slatersShieldingConstant: 79.90,
  termSymbol: "2P3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: -7.15, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 210.0, // Based on its longest-lived radioactive nuclide tracking standard
  massNumber: 210, // For Astatine-210
  neutronNumber: 125, // For Astatine-210
  isotopeCount: 39, // At-191 to At-229 (Every single isotope is highly unstable and radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    At210: 0.0, // Synthetic artificial isotope profiles
    At211: 0.0  // Key isotope targeted for medical synthesis applications
  },
  halfLife: "8.1 Hours", // For Astatine-210 (Astatine-211 has a 7.21-hour half-life, making them the longest-lived variations)
  decayMode: "Electron Capture / Alpha Decay", // For Astatine-210 (Decays into Polonium-210 or Bismuth-206)
  decayEnergy: 3.981, // MeV
  nuclearSpin: 5, // For Astatine-210
  magneticDipoleMoment: -0.032, // nuclear magnetons
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 3.0e-24, // % by mass (The rarest naturally occurring element in Earth's crust; less than 30 grams exist globally at any single moment as transient intermediate decay products of uranium and thorium)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Extreme radiotoxicity profile due to its intense alpha-particle emission. Like iodine, injected astatine accumulates selectively in the thyroid gland, but its massive localized radiation output destroys tissue rapidly. This specific trait makes Astatine-211 a premier candidate for Targeted Alpha Therapy (TAT) in oncology—binding it to monoclonal antibodies to deliver lethal radiation directly to microscopic tumor cells while sparing surrounding healthy tissue.
  goldschmidtClassification: "Chalcophile", // Tends to bind alongside heavy metals and sulfur groupings rather than pure halogens
  nucleosynthesisPathway: "Generated solely as a fleeting, temporary branch during the ongoing radioactive decay cascades of primordial terrestrial uranium and actinium minerals"
};
  

  
 
const radonData = {
  // 1. Fundamental Identity & Classification
  num: 86,
  symbol: "Rn",
  name: "Radon",
  type: "Noble Gas",
  group: 18,
  period: 6,
  block: "p",
  casRegistryNumber: "10043-92-2",
  discoverer: "Ernest Rutherford, Robert Owens, Friedrich Ernst Dorn",
  year: 1899,
  originOfName: "Derived from the element 'radium', because it was first discovered as an emission product during radium's radioactive decay cascade",

  // 2. Bulk Physical Properties
  state: "Gas", // The heaviest naturally occurring noble gas under ambient conditions
  density: 9.73, // g/L at STP (Incredibly dense gas; roughly 8 times denser than standard atmosphere)
  melting: 202, // Kelvin (-71°C)
  boiling: 211.3, // Kelvin (-61.8°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: 377.4, // Kelvin (104.3°C)
  criticalPointPressure: 6.28, // MPa
  molarVolume: 22.4, // L/mol at STP
  electricalConductivity: null, // Non-conductive dielectric insulator gas
  electricalResistivity: null,
  thermalConductivity: 0.00361, // W/(m·K) (Extremely low thermal conductivity profile)
  thermalExpansionCoefficient: null,
  speedOfSound: 121, // m/s at 20°C (Extremely low acoustic speed due to massive molecular weight)
  refractiveIndex: 1.0009,
  hardnessMohs: null, // Gas phase
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "None",
  ductility: "None",
  allotropeCount: 1, // Exists as a monotonic gas; condenses into a face-centered cubic structure at deep cryogenic freezing thresholds
  color: "Colorless gas under standard conditions; condenses into a brilliant phosphorescent liquid/solid that glows with an intense yellow-to-orange-red light under cryogenic conditions",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.094, // J/(g·K)
  molarHeatCapacity: 20.79, // J/(mol·K)
  heatOfFusion: 3.28, // kJ/mol
  heatOfVaporization: 16.4, // kJ/mol
  heatOfAtomization: 0, // Monoatomic standard state
  standardMolarEntropy: 176.2, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 145, // pm (Van der Waals radius)
  covalentRadius: 145, // pm
  vanderWaalsRadius: 220, // pm
  ionicRadius: null, // Extremely unreactive monoatomic gas system
  crystalStructure: "Face-centered cubic (Cryogenic solid phase phase below -71°C)",
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12, // In its frozen solid configuration matrix
  packingFraction: 0.74,
  atomicVolume: 50.5, // cm³/mol (Highly expansive gas structure volume profile)
  bohr: "2, 8, 18, 32, 18, 8",
  orbital: "[Xe] 4f14 5d10 6s2 6p6", // Fully completed n=6 shell providing immense electronic stability
  valence: 0, // Classically zero; can be induced to form specialized covalent bonds with highly electronegative fluorine atoms under strict laboratory settings
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 2.2, // Pauling scale (Hypothetical calculation; highly electropositive for a noble gas due to massive size)
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 1037.0, // kJ/mol (First Ionization Energy; lowest in the noble gas family except for artificial oganesson)
  successiveIonizationEnergies: [1037.0, 2065, 2846],
  electronAffinity: 0, // kJ/mol (Thermodynamically unfavorable due to stable closed shell)
  oxidation: "0, +2, +6", // Heavily dominated by its native 0 state; laboratory synthesis yields radon difluoride ($RnF_2$) and suspected trioxides
  maximumOxidationState: 6,
  minimumOxidationState: 0,
  chemicalHardness: 3.42, // eV
  chemicalSoftness: 0.292, // eV⁻¹
  electrophilicityIndex: 0.44,
  polarizability: 6.0, // × 10⁻²⁴ cm³
  standardReductionPotential: null,
  flameTestColor: "Bright phosphorescent glow under intense discharge tube ionization profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 6,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence shell alignment)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.25, // Zeff via Slater's rules
  slatersShieldingConstant: 80.75,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -7.45, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 222.01758, // Standard mass benchmark mapped to its most stable, prominent natural variation
  massNumber: 222, // For Radon-222
  neutronNumber: 136, // For Radon-222
  isotopeCount: 39, // Rn-193 to Rn-231 (All variants are radioactive and highly unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Rn219: 0.0, // Actinon ( Fleeting trace product inside the Actinium-235 decay line)
    Rn220: 0.0, // Thoron (Fleeting tracer with a 55.6-second half-life inside the Thorium-232 line)
    Rn222: 0.0  // Radon (Most prominent natural tracer isotope emerging from the Uranium-238 chain)
  },
  halfLife: "3.8235 Days", // For Radon-222 (The longest-lived radon configuration)
  decayMode: "Alpha Decay", // For Radon-222 (Decays into Polonium-218, releasing energetic alpha radiation particles)
  decayEnergy: 5.590, // MeV
  nuclearSpin: 0, // For Radon-222 (Even-even pairing matches a net zero nuclear spin spin state)
  magneticDipoleMoment: 0, // For Radon-222
  neutronCrossSection: 0.72, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 4.0e-17, // % by mass (Incredibly rare transient trace element continuously generated by underground uranium and thorium deposits)
  oceanicAbundance: 1.0e-21, // % by mass
  humanBodyAbundance: null, // Highly hazardous environmental health concern. As a heavy gas, radon can seep out of bedrock, concrete, and soil, accumulating in poorly ventilated basements. When inhaled, its short-lived solid daughter isotopes (Polonium-218 and Polonium-214) trap themselves in lung tissue and emit localized alpha particles, making radon exposure the leading cause of lung cancer among non-smokers worldwide. Specialized applications include tracking underground fault lines for earthquake prediction, hydrologic tracing to locate groundwater discharge points, and targeted radiation therapy seed implants for specific oncology procedures.
  goldschmidtClassification: "Atmophile",
  nucleosynthesisPathway: "Continuously replenished in planetary crusts via ongoing radioactive decay lines starting from ancestral primordial uranium-238 and thorium-232 nuclides"
};
  

  
 
const franciumData = {
  // 1. Fundamental Identity & Classification
  num: 87,
  symbol: "Fr",
  name: "Francium",
  type: "Alkali Metal",
  group: 1,
  period: 7,
  block: "s",
  casRegistryNumber: "7440-73-5",
  discoverer: "Marguerite Perey",
  year: 1939,
  originOfName: "Named in honor of France, the native country of its discoverer, Marguerite Perey, who identified it at the Curie Institute",

  // 2. Bulk Physical Properties
  state: "Solid", // Predicted to be a solid at room temperature, though its melting point is close to ambient
  density: 2.48, // g/cm³ (Predicted baseline estimation for its condensed phase configuration)
  melting: 300, // Kelvin (27°C; estimated value)
  boiling: 950, // Kelvin (677°C; estimated value)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: 3.0e6, // S/m (Estimated relative performance profile)
  electricalResistivity: null,
  thermalConductivity: 15.0, // W/(m·K) (Estimated baseline)
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Predicted to be exceptionally soft, resembling cesium but highly unstable
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High (Predicted)",
  ductility: "High (Predicted)",
  allotropeCount: 1,
  color: "Highly lustrous, silvery metal in theory; however, it has never been observed in a visible macro-scale quantity due to intense radioactive self-heating which would instantly vaporize any large sample",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: 2.0, // kJ/mol (Estimated value)
  heatOfVaporization: 65.0, // kJ/mol (Estimated value)
  heatOfAtomization: 73, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 260, // pm (Estimated atomic radius; largest calculated radius in its period)
  covalentRadius: 242, // pm
  vanderWaalsRadius: 348, // pm
  ionicRadius: 180, // pm (Predicted value for the francium cation Fr+)
  crystalStructure: "Body-centered cubic", // Predicted structural orientation tracking with other group 1 alkali systems
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 18, 8, 1",
  orbital: "[Rn] 7s1", // Classic outermost s-block configuration dominated by massive relativistic contractions of the inner shells
  valence: 1, // Exclusively monovalent, forming the francium cation ($Fr^+$) in all predicted chemical environments
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.79, // Pauling scale (Slightly higher than cesium due to relativistic effects on the 7s electron shell)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 0.86,
  ionization: 380.0, // kJ/mol (First Ionization Energy; incredibly low but slightly higher than cesium due to relativistic valence stabilization)
  successiveIonizationEnergies: [380.0, 2100],
  electronAffinity: 44.0, // kJ/mol
  oxidation: "+1", // Exclusively monovalent; chemical traits track closely with cesium, forming highly soluble salts like francium chloride ($FrCl$)
  maximumOxidationState: 1,
  minimumOxidationState: 0,
  chemicalHardness: 1.74, // eV
  chemicalSoftness: 0.575, // eV⁻¹
  electrophilicityIndex: 0.32,
  polarizability: 48.0, // × 10⁻²⁴ cm³ (Extremely high electronic polarizability matrix)
  standardReductionPotential: -2.9, // V (Estimated for Fr+ + e- -> Fr)
  flameTestColor: "Crimson-red line emission tracking profile (Predicted via spectroscopic modeling)",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 0, // l = 0 (s orbital outer valence configuration electron)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.20, // Zeff via Slater's rules
  slatersShieldingConstant: 84.80,
  termSymbol: "2S1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -4.12, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 223.01973, // Based on its longest-lived natural radioisotope baseline
  massNumber: 223, // For Francium-223
  neutronNumber: 136, // For Francium-223
  isotopeCount: 34, // Fr-199 to Fr-232 (All variants are highly unstable and intensely radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Fr221: 0.0, // Fleeting daughter isotope found in trace quantities inside the Neptunium-237 decay line
    Fr223: 0.0  // Actinarium K (The most common natural tracer isotope, emerging via alpha decay of Actinium-227)
  },
  halfLife: "22 Minutes", // For Francium-223 (The absolute longest half-life of any francium nuclide)
  decayMode: "Beta Decay / Alpha Decay", // For Francium-223 (Roughly 98.8% beta decays into Radium-223; 1.2% alpha decays into Astatine-219)
  decayEnergy: 1.149, // MeV
  nuclearSpin: 1.5, // 3/2 for Francium-223
  magneticDipoleMoment: 1.17, // nuclear magnetons
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 1.0e-21, // % by mass (The second-rarest naturally occurring element in the crust behind astatine; less than 20–30 grams exist globally at any single moment within uranium ore deposits)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Complete lack of biological role due to extreme, rapid radiolytic destruction. Francium poses an extreme radiological hazard despite its brief existence. Because it decays so quickly, it has zero mainstream industrial or commercial applications. Its utilization is confined strictly to high-level physics research laboratories, where it is generated artificially in laser magneto-optical traps (MOTs) to study parity non-conservation in atoms and to probe structural characteristics of heavy nuclear frameworks.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Continuously sustained in planetary matrices solely as a brief intermediate step within the radioactive decay chains of ancestral uranium-235/actinium-227"
};
  

  
 
const radiumData = {
  // 1. Fundamental Identity & Classification
  num: 88,
  symbol: "Ra",
  name: "Radium",
  type: "Alkaline Earth Metal",
  group: 2,
  period: 7,
  block: "s",
  casRegistryNumber: "7440-14-4",
  discoverer: "Marie Skłodowska-Curie, Pierre Curie",
  year: 1898,
  originOfName: "Derived from the Latin word 'radius', meaning ray, due to the element's intense power of emitting energetic radioactive rays",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 5.5, // g/cm³ at STP (The heaviest and densest of all alkaline earth metals)
  melting: 973, // Kelvin (700°C)
  boiling: 2010, // Kelvin (1737°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 41.09, // cm³/mol
  electricalConductivity: 1.0e6, // S/m (Estimated relative metallic performance)
  electricalResistivity: 1.0e-6, // Ω·m at 20°C
  thermalConductivity: 18.6, // W/(m·K)
  thermalExpansionCoefficient: 20.2e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: 2.25, // Soft, highly reactive alkaline earth metal; slightly harder than pure cesium
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High",
  ductility: "Moderate",
  allotropeCount: 1, // Body-centered cubic structure forms its stable ambient crystalline matrix
  color: "Brilliant, pristine silvery-white metal when freshly isolated; reacts almost instantly with atmospheric nitrogen and oxygen to form a dull, pitch-black nitride/oxide surface layer",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.120, // J/(g·K)
  molarHeatCapacity: 27.12, // J/(mol·K)
  heatOfFusion: 8.5, // kJ/mol
  heatOfVaporization: 113, // kJ/mol
  heatOfAtomization: 159, // kJ/mol
  standardMolarEntropy: 56.0, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 215, // pm (Atomic radius)
  covalentRadius: 203, // pm
  vanderWaalsRadius: 283, // pm
  ionicRadius: 148, // pm (For Ra2+ coordination number 6)
  crystalStructure: "Body-centered cubic",
  latticeConstantA: 515.0, // pm
  latticeConstantB: 515.0, // pm
  latticeConstantC: 515.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: 41.09, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 8, 2",
  orbital: "[Rn] 7s2", // Divalent configuration with fully completed inner shells stabilized by relativistic effects
  valence: 2, // Consistently divalent, readily giving up two electrons to form the radium cation ($Ra^{2+}$)
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 0.9, // Pauling scale (The most electropositive and chemically active element in its group)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 0.97,
  ionization: 509.3, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [509.3, 979.0],
  electronAffinity: 9.6, // kJ/mol
  oxidation: "+2", // Highly predictable alkaline earth chemistry; salts closely track barium equivalents but exhibit significantly lower solubility
  maximumOxidationState: 2,
  minimumOxidationState: 0,
  chemicalHardness: 2.45, // eV
  chemicalSoftness: 0.408, // eV⁻¹
  electrophilicityIndex: 0.18,
  polarizability: 38.3, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.92, // V (For Ra2+ + 2e- -> Ra)
  flameTestColor: "Pure, vibrant carmine-red to crimson incandescent thermal line profile",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 0, // l = 0 (s orbital outer valence shell tracker)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.30, // Zeff via Slater's rules
  slatersShieldingConstant: 85.70,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -5.28, // eV
  workFunction: 3.30, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 226.02541, // Mapped directly to its most stable, historically prominent natural radioisotope
  massNumber: 226, // For Radium-226
  neutronNumber: 138, // For Radium-226
  isotopeCount: 33, // Ra-202 to Ra-234 (Every single isotope is entirely radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Ra223: 0.0, // Actinon decay line branch (used in targeted alpha medical treatment systems)
    Ra224: 0.0, // Thorium decay chain intermediate product
    Ra226: 0.0, // Naturally occurring uranium-238 daughter; the most stable and long-lived nuclide
    Ra228: 0.0  // Mesothorium 1 (Emerges inside the Thorium-232 decay network; 5.75-year half-life)
  },
  halfLife: "1600 Years", // For Radium-226
  decayMode: "Alpha Decay", // For Radium-226 (Decays into Radon-222 gas, releasing a high-energy helium nucleus)
  decayEnergy: 4.871, // MeV
  nuclearSpin: 0, // For Ra-226 (Even-even proton-neutron pairing defaults to 0 spin; Ra-225 possesses a spin of 1/2)
  magneticDipoleMoment: 0, // For Radium-226
  neutronCrossSection: 20, // barns

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0000000001, // % by mass (Roughly 1 part per trillion; occurs exclusively as a transient decay product in uranium ores like pitchblende)
  oceanicAbundance: 1.0e-17, // % by mass
  humanBodyAbundance: null, // High severe radiotoxicity profile. Radium acts as a direct chemical analog to calcium ($Ca^{2+}$); if ingested, the body mistakenly deposits it into bone matrices. The localized alpha radiation bombardment destroys bone marrow and mutates bone tissue, famously causing osteosarcoma in the "Radium Girls" watch dial painters of the early 20th century. Historically used in self-luminous paints and early cancer treatments. Today, Radium-223 is utilized in oncology as an targeted alpha-emitting radiopharmaceutical (Xofigo) to treat advanced prostate cancer that has metastasized to the bone structure.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Continuously replenished across terrestrial environments through the passive, ongoing radioactive breakdown chains of primordial uranium-238 and thorium-232"
};
  

  
 
const actiniumData = {
  // 1. Fundamental Identity & Classification
  num: 89,
  symbol: "Ac",
  name: "Actinium",
  type: "Actinide", // The foundational element that defines and kicks off the actinide series
  group: 3,
  period: 7,
  block: "d", // Classically sits in the d-block as a group 3 transition element before the 5f filling loop takes over
  casRegistryNumber: "7440-34-8",
  discoverer: "André-Louis Debierne",
  year: 1899,
  originOfName: "Derived from the Greek word 'aktinos', meaning ray or beam, due to its intense radioactivity",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 10.07, // g/cm³ at STP
  melting: 1323, // Kelvin (1050°C)
  boiling: 3473, // Kelvin (3200°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 22.54, // cm³/mol
  electricalConductivity: 2.0e6, // S/m (Estimated relative metallic threshold)
  electricalResistivity: null,
  thermalConductivity: 12.0, // W/(m·K) (Estimated baseline performance)
  thermalExpansionCoefficient: 14.9e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Soft radioactive metal similar in mechanical profile to lanthanum
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate",
  ductility: "Moderate",
  allotropeCount: 1, // Face-centered cubic forms its standard stable ambient structural phase matrix
  color: "Bright, lustrous silvery metal; glows in the dark with an eerie, intense blue light due to its heavy ionization of surrounding air atoms",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.120, // J/(g·K)
  molarHeatCapacity: 27.2, // J/(mol·K)
  heatOfFusion: 14.0, // kJ/mol
  heatOfVaporization: 400, // kJ/mol
  heatOfAtomization: 418, // kJ/mol
  standardMolarEntropy: 56.5, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 188, // pm (Atomic radius)
  covalentRadius: 215, // pm
  vanderWaalsRadius: 260, // pm
  ionicRadius: 111, // pm (For Ac3+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 531.1, // pm
  latticeConstantB: 531.1, // pm
  latticeConstantC: 531.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 22.54, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 9, 2",
  orbital: "[Rn] 6d1 7s2", // Starts the n=7 valence row with an empty 5f subshell under classic atomic ground-state definitions
  valence: 3, // Exclusively trivalent, quickly losing three valence electrons to form the stable actinium cation ($Ac^{3+}$)
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.1, // Pauling scale (Highly electropositive; shares strong chemical and behavioral traits with lanthanum)
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.00,
  ionization: 499.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [499.0, 1170, 1900],
  electronAffinity: 33.7, // kJ/mol
  oxidation: "+3", // Trivalent state completely dominates its chemistry; forms insoluble fluorides, hydroxides, and oxalates that mimic lanthanide separation lines
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.38, // eV
  chemicalSoftness: 0.420, // eV⁻¹
  electrophilicityIndex: 0.23,
  polarizability: 32.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.13, // V (For Ac3+ + 3e- -> Ac)
  flameTestColor: "Bright white-blue incandescent light emissions with no stable visible thermal line spectra",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.45, // Zeff via Slater's rules
  slatersShieldingConstant: 86.55,
  termSymbol: "2D3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 1/2
  atomicOrbitalEnergyLevel: -4.85, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 227.02775, // Grounded to its longest-lived natural tracer nuclide
  massNumber: 227, // For Actinium-227
  neutronNumber: 138, // For Actinium-227
  isotopeCount: 31, // Ac-206 to Ac-236 (Every isotope is radioactively unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Ac225: 0.0, // Trace intermediate alpha emitter found in minor localized thorium chains
    Ac227: 0.0  // Key natural tracer isotope found in equilibrium lines inside Uranium-235 ores
  },
  halfLife: "21.772 Years", // For Actinium-227
  decayMode: "Beta Decay / Alpha Decay", // For Actinium-227 (Roughly 98.6% beta decays into Thorium-227; 1.4% alpha decays into Francium-223)
  decayEnergy: 0.045, // MeV
  nuclearSpin: 1.5, // 3/2 for Actinium-227
  magneticDipoleMoment: 1.1, // nuclear magnetons
  neutronCrossSection: 810, // barns (Extremely high thermal neutron absorption cross-section)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 6.0e-14, // % by mass (Extremely rare; found in vanishingly small concentrations within uranium minerals like pitchblende)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Severe radiotoxicity profile. Actinium accumulates inside bone matrices and the liver if ingested, where its energetic decay pathways destroy healthy cellular tissue. Because it is so scarce, it has no general industrial uses. However, it is highly critical in cutting-edge nuclear medicine: Actinium-225 is an elite radionuclide used in Targeted Alpha Therapy (TAT) to eliminate prostate tumors and leukemia cells by delivering high-energy alpha radiation directly to cancer sites without damaging distant tissue.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Continuously sustained across mineral matrices via the slow, natural radioactive decay cascades of ancestral primordial uranium-235"
};
  

  
 
const thoriumData = {
  // 1. Fundamental Identity & Classification
  num: 90,
  symbol: "Th",
  name: "Thorium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-29-1",
  discoverer: "Jöns Jacob Berzelius",
  year: 1828,
  originOfName: "Named after Thor, the ancient Norse god of thunder",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 11.72, // g/cm³ at STP
  melting: 2028, // Kelvin (1755°C)
  boiling: 5061, // Kelvin (4788°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 19.8, // cm³/mol
  electricalConductivity: 6.7e6, // S/m
  electricalResistivity: 1.5e-7, // Ω·m at 20°C
  thermalConductivity: 54.0, // W/(m·K)
  thermalExpansionCoefficient: 11.0e-6, // K⁻¹ at 25°C
  speedOfSound: 2490, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 3.0, // Soft, highly malleable and ductile pure metal; easily cut or shaped
  hardnessVickers: 350, // MPa
  hardnessBrinell: 294, // MPa
  bulkModulus: 54.0, // GPa
  shearModulus: 31.0, // GPa
  youngsModulus: 79.0, // GPa
  poissonsRatio: 0.27,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Face-centered cubic (alpha phase, stable at room temperature) and body-centered cubic (beta phase, transitions above 1360°C)
  color: "Lustrous, silvery-white metal; slowly oxidizes in air over time to a dark gray or pitch-black thorium dioxide finish",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.113, // J/(g·K)
  molarHeatCapacity: 26.23, // J/(mol·K)
  heatOfFusion: 13.8, // kJ/mol
  heatOfVaporization: 514, // kJ/mol
  heatOfAtomization: 598, // kJ/mol
  standardMolarEntropy: 53.4, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 1.4, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 179, // pm (Atomic radius)
  covalentRadius: 175, // pm
  vanderWaalsRadius: 245, // pm
  ionicRadius: 94, // pm (For Th4+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 508.4, // pm
  latticeConstantB: 508.4, // pm
  latticeConstantC: 508.4, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 19.8, // cm³/mol
  bohr: "2, 8, 18, 32, 18, 10, 2",
  orbital: "[Rn] 6d2 7s2", // Anomalous actinide configuration; the 5f subshell remains completely empty in the neutral ground state atom
  valence: 4, // Highly stable tetravalent state (+4) completely dominates its structural chemistry
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.11,
  ionization: 587.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [587.0, 1110, 1930, 2780],
  electronAffinity: 60.0, // kJ/mol
  oxidation: "+4", // The +4 state is standard; lower states are rare or confined to transient organometallic species
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 3.01, // eV
  chemicalSoftness: 0.332, // eV⁻¹
  electrophilicityIndex: 0.32,
  polarizability: 32.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.83, // V (For Th4+ + 4e- -> Th)
  flameTestColor: "Bright white sparks with no baseline thermal line spectrum",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital tracking electron)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.60, // Zeff via Slater's rules
  slatersShieldingConstant: 87.40,
  termSymbol: "3F2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: -5.11, // eV
  workFunction: 3.45, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 232.0377,
  massNumber: 232, // For Thorium-232
  neutronNumber: 142, // For Thorium-232
  isotopeCount: 30, // Th-209 to Th-238 (All variants are radioactive)
  stableIsotopeCount: 0, // No stable isotopes exist, but Th-232 has an exceptionally long half-life
  isotopicAbundance: {
    Th228: 0.0,  // Radiothorium (intermediate step inside the Thorium-232 decay network)
    Th230: 0.0,  // Ionium (intermediate step inside the Uranium-238 decay line)
    Th232: 100.0 // Virtually 100% of all natural terrestrial thorium occurs as this primordial nuclide
  },
  halfLife: "14.05e9 Years", // For Thorium-232 (Slightly longer than the current age of the universe)
  decayMode: "Alpha Decay", // For Thorium-232 (Decays down through the classic Thorium Series to end at Lead-208)
  decayEnergy: 4.083, // MeV
  nuclearSpin: 0, // For Thorium-232 (Even-even pairing guarantees a spin state of 0)
  magneticDipoleMoment: 0, // For Thorium-232
  neutronCrossSection: 7.4, // barns (Thermal neutron capture cross-section)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000004, // % by mass
  solarAbundance: 0.000000005, // % by mass
  crustalAbundance: 0.00096, // % by mass (9.6 mg/kg; three times more abundant than uranium, primarily extracted from monazite sand)
  oceanicAbundance: 4.0e-13, // % by mass
  humanBodyAbundance: null, // Toxic primarily as a radioactive internal alpha-particle emitter. Chronic inhalation of dust increases lung and bone cancer risks. High industrial value due to its exceptional thermal stability: thorium dioxide ($ThO_2$) has the highest melting point of any oxide (3390°C) and was historically used in gas camping mantles. It is alloyed with magnesium to build high-performance aircraft parts and used in specialized high-refractive-index camera lenses. It is most famous as a potential clean energy source: it is a fertile material that can absorb a neutron to transmute into fissile Uranium-233, making it the core element for safer, proliferation-resistant Thorium Molten Salt Reactors (MSRs).
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged via rapid cosmic neutron capture cascades (r-process) during violent binary neutron star mergers and core-collapse supernovae events"
};
  

  
 
const protactiniumData = {
  // 1. Fundamental Identity & Classification
  num: 91,
  symbol: "Pa",
  name: "Protactinium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-13-3",
  discoverer: "Oswald Helmuth Göhring, Kasimir Fajans, Lise Meitner, Otto Hahn",
  year: 1913,
  originOfName: "Derived from the Greek word 'protos' (meaning first or ancestor) combined with actinium, because it acts as the immediate radioactive precursor that decays into actinium via alpha emission",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 15.37, // g/cm³ at STP (Highly dense, heavy radioactive actinide metal)
  melting: 1841, // Kelvin (1568°C)
  boiling: 4300, // Kelvin (4027°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 15.0, // cm³/mol
  electricalConductivity: 5.6e6, // S/m
  electricalResistivity: 1.77e-7, // Ω·m at 20°C
  thermalConductivity: 47.0, // W/(m·K)
  thermalExpansionCoefficient: 9.9e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Estimated to possess a structural hardness similar to uranium
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate",
  ductility: "Moderate",
  allotropeCount: 2, // Body-centered tetragonal (alpha phase, stable at room temperature) and body-centered cubic (beta phase, transitions above 1200°C)
  color: "Bright, silvery-metallic appearance; slowly tarnishes in the atmosphere to form a thin, protective oxide coat",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.121, // J/(g·K)
  molarHeatCapacity: 28.0, // J/(mol·K)
  heatOfFusion: 12.3, // kJ/mol
  heatOfVaporization: 481, // kJ/mol
  heatOfAtomization: 570, // kJ/mol
  standardMolarEntropy: 51.9, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 1.4, // Kelvin (Becomes superconductive at extreme cryogenic temperatures)

  // 4. Atomic & Structural Variables
  radius: 163, // pm (Atomic radius)
  covalentRadius: 161, // pm
  vanderWaalsRadius: 240, // pm
  ionicRadius: 90, // pm (For Pa5+ coordination number 6; Pa4+ is 101 pm)
  crystalStructure: "Body-centered tetragonal", // Unique ambient structure among early actinides
  latticeConstantA: 392.5, // pm
  latticeConstantB: 392.5, // pm
  latticeConstantC: 323.8, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "I4/mmm",
  coordinationNumber: 10, // Highly complex packing coordination in its tetragonal matrix
  packingFraction: 0.70,
  atomicVolume: 15.0, // cm³/mol
  bohr: "2, 8, 18, 32, 20, 9, 2",
  orbital: "[Rn] 5f2 6d1 7s2", // Marks the definitive structural initialization of the active 5f subshell configuration
  valence: 5, // Pentavalent (+5) state is highly stable and dominates its solution and solid-state chemistry
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.5, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.14,
  ionization: 568.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [568.0, 1128, 2083, 2987],
  electronAffinity: 53.0, // kJ/mol
  oxidation: "+5, +4", // Pentavalent state tracks closely with tantalum and niobium chemistry; forms highly insoluble pentoxides ($Pa_2O_5$)
  maximumOxidationState: 5,
  minimumOxidationState: 0,
  chemicalHardness: 2.85, // eV
  chemicalSoftness: 0.351, // eV⁻¹
  electrophilicityIndex: 0.40,
  polarizability: 24.3, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.49, // V (For Pa5+ + 5e- -> Pa)
  flameTestColor: "Vaporizes with intense multi-line radioactive emission tracking traits",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tracking electron)
  magneticQuantumNumber: -3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.75, // Zeff via Slater's rules
  slatersShieldingConstant: 88.25,
  termSymbol: "4I11/2",
  totalAngularMomentumQuantumNumber: 5.5, // J = 11/2
  atomicOrbitalEnergyLevel: -5.24, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 231.03588,
  massNumber: 231, // For Protactinium-231
  neutronNumber: 140, // For Protactinium-231
  isotopeCount: 29, // Pa-211 to Pa-239 (All variants are radioactive and highly unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Pa231: 100.0, // Accounts for practically all naturally occurring terrestrial protactinium
    Pa234: 0.0    // Uranium X2 / Brevium (Fleeting beta emitter with a 1.17-minute half-life within the Uranium-238 cascade)
  },
  halfLife: "3.276e4 Years", // For Protactinium-231
  decayMode: "Alpha Decay", // For Protactinium-231 (Decays directly into Actinium-227)
  decayEnergy: 5.149, // MeV
  nuclearSpin: 1.5, // 3/2 for Protactinium-231 (Active target for nuclear structure tracking)
  magneticDipoleMoment: 2.01, // nuclear magnetons
  neutronCrossSection: 211, // barns (High thermal neutron absorption cross-section)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.00000000001, // % by mass (Highly scarce; trace intermediate daughter product generated inside Uranium-235 ores like pitchblende)
  oceanicAbundance: 2.0e-20, // % by mass
  humanBodyAbundance: null, // High extreme radiotoxicity profile. Inhaled or ingested protactinium selective concentrates in bone matrices, the liver, and kidneys, where alpha emissions cause rapid cellular breakdown and oncogenesis. Due to its extreme scarcity, high radiotoxicity, and tendency to easily hydrolyze and precipitate out of solutions, protactinium has zero commercial or mainstream industrial uses. Its application is strictly limited to high-level nuclear physics and geological research, where the ratio of protactinium-231 to uranium-235 is used in radiometric dating models to analyze marine sediments up to 175,000 years old.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Continuously maintained inside terrestrial deposits solely as a fleeting intermediate branch within the natural radioactive decay chain of primordial uranium-235"
};
  

  
 
const uraniumData = {
  // 1. Fundamental Identity & Classification
  num: 92,
  symbol: "U",
  name: "Uranium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-61-1",
  discoverer: "Martin Heinrich Klaproth",
  year: 1789,
  originOfName: "Named after the planet Uranus, which had been discovered by William Herschel just eight years prior in 1781",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 19.10, // g/cm³ at STP (Extremely dense, heavy actinide metal)
  melting: 1405.3, // Kelvin (1132.2°C)
  boiling: 4404, // Kelvin (4131°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 12.46, // cm³/mol
  electricalConductivity: 3.4e6, // S/m
  electricalResistivity: 2.8e-7, // Ω·m at 20°C
  thermalConductivity: 27.5, // W/(m·K)
  thermalExpansionCoefficient: 13.9e-6, // K⁻¹ at 25°C
  speedOfSound: 3150, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: 6.0, // Hard, heavy, and highly scratch-resistant; significantly harder than thorium
  hardnessVickers: 1960, // MPa
  hardnessBrinell: 2400, // MPa
  bulkModulus: 100, // GPa
  shearModulus: 43, // GPa
  youngsModulus: 208, // GPa
  poissonsRatio: 0.23,
  malleability: "Moderate (Becomes highly workable and malleable when heated)",
  ductility: "Moderate",
  allotropeCount: 3, // Orthorhombic (alpha phase, stable up to 667°C), Tetragonal (beta phase, up to 775°C), and Body-centered cubic (gamma phase, up to melting point)
  color: "Bright silvery-white metallic finish when freshly polished; rapidly develops a dark gray to pitch-black surface layer due to atmospheric oxidation",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.116, // J/(g·K)
  molarHeatCapacity: 27.67, // J/(mol·K)
  heatOfFusion: 9.14, // kJ/mol
  heatOfVaporization: 417, // kJ/mol
  heatOfAtomization: 536, // kJ/mol
  standardMolarEntropy: 50.2, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.2, // Kelvin (Exhibits Type-I superconductivity under extreme cryogenic thresholds)

  // 4. Atomic & Structural Variables
  radius: 138, // pm (Atomic radius)
  covalentRadius: 160, // pm
  vanderWaalsRadius: 240, // pm
  ionicRadius: 89, // pm (For U4+ coordination number 6; U6+ is 73 pm)
  crystalStructure: "Orthorhombic (Alpha phase at room temperature)",
  latticeConstantA: 285.4, // pm
  latticeConstantB: 586.9, // pm
  latticeConstantC: 495.5, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Cmcm",
  coordinationNumber: 12, // Highly asymmetric orthorhombic layer coordination
  packingFraction: 0.64,
  atomicVolume: 12.46, // cm³/mol
  bohr: "2, 8, 18, 32, 21, 9, 2",
  orbital: "[Rn] 5f3 6d1 7s2", // Standard active filling configuration of the 5f subshell array
  valence: 6, // Highly variable valence; +6 and +4 oxidation states are the most stable and chemically active
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.38, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.22,
  ionization: 597.6, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [597.6, 1420, 1900, 3145],
  electronAffinity: 50.9, // kJ/mol
  oxidation: "+6, +4, +3", // Uranyl ion ($UO_2^{2+}$) dominates hexavalent (+6) aqueous chemistry; +4 states form stable insoluble dioxides ($UO_2$)
  maximumOxidationState: 6,
  minimumOxidationState: 0,
  chemicalHardness: 2.80, // eV
  chemicalSoftness: 0.357, // eV⁻¹
  electrophilicityIndex: 0.35,
  polarizability: 21.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.66, // V (For U3+ + 3e- -> U)
  flameTestColor: "Bright white-yellow thermal incandescence with massive multi-line spark arcs",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 2.90, // Zeff via Slater's rules
  slatersShieldingConstant: 89.10,
  termSymbol: "5I4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: -5.35, // eV
  workFunction: 3.63, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 238.02891,
  massNumber: 238, // For Uranium-238
  neutronNumber: 146, // For Uranium-238
  isotopeCount: 27, // U-217 to U-243 (All isotopes are inherently radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    U234: 0.005,  // Fleet-lived radiogenic equilibrium isotope from the U-238 decay cascade
    U235: 0.720,  // The only naturally occurring, primordial isotope capable of sustaining a nuclear fission chain reaction
    U238: 99.275  // Highly abundant primordial nuclide; the foundational parent of the Radium decay series
  },
  halfLife: "4.468e9 Years", // For Uranium-238 (Roughly the age of the Earth)
  decayMode: "Alpha Decay", // For Uranium-238 (Decays down to Lead-206)
  decayEnergy: 4.270, // MeV
  nuclearSpin: 0, // For Uranium-238 (Even-even pairing. Uranium-235 has a spin of 7/2)
  magneticDipoleMoment: 0, // For Uranium-238
  neutronCrossSection: 2.68, // barns (Thermal capture cross-section for U-238; U-235 has a massive fission cross-section of 585 barns)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.000000002, // % by mass
  solarAbundance: 0.000000003, // % by mass
  crustalAbundance: 0.00027, // % by mass (2.7 mg/kg; relatively common, more abundant than silver or mercury, mined from uraninite/pitchblende)
  oceanicAbundance: 3.3e-7, // % by mass
  humanBodyAbundance: null, // Chemically toxic to the kidneys (nephrotoxicity) as a heavy metal, alongside long-term internal alpha-particle radiological hazards. Uranium is the foundational element of modern nuclear technologies. Natural uranium is enriched to increase the concentration of fissile U-235. It powers commercial nuclear reactors worldwide for clean electricity generation and provides critical isotopes for medicine. Depleted uranium (mostly U-238 left after enrichment) is used for high-density armor-piercing ammunition and radiation shielding due to its immense density. Historically, trace amounts were used in "Vaseline glass" to produce a vivid green fluorescence under UV light.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Forged exclusively during cosmic rapid neutron capture cascades (r-process) within extreme energetic events like binary neutron star collisions and core-collapse supernovae"
};
  

  
 
const neptuniumData = {
  // 1. Fundamental Identity & Classification
  num: 93,
  symbol: "Np",
  name: "Neptunium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7439-96-5",
  discoverer: "Edwin McMillan, Philip Abelson",
  year: 1940,
  originOfName: "Named after the planet Neptune, following the periodic trend since it directly succeeds uranium (named after Uranus)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 20.45, // g/cm³ at STP (Extremely dense actinide metal)
  melting: 917, // Kelvin (644°C; unusually low melting point for a heavy metal)
  boiling: 4175, // Kelvin (3902°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 11.59, // cm³/mol
  electricalConductivity: 8.3e5, // S/m
  electricalResistivity: 1.2e-6, // Ω·m at 20°C
  thermalConductivity: 6.3, // W/(m·K)
  thermalExpansionCoefficient: 27.5e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Hard, malleable radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High",
  ductility: "Moderate",
  allotropeCount: 3, // Orthorhombic (alpha phase, stable up to 280°C), Tetragonal (beta phase, up to 577°C), and Body-centered cubic (gamma phase, up to melting point)
  color: "Bright, silvery-metallic luster when freshly cut; tarnishes slowly in air to form a light, matte oxide film",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.120, // J/(g·K)
  molarHeatCapacity: 29.62, // J/(mol·K)
  heatOfFusion: 3.20, // kJ/mol
  heatOfVaporization: 336, // kJ/mol
  heatOfAtomization: 465, // kJ/mol
  standardMolarEntropy: 50.46, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 130, // pm (Atomic radius)
  covalentRadius: 155, // pm
  vanderWaalsRadius: 221, // pm
  ionicRadius: 87, // pm (For Np4+ coordination number 6; Np3+ is 101 pm)
  crystalStructure: "Orthorhombic (Alpha phase at room temperature)",
  latticeConstantA: 472.3, // pm
  latticeConstantB: 488.7, // pm
  latticeConstantC: 666.3, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Pnam",
  coordinationNumber: 12,
  packingFraction: 0.68,
  atomicVolume: 11.59, // cm³/mol
  bohr: "2, 8, 18, 32, 22, 9, 2",
  orbital: "[Rn] 5f4 6d1 7s2", // Continuation of the active 5f subshell filling process
  valence: 5, // Highly variable valence; +5 is the most stable state in aqueous solutions, though +3, +4, +6, and +7 are accessible
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.36, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.22,
  ionization: 604.5, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [604.5, 1128, 1997, 3242],
  electronAffinity: 45.8, // kJ/mol
  oxidation: "+5, +4, +3, +6", // The neptunyl ion ($NpO_2^+$) characterizes its dominant solution chemistry
  maximumOxidationState: 7, // Reached in highly basic environments ($NpO_5^{3-}$)
  minimumOxidationState: 0,
  chemicalHardness: 2.76, // eV
  chemicalSoftness: 0.362, // eV⁻¹
  electrophilicityIndex: 0.38,
  polarizability: 20.2, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.86, // V (For Np3+ + 3e- -> Np)
  flameTestColor: "Vaporizes with intense, complex multi-line radioactive emission profiles",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tracking)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.05, // Zeff via Slater's rules
  slatersShieldingConstant: 89.95,
  termSymbol: "6H5/2",
  totalAngularMomentumQuantumNumber: 2.5, // J = 5/2
  atomicOrbitalEnergyLevel: -5.42, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 237.0482, // Standard baseline anchored to its longest-lived, most structurally important isotope
  massNumber: 237, // For Neptunium-237
  neutronNumber: 144, // For Neptunium-237
  isotopeCount: 25, // Np-222 to Np-244 (All isotopes are entirely radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Np237: 100.0, // Preeminent synthetic and trace isotope; forms the baseline for macro-scale calculations
    Np239: 0.0    // Fleet-lived intermediate step (2.35-day half-life) crucial in the production of Plutonium-239
  },
  halfLife: "2.144e6 Years", // For Neptunium-237
  decayMode: "Alpha Decay", // For Neptunium-237 (Decays down through the Neptunium Series to stabilize at Bismuth-209)
  decayEnergy: 4.959, // MeV
  nuclearSpin: 2.5, // 5/2 for Neptunium-237 (Active NMR target for actinide structure mapping)
  magneticDipoleMoment: 3.14, // nuclear magnetons
  neutronCrossSection: 180, // barns (Thermal capture cross-section)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Extensively synthetic element; occurs only in hyper-trace quantities in uranium ores via rare neutron capture events ($^{238}U + n \rightarrow ^{239}U \rightarrow ^{239}Np \rightarrow ^{239}Pu$)
  oceanicAbundance: null,
  humanBodyAbundance: null, // High severe radiotoxicity profile. Neptunium accumulates selectively in bone tissue and the liver if absorbed, where its energetic alpha particle emissions pose a significant risk of bone cancer and genetic mutation. Industrially, neptunium-237 serves as the critical target material in nuclear reactors to be bombarded with neutrons to produce Plutonium-238, which is used to power radioisotope thermoelectric generators (RTGs) for deep-space missions. Additionally, because it has a critical mass of roughly 60 kilograms and can undergo fast neutron fission, it remains a heavily tracked material under international non-proliferation safeguards.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthetically bred via targeted neutron irradiation of uranium fuel matrices within nuclear reactors; naturally generated only as a brief step in rare crustal neutron-capture anomalies"
};
  

  
 
const plutoniumData = {
  // 1. Fundamental Identity & Classification
  num: 94,
  symbol: "Pu",
  name: "Plutonium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-07-5",
  discoverer: "Glenn T. Seaborg, Arthur Wahl, Joseph W. Kennedy, Edwin McMillan",
  year: 1940,
  originOfName: "Named after the dwarf planet Pluto, following the pattern established with uranium (Uranus) and neptunium (Neptune)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 19.816, // g/cm³ at STP (Alpha phase density; highly variable across phases)
  melting: 912.5, // Kelvin (639.4°C; remarkably low melting point for a heavy metal)
  boiling: 3501, // Kelvin (3228°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 12.06, // cm³/mol
  electricalConductivity: 6.7e5, // S/m (Very poor electrical conductor for a metal)
  electricalResistivity: 1.5e-6, // Ω·m at 20°C (Displays unique anomalous increase with temperature at cryo thresholds)
  thermalConductivity: 6.7, // W/(m·K) (Exceptionally low thermal conductivity)
  thermalExpansionCoefficient: 46.7e-6, // K⁻¹ (Alpha phase; exhibits massive, highly anomalous directional thermal expansion structural traits)
  speedOfSound: 2260, // m/s at 20°C
  refractiveIndex: null,
  hardnessMohs: null, // Hard and brittle in its alpha phase; becomes highly plastic and malleable when stabilized into gallium alloys
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 43.0, // GPa
  shearModulus: 43.5, // GPa
  youngsModulus: 96.0, // GPa
  poissonsRatio: 0.21,
  malleability: "Low in raw alpha phase; exceptionally high in stabilized delta phase alloys",
  ductility: "Low in raw alpha phase; highly ductile when thermal phase transitions enter the delta region (310°C–452°C)",
  allotropeCount: 6, // Unmatched structural complexity: Alpha, Beta, Gamma, Delta, Delta-prime, and Epsilon phases all exist under ambient pressure across narrow temperature jumps
  color: "Bright silvery metal when freshly prepared; rapidly oxidizes in air to a dull gray, yellow, or olive-green tarnish",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.130, // J/(g·K)
  molarHeatCapacity: 31.96, // J/(mol·K)
  heatOfFusion: 2.82, // kJ/mol
  heatOfVaporization: 343.5, // kJ/mol
  heatOfAtomization: 364, // kJ/mol
  standardMolarEntropy: 54.46, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 159, // pm (Atomic radius)
  covalentRadius: 160, // pm
  vanderWaalsRadius: 243, // pm
  ionicRadius: 86, // pm (For Pu4+ coordination number 6; Pu3+ is 100 pm)
  crystalStructure: "Simple Monoclinic (Alpha phase at room temperature)",
  latticeConstantA: 618.3, // pm
  latticeConstantB: 482.2, // pm
  latticeConstantC: 1096.3, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 101.79,
  axialAngleGamma: 90,
  spaceGroup: "P21/m",
  coordinationNumber: 12,
  packingFraction: 0.66,
  atomicVolume: 12.06, // cm³/mol
  bohr: "2, 8, 18, 32, 24, 8, 2",
  orbital: "[Rn] 5f6 7s2", // Complex 5f shell filling sequence with highly localized-to-delocalized electron transitions
  valence: 4, // Highly active multi-valence behavior; +4 is standard, but +3, +5, and +6 are readily stabilized in colorful aqueous ions
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.28, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.22,
  ionization: 584.7, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [584.7, 1125, 2080, 3330],
  electronAffinity: -48.0, // kJ/mol
  oxidation: "+4, +3, +5, +6", // Can simultaneously exist in four oxidation states within a single solution, producing a vibrant spectrum of colors
  maximumOxidationState: 7, // Achievable under harsh, highly basic oxidizing configurations
  minimumOxidationState: 0,
  chemicalHardness: 2.52, // eV
  chemicalSoftness: 0.397, // eV⁻¹
  electrophilicityIndex: 0.42,
  polarizability: 19.4, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.03, // V (For Pu3+ + 3e- -> Pu)
  flameTestColor: "Vaporizes with intense multi-line spark and deep radioactive glow patterns",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence allocation tracking)
  magneticQuantumNumber: -3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.20, // Zeff via Slater's rules
  slatersShieldingConstant: 90.80,
  termSymbol: "7F0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -5.48, // eV
  workFunction: 4.13, // eV

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 244.06420, // Grounded to its longest-lived, most stable synthetic isotope tracking reference
  massNumber: 239, // For Plutonium-239 (The standard fissile configuration mass)
  neutronNumber: 145, // For Plutonium-239
  isotopeCount: 20, // Pu-228 to Pu-247 (All variants are radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Pu238: 0.0, // High-energy alpha emitter used exclusively for thermal batteries
    Pu239: 0.0, // Primary artificial isotope bred for power production and defense systems
    Pu244: 0.0  // Longest-lived isotope; exists as a hyper-trace primordial survivor on Earth
  },
  halfLife: "24110 Years", // For Plutonium-239 (Plutonium-244 is the longest-lived at 80 million years; Plutonium-238 has a half-life of 87.7 years)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Plutonium-239 (Decays into Uranium-235)
  decayEnergy: 5.245, // MeV
  nuclearSpin: 0.5, // 1/2 for Plutonium-239 (Plutonium-238 and 240 have 0 spin due to even-even pairing)
  magneticDipoleMoment: 0.203, // nuclear magnetons
  neutronCrossSection: 1017, // barns (Massive thermal neutron fission cross-section for Pu-239)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 1.0e-20, // % by mass (Virtually non-existent naturally; occurs only in ultra-trace anomalies within uranium ores via neutron capture, or as fallout from 20th-century nuclear testing)
  oceanicAbundance: null,
  humanBodyAbundance: null, // Extreme radiological and chemical toxicity profile. Plutonium is a heavy bone-seeking element; if inhaled as fine dust, it embeds in lung tissue or migrates to bone matrices, where continuous alpha particle bombardment causes severe cellular damage, radiation sickness, and fatal carcinomas. Industrially, Plutonium-239 is highly critical as a fissile fuel: it is bred in nuclear reactors from abundant Uranium-238 and utilized in mixed oxide (MOX) fuels to generate commercial electricity. Plutonium-238, due to its intense alpha decay heat (producing about 0.57 watts per gram), is indispensable as the heat source for Radioisotope Thermoelectric Generators (RTGs) that power deep-space probes like Voyager, New Horizons, and Mars rovers.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Bred artificially via continuous neutron capture in nuclear reactors; minor historical trace levels created via cosmic r-process events before solar system formulation"
};
  

  
 
const americiumData = {
  // 1. Fundamental Identity & Classification
  num: 95,
  symbol: "Am",
  name: "Americium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-35-9",
  discoverer: "Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, Albert Ghiorso",
  year: 1944,
  originOfName: "Named after the Americas, analogous to its lanthanide homologue europium (named after Europe)",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 13.67, // g/cm³ at STP
  melting: 1449, // Kelvin (1176°C)
  boiling: 2880, // Kelvin (2607°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 17.63, // cm³/mol
  electricalConductivity: 1.5e6, // S/m
  electricalResistivity: 6.9e-7, // Ω·m at 20°C
  thermalConductivity: 10.0, // W/(m·K)
  thermalExpansionCoefficient: 7.5e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Soft, silvery, ductile radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 52.0, // GPa
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Double hexagonal close-packed (alpha phase, stable at room temperature) and face-centered cubic (beta phase, transitions above 1074°C)
  color: "Silvery-white metallic luster; tarnishes slowly in dry air to a dull finish",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.110, // J/(g·K)
  molarHeatCapacity: 26.74, // J/(mol·K)
  heatOfFusion: 14.4, // kJ/mol
  heatOfVaporization: 238.5, // kJ/mol
  heatOfAtomization: 284, // kJ/mol
  standardMolarEntropy: 55.4, // J/(mol·K)
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: 0.79, // Kelvin

  // 4. Atomic & Structural Variables
  radius: 173, // pm (Atomic radius)
  covalentRadius: 180, // pm
  vanderWaalsRadius: 244, // pm
  ionicRadius: 97.5, // pm (For Am3+ coordination number 6; Am4+ is 85 pm)
  crystalStructure: "Double hexagonal close-packed",
  latticeConstantA: 346.8, // pm
  latticeConstantB: 346.8, // pm
  latticeConstantC: 1124.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 17.63, // cm³/mol
  bohr: "2, 8, 18, 32, 25, 8, 2",
  orbital: "[Rn] 5f7 7s2", // Special stability due to a precisely half-filled 5f subshell ($5f^7$)
  valence: 3, // Trivalent (+3) state is the most stable and chemically dominant in solution, though +4, +5, and +6 can be synthetically forced
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 578.2, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [578.2, 1158, 2132, 3205],
  electronAffinity: 9.2, // kJ/mol
  oxidation: "+3, +4, +5, +6", // Trivalent states mimic lanthanide chemistry; higher states exist as oxo-cations like americyl ($AmO_2^+$ and $AmO_2^{2+}$)
  maximumOxidationState: 7, // Highly unstable, achieved only in specialized basic media
  minimumOxidationState: 0,
  chemicalHardness: 2.60, // eV
  chemicalSoftness: 0.385, // eV⁻¹
  electrophilicityIndex: 0.35,
  polarizability: 23.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.08, // V (For Am3+ + 3e- -> Am)
  flameTestColor: "Vaporizes with a distinctive, intense yellowish-float emission under discharge excitation",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tracking)
  magneticQuantumNumber: 3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.35, // Zeff via Slater's rules
  slatersShieldingConstant: 91.65,
  termSymbol: "8S7/2",
  totalAngularMomentumQuantumNumber: 3.5, // J = 7/2
  atomicOrbitalEnergyLevel: -5.56, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 243.06138, // Tied to its longest-lived, highly stable artificial isotope
  massNumber: 243, // For Americium-243
  neutronNumber: 148, // For Americium-243
  isotopeCount: 19, // Am-232 to Am-250 (All variants are radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Am241: 0.0, // Primary industrial isotope produced via beta decay of Plutonium-241
    Am243: 0.0  // Longest-lived isotope; produced via successive neutron captures on Plutonium-239
  },
  halfLife: "7370 Years", // For Americium-243 (Americium-241 has a half-life of 432.2 years)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Americium-243 (Decays into Neptunium-239)
  decayEnergy: 5.438, // MeV
  nuclearSpin: 2.5, // 5/2 for Americium-243 (Americium-241 also has a spin of 5/2)
  magneticDipoleMoment: 1.4, // nuclear magnetons
  neutronCrossSection: 74, // barns (Thermal capture cross-section for Am-243; Am-241 is around 600 barns)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic element; does not occur naturally in Earth's crust, but exists in microscopic quantities globally as fallout from historic atmospheric nuclear weapons testing
  oceanicAbundance: null,
  humanBodyAbundance: null, // High radiological hazard. If ingested or inhaled, americium selectively deposits in the skeleton and liver, where intense alpha emissions disrupt bone marrow and cause cellular malignancies. Despite being entirely synthetic, americium is the only transuranic element found in millions of households: Americium-241 is an exceptional alpha-particle source utilized in commercial ionization smoke detectors. The alpha rays ionize a tiny air chamber, maintaining a small electric current; smoke particles entering the chamber disrupt this current, triggering the alarm. It is also utilized as a portable gamma-ray source for radiography and thickness gauges, and its long-lived isotope Americium-243 is widely investigated as a target for nuclear waste transmutation.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthetically bred via intensive multi-neutron absorption cascades initiated upon uranium/plutonium target matrices inside nuclear reactors"
};
  

  
 
const curiumData = {
  // 1. Fundamental Identity & Classification
  num: 96,
  symbol: "Cm",
  name: "Curium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-51-9",
  discoverer: "Glenn T. Seaborg, Ralph A. James, Albert Ghiorso",
  year: 1944,
  originOfName: "Named in honor of Marie Skłodowska-Curie and Pierre Curie, pioneering researchers who laid the foundation for the field of radioactivity",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 13.51, // g/cm³ at STP (Dense, synthetic transuranic actinide)
  melting: 1613, // Kelvin (1340°C)
  boiling: 3383, // Kelvin (3110°C)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 18.28, // cm³/mol
  electricalConductivity: 1.1e6, // S/m (Estimated metallic threshold)
  electricalResistivity: 8.0e-7, // Ω·m at 20°C
  thermalConductivity: 10.0, // W/(m·K) (Estimated baseline)
  thermalExpansionCoefficient: 8.1e-6, // K⁻¹ at 25°C
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Hard, silvery, highly reactive metal structurally similar to gadolinium
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate",
  ductility: "Moderate",
  allotropeCount: 2, // Double hexagonal close-packed (alpha phase, stable at room temperature) and face-centered cubic (beta phase, transitions under high pressure)
  color: "Bright, silvery-white metallic presentation; glows with an eerie, faint purple-red light in the dark due to intense localized alpha radiation",

  // 3. Thermodynamic Variables
  specificHeatCapacity: 0.110, // J/(g·K)
  molarHeatCapacity: 27.0, // J/(mol·K)
  heatOfFusion: 15.0, // kJ/mol
  heatOfVaporization: 356, // kJ/mol
  heatOfAtomization: 387, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 174, // pm (Atomic radius)
  covalentRadius: 169, // pm
  vanderWaalsRadius: 245, // pm
  ionicRadius: 97, // pm (For Cm3+ coordination number 6; Cm4+ is 85 pm)
  crystalStructure: "Double hexagonal close-packed",
  latticeConstantA: 349.6, // pm
  latticeConstantB: 349.6, // pm
  latticeConstantC: 1133.1, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 18.28, // cm³/mol
  bohr: "2, 8, 18, 32, 25, 9, 2",
  orbital: "[Rn] 5f7 6d1 7s2", // Relativistic stabilization favors a precisely half-filled 5f subshell ($5f^7$) with a lone electron in the 6d shell
  valence: 3, // Trivalent (+3) state is highly stable and dominates its structural networks; tetravalent (+4) state occurs in specialized fluorides
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 581.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [581.0, 1196, 2284, 3866],
  electronAffinity: 27.0, // kJ/mol
  oxidation: "+3, +4", // Chemically resembles its lanthanide analog gadolinium; forms highly insoluble curium trioxide ($Cm_2O_3$)
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 2.56, // eV
  chemicalSoftness: 0.391, // eV⁻¹
  electrophilicityIndex: 0.34,
  polarizability: 22.3, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.06, // V (For Cm3+ + 3e- -> Cm)
  flameTestColor: "Vaporizes with intense, multi-line radioactive line emissions under ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tracking)
  magneticQuantumNumber: 3, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.50, // Zeff via Slater's rules
  slatersShieldingConstant: 92.50,
  termSymbol: "9D4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: -5.62, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 247.07035, // Anchored to its longest-lived, most neutron-stable synthetic isotope reference
  massNumber: 247, // For Curium-247
  neutronNumber: 151, // For Curium-247
  isotopeCount: 19, // Cm-233 to Cm-251 (All isotopes are completely radioactive)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Cm242: 0.0, // Short-lived alpha source (160 days) used in early space experiments
    Cm244: 0.0, // Major reactor-bred isotope; valuable alpha-emitter with an 18.1-year half-life
    Cm247: 0.0  // Longest-lived isotope; acts as a structural anchor for heavy mass experiments
  },
  halfLife: "1.56e7 Years", // For Curium-247 (Curium-248 has a 348,000-year half-life; Curium-244 is highly active at 18.1 years)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Curium-247 (Decays down into Plutonium-243)
  decayEnergy: 5.353, // MeV
  nuclearSpin: 4.5, // 9/2 for Curium-247 (Curium-244 and Curium-248 have 0 spin due to even-even pairing laws)
  magneticDipoleMoment: 0.35, // nuclear magnetons
  neutronCrossSection: 60, // barns (Thermal capture cross-section for Cm-247)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic element; does not exist naturally in Earth's crust, though hyper-trace amounts were briefly present in the early solar system as primordial material
  oceanicAbundance: null,
  humanBodyAbundance: null, // High severe radiotoxicity profile. Absorbed curium rapidly seeks out skeletal structures and the liver, where intense alpha emissions destroy healthy bone marrow and cause local soft-tissue sarcomas. Despite being incredibly rare and hazardous, curium plays an indispensable role in interplanetary exploration: Curium-244 serves as the premier alpha-particle source inside Alpha Particle X-ray Spectrometers (APXS). These ultra-compact instruments are mounted on the robotic arms of Mars rovers (such as Sojourner, Spirit, Opportunity, and Curiosity) to analyze the chemical composition of Martian rocks and soils. It is also used in high-level research laboratories to synthesize heavier elements via heavy-ion bombardment.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthetically manufactured through sequential, high-flux multi-neutron capture reactions initiated on plutonium or americium targets inside specialized nuclear reactors"
};
  

  
 
const berkeliumData = {
  // 1. Fundamental Identity & Classification
  num: 97,
  symbol: "Bk",
  name: "Berkelium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-40-6",
  discoverer: "Glenn T. Seaborg, Albert Ghiorso, Stanley G. Thompson, Kenneth Street Jr.",
  year: 1949,
  originOfName: "Named after the city of Berkeley, California, and the University of California, Berkeley, where it was first synthesized",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 14.78, // g/cm³ at STP (Beta phase is slightly less dense at 13.25 g/cm³)
  melting: 1259, // Kelvin (986°C)
  boiling: 2900, // Kelvin (2627°C; estimated value)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 16.71, // cm³/mol
  electricalConductivity: 1.1e6, // S/m (Estimated metallic threshold)
  electricalResistivity: null,
  thermalConductivity: 10.0, // W/(m·K) (Estimated baseline)
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Soft, highly reactive, and ductile transuranic radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 20.0, // GPa (Estimated value reflecting high compressibility)
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Double hexagonal close-packed (alpha phase, stable at room temperature) and face-centered cubic (beta phase, transitions at high temperatures)
  color: "Bright, silvery-white metallic presentation; reacts dynamically with ambient gases to tarnish quickly",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: 7.9, // kJ/mol (Estimated value)
  heatOfVaporization: 280, // kJ/mol (Estimated value)
  heatOfAtomization: 293, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 170, // pm (Atomic radius)
  covalentRadius: 166, // pm
  vanderWaalsRadius: 244, // pm
  ionicRadius: 96, // pm (For Bk3+ coordination number 6; Bk4+ is 83 pm)
  crystalStructure: "Double hexagonal close-packed",
  latticeConstantA: 341.6, // pm
  latticeConstantB: 341.6, // pm
  latticeConstantC: 1106.9, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 16.71, // cm³/mol
  bohr: "2, 8, 18, 32, 27, 8, 2",
  orbital: "[Rn] 5f9 7s2", // Stabilized electronic configuration transitioning through the heavy transuranic shell profiles
  valence: 3, // Trivalent (+3) state is standard and dominant; tetravalent (+4) state is unusually accessible compared to neighboring actinides due to structural shielding
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 601.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [601.0, 1177, 2300, 4400],
  electronAffinity: -25.0, // kJ/mol
  oxidation: "+3, +4", // Mimics terbium chemical behavior; forms stable berkelium dioxide ($BkO_2$) and soluble halides
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 2.65, // eV
  chemicalSoftness: 0.377, // eV⁻¹
  electrophilicityIndex: 0.36,
  polarizability: 21.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.01, // V (For Bk3+ + 3e- -> Bk)
  flameTestColor: "Vaporizes with complex radioactive line emission profiles under intense discharge fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence allocation tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.65, // Zeff via Slater's rules
  slatersShieldingConstant: 93.35,
  termSymbol: "6H15/2",
  totalAngularMomentumQuantumNumber: 7.5, // J = 15/2
  atomicOrbitalEnergyLevel: -5.69, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 247.07031, // Standard mass configuration mapped directly to its longest-lived artificial nuclide tracking matrix
  massNumber: 247, // For Berkelium-247
  neutronNumber: 150, // For Berkelium-247
  isotopeCount: 20, // Bk-233 to Bk-254 (All isotopes are radioactively unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Bk247: 0.0, // Longest-lived synthetic baseline isotope
    Bk249: 0.0  // Most commonly produced isotope; synthesized in milligram scales via intense neutron capture cascades
  },
  halfLife: "1380 Years", // For Berkelium-247 (Berkelium-249 has a highly active, accessible half-life of 330 days)
  decayMode: "Alpha Decay", // For Berkelium-247 (Decays directly into Americium-243)
  decayEnergy: 5.792, // MeV
  nuclearSpin: 4.5, // 9/2 for Berkelium-247 (Berkelium-249 has a nuclear spin of 7/2)
  magneticDipoleMoment: 2.0, // nuclear magnetons
  neutronCrossSection: 710, // barns (Thermal capture cross-section for Bk-249)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely artificial transuranic element; has zero natural terrestrial presence
  oceanicAbundance: null,
  humanBodyAbundance: null, // Severe radiological health hazard. If metabolized, berkelium actively targets the structural matrix of bones and the liver, delivering a heavy dose of alpha radiation that causes osteosarcomas and cellular degradation. Due to its extreme scarcity and specialized synthetic path, berkelium has no general commercial or industrial applications. Its primary utility is as a target material for heavy-ion accelerator bombardment to synthesize even heavier transactinides. Most notably, 22 milligrams of high-purity Berkelium-249 produced over 250 days at Oak Ridge National Laboratory were vital in the discovery of element 117, tennessine ($Ts$), in 2010.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthetically built inside high-flux nuclear reactors through intensive, long-term multi-neutron bombardment cascades starting from ancestral plutonium or curium matrices"
};
  

  
 
const californiumData = {
  // 1. Fundamental Identity & Classification
  num: 98,
  symbol: "Cf",
  name: "Californium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-71-3",
  discoverer: "Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso, Glenn T. Seaborg",
  year: 1950,
  originOfName: "Named in honor of the university and state of California, where it was first synthesized at the University of California, Berkeley",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 15.1, // g/cm³ at STP (Highly dense, synthetic heavy transuranic metal)
  melting: 1173, // Kelvin (900°C)
  boiling: 1743, // Kelvin (1470°C; estimated value reflecting surprisingly high volatility compared to other actinides)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 16.5, // cm³/mol
  electricalConductivity: 1.0e6, // S/m (Estimated relative metallic performance)
  electricalResistivity: null,
  thermalConductivity: 10.0, // W/(m·K) (Estimated baseline)
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Soft, malleable, vacuum-volatile actinide metal that can be easily sliced with a razor blade
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 50.0, // GPa (Estimated value)
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High",
  ductility: "High",
  allotropeCount: 2, // Double hexagonal close-packed (alpha phase, stable at room temperature) and face-centered cubic (beta phase, transitions above 860°C)
  color: "Bright, lustrous silvery-white metal; reactive behavior causes it to tarnish quickly under atmospheric trace gases",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: 196, // kJ/mol (Estimated value)
  heatOfAtomization: 197, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 186, // pm (Atomic radius)
  covalentRadius: 168, // pm
  vanderWaalsRadius: 246, // pm
  ionicRadius: 95, // pm (For Cf3+ coordination number 6; Cf4+ is 82 pm)
  crystalStructure: "Double hexagonal close-packed",
  latticeConstantA: 338.0, // pm
  latticeConstantB: 338.0, // pm
  latticeConstantC: 1102.5, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 16.5, // cm³/mol
  bohr: "2, 8, 18, 32, 28, 8, 2",
  orbital: "[Rn] 5f10 7s2", // Progressively filling heavy actinide shell array that lacks a ground state 6d structural configuration
  valence: 3, // Trivalent (+3) state is standard and chemically dominant; divalent (+2) and tetravalent (+4) states are synthesized in specialized halides
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 608.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [608.0, 1206, 2300, 4800],
  electronAffinity: -25.0, // kJ/mol
  oxidation: "+3, +4, +2", // Exhibits diverse oxidation states; californium trichloride ($CfCl_3$) and californium dioxide ($CfO_2$) are classic markers
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: 2.70, // eV
  chemicalSoftness: 0.370, // eV⁻¹
  electrophilicityIndex: 0.37,
  polarizability: 20.5, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.94, // V (For Cf3+ + 3e- -> Cf)
  flameTestColor: "Vaporizes with complex, multi-line radioactive spark emission tracking lines",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tracking)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.80, // Zeff via Slater's rules
  slatersShieldingConstant: 94.20,
  termSymbol: "5I8",
  totalAngularMomentumQuantumNumber: 8.0, // J = 8
  atomicOrbitalEnergyLevel: -5.75, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 251.07959, // Rooted to its longest-lived, highly stable artificial isotope reference mass
  massNumber: 251, // For Californium-251
  neutronNumber: 153, // For Californium-251
  isotopeCount: 20, // Cf-237 to Cf-256 (Every single isotope is highly radioactive and unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Cf249: 0.0, // Created from beta decay of Berkelium-249; useful for chemical structural research due to low spontaneous fission rates
    Cf251: 0.0, // Longest-lived isotope with a 900-year half-life
    Cf252: 0.0  // The most industrially critical isotope; functions as a phenomenal, high-intensity neutron emitter
  },
  halfLife: "900 Years", // For Californium-251 (Californium-252 has an intensely active half-life of 2.645 years)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Californium-251 (Decays into Curium-247)
  decayEnergy: 6.112, // MeV
  nuclearSpin: 0.5, // 1/2 for Californium-251 (Californium-252 exhibits a spin of 0 due to even-even nucleon numbers)
  magneticDipoleMoment: null,
  neutronCrossSection: 4800, // barns (Massive thermal neutron capture cross-section for Cf-251)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic transuranic element; zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // Extreme severe radiotoxicity profile. Absorbed californium bioaccumulates heavily within skeletal frameworks and liver tissue. Its high-energy alpha radiation and intense spontaneous fission neutrons destroy bone marrow and trigger rapid skeletal osteosarcomas. Despite its extreme synthesis costs and danger, Californium-252 is highly prized as a portable neutron powerhouse: it releases 2.3 million neutrons per second per microgram via spontaneous fission. It is utilized in neutron activation analysis to detect gold or silver in ores, deployed in moisture gauges for civil engineering, used as a start-up source for commercial nuclear reactors, and applied in targeted brachytherapy for specific aggressive cervical and brain carcinomas.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in high-flux nuclear infrastructure via multi-year continuous neutron bombardment of plutonium or curium matrices"
};
  

  
 
const einsteiniumData = {
  // 1. Fundamental Identity & Classification
  num: 99,
  symbol: "Es",
  name: "Einsteinium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7429-92-7",
  discoverer: "Albert Ghiorso, Stanley G. Thompson, Glenn T. Seaborg, and co-workers",
  year: 1952,
  originOfName: "Named in honor of the legendary theoretical physicist Albert Einstein",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 8.84, // g/cm³ at STP (Relatively low density compared to preceding early actinides)
  melting: 1133, // Kelvin (860°C)
  boiling: null, // Highly volatile; estimated to possess a relatively low boiling point under ambient standards
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: 27.9, // cm³/mol (Highly expansive atomic volume profile due to relativistic shell adjustments)
  electricalConductivity: null, // Predicted to be a modest metallic conductor
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Soft, highly reactive, and ductile transuranic metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: 15.0, // GPa (Highly compressible metal tracking closely with divalent lanthanide behaviors)
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High (Predicted)",
  ductility: "High (Predicted)",
  allotropeCount: 1, // Face-centered cubic forms its standard stable ambient crystalline matrix
  color: "Bright, lustrous silvery presentation; glows noticeably in the dark with an intense blue tint caused by extreme localized radioactive energy deposition into surrounding gas columns",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: 133, // kJ/mol (Estimated value highlighting high elemental volatility)
  heatOfAtomization: 133, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: 203, // pm (Atomic radius)
  covalentRadius: null,
  vanderWaalsRadius: 245, // pm
  ionicRadius: 92.8, // pm (For Es3+ coordination number 6)
  crystalStructure: "Face-centered cubic",
  latticeConstantA: 575.0, // pm
  latticeConstantB: 575.0, // pm
  latticeConstantC: 575.0, // pm
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: 27.9, // cm³/mol
  bohr: "2, 8, 18, 32, 29, 8, 2",
  orbital: "[Rn] 5f11 7s2", // Stabilized electronic matrix showing a complete lack of outer 6d electrons in its standard ground state configuration
  valence: 3, // Trivalent (+3) state completely dominates its chemistry; divalent (+2) configurations are accessible in specific solid-state halides
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 619.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [619.0, 1216, 2300],
  electronAffinity: -25.0, // kJ/mol
  oxidation: "+3, +2", // Displays characteristic actinide triage; forms standard complexes like einsteinium triiodide ($EsI_3$)
  maximumOxidationState: 4, // Highly theoretical and transiently calculated
  minimumOxidationState: 0,
  chemicalHardness: 2.72, // eV
  chemicalSoftness: 0.368, // eV⁻¹
  electrophilicityIndex: 0.38,
  polarizability: 19.8, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.98, // V (For Es3+ + 3e- -> Es)
  flameTestColor: "Vaporizes immediately with complex radioactive spark line structures",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tier tracking alignment)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 3.95, // Zeff via Slater's rules
  slatersShieldingConstant: 95.05,
  termSymbol: "4I15/2",
  totalAngularMomentumQuantumNumber: 7.5, // J = 15/2
  atomicOrbitalEnergyLevel: -5.81, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 252.083, // Anchored to its most stable, longest-lived artificial nuclide mass target
  massNumber: 252, // For Einsteinium-252
  neutronNumber: 153, // For Einsteinium-252
  isotopeCount: 19, // Es-240 to Es-258 (Every single isotope is entirely radioactive and unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Es252: 0.0, // Longest-lived synthetic reference nuclide
    Es253: 0.0, // Historically significant isotope discovered inside the fallout debris of the Ivy Mike thermonuclear test
    Es254: 0.0  // Premier macro-scale target isotope; possesses a half-life of 275.7 days
  },
  halfLife: "471.7 Days", // For Einsteinium-252 (Einsteinium-254 has a half-life of 275.7 days)
  decayMode: "Alpha Decay / Electron Capture / Spontaneous Fission", // For Einsteinium-252 (Decays primarily into Berkelium-248 or Californium-252)
  decayEnergy: 6.742, // MeV
  nuclearSpin: 5, // For Einsteinium-252 (Einsteinium-254 has a nuclear spin of 7)
  magneticDipoleMoment: 2.9, // nuclear magnetons
  neutronCrossSection: 160, // barns (Thermal capture cross-section for Es-254)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic transuranic element; has zero natural terrestrial presence outside of hyper-trace historic reactor anomalies
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiotoxicity profile. Ingested einsteinium undergoes severe systemic localization into bone tissue matrices and liver configurations, causing profound cellular breakdown via focused alpha-particle emission. Einsteinium currently serves no industrial or commercial purposes due to its extreme scarcity and high rate of radioactive decay. It is utilized exclusively as a critical stepping-stone target inside elite nuclear physics facilities: it is bombarded with high-energy alpha particles or heavy ions to synthetically breed heavier transactinides, and was famously utilized as the direct starter material to discover element 101, mendelevium ($Md$), in 1955.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in microgram quantities via long-term, intensive high-flux neutron irradiation cascades tracking from heavy transuranic targets inside specialized global research reactors"
};
  

  
 
const fermiumData = {
  // 1. Fundamental Identity & Classification
  num: 100,
  symbol: "Fm",
  name: "Fermium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-72-4",
  discoverer: "Albert Ghiorso and co-workers",
  year: 1952,
  originOfName: "Named in honor of the pioneering nuclear physicist Enrico Fermi, who developed the first artificial nuclear reactor",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: null, // Crystalline bulk density remains unmeasured due to tiny micro-scale sample sizes
  melting: 1800, // Kelvin (1527°C; estimated value)
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Highly reactive radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Predicted to crystallize in a face-centered cubic lattice matrix based on lanthanide analogs
  color: "Silvery-metallic luster in theory; never observed in macroscale quantities due to rapid radioactive degradation",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: 142, // kJ/mol (Estimated value highlighting notable volatility traits)
  heatOfAtomization: 142, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null, // Crystalline atomic radius unconfirmed
  covalentRadius: null,
  vanderWaalsRadius: 245, // pm
  ionicRadius: 92.2, // pm (For Fm3+ coordination number 6)
  crystalStructure: "Face-centered cubic", // Predicted close-packed configuration layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 30, 8, 2",
  orbital: "[Rn] 5f12 7s2", // Stabilized f-shell progression nearing the terminus of the actinide row
  valence: 3, // Trivalent (+3) state dominates standard chemical interactions, though a divalent (+2) state is increasingly accessible
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 627.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [627.0, 1225, 2300],
  electronAffinity: -25.0, // kJ/mol
  oxidation: "+3, +2", // Solution chemistry heavily features the trivalent state; behaves similarly to its lanthanide homologue erbium
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.75, // eV
  chemicalSoftness: 0.364, // eV⁻¹
  electrophilicityIndex: 0.39,
  polarizability: 19.1, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.96, // V (For Fm3+ + 3e- -> Fm)
  flameTestColor: "Vaporizes instantly with complex, hyper-unstable multi-line emission arcs",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tier)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.10, // Zeff via Slater's rules
  slatersShieldingConstant: 95.90,
  termSymbol: "3H6",
  totalAngularMomentumQuantumNumber: 6.0, // J = 6
  atomicOrbitalEnergyLevel: -5.88, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 257.09511, // Standard benchmark assigned to its longest-lived artificial nuclide mass track
  massNumber: 257, // For Fermium-257
  neutronNumber: 157, // For Fermium-257
  isotopeCount: 20, // Fm-242 to Fm-260 (All variations are entirely radioactive and undergo rapid decay loops)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Fm255: 0.0, // Infamous trace isotope extracted from the coral fallout debris of the 1952 Ivy Mike thermonuclear test
    Fm257: 100.0 // The heavy mass anchor isotope produced via arduous long-term reactor synthesis operations
  },
  halfLife: "100.5 Days", // For Fermium-257
  decayMode: "Alpha Decay / Spontaneous Fission", // For Fermium-257 (Decays down into Californium-253)
  decayEnergy: 6.864, // MeV
  nuclearSpin: 4.5, // 9/2 for Fermium-257
  magneticDipoleMoment: 0.4, // nuclear magnetons
  neutronCrossSection: 2950, // barns (Extremely high thermal neutron capture cross-section for Fm-257)

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely artificial heavy element; has zero natural terrestrial presence outside atomic testing residue
  oceanicAbundance: null,
  humanBodyAbundance: null, // High severe radiotoxicity profile. Fermium represents a critical upper boundary in nuclear synthesis: it is the heaviest element that can be prepared via successive neutron capture cascades inside high-flux nuclear reactors. Beyond mass 257, short half-lives and immense spontaneous fission rates block further heavy-flux growth. It possesses no commercial or industrial roles due to its extreme scarcity, and is utilized exclusively as a foundational milestone target in high-level nuclear laboratories to analyze nuclear structures and explore heavy transactinide synthesis.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in sub-picogram amounts via continuous, multi-year high-flux neutron irradiation of plutonium/californium target arrays inside highly specialized global reactors"
};
  

  
 
const mendeleviumData = {
  // 1. Fundamental Identity & Classification
  num: 101,
  symbol: "Md",
  name: "Mendelevium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "7440-11-1",
  discoverer: "Albert Ghiorso, Glenn T. Seaborg, Bernard Harvey, Gregory Choppin, Stanley G. Thompson",
  year: 1955,
  originOfName: "Named in honor of Dmitri Mendeleev, the brilliant Russian chemist who created the Periodic Table of the Elements",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: null, // Mass production levels are too small to permit direct macroscopic density verification
  melting: 1100, // Kelvin (827°C; estimated baseline)
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Highly radioactive synthetic metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Predicted to adopt a face-centered cubic lattice matrix tracking late actinide structures
  color: "Silvery-metallic look predicted; cannot be visually verified due to intense radioactive self-heating of macro quantities",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: 134, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: null,
  vanderWaalsRadius: 246, // pm
  ionicRadius: 89.4, // pm (For Md3+ coordination number 6; Md2+ is 114 pm)
  crystalStructure: "Face-centered cubic", // Modeled stable configuration layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 31, 8, 2",
  orbital: "[Rn] 5f13 7s2", // Relativistically adjusted electronic shell sequence approaching the full completion of the 5f subshell
  valence: 3, // Standard trivalent behavior (+3) rules its chemical complexes, but a divalent state (+2) is remarkably stable
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 635.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [635.0, 1235, 2470],
  electronAffinity: -25.0, // kJ/mol
  oxidation: "+3, +2", // Solution chemistry mirrors thulium features; the +2 state can be easily forced via mild chemical reduction
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.80, // eV
  chemicalSoftness: 0.357, // eV⁻¹
  electrophilicityIndex: 0.40,
  polarizability: 18.6, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.74, // V (For Md3+ + 3e- -> Md)
  flameTestColor: "Vaporizes with intense multi-line spark emission profiles under high energy fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tracking)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.25, // Zeff via Slater's rules
  slatersShieldingConstant: 96.75,
  termSymbol: "2F7/2",
  totalAngularMomentumQuantumNumber: 3.5, // J = 7/2
  atomicOrbitalEnergyLevel: -5.95, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 258.09843, // Assigned to its most accessible, long-lived target radioisotope mass matrix
  massNumber: 258, // For Mendelevium-258
  neutronNumber: 157, // For Mendelevium-258
  isotopeCount: 17, // Md-244 to Md-260 (All variants are intensely radioactive and unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Md256: 0.0, // Historically significant isotope used by Seaborg to identify the element via single-atom tracking
    Md258: 100.0 // Preeminent tracer isotope; possesses a half-life of 51.5 days
  },
  halfLife: "51.5 Days", // For Mendelevium-258 (Mendelevium-260 has a half-life of 31.8 days; Mendelevium-256 is highly active at 1.17 hours)
  decayMode: "Alpha Decay / Electron Capture", // For Mendelevium-258 (Decays primarily into Einsteinium-254)
  decayEnergy: 6.716, // MeV
  nuclearSpin: 8, // For Mendelevium-258 (Mendelevium-256 has a nuclear spin of 0)
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Entirely synthetic transuranic element; zero natural terrestrial existence
  oceanicAbundance: null,
  humanBodyAbundance: null, // Extreme radiological hazard profile. Mendelevium represents a major historic milestone in nuclear chemistry: it was the first element ever discovered and identified on a literal atom-by-atom basis. It cannot be generated via continuous reactor neutron capture paths due to the fermium fission barrier; instead, it must be painstakingly synthesized in cyclotron particle accelerators by blasting Einsteinium-253 targets with high-energy alpha particles. It has zero commercial or industrial functions and is used strictly in elite international laboratories to decode actinide-to-lanthanide transition chemistry.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in atom-level amounts via cyclotron light-ion bombardment ($^{253}_{99}Es + ^{4}_{2}He \rightarrow ^{256}_{101}Md + ^{1}_{0}n$) inside specialized particle accelerator targets"
};
  

  
 
const nobeliumData = {
  // 1. Fundamental Identity & Classification
  num: 102,
  symbol: "No",
  name: "Nobelium",
  type: "Actinide",
  group: 3,
  period: 7,
  block: "f",
  casRegistryNumber: "10028-14-5",
  discoverer: "Albert Ghiorso, Glenn T. Seaborg, Torbjørn Sikkeland, John R. Walton",
  year: 1958,
  originOfName: "Named in honor of Alfred Nobel, the Swedish chemist who invented dynamite and established the Nobel Prizes",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: null, // Macroscopic bulk density unmeasured due to atom-scale production limits
  melting: 1100, // Kelvin (827°C; estimated baseline value)
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Highly unstable radioactive synthetic metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Predicted to assume a face-centered cubic lattice matrix at standard temperature and pressure
  color: "Silvery-metallic appearance predicted; impossible to visually inspect due to rapid radioactive self-destruction",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: 126, // kJ/mol (Relatively low value matching its highly volatile divalent metallic traits)
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: null,
  vanderWaalsRadius: 246, // pm
  ionicRadius: 110, // pm (For No2+ coordination number 6; No3+ is 92 pm)
  crystalStructure: "Face-centered cubic", // Theoretically modeled structural layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 8, 2",
  orbital: "[Rn] 5f14 7s2", // Reaches an exceptionally stable electronic state featuring a completely filled 5f subshell ($5f^{14}$)
  valence: 2, // Divalent (+2) state uniquely dominates its entire chemistry, veering away from standard trivalent actinide profiles
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 642.0, // kJ/mol (First Ionization Energy)
  successiveIonizationEnergies: [642.0, 1254, 2643],
  electronAffinity: -25.0, // kJ/mol
  oxidation: "+2, +3", // Unique solution chemistry where the divalent state is more stable than the trivalent state in aqueous environments; behaves similarly to ytterbium or alkaline earth metals like barium
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.84, // eV
  chemicalSoftness: 0.352, // eV⁻¹
  electrophilicityIndex: 0.41,
  polarizability: 17.5, // × 10⁻²⁴ cm³
  standardReductionPotential: -2.50, // V (For No2+ + 2e- -> No)
  flameTestColor: "Vaporizes instantly with complex radioactive emission line tracking signatures",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 3, // l = 3 (f orbital valence tracking)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.40, // Zeff via Slater's rules
  slatersShieldingConstant: 97.60,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: -6.02, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 259.101, // Mapped to its most accessible and long-lived target radioisotope tracking mass
  massNumber: 259, // For Nobelium-259
  neutronNumber: 157, // For Nobelium-259
  isotopeCount: 16, // No-248 to No-263 (Every isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    No255: 0.0, // Short-lived isotope (3.1 minutes) used in gas-phase chemical studies
    No259: 100.0 // Longest-lived accessible isotope; possesses a half-life of 58 minutes
  },
  halfLife: "58 Minutes", // For Nobelium-259 (Nobelium-259 is the longest-lived at 58 minutes; Nobelium-255 has a half-life of 3.1 minutes)
  decayMode: "Alpha Decay / Spontaneous Fission / Electron Capture", // For Nobelium-259 (Decays into Mendelevium-259 or Fermium-255)
  decayEnergy: 7.690, // MeV
  nuclearSpin: 4.5, // 9/2 for Nobelium-259 (Even-even isotopes like No-254 have a nuclear spin of 0)
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic heavy element; zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // Extreme radiological hazard profile. Nobelium marks a fascinating chemical pivot point in the actinide row: due to relativistic contraction and a completely filled 5f shell ($5f^{14}$), it strongly resists losing a third electron. As a result, its aqueous chemistry unexpectedly mimics the alkaline earth metal barium rather than standard actinides. Nobelium must be synthetically manufactured via particle accelerators by blasting Curium-248 targets with high-energy Carbon-12 ions. It has zero commercial or industrial functions and is used exclusively in fundamental atomic research to map the bounds of relativistic chemistry.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in fleeting, trace atom amounts inside heavy-ion cyclotrons through fusion reactions ($^{248}_{96}Cm + ^{12}_{6}C \rightarrow ^{254}_{102}No + 6^{1}_{0}n$) behind advanced gas-filled separator lines"
};
  

  
 
const lawrenciumData = {
  // 1. Fundamental Identity & Classification
  num: 103,
  symbol: "Lr",
  name: "Lawrencium",
  type: "Actinide", // Final element of the actinide series, completing the 5f filling block sequence
  group: 3,
  period: 7,
  block: "d", // Gas-phase calculations and relativistic models place its final electron in the 7p or 6d shell, making it the d-block completion element for Group 3, analogous to lutetium
  casRegistryNumber: "22537-19-5",
  discoverer: "Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh, Robert M. Latimer",
  year: 1961,
  originOfName: "Named in honor of Ernest Lawrence, the legendary physicist who invented the cyclotron particle accelerator",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 15.6, // g/cm³ at STP (Theoretically calculated baseline density)
  melting: 1900, // Kelvin (1627°C; predicted high melting point matching heavy transition-like metals)
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // High-energy radioactive synthetic metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to settle into a close-packed hexagonal or face-centered cubic matrix arrangement
  color: "Silvery-metallic look predicted; cannot be visually observed due to instant microscopic self-destruction of sample targets",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: 352, // kJ/mol (Markedly higher than nobelium, confirming its return to transition metal-like bonding traits)
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: null,
  vanderWaalsRadius: 246, // pm
  ionicRadius: 88.1, // pm (For Lr3+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // Experimentally and theoretically expected stable phase profile
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 9, 2",
  orbital: "[Rn] 5f14 7s2 7p1", // Relativistic quantum configurations show a unique ground state featuring a 7p orbital electron instead of a 6d electron due to extreme spin-orbit coupling
  valence: 3, // Trivalent (+3) state is highly stable and represents its primary chemical trait
  coreElectronCount: 86,

  // 5. Chemical & Periodicity Variables
  electronegativity: 1.3, // Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: 1.20,
  ionization: 470.0, // kJ/mol (First Ionization Energy; remarkably low value caused by the weakly bound, relativistically shielded 7p electron)
  successiveIonizationEnergies: [470.0, 1428, 2228],
  electronAffinity: -30.0, // kJ/mol
  oxidation: "+3", // Trivalent behavior mirrors lutetium; forms stable lawrencium trichloride ($LrCl_3$) and behaves as a heavy hard Lewis acid in solution
  maximumOxidationState: 3,
  minimumOxidationState: 0,
  chemicalHardness: 2.30, // eV
  chemicalSoftness: 0.435, // eV⁻¹
  electrophilicityIndex: 0.38,
  polarizability: 18.2, // × 10⁻²⁴ cm³
  standardReductionPotential: -1.96, // V (For Lr3+ + 3e- -> Lr)
  flameTestColor: "Vaporizes instantly with intense, multi-line radioactive spark emission track patterns",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tracking, a unique relativistic signature for an f-row terminus element)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.55, // Zeff via Slater's rules
  slatersShieldingConstant: 98.45,
  termSymbol: "2P1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2
  atomicOrbitalEnergyLevel: -4.87, // eV
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 266.119, // Mapped to its longest-lived, most accessible synthetic heavy isotope
  massNumber: 266, // For Lawrencium-266
  neutronNumber: 163, // For Lawrencium-266
  isotopeCount: 14, // Lr-251 to Lr-266 (All isotopes are completely radioactive with brief decay pathways)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Lr256: 0.0, // Light isotope historically used in initial discovery verification cycles
    Lr260: 0.0, // Deployed heavily in gas-phase and liquid chromatography extraction experiments
    Lr266: 100.0 // Longest-lived isotope; exhibits a relatively stable half-life of 11 hours
  },
  halfLife: "11 Hours", // For Lawrencium-266 (Lawrencium-262 has a half-life of 3.6 hours; Lawrencium-260 decays in 2.7 minutes)
  decayMode: "Spontaneous Fission / Alpha Decay", // For Lawrencium-266 (Undergoes spontaneous structural collapse or alpha decay into Mendelevium-262)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Entirely synthetic transuranic heavy element; possesses absolutely zero natural terrestrial abundance
  oceanicAbundance: null,
  humanBodyAbundance: null, // Severe radiological risk profile. Lawrencium marks the definitive conclusion of the actinides. Because it possesses a fully populated 5f shell ($5f^{14}$), its chemical behavior aligns with its lanthanide counterpart lutetium. Sophisticated aqueous and gas-phase chemical testing confirmed that it consistently acts as a trivalent transition element. Lawrencium must be synthetically engineered inside high-energy particle accelerators by targeting Californium-249 matrices with boron-11 ion beams. It holds no commercial or industrial uses and is applied exclusively to expand understanding of relativistic electron behaviors at the extreme edge of the periodic table.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in vanishingly faint, atom-by-atom yields within heavy-ion particle accelerators via targeted fusion reactions ($^{249}_{98}Cf + ^{11}_{5}B \rightarrow ^{256}_{103}Lr + 4^{1}_{0}n$)"
};
  

  
 
const rutherfordiumData = {
  // 1. Fundamental Identity & Classification
  num: 104,
  symbol: "Rf",
  name: "Rutherfordium",
  type: "Transition Metal", // The first transactinide element; marks the definitive entrance into the 6d transition series
  group: 4,
  period: 7,
  block: "d",
  casRegistryNumber: "53850-36-5",
  discoverer: "Joint Institute for Nuclear Research (Dubna) and Lawrence Berkeley Laboratory",
  year: 1964,
  originOfName: "Named in honor of Ernest Rutherford, the legendary New Zealand-born physicist known as the father of nuclear physics",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 23.2, // g/cm³ at STP (Theoretically calculated baseline density; highly compact transition matrix)
  melting: 2400, // Kelvin (2100°C; predicted high melting point matching heavy group 4 transition congeners)
  boiling: 5800, // Kelvin (5500°C; estimated value)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, intensely radioactive synthetic metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to crystallize in a stable hexagonal close-packed structure under normal ambient standards
  color: "Silvery-metallic look predicted; impossible to visually confirm due to micro-second target decay loops",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 150, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: 76, // pm (Estimated value for Rf4+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 10, 2",
  orbital: "[Rn] 5f14 6d2 7s2", // Standard ground state electronic configuration indicating active entry into the 6d subshell array
  valence: 4, // Tetravalent (+4) state is highly stable and rules its structural chemistry
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Predicted around 1.3 on the Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 580.0, // kJ/mol (First Ionization Energy; theoretically derived value)
  successiveIonizationEnergies: [580.0, 1390, 2300, 3080],
  electronAffinity: null,
  oxidation: "+4", // Strongly aligns with its lighter homologues hafnium and zirconium; readily forms volatile rutherfordium tetrachloride ($RfCl_4$)
  maximumOxidationState: 4,
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes with complex radioactive spark line structures under ionization",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier tracking)
  magneticQuantumNumber: -2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.70, // Zeff via Slater's rules
  slatersShieldingConstant: 99.30,
  termSymbol: "3F2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 267.122, // Grounded to its longest-lived, most structurally robust synthetic nuclide tracking mass
  massNumber: 267, // For Rutherfordium-267
  neutronNumber: 163, // For Rutherfordium-267
  isotopeCount: 16, // Rf-253 to Rf-268 (Every single isotope is entirely radioactive with brief decay pathways)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Rf261: 0.0, // Used frequently in automated fast chemical extraction and solution tracking networks
    Rf267: 100.0 // Longest-lived isotope; exhibits a relatively stable half-life of roughly 1.3 hours
  },
  halfLife: "1.3 Hours", // For Rutherfordium-267 (Rutherfordium-261 has a half-life of 68 seconds; most other variants decay within milliseconds)
  decayMode: "Spontaneous Fission / Alpha Decay", // For Rutherfordium-267 (Undergoes spontaneous structural breakdown or alpha decay into Nobelium-263)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely artificial super-heavy element; possesses absolutely zero natural terrestrial presence
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Rutherfordium holds immense historical value as the entry gate to the transactinides. Advanced micro-scale fast gas chromatography has confirmed that it mirrors Group 4 chemistry, forming an oxide and halides structurally akin to hafnium ($Hf$) and zirconium ($Zr$). Rutherfordium cannot be built in reactors; it must be synthetically manufactured inside high-energy cyclotrons by hitting Californium-249 targets with Carbon-12 ion beams. It possesses zero commercial or industrial functions and is used exclusively in fundamental physics research to evaluate relativistic impacts on the periodic trend.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted fusion-evaporation reactions ($^{249}_{98}Cf + ^{12}_{6}C \rightarrow ^{257}_{104}Rf + 4^{1}_{0}n$)"
};
  

  
 
const dubniumData = {
  // 1. Fundamental Identity & Classification
  num: 105,
  symbol: "Db",
  name: "Dubnium",
  type: "Transition Metal",
  group: 5,
  period: 7,
  block: "d",
  casRegistryNumber: "53850-35-4",
  discoverer: "Joint Institute for Nuclear Research (Dubna) and Lawrence Berkeley Laboratory",
  year: 1968,
  originOfName: "Named in honor of Dubna, Russia, the location of the Joint Institute for Nuclear Research where the element was pioneered",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 29.3, // g/cm³ at STP (Theoretically calculated baseline density; highly dense transactinide matrix)
  melting: null, // Predicted to possess a high melting point typical of heavy Group 5 metals
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to crystallize in a body-centered cubic structural framework analogous to tantalum
  color: "Silvery-metallic look predicted; cannot be visually confirmed due to instant decay of microscopic target yields",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 139, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: 74, // pm (Estimated value for Db5+ coordination number 6)
  crystalStructure: "Body-centered cubic", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 11, 2",
  orbital: "[Rn] 5f14 6d3 7s2", // Ground state electronic configuration highlighting the continuous filling of the 6d shell array
  valence: 5, // Pentavalent (+5) state is standard and chemically expected to dominate
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Predicted to track group trends closely
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: null, // First Ionization Energy theoretically derived
  successiveIonizationEnergies: [656.1, 1431, 2221, 3176, 4124],
  electronAffinity: null,
  oxidation: "+5", // Aligns closely with its lighter homologues tantalum and niobium; forms volatile dubnium pentachloride ($DbCl_5$)
  maximumOxidationState: 5,
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 4.85, // Zeff via Slater's rules
  slatersShieldingConstant: 100.15,
  termSymbol: "4F3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 268.126, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 268, // For Dubnium-268
  neutronNumber: 163, // For Dubnium-268
  isotopeCount: 13, // Db-255 to Db-270 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Db262: 0.0, // Short-lived isotope (34 seconds) utilized in early rapid liquid-phase extraction experiments
    Db268: 100.0 // Longest-lived isotope; exhibits a relatively long transactinide half-life of roughly 28 hours
  },
  halfLife: "28 Hours", // For Dubnium-268 (Dubnium-262 has a half-life of 34 seconds; dubnium-263 has a half-life of 27 seconds)
  decayMode: "Spontaneous Fission / Alpha Decay", // For Dubnium-268 (Undergoes spontaneous structural collapse or alpha decay into Lawrencium-264)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Dubnium chemical properties have been investigated using micro-scale rapid automated chromatographic systems, confirming that it largely acts as a heavy member of Group 5, matching tantalum ($Ta$) and niobium ($Nb$). However, it occasionally displays anomalous relativistic coordination behaviors tracking closer to protactinium solutions. Dubnium must be synthetically engineered inside high-energy cyclotrons by blasting Californium-249 targets with Nitrogen-15 ion beams or via the decay chains of heavier synthetic parents. It has zero commercial or industrial functions and is used exclusively in fundamental research to map the extreme bounds of the d-block.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in vanishingly faint, atom-by-atom yields within heavy-ion accelerators via targeted fusion reactions ($^{249}_{98}Cf + ^{15}_{7}N \rightarrow ^{260}_{105}Db + 4^{1}_{0}n$)"
};
  

  
 
const seaborgiumData = {
  // 1. Fundamental Identity & Classification
  num: 106,
  symbol: "Sg",
  name: "Seaborgium",
  type: "Transition Metal",
  group: 6,
  period: 7,
  block: "d",
  casRegistryNumber: "54038-81-2",
  discoverer: "Lawrence Berkeley Laboratory",
  year: 1974,
  originOfName: "Named in honor of the eminent American chemist Glenn T. Seaborg, who participated in the discovery of ten transuranic elements",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 35.0, // g/cm³ at STP (Theoretically calculated baseline density; exceptionally dense)
  melting: null, // Predicted to possess a high melting point mirroring heavy Group 6 metals
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to crystallize in a body-centered cubic structural framework analogous to tungsten
  color: "Silvery-metallic presentation predicted; cannot be visually observed due to rapid radioactive decay",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 132, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: 65, // pm (Estimated value for Sg6+ coordination number 6)
  crystalStructure: "Body-centered cubic", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 12, 2",
  orbital: "[Rn] 5f14 6d4 7s2", // Ground state electronic configuration highlighting the continuous filling of the 6d shell array
  valence: 6, // Hexavalent (+6) state is standard and chemically expected to dominate
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null,
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: null, // First Ionization Energy theoretically derived
  successiveIonizationEnergies: [757, 1730, 2480, 3420, 4590, 5770],
  electronAffinity: null,
  oxidation: "+6", // Aligns closely with its lighter homologues tungsten and molybdenum; forms stable seaborgium hexacarbonyl ($Sg(CO)_6$) and volatile oxychlorides like $SgO_2Cl_2$
  maximumOxidationState: 6,
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.00, // Zeff via Slater's rules
  slatersShieldingConstant: 101.00,
  termSymbol: "5D0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 269.128, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 269, // For Seaborgium-269
  neutronNumber: 163, // For Seaborgium-269
  isotopeCount: 14, // Sg-258 to Sg-271 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Sg265: 0.0, // Short-lived isotope utilized in historic chemical identification experiments
    Sg269: 100.0 // Longest-lived isotope; exhibits a relatively stable half-life of roughly 14 minutes
  },
  halfLife: "14 Minutes", // For Seaborgium-269 (Seaborgium-271 has a comparable half-life of 2.4 minutes; earlier isotopes decay in milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Seaborgium-269 (Undergoes alpha decay into Rutherfordium-265 or breaks apart via spontaneous fission)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Seaborgium was the first element to be named after a living person, which sparked a historic naming controversy. Its chemical profile has been successfully probed using gas-phase and liquid chromatography, proving it behaves as a heavy Group 6 member, forming compounds highly analogous to molybdenum ($Mo$) and tungsten ($W$). The synthesis of volatile $Sg(CO)_6$ represents a milestone in transactinide organometallic chemistry. Seaborgium must be synthetically engineered inside high-energy particle accelerators by hitting Californium-249 targets with Neon-22 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in vanishingly faint, atom-by-atom yields within heavy-ion accelerators via targeted fusion reactions ($^{249}_{98}Cf + ^{22}_{10}Ne \rightarrow ^{266}_{106}Sg + 5^{1}_{0}n$)"
};
  

  
 
const bohriumData = {
  // 1. Fundamental Identity & Classification
  num: 107,
  symbol: "Bh",
  name: "Bohrium",
  type: "Transition Metal",
  group: 7,
  period: 7,
  block: "d",
  casRegistryNumber: "54037-14-8",
  discoverer: "Joint Institute for Nuclear Research (Dubna) and Gesellschaft für Schwerionenforschung (GSI)",
  year: 1981,
  originOfName: "Named in honor of Niels Bohr, the foundational Danish physicist who developed the planetary model of the atom",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 37.1, // g/cm³ at STP (Theoretically calculated baseline density; exceptionally dense transactinide metal)
  melting: null, // Predicted to possess a very high melting point mirroring heavy Group 7 transition elements
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to crystallize in a stable hexagonal close-packed structural arrangement analogous to rhenium
  color: "Silvery-metallic appearance predicted; cannot be visually inspected due to sub-second or brief minute-scale decay loops",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 128, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: 64, // pm (Estimated value for Bh7+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 13, 2",
  orbital: "[Rn] 5f14 6d5 7s2", // Ground state electronic configuration highlighting the continuous filling of the 6d shell array
  valence: 7, // Heptavalent (+7) state is standard and chemically expected to dominate
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null,
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: null, // First Ionization Energy theoretically derived
  successiveIonizationEnergies: [740, 1690, 2570, 3600, 4730, 5990, 7230],
  electronAffinity: null,
  oxidation: "+7", // Aligns closely with its lighter homologues rhenium and technetium; forms volatile oxychlorides like $BhO_3Cl$
  maximumOxidationState: 7,
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.15, // Zeff via Slater's rules
  slatersShieldingConstant: 101.85,
  termSymbol: "6S5/2",
  totalAngularMomentumQuantumNumber: 2.5, // J = 5/2
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 270.133, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 270, // For Bohrium-270
  neutronNumber: 163, // For Bohrium-270
  isotopeCount: 12, // Bh-260 to Bh-274 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Bh267: 0.0, // Used in early automated gas chromatography experiments to form volatile oxychloride complexes
    Bh270: 100.0 // Longest-lived isotope; exhibits a relatively stable half-life of roughly 61 seconds
  },
  halfLife: "61 Seconds", // For Bohrium-270 (Bohrium-274 has a comparable half-life of 40 seconds; earlier variants decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Bohrium-270 (Undergoes alpha decay into Dubnium-266)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Bohrium chemical behaviors have been probed using sophisticated thermochromatographic systems, confirming that it acts as a heavier member of Group 7. It reacts with oxygen and hydrogen chloride gases to form volatile bohrium oxychloride ($BhO_3Cl$), which mimics the chemical reactions of its homologue rhenium ($Re$). Bohrium cannot be made in reactors; it must be synthetically engineered inside high-energy linear accelerators or cyclotrons by bombarding Berkelium-249 targets with Neon-22 ion beams or Chromium-54 beams on Bismuth-209. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Lithophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted cold or hot fusion-evaporation reactions ($^{209}_{83}Bi + ^{54}_{24}Cr \rightarrow ^{262}_{107}Bh + ^{1}_{0}n$)"
};
  

  
 
const hassiumData = {
  // 1. Fundamental Identity & Classification
  num: 108,
  symbol: "Hs",
  name: "Hassium",
  type: "Transition Metal",
  group: 8,
  period: 7,
  block: "d",
  casRegistryNumber: "54037-57-9",
  discoverer: "Gesellschaft für Schwerionenforschung (GSI)",
  year: 1984,
  originOfName: "Named after the German state of Hesse (Hassia in Latin), where the element was first synthesized in Darmstadt",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 41.0, // g/cm³ at STP (Theoretically calculated baseline density; predicted to be the densest element on the periodic table)
  melting: null, // Predicted to possess a high melting point typical of platinum-group metals
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to crystallize in a stable hexagonal close-packed lattice structural matrix analogous to osmium
  color: "Silvery-metallic look predicted; cannot be visually confirmed due to extreme radioactive decay of microscopic yields",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 126, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: 63, // pm (Estimated value for Hs8+ coordination number 6)
  crystalStructure: "Hexagonal close-packed", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 120,
  spaceGroup: "P63/mmc",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 14, 2",
  orbital: "[Rn] 5f14 6d6 7s2", // Ground state electronic configuration highlighting the continuous filling of the 6d shell array
  valence: 8, // Octavalent (+8) state is stable and chemically characterizes its periodic positioning
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null,
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: null, // First Ionization Energy theoretically derived
  successiveIonizationEnergies: [730, 1760, 2550, 3640, 4790, 6130, 7390, 8780],
  electronAffinity: null,
  oxidation: "+8", // Strongly aligns with its lighter homologue osmium; readily forms highly volatile hassium tetroxide ($HsO_4$)
  maximumOxidationState: 8,
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.30, // Zeff via Slater's rules
  slatersShieldingConstant: 102.70,
  termSymbol: "5D4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 269.134, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 269, // For Hassium-269
  neutronNumber: 161, // For Hassium-269
  isotopeCount: 12, // Hs-263 to Hs-277 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Hs269: 100.0, // Longest-lived isotope; exhibits a relatively stable half-life of roughly 16 seconds
    Hs270: 0.0    // Deployed in nuclear structure research due to its status as a deformed doubly magic nucleus (Z=108, N=162)
  },
  halfLife: "16 Seconds", // For Hassium-269 (Hassium-270 has a half-life of about 4 seconds; earlier variants decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Hassium-269 (Undergoes alpha decay into Seaborgium-265)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Hassium marks a landmark achievement in transactinide chemistry. By using automated online thermochromatography detection arrays, scientists reacted hassium atoms with oxygen to yield hassium tetroxide ($HsO_4$). This compound is highly volatile and deposits at a specific temperature mirroring the behavior of osmium tetroxide ($OsO_4$), definitively confirming hassium as a member of Group 8. Hassium cannot be built in reactors; it must be synthetically engineered inside high-energy linear accelerators by bombarding Lead-208 targets with Iron-58 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted cold fusion-evaporation reactions ($^{208}_{82}Pb + ^{58}_{26}Fe \rightarrow ^{265}_{108}Hs + ^{1}_{0}n$)"
};
  

  
 
const meitneriumData = {
  // 1. Fundamental Identity & Classification
  num: 109,
  symbol: "Mt",
  name: "Meitnerium",
  type: "Transition Metal",
  group: 9,
  period: 7,
  block: "d",
  casRegistryNumber: "54038-01-6",
  discoverer: "Gesellschaft für Schwerionenforschung (GSI)",
  year: 1982,
  originOfName: "Named in honor of Lise Meitner, the Austrian-Swedish physicist who co-discovered nuclear fission",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 37.4, // g/cm³ at STP (Theoretically calculated baseline density; exceptionally compact matrix)
  melting: null, // Predicted to possess a high melting point typical of platinum-group metals
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to crystallize in a stable face-centered cubic lattice matrix analogous to iridium
  color: "Silvery-metallic appearance predicted; cannot be visually verified due to microscale target yields",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 125, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: null,
  crystalStructure: "Face-centered cubic", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 15, 2",
  orbital: "[Rn] 5f14 6d7 7s2", // Ground state electronic configuration highlighting the continuous filling of the 6d shell array
  valence: 3, // Multi-valence character predicted (+3, +4, +6, +1); behavior shifts due to relativistic effects
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null,
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: null, // First Ionization Energy theoretically derived
  successiveIonizationEnergies: [800.8, 1820, 2900],
  electronAffinity: null,
  oxidation: "+3, +4, +1", // Relativistic models suggest a stable +3 or +1 state, showing deviations from its lighter homologue iridium
  maximumOxidationState: 6, // Theoretical upper ceiling predicted by relativistic quantum calculations
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.45, // Zeff via Slater's rules
  slatersShieldingConstant: 103.55,
  termSymbol: "4F9/2",
  totalAngularMomentumQuantumNumber: 4.5, // J = 9/2
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 278.156, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 278, // For Meitnerium-278
  neutronNumber: 169, // For Meitnerium-278
  isotopeCount: 8, // Mt-266 to Mt-278 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Mt268: 0.0, // Historically significant isotope used in confirmation chains
    Mt278: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 4.5 seconds
  },
  halfLife: "4.5 Seconds", // For Meitnerium-278 (Meitnerium-276 has a half-life of 0.72 seconds; earlier variants decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Meitnerium-278 (Undergoes alpha decay into Bohrium-274)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Meitnerium represents the boundary where macroscale chemical synthesis yields completely to single-atom physical identification. Unlike hassium, meitnerium has not had its chemical properties verified experimentally due to its extremely short half-life and very low production rates (often only a few atoms per week of accelerator run time). It is predicted to behave as a heavy noble metal belonging to Group 9, resembling iridium ($Ir$) and platinum ($Pt$). Meitnerium must be synthetically engineered inside high-energy linear accelerators by bombarding Bismuth-209 targets with Iron-58 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted cold fusion-evaporation reactions ($^{209}_{83}Bi + ^{58}_{26}Fe \rightarrow ^{266}_{109}Mt + ^{1}_{0}n$)"
};
  

  
 
const darmstadtiumData = {
  // 1. Fundamental Identity & Classification
  num: 110,
  symbol: "Ds",
  name: "Darmstadtium",
  type: "Transition Metal",
  group: 10,
  period: 7,
  block: "d",
  casRegistryNumber: "54083-77-1",
  discoverer: "Gesellschaft für Schwerionenforschung (GSI)",
  year: 1994,
  originOfName: "Named in honor of the city of Darmstadt, Germany, where the element was first synthesized by the GSI team",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 34.8, // g/cm³ at STP (Theoretically calculated baseline density; highly compact transition matrix)
  melting: null, // Predicted to possess a high melting point typical of noble platinum-group transition elements
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to crystallize in a stable body-centered cubic lattice matrix, a relativistic deviation from its lighter platinum congener
  color: "Silvery-metallic appearance predicted; cannot be visually verified due to rapid radioactive self-destruction of microscale yields",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 128, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: null,
  crystalStructure: "Body-centered cubic", // Theoretically anticipated stable structural lattice layout altered by relativistic dynamics
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 16, 2",
  orbital: "[Rn] 5f14 6d8 7s2", // Ground state configuration modeled under strong spin-orbit coupling, though relativistic shifts may alter ground levels to $6d^9 7s^1$ or $6d^{10}$
  valence: 2, // Multi-valence character predicted (+2, +4, +6, +8); heavy relativistic modifications change expected group stability
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null,
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: null, // First Ionization Energy theoretically derived
  successiveIonizationEnergies: [960, 1890, 2800],
  electronAffinity: null,
  oxidation: "+2, +4, +6", // Relativistic effects are expected to stabilize higher oxidation states more effectively than in platinum
  maximumOxidationState: 8, // Theoretical maximum calculated for specialized hexafluoride configurations
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.60, // Zeff via Slater's rules
  slatersShieldingConstant: 104.40,
  termSymbol: "3F4",
  totalAngularMomentumQuantumNumber: 4.0, // J = 4
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 281.166, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 281, // For Darmstadtium-281
  neutronNumber: 171, // For Darmstadtium-281
  isotopeCount: 9, // Ds-267 to Ds-281 (Every single isotope is highly radioactive with brief decay pathways)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Ds269: 0.0, // Historically significant isotope used in early discovery confirmation chains
    Ds281: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 14 seconds
  },
  halfLife: "14 Seconds", // For Darmstadtium-281 (Darmstadtium-279 has a half-life of 0.18 seconds; earlier variants decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Darmstadtium-281 (Undergoes alpha decay into Hassium-277 or breaks apart via spontaneous fission)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Darmstadtium represents a regime where chemistry is predicted strictly through advanced Dirac-Fock relativistic quantum calculations, as macroscale physical isolation is impossible. It resides in Group 10 directly below platinum ($Pt$). Due to relativistic stabilization of the 7s shell and contraction of the d-orbitals, it is expected to act as an unreactive, extremely noble metal. Darmstadtium must be synthetically engineered inside high-energy linear accelerators by bombarding Lead-208 targets with Nickel-62 or Nickel-64 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted cold fusion-evaporation reactions ($^{208}_{82}Pb + ^{64}_{28}Ni \rightarrow ^{271}_{110}Ds + ^{1}_{0}n$)"
};
  

  
 
const roentgeniumData = {
  // 1. Fundamental Identity & Classification
  num: 111,
  symbol: "Rg",
  name: "Roentgenium",
  type: "Transition Metal",
  group: 11,
  period: 7,
  block: "d",
  casRegistryNumber: "54386-24-2",
  discoverer: "Gesellschaft für Schwerionenforschung (GSI)",
  year: 1994,
  originOfName: "Named in honor of Wilhelm Conrad Röntgen, the German physicist who discovered X-rays",

  // 2. Bulk Physical Properties
  state: "Solid",
  density: 28.7, // g/cm³ at STP (Theoretically calculated baseline density; highly dense coin-metal group congener)
  melting: null, // Predicted to possess a moderate-to-high melting point, showing relativistic deviations from gold
  boiling: null,
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "High (Predicted)",
  ductility: "High (Predicted)",
  allotropeCount: 1, // Modeled to settle into a body-centered cubic structural matrix, contrasting with the face-centered cubic structure of gold due to relativistic electron shifts
  color: "Silvery-metallic or slightly golden/bronze presentation predicted; cannot be visually verified due to instant radioactive decay",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 121, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: null,
  crystalStructure: "Body-centered cubic", // Theoretically anticipated stable structural lattice layout driven by relativistic contraction
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 17, 2",
  orbital: "[Rn] 5f14 6d9 7s2", // Ground state configuration shifted by intense relativistic effects, contrasting with gold's [Xe] 4f14 5d10 6s1 structure due to the stabilization of the 7s shell
  valence: 3, // Multi-valence character predicted (+3, +5, +1, -1); the +3 and +5 states are heavily reinforced by relativistic d-orbital destabilization
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null,
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: null, // First Ionization Energy theoretically derived
  successiveIonizationEnergies: [1020, 2074, 3077],
  electronAffinity: 151.0, // kJ/mol (Extremely high electron affinity, meaning it can theoretically form an auride-like -1 oxidation state)
  oxidation: "+3, +5, +1, -1", // Relativistic contraction splits the d-orbitals, allowing access to an unusually stable +5 state alongside standard copper-group states
  maximumOxidationState: 5, // Theoretical ceiling verified via specialized heptafluoride models
  minimumOxidationState: -1,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 2, // l = 2 (d orbital valence tier)
  magneticQuantumNumber: 2, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.75, // Zeff via Slater's rules
  slatersShieldingConstant: 105.25,
  termSymbol: "2D5/2",
  totalAngularMomentumQuantumNumber: 2.5, // J = 5/2
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 282.169, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 282, // For Roentgenium-282
  neutronNumber: 171, // For Roentgenium-282
  isotopeCount: 7, // Rg-272 to Rg-286 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Rg272: 0.0, // Historically significant isotope used by GSI in the original discovery tracking event
    Rg282: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 1.7 minutes
  },
  halfLife: "1.7 Minutes", // For Roentgenium-282 (Roentgenium-281 has a half-life of 26 seconds; lighter isotopes decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Roentgenium-282 (Undergoes alpha decay into Meitnerium-278)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Roentgenium resides in Group 11 directly below gold ($Au$). Due to extreme relativistic effects, its 7s orbital is contracted and stabilized while its 6d orbital expands. This creates unique chemical traits, including a predicted +5 oxidation state that is entirely absent in copper and silver and highly unstable in gold. Roentgenium must be synthetically engineered inside high-energy linear accelerators by bombarding Bismuth-209 targets with Nickel-64 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Siderophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted cold fusion-evaporation reactions ($^{209}_{83}Bi + ^{64}_{28}Ni \rightarrow ^{272}_{111}Rg + ^{1}_{0}n$)"
};
  

  
 
const coperniciumData = {
  // 1. Fundamental Identity & Classification
  num: 112,
  symbol: "Cn",
  name: "Copernicium",
  type: "Transition Metal", // Classified at the end of the 6d transition series, though it acts like a volatile post-transition metal or noble gas due to relativistic effects
  group: 12,
  period: 7,
  block: "d",
  casRegistryNumber: "54084-26-3",
  discoverer: "Gesellschaft für Schwerionenforschung (GSI)",
  year: 1996,
  originOfName: "Named in honor of the astronomer Nicolaus Copernicus, who formulated the heliocentric model of the universe",

  // 2. Bulk Physical Properties
  state: "Liquid", // Predicted to be a highly volatile liquid or gas at standard room temperature and pressure due to relativistic stabilization of the 7s² shell
  density: 14.0, // g/cm³ at STP (Theoretically calculated liquid density baseline)
  melting: 283, // Kelvin (10°C; estimated value highlighting its unique liquid/volatile nature)
  boiling: 340, // Kelvin (67°C; highly volatile, potentially boiling near room temperature)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Extremely volatile radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: null,
  ductility: null,
  allotropeCount: 1, // Modeled to crystallize in a stable body-centered cubic lattice matrix at ultra-low temperatures
  color: "Silvery-metallic appearance predicted; cannot be visually verified due to rapid radioactive self-destruction",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 122, // pm (Predicted)
  vanderWaalsRadius: 197, // pm (Predicted; reflects its noble-gas-like physical shielding)
  ionicRadius: null,
  crystalStructure: "Body-centered cubic", // Theoretically anticipated stable low-temperature structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Im-3m",
  coordinationNumber: 8,
  packingFraction: 0.68,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 18, 2",
  orbital: "[Rn] 5f14 6d10 7s2", // Reaches an exceptionally stable electronic state featuring completely filled 5f, 6d, and 7s subshells
  valence: 2, // Divalent character (+2) is predicted, but it strongly resists oxidation, behaving almost like a noble gas ($Cn^0$)
  coreElectronCount: 100,

  // 5. Chemical & Periodicity Variables
  electronegativity: null,
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 1155.0, // kJ/mol (First Ionization Energy; remarkably high due to massive relativistic 7s² stabilization)
  successiveIonizationEnergies: [1155.0, 2170, 3160],
  electronAffinity: null,
  oxidation: "0, +2", // Adsorbs weakly to gold surfaces, demonstrating an elemental state ($Cn^0$) that is significantly more noble than mercury
  maximumOxidationState: 4, // Theoretical ceiling calculated for specialized fluoride geometries ($CnF_4$)
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 0, // l = 0 (s orbital valence shell tracking)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 5.90, // Zeff via Slater's rules
  slatersShieldingConstant: 106.10,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 285.177, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 285, // For Copernicium-285
  neutronNumber: 173, // For Copernicium-285
  isotopeCount: 7, // Cn-277 to Cn-285 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Cn283: 0.0, // Used in high-precision thermochromatography experiments to study its adsorption on gold surfaces
    Cn285: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 28 seconds
  },
  halfLife: "28 Seconds", // For Copernicium-285 (Copernicium-283 has a half-life of 4 seconds; earlier variants decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Copernicium-285 (Undergoes alpha decay into Darmstadtium-281)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Copernicium completes the 6d transition metal block. Due to extreme relativistic contraction, its outer 7s² electron shell is so tightly bound that it mimics the inert closed-shell properties of a noble gas. High-precision gas-phase chromatography experiments have shown that copernicium is highly volatile and interacts very weakly with gold, behaving like a gaseous or liquid metal that is significantly more unreactive than mercury ($Hg$). Copernicium must be synthetically engineered inside high-energy linear accelerators by bombarding Lead-208 targets with Zinc-70 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted cold fusion-evaporation reactions ($^{208}_{82}Pb + ^{70}_{30}Zn \rightarrow ^{277}_{112}Cn + ^{1}_{0}n$)"
};
  

  
 
const nihoniumData = {
  // 1. Fundamental Identity & Classification
  num: 113,
  symbol: "Nh",
  name: "Nihonium",
  type: "Post-Transition Metal", // The first element of the 7p block; expected to behave as a heavy post-transition metal in Group 13
  group: 13,
  period: 7,
  block: "p",
  casRegistryNumber: "54084-70-7",
  discoverer: "RIKEN (Japan)",
  year: 2004,
  originOfName: "Named after 'Nihon', one of the native Japanese names for Japan, where the element was first synthesized",

  // 2. Bulk Physical Properties
  state: "Solid", // Predicted to be a solid under standard conditions, though with a relatively low melting point
  density: 16.0, // g/cm³ at STP (Theoretically calculated baseline density; highly compact p-block matrix)
  melting: 700, // Kelvin (430°C; estimated value tracking group tendencies)
  boiling: 1400, // Kelvin (1130°C; estimated value reflecting high volatility)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to settle into a stable face-centered cubic lattice matrix arrangement
  color: "Silvery-metallic look predicted; cannot be visually inspected due to rapid radioactive self-destruction of single-atom yields",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: 130, // kJ/mol (Relatively low value matching its volatile, heavy p-block traits)
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 136, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: null,
  crystalStructure: "Face-centered cubic", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 18, 3",
  orbital: "[Rn] 5f14 6d10 7s2 7p1", // Ground state configuration indicating the official entrance into the 7p valence block series
  valence: 1, // Monovalent character (+1) is heavily reinforced by relativistic stabilization of the 7s² electrons, deviating from lighter trivalent group trends
  coreElectronCount: 112,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Relativistic calculations predict it to be around 1.8 on the Pauling scale, more electronegative than thallium
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 704.9, // kJ/mol (First Ionization Energy; theoretically derived value)
  successiveIonizationEnergies: [704.9, 2230, 3200],
  electronAffinity: 66.0, // kJ/mol (Relativistically enhanced compared to lighter Group 13 homologs)
  oxidation: "+1, +3", // The +1 oxidation state is expected to be overwhelmingly stable due to the inert-pair effect, mimicking thallium ($Tl^+$) or silver ($Ag^+$)
  maximumOxidationState: 5, // Theoretical upper ceiling calculated for hyper-unstable fluoride configurations
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tier tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.05, // Zeff via Slater's rules
  slatersShieldingConstant: 106.95,
  termSymbol: "2P1/2",
  totalAngularMomentumQuantumNumber: 0.5, // J = 1/2 due to intense spin-orbit splitting of the 7p subshell
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 286.182, // Benchmark mass configuration assigned directly to its longest-lived synthetic nuclide
  massNumber: 286, // For Nihonium-286
  neutronNumber: 173, // For Nihonium-286
  isotopeCount: 8, // Nh-278 to Nh-287 (Every single isotope is highly radioactive with short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Nh284: 0.0, // Produced inside the decay chains of Moscovium; utilized in rapid chemical gas-adsorption studies
    Nh286: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 9.5 seconds
  },
  halfLife: "9.5 Seconds", // For Nihonium-286 (Nihonium-285 has a half-life of 4.2 seconds; lighter variations decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Nihonium-286 (Undergoes alpha decay into Roentgenium-282)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Nihonium marks a historic milestone as the first element discovered and named by an Asian scientific institution. Relativistic quantum models indicate that due to huge spin-orbit coupling, the 7p subshell splits profoundly. This isolates a highly stable $7p_{1/2}$ electron pair, making nihonium vastly more noble than its lighter homologs like aluminum or indium. Gas-phase chromatography experiments suggest it behaves like a volatile, relatively unreactive metal, often showing adsorption characteristics resembling thallium ($Tl$) or even coin metals. Nihonium must be synthetically engineered inside high-energy cyclotrons by blasting Bismuth-209 targets with Zinc-70 ion beams or via the decay cascades of heavier parents. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted cold fusion-evaporation reactions ($^{209}_{83}Bi + ^{70}_{30}Zn \rightarrow ^{278}_{113}Nh + ^{1}_{0}n$)"
};
  

  
 
const fleroviumData = {
  // 1. Fundamental Identity & Classification
  num: 114,
  symbol: "Fl",
  name: "Flerovium",
  type: "Post-Transition Metal", // Placed in Group 14; exhibits heavily altered post-transition or near-noble-gas behaviors due to relativistic effects
  group: 14,
  period: 7,
  block: "p",
  casRegistryNumber: "54085-17-5",
  discoverer: "Joint Institute for Nuclear Research (Dubna) and Lawrence Livermore National Laboratory",
  year: 1998,
  originOfName: "Named in honor of the Flerov Laboratory of Nuclear Reactions, which itself honors pioneering physicist Georgy Flerov",

  // 2. Bulk Physical Properties
  state: "Liquid", // Relativistic calculations strongly indicate a liquid state or extremely high volatility at standard room temperature and pressure
  density: 11.4, // g/cm³ at STP (Theoretically calculated density baseline; significantly lower than lighter heavy congeners like lead)
  melting: 200, // Kelvin (-73°C; highly volatile estimated baseline highlighting extreme weakness in metallic bonding)
  boiling: 340, // Kelvin (67°C; heavily volatile, potentially boiling near standard room temperatures)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Volatile radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: null,
  ductility: null,
  allotropeCount: 1, // Modeled to settle into a face-centered cubic structural matrix at ultra-low operational thermal limits
  color: "Silvery-metallic or metallic-gray hue predicted; cannot be visually confirmed due to the instantaneous radioactive decay of single-atom target yields",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: 38, // kJ/mol (Extremely low value, matching its weak van der Waals bonding traits rather than typical metallic frameworks)
  heatOfAtomization: 38, // kJ/mol
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 143, // pm (Predicted)
  vanderWaalsRadius: 196, // pm (Predicted; reflects its heavily shielded near-inert shell layout)
  ionicRadius: null,
  crystalStructure: "Face-centered cubic", // Theoretically anticipated stable low-temperature crystalline format
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "Fm-3m",
  coordinationNumber: 12,
  packingFraction: 0.74,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 18, 4",
  orbital: "[Rn] 5f14 6d10 7s2 7p2", // Electronic profile indicating the progressive filling of the 7p subshell array
  valence: 2, // Divalent state (+2) is expected to dominate chemically, though it strongly resists reaction, acting almost like a pseudo-noble gas ($Fl^0$)
  coreElectronCount: 112,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Relativistic models suggest a value near 1.8 on the Pauling scale
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 823.9, // kJ/mol (First Ionization Energy; exceptionally high for a Group 14 element due to severe 7s² and 7p₁/₂ shell contraction)
  successiveIonizationEnergies: [823.9, 1600, 2500],
  electronAffinity: null,
  oxidation: "0, +2", // Thermochromatographic data tracking gas phase interaction reveals an exceptionally volatile and chemically inert metal ($Fl^0$)
  maximumOxidationState: 4, // Highly unstable; theoretically accessible only under extreme, hyper-fluorinated laboratory environments ($FlF_4$)
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tier)
  magneticQuantumNumber: 0, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.20, // Zeff via Slater's rules
  slatersShieldingConstant: 107.80,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0 due to the complete closed-subshell relativistic stability of the $7p_{1/2}$ orbital doublet
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 289.191, // Grounded directly to its longest-lived, most accessible synthetic heavy isotope reference mass
  massNumber: 289, // For Flerovium-289
  neutronNumber: 175, // For Flerovium-289
  isotopeCount: 7, // Fl-284 to Fl-290 (Every single isotope is completely radioactive and highly unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Fl285: 0.0, // Utilized inside state-of-the-art gas-adsorption thermochromatography experiments
    Fl289: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 1.9 seconds
  },
  halfLife: "1.9 Seconds", // For Flerovium-289 (Flerovium-290 has a half-life of about 0.8 seconds; lighter variants decay within milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Flerovium-289 (Undergoes alpha decay into Copernicium-285)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Flerovium lies near the center of the theoretically anticipated "Island of Stability," where specific combinations of protons and neutrons show slower decay rates. Due to immense relativistic spin-orbit splitting, the $7p_{1/2}$ subshell forms a completely closed, highly stabilized electron configuration. Gas-phase chemical experiments tracking single atoms show that flerovium is the most volatile member of Group 14, interacting so weakly with gold surfaces that it exhibits properties intermediate between a post-transition metal and a noble gas. Flerovium must be synthetically engineered inside high-energy cyclotrons by blasting Plutonium-244 targets with intense Calcium-48 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted hot fusion-evaporation reactions ($^{244}_{94}Pu + ^{48}_{20}Ca \rightarrow ^{289}_{114}Fl + 3^{1}_{0}n$)"
};
  

  
 
const moscoviumData = {
  // 1. Fundamental Identity & Classification
  num: 115,
  symbol: "Mc",
  name: "Moscovium",
  type: "Post-Transition Metal", // Placed in Group 15; predicted to act as a dense, heavy post-transition metal under ambient conditions
  group: 15,
  period: 7,
  block: "p",
  casRegistryNumber: "54085-18-6",
  discoverer: "Joint Institute for Nuclear Research (Dubna), Lawrence Livermore National Laboratory, and Oak Ridge National Laboratory",
  year: 2003,
  originOfName: "Named in honor of the Moscow Oblast region in Russia, where the element was first synthesized at the Flerov Laboratory",

  // 2. Bulk Physical Properties
  state: "Solid", // Predicted to be a solid under standard conditions
  density: 13.5, // g/cm³ at STP (Theoretically calculated baseline density; highly compact p-block framework)
  melting: 670, // Kelvin (400°C; estimated value reflecting group properties modified by relativistic trends)
  boiling: 1400, // Kelvin (1130°C; estimated value highlighting relatively high volatility)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, highly unstable radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to settle into a stable body-centered tetragonal matrix configuration
  color: "Silvery-metallic or dull gray appearance predicted; cannot be visually verified due to rapid radioactive self-destruction",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: 150, // kJ/mol (Predicted value confirming metallic cohesion patterns)
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 156, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: null,
  crystalStructure: "Body-centered tetragonal", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "I4/mmm",
  coordinationNumber: 8,
  packingFraction: null,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 18, 5",
  orbital: "[Rn] 5f14 6d10 7s2 7p3", // Electronic profile detailing the progressive filling of the 7p valence block series
  valence: 1, // Monovalent state (+1) is heavily stabilized by relativistic closed-shell pairing, though a trivalent (+3) state is also accessible
  coreElectronCount: 112,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Predicted to continue p-block trends with relativistic alterations
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 538.1, // kJ/mol (First Ionization Energy; theoretically derived value)
  successiveIonizationEnergies: [538.1, 1760, 2650],
  electronAffinity: null,
  oxidation: "+1, +3", // Severe relativistic spin-orbit splitting separates the 7p shell, creating a highly stable $7p_{1/2}$ pair and leaving a lone $7p_{3/2}$ electron, making the +1 state uniquely prominent compared to lighter pnictogens
  maximumOxidationState: 3, // Standard maximum; higher states (+5) are predicted to be extremely unstable due to the inert-pair effect
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tier tracking)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.35, // Zeff via Slater's rules
  slatersShieldingConstant: 108.65,
  termSymbol: "4S3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2 modified by relativistic spin-orbit interactions
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 290.196, // Mapped directly to its longest-lived, most accessible synthetic heavy isotope reference mass
  massNumber: 290, // For Moscovium-290
  neutronNumber: 175, // For Moscovium-290
  isotopeCount: 4, // Mc-287 to Mc-290 (Every single isotope is completely radioactive with fleeting decay pathways)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Mc288: 0.0, // Frequently synthesized in target decay paths to evaluate heavy element cross-sections
    Mc290: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 0.8 seconds
  },
  halfLife: "0.8 Seconds", // For Moscovium-290 (Moscovium-289 has a half-life of 0.22 seconds; lighter variants decay in milliseconds)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Moscovium-290 (Undergoes alpha decay into Nihonium-286)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Moscovium exists strictly in the single-atom regime where properties are evaluated using specialized fast separation systems. Relativistic quantum simulations indicate that because of immense spin-orbit coupling, the 7p subshell is split into a lower $7p_{1/2}$ energy tier and an upper $7p_{3/2}$ tier. This electronic geometry makes moscovium significantly more noble than bismuth, behaving structurally as a heavy post-transition metal with chemical similarities to thallium ($Tl$). Moscovium must be synthetically engineered inside high-energy cyclotrons by blasting Americium-243 targets with high-flux Calcium-48 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted hot fusion-evaporation reactions ($^{243}_{95}Am + ^{48}_{20}Ca \rightarrow ^{288}_{115}Mc + 3^{1}_{0}n$)"
};
  

  
 
const livermoriumData = {
  // 1. Fundamental Identity & Classification
  num: 116,
  symbol: "Lv",
  name: "Livermorium",
  type: "Post-Transition Metal", // Placed in Group 16; predicted to be a heavy post-transition metal showing strong relativistic modifications
  group: 16,
  period: 7,
  block: "p",
  casRegistryNumber: "54085-22-2",
  discoverer: "Joint Institute for Nuclear Research (Dubna) and Lawrence Livermore National Laboratory",
  year: 2000,
  originOfName: "Named in honor of the Lawrence Livermore National Laboratory and the city of Livermore, California, which participated in its discovery",

  // 2. Bulk Physical Properties
  state: "Solid", // Predicted to form a solid metallic network under normal standard ambient conditions
  density: 12.9, // g/cm³ at STP (Theoretically calculated baseline density; highly dense p-block matrix)
  melting: 700, // Kelvin (430°C; estimated value tracking heavy chalcogen trends)
  boiling: 1100, // Kelvin (830°C; estimated value highlighting a notably high volatility for a metal)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, short-lived radioactive metal
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: "Moderate (Predicted)",
  ductility: "Moderate (Predicted)",
  allotropeCount: 1, // Modeled to settle into a stable body-centered tetragonal matrix configuration
  color: "Silvery-metallic or dark slate-gray appearance predicted; cannot be visually confirmed due to rapid millisecond-scale decay",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 162, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: null,
  crystalStructure: "Body-centered tetragonal", // Theoretically anticipated stable structural lattice layout altered by spin-orbit pairing
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: "I4/mmm",
  coordinationNumber: 8,
  packingFraction: null,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 18, 6",
  orbital: "[Rn] 5f14 6d10 7s2 7p4", // Electronic profile detailing the progressive filling of the 7p valence block series
  valence: 2, // Divalent state (+2) is expected to be stable due to the relativistic closed-subshell behavior of the $7p_{1/2}$ orbital tier, while a tetravalent (+4) state is highly unstable
  coreElectronCount: 112,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Predicted to continue downward chalcogen group trends with minor relativistic adjustments
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 723.2, // kJ/mol (First Ionization Energy; theoretically derived value)
  successiveIonizationEnergies: [723.2, 1330, 2840],
  electronAffinity: null,
  oxidation: "+2, +4", // The +2 oxidation state is favored over higher chalcogen states like +6 because relativistic effects strongly bind the 7s² and $7p_{1/2}$ electron pairs (inert-pair effect)
  maximumOxidationState: 4, // Theoretically possible via specialized fluoride interactions, but highly unstable
  minimumOxidationState: -2, // Unlikely to form a stable livermoride ($Lv^{2-}$) ion due to decreased electron affinity compared to polonium
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tier tracking)
  magneticQuantumNumber: -1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.50, // Zeff via Slater's rules
  slatersShieldingConstant: 109.50,
  termSymbol: "3P2",
  totalAngularMomentumQuantumNumber: 2.0, // J = 2 modified by relativistic spin-orbit coupling
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 293.205, // Mapped directly to its longest-lived, most accessible synthetic heavy isotope reference mass
  massNumber: 293, // For Livermorium-293
  neutronNumber: 177, // For Livermorium-293
  isotopeCount: 4, // Lv-290 to Lv-293 (Every single isotope is completely radioactive with very short half-lives)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Lv291: 0.0, // Produced inside alpha decay chains to study structural stability
    Lv293: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 53 milliseconds
  },
  halfLife: "53 Milliseconds", // For Livermorium-293 (Livermorium-292 has a half-life of 18 milliseconds; other isotopes collapse faster)
  decayMode: "Alpha Decay / Spontaneous Fission", // For Livermorium-293 (Undergoes alpha decay into Flerovium-289)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Livermorium exists firmly within the single-atom regime where macroscale chemistry is impossible. Relativistic quantum models indicate that because of immense spin-orbit splitting, the 7p subshell is highly segregated into a lower $7p_{1/2}$ energy tier and an upper $7p_{3/2}$ tier. This electronic geometry makes livermorium behave more like a noble post-transition metal, mimicking traits of polonium ($Po$) and occasionally displaying increased resistance to forming compounds compared to its lighter congeners. Livermorium must be synthetically engineered inside high-energy cyclotrons by blasting Curium-248 targets with high-flux Calcium-48 ion beams. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted hot fusion-evaporation reactions ($^{248}_{96}Cm + ^{48}_{20}Ca \rightarrow ^{293}_{116}Lv + 3^{1}_{0}n$)"
};
  

  
 
const tennessineData = {
  // 1. Fundamental Identity & Classification
  num: 117,
  symbol: "Ts",
  name: "Tennessine",
  type: "Metalloid / Post-Transition Metal", // Classified in Group 17 (the halogens) but predicted to possess distinct metallic qualities due to relativistic electron tracking
  group: 17,
  period: 7,
  block: "p",
  casRegistryNumber: "87658-56-8",
  discoverer: "Joint Institute for Nuclear Research (Dubna), Lawrence Livermore National Laboratory, and Oak Ridge National Laboratory",
  year: 2010,
  originOfName: "Named in honor of the U.S. state of Tennessee, home to major nuclear research institutions including Oak Ridge National Laboratory",

  // 2. Bulk Physical Properties
  state: "Solid", // Relativistic modeling strongly suggests a non-volatile solid profile, breaking the gas/liquid/volatile trends of lighter halogens
  density: 7.2, // g/cm³ at STP (Theoretically predicted baseline density)
  melting: 723, // Kelvin (450°C; estimated value reflecting group properties significantly modified by relativistic mechanics)
  boiling: 883, // Kelvin (610°C; estimated value tracking low-temperature metalloid phase shifts)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Highly unstable radioactive element
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: null,
  ductility: null,
  allotropeCount: 1, // Modeled to settle into a stable crystalline atomic matrix framework at standard baseline limits
  color: "Dark metallic appearance predicted; cannot be visually observed due to rapid sub-second decay pathways",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 157, // pm (Predicted)
  vanderWaalsRadius: null,
  ionicRadius: null,
  crystalStructure: "Face-centered cubic (Predicted)", // Theoretically anticipated stable structural lattice layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: null,
  coordinationNumber: null,
  packingFraction: null,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 18, 7",
  orbital: "[Rn] 5f14 6d10 7s2 7p5", // Electronic profile demonstrating the structural layout of the 7p valence shell array
  valence: 7, // Valence shell contains 7 electrons, though its chemistry is strongly dominated by a highly stable +1 or +3 state instead of a standard -1 halogen state
  coreElectronCount: 110,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Predicted to be the least electronegative halogen, behaving more like a metalloid or post-transition element
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 742.9, // kJ/mol (First Ionization Energy; theoretically derived value)
  successiveIonizationEnergies: [742.9, 1435, 2162],
  electronAffinity: null, // Predicted to be exceptionally low or endothermic compared to lighter halogens due to spin-orbit shielding
  oxidation: "+1, +3, +5, -1", // The +1 and +3 states are anticipated to be the most stable; unlike fluorine or chlorine, it resists forming a stable -1 halide ($Ts^-$)
  maximumOxidationState: 5,
  minimumOxidationState: -1,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null,
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tier tracking)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.65, // Zeff via Slater's rules
  slatersShieldingConstant: 110.35,
  termSymbol: "2P3/2",
  totalAngularMomentumQuantumNumber: 1.5, // J = 3/2 due to major relativistic splitting of the 7p subshell
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 294.211, // Mapped directly to its longest-lived, most accessible synthetic heavy isotope reference mass
  massNumber: 294, // For Tennessine-294
  neutronNumber: 177, // For Tennessine-294
  isotopeCount: 4, // Ts-291 to Ts-294 (Every single isotope is completely radioactive and highly unstable)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Ts293: 0.0, // Synthesized directly via particle fusion tracks
    Ts294: 100.0 // Longest-lived isotope; exhibits a relatively stable transactinide half-life of roughly 80 milliseconds
  },
  halfLife: "80 Milliseconds", // For Tennessine-294 (Tennessine-293 has a half-life of 22 milliseconds)
  decayMode: "Alpha Decay", // For Tennessine-294 (Undergoes alpha decay into Moscovium-290)
  decayEnergy: null,
  nuclearSpin: null,
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Tennessine sits at the penultimate position of the 7th period. Due to extreme relativistic effects and intense spin-orbit splitting, its outer $7p$ shell separates profoundly into a lower $7p_{1/2}$ energy doublet and an upper $7p_{3/2}$ triplet. This prevents tennessine from acting as a traditional electronegative halogen. It is predicted to behave as a volatile, semiconductor metalloid or post-transition metal, leaning toward positive oxidation states rather than forming traditional salts. Tennessine must be synthetically engineered inside high-energy cyclotrons by blasting Berkelium-249 targets with intense, high-flux beams of Calcium-48 ions. It has zero commercial or industrial functions and is used exclusively in fundamental research.
  goldschmidtClassification: "Chalcophile",
  nucleosynthesisPathway: "Synthesized in fleeting, atom-by-atom yields within heavy-ion accelerators via targeted hot fusion-evaporation reactions ($^{249}_{97}Bk + ^{48}_{20}Ca \rightarrow ^{294}_{117}Ts + 3^{1}_{0}n$)"
};
  

  
 
const oganessonData = {
  // 1. Fundamental Identity & Classification
  num: 118,
  symbol: "Og",
  name: "Oganesson",
  type: "Noble Gas", // Officially concludes Period 7 and Group 18, though relativistic tracking indicates it is heavily modified from traditional noble gas profiles
  group: 18,
  period: 7,
  block: "p",
  casRegistryNumber: "54144-19-3",
  discoverer: "Joint Institute for Nuclear Research (Dubna) and Lawrence Livermore National Laboratory",
  year: 2002,
  originOfName: "Named in honor of the prominent physicist Yuri Oganessian, a pioneer in the synthesis of super-heavy transactinide elements",

  // 2. Bulk Physical Properties
  state: "Solid", // Due to immense relativistic polarizability and strong van der Waals interactions, it is predicted to be a solid at room temperature rather than a gas
  density: 5.0, // g/cm³ at STP (Theoretically predicted baseline density)
  melting: 325, // Kelvin (52°C; uniquely high melting point for a Group 18 congener, proving its solid configuration)
  boiling: 350, // Kelvin (77°C; remarkably narrow liquid range predicted)
  triplePointTemperature: null,
  triplePointPressure: null,
  criticalPointTemperature: null,
  criticalPointPressure: null,
  molarVolume: null,
  electricalConductivity: null,
  electricalResistivity: null,
  thermalConductivity: null,
  thermalExpansionCoefficient: null,
  speedOfSound: null,
  refractiveIndex: null,
  hardnessMohs: null, // Super-heavy, highly unstable radioactive element
  hardnessVickers: null,
  hardnessBrinell: null,
  bulkModulus: null,
  shearModulus: null,
  youngsModulus: null,
  poissonsRatio: null,
  malleability: null,
  ductility: null,
  allotropeCount: 1, // Modeled to settle into a stable face-centered cubic atomic lattice matrix at standard limits
  color: "Unknown; predicted to display a metallic or dark presentation if macroscale quantities could be stabilized",

  // 3. Thermodynamic Variables
  specificHeatCapacity: null,
  molarHeatCapacity: null,
  heatOfFusion: null,
  heatOfVaporization: null,
  heatOfAtomization: null,
  standardMolarEntropy: null,
  standardEnthalpyOfFormation: 0.0,
  gibbsFreeEnergyOfFormation: 0.0,
  thermalDiffusivity: null,
  criticalTemperatureSuperconductivity: null,

  // 4. Atomic & Structural Variables
  radius: null,
  covalentRadius: 157, // pm (Predicted)
  vanderWaalsRadius: 230, // pm (Predicted; reflects its massive electron cloud displacement capacity)
  ionicRadius: null,
  crystalStructure: "Face-centered cubic (Predicted)", // Theoretically modeled structural layout
  latticeConstantA: null,
  latticeConstantB: null,
  latticeConstantC: null,
  axialAngleAlpha: 90,
  axialAngleBeta: 90,
  axialAngleGamma: 90,
  spaceGroup: null,
  coordinationNumber: null,
  packingFraction: null,
  atomicVolume: null,
  bohr: "2, 8, 18, 32, 32, 18, 8",
  orbital: "[Rn] 5f14 6d10 7s2 7p6", // Represents the definitive filling and closing of the 7p shell, completing the known periodic layout
  valence: 8, // Full complement of 8 valence electrons, but relativistic shell expansion makes it chemically reactive rather than inert
  coreElectronCount: 110,

  // 5. Chemical & Periodicity Variables
  electronegativity: null, // Predicted to exhibit a standard electronegativity of around 3.0 on the Pauling scale, making it highly reactive for a noble gas
  electronegativityMulliken: null,
  electronegativityAllredRochow: null,
  ionization: 860.1, // kJ/mol (First Ionization Energy; theoretically derived value)
  successiveIonizationEnergies: [860.1, 1560, 2200],
  electronAffinity: 5.3, // kJ/mol (Relativistically stabilized; possesses a positive electron affinity, unlike any lighter noble gas)
  oxidation: "0, +2, +4", // Easily oxidized; calculations indicate it forms stable compounds like oganesson tetrafluoride ($OgF_4$) and behaves more like a normal metal or metalloid
  maximumOxidationState: 4, // Stable predicted upper chemical tracking limit; higher states (+6) are heavily destabilized
  minimumOxidationState: 0,
  chemicalHardness: null,
  chemicalSoftness: null,
  electrophilicityIndex: null,
  polarizability: null, // Exceptionally high polarizability due to the loosely bound outer $7p_{3/2}$ electron cloud
  standardReductionPotential: null,
  flameTestColor: "Vaporizes immediately with complex radioactive line structures under intense ionization fields",

  // 6. Quantum Mechanical Variables
  principalQuantumNumber: 7,
  azimuthalQuantumNumber: 1, // l = 1 (p orbital valence tier tracking)
  magneticQuantumNumber: 1, // ml
  spinQuantumNumber: 0.5, // ms
  effectiveNuclearCharge: 6.80, // Zeff via Slater's rules
  slatersShieldingConstant: 111.20,
  termSymbol: "1S0",
  totalAngularMomentumQuantumNumber: 0, // J = 0
  atomicOrbitalEnergyLevel: null,
  workFunction: null,

  // 7. Nuclear & Isotopic Variables
  standardAtomicWeight: 294.214, // Mapped directly to its first successfully synthesized heavy isotope reference mass
  massNumber: 294, // For Oganesson-294
  neutronNumber: 176, // For Oganesson-294
  isotopeCount: 2, // Og-294 and Og-295 (Extremely fleeting radioisotopes)
  stableIsotopeCount: 0,
  isotopicAbundance: {
    Og294: 100.0 // Longest-lived validated isotope; possesses a half-life of roughly 0.7 milliseconds
  },
  halfLife: "0.7 Milliseconds", // For Oganesson-294 (The absolute temporal limit of current single-atom confirmation capabilities)
  decayMode: "Alpha Decay", // For Oganesson-294 (Undergoes alpha decay into Livermorium-290)
  decayEnergy: 11.81, // MeV
  nuclearSpin: 0, // Even-even nucleus yields an absolute zero spin ground state configuration
  magneticDipoleMoment: null,
  neutronCrossSection: null,

  // 8. Astrophysics, Abundance & Environmental Variables
  universeAbundance: 0.0,
  solarAbundance: 0.0,
  crustalAbundance: 0.0, // Completely synthetic super-heavy element; has zero natural crustal presence on Earth
  oceanicAbundance: null,
  humanBodyAbundance: null, // High extreme radiological hazard profile. Oganesson represents the grand finale of the known periodic table, completing the seventh period. Extreme relativistic effects cause its outer $7p_{3/2}$ electrons to undergo complete orbital structure smearing ("electron gas" behavior). This drastically lowers its ionization energy and changes its physical character entirely, turning oganesson into a highly reactive, polarizable solid semiconductor rather than an unreactive gas. Oganesson must be synthetically engineered inside high-energy cyclotrons by bombarding Californium-249 targets with targeted high-flux beams of Calcium-48 ions. It has zero commercial or industrial functions and is used exclusively to test the limits of quantum physics.
  goldschmidtClassification: "Atmophile / Chalcophile",
  nucleosynthesisPathway: "Synthesized in vanishingly faint, atom-by-atom yields within heavy-ion cyclotrons via targeted hot fusion reactions ($^{249}_{98}Cf + ^{48}_{20}Ca \rightarrow ^{294}_{118}Og + 3^{1}_{0}n$) behind advanced gas-filled separator lines"
};
