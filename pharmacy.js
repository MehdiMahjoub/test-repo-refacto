export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return this.drugs.map((drug) => this.updateDrug(drug));
  }

  updateDrug(drug) {
    switch (drug.name) {
      case "Herbal Tea":
        this.updateHerbalTea(drug);
        break;
      case "Fervex":
        this.updateFervex(drug);
        break;
      case "Magic Pill":
        break;
      case "Dafalgan":
        this.updateDafalgan(drug);
        break;
      default:
        this.updateDefaultDrug(drug);
        break;
    }

    if (drug.name !== "Magic Pill") {
      drug.expiresIn -= 1;
    }

    if (drug.expiresIn < 0) {
      switch (drug.name) {
        case "Herbal Tea":
          if (drug.benefit < 50) {
            drug.benefit += 1;
          }
          break;
        case "Fervex":
          drug.benefit = 0;
          break;
        case "Magic Pill":
          break;
        case "Dafalgan":
          drug.benefit -= 2;
          break;
        default:
          if (drug.benefit > 0) {
            drug.benefit -= 1;
          }
          break;
      }
    }

    drug.benefit = Math.max(0, Math.min(50, drug.benefit));

    return drug;
  }

  updateDafalgan(drug) {
    if (drug.benefit > 0) {
      drug.benefit -= 2;
    }
  }

  updateHerbalTea(drug) {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
  }

  updateFervex(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit = 0;
    } else if (drug.expiresIn <= 5) {
      drug.benefit += 3;
    } else if (drug.expiresIn <= 10) {
      drug.benefit += 2;
    } else {
      drug.benefit += 1;
    }
  }

  updateDefaultDrug(drug) {
    if (drug.benefit > 0) {
      drug.benefit -= 1;
    }
  }
}
