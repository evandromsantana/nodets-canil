type PetType = 'dog' | 'cat' | 'fish' | 'bird';
type PetSex = 'Masculino' | 'Feminino';

interface HealthInfo {
  vacinated: boolean;
  lastCheckup: Date;
  healthIssues?: string[];
}

interface SizeInfo {
  weightRange: string;
  heightRange: string;
  lifeExpectancy: string;
}

interface CareInfo {
  feedingFrequency: string;
  exerciseNeeds: string;
  socialNeeds: string;
}

type Pet = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  sex: PetSex;
  characteristics: string[];
  healthInfo: HealthInfo;
  sizeInfo: SizeInfo;
  careInfo: CareInfo;
}

const data: Pet[] = [
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    sex: 'Masculino',
    characteristics: ['Inteligente', 'Protetor', 'Obediente'],
    healthInfo: {
        vacinated: true,
        lastCheckup: new Date('2024-02-15'),
        healthIssues: ['Alergia sazonal']
    },
    sizeInfo: {
        weightRange: '35-43 kg',
        heightRange: '55-65 cm',
        lifeExpectancy: '9-13 anos'
    },
    careInfo: {
        feedingFrequency: '3 vezes ao dia',
        exerciseNeeds: 'Alta (mais de 2 horas)',
        socialNeeds: 'Alta (precisa de companhia)'
    }
  },
  {
      type: 'dog',
      image: 'labrador.jpg',
      name: 'Labrador-retriever',
      color: 'Branco',
      sex: 'Masculino',
      characteristics: ['Amigável', 'Leal', 'Brincalhão'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-20'),
          healthIssues: ['Displasia de quadril']
      },
      sizeInfo: {
          weightRange: '25-36 kg',
          heightRange: '55-62 cm',
          lifeExpectancy: '10-12 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (mais de 1 hora)',
          socialNeeds: 'Alta (precisa de companhia)'
      }
  },
  {
      type: 'dog',
      image: 'zwergspitz.jpg',
      name: 'Zwergspitz',
      color: 'Amarelo',
      sex: 'Feminino',
      characteristics: ['Vigilante', 'Afetuoso', 'Energético'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-10'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '3-6 kg',
          heightRange: '18-22 cm',
          lifeExpectancy: '12-14 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Média (30-45 minutos)',
          socialNeeds: 'Média (precisa de atenção)'
      }
  },
  {
      type: 'dog',
      image: 'husky.jpg',
      name: 'Husky Siberiano',
      color: 'Branco e Preto',
      sex: 'Masculino',
      characteristics: ['Resistente', 'Independente', 'Sociável'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-05'),
          healthIssues: ['Problemas oculares']
      },
      sizeInfo: {
          weightRange: '16-27 kg',
          heightRange: '50-60 cm',
          lifeExpectancy: '12-15 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (mais de 2 horas)',
          socialNeeds: 'Alta (precisa de grupo)'
      }
  },
  {
      type: 'dog',
      image: 'golden.jpg',
      name: 'Golden Retriever',
      color: 'Amarelo',
      sex: 'Masculino',
      characteristics: ['Gentil', 'Inteligente', 'Fiel'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-25'),
          healthIssues: ['Câncer']
      },
      sizeInfo: {
          weightRange: '25-34 kg',
          heightRange: '51-61 cm',
          lifeExpectancy: '10-12 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (mais de 1 hora)',
          socialNeeds: 'Alta (precisa de família)'
      }
  },
  {
      type: 'dog',
      image: 'poodle.jpg',
      name: 'Poodle',
      color: 'Branco',
      sex: 'Feminino',
      characteristics: ['Inteligente', 'Ativo', 'Orgulhoso'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-12'),
          healthIssues: ['Problemas de pele']
      },
      sizeInfo: {
          weightRange: '20-30 kg',
          heightRange: '40-50 cm',
          lifeExpectancy: '12-15 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Média (45-60 minutos)',
          socialNeeds: 'Média (precisa de treinamento)'
      }
  },
  {
      type: 'dog',
      image: 'bulldog.jpg',
      name: 'Bulldog',
      color: 'Branco e Amarelo',
      sex: 'Masculino',
      characteristics: ['Calmo', 'Afetuoso', 'Corajoso'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-15'),
          healthIssues: ['Problemas respiratórios']
      },
      sizeInfo: {
          weightRange: '18-22 kg',
          heightRange: '25-40 cm',
          lifeExpectancy: '8-12 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Baixa (curtos períodos)',
          socialNeeds: 'Baixa (independente)'
      }
  },
  {
      type: 'cat',
      image: 'persa.jpg',
      name: 'Persa',
      color: 'Amarelo',
      sex: 'Masculino',
      characteristics: ['Calmo', 'Dócil', 'Afetuoso'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-08'),
          healthIssues: ['Problemas respiratórios']
      },
      sizeInfo: {
          weightRange: '4-6 kg',
          heightRange: '25-30 cm',
          lifeExpectancy: '12-17 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Baixa (atividade livre)',
          socialNeeds: 'Baixa (independente)'
      }
  },
  {
      type: 'cat',
      image: 'mainecoon.jpg',
      name: 'Maine Coon',
      color: 'Preto e Branco',
      sex: 'Masculino',
      characteristics: ['Gentil', 'Sociável', 'Brincalhão'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-22'),
          healthIssues: ['Displasia de quadril']
      },
      sizeInfo: {
          weightRange: '6-11 kg',
          heightRange: '25-40 cm',
          lifeExpectancy: '12-15 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Média (30-45 minutos)',
          socialNeeds: 'Alta (precisa de atenção)'
      }
  },
  {
      type: 'cat',
      image: 'bengal.jpg',
      name: 'Bengal',
      color: 'Branco, Preto e Amarelo',
      sex: 'Feminino',
      characteristics: ['Ativo', 'Curioso', 'Vocal'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-05'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '4-7 kg',
          heightRange: '20-25 cm',
          lifeExpectancy: '12-16 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (mais de 1 hora)',
          socialNeeds: 'Alta (precisa de estímulo)'
      }
  },
  {
      type: 'cat',
      image: 'siames.jpg',
      name: 'Siamês',
      color: 'Amarelo e Preto',
      sex: 'Masculino',
      characteristics: ['Vocal', 'Carinhoso', 'Inteligente'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-18'),
          healthIssues: ['Problemas oculares']
      },
      sizeInfo: {
          weightRange: '4-8 kg',
          heightRange: '20-25 cm',
          lifeExpectancy: '15-20 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Média (30-45 minutos)',
          socialNeeds: 'Alta (precisa de companhia)'
      }
  },
  {
      type: 'cat',
      image: 'sphynx.jpg',
      name: 'Sphynx',
      color: 'Branco',
      sex: 'Masculino',
      characteristics: ['Afetuoso', 'Curioso', 'Brincalhão'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-01'),
          healthIssues: ['Problemas de pele']
      },
      sizeInfo: {
          weightRange: '3.5-6 kg',
          heightRange: '20-25 cm',
          lifeExpectancy: '12-15 anos'
      },
      careInfo: {
          feedingFrequency: '3 vezes ao dia',
          exerciseNeeds: 'Média (30-45 minutos)',
          socialNeeds: 'Alta (precisa de calor)'
      }
  },
  {
      type: 'fish',
      image: 'neon.jpg',
      name: 'Tetra Neon',
      color: 'Vermelho e Azul',
      sex: 'Masculino',
      characteristics: ['Pacífico', 'Pequeno', 'Colorido'],
      healthInfo: {
          vacinated: false,
          lastCheckup: new Date('2024-02-15'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '1-2g',
          heightRange: '1-2cm',
          lifeExpectancy: '5-8 anos'
      },
      careInfo: {
          feedingFrequency: '3 vezes ao dia',
          exerciseNeeds: 'Baixa (natação livre)',
          socialNeeds: 'Alta (precisa de cardume)'
      }
  },
  {
      type: 'fish',
      image: 'matogrosso.jpg',
      name: 'Mato Grosso',
      color: 'Laranja',
      sex: 'Masculino',
      characteristics: ['Ativo', 'Resistente', 'Colorido'],
      healthInfo: {
          vacinated: false,
          lastCheckup: new Date('2024-02-10'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '10-30g',
          heightRange: '5-15cm',
          lifeExpectancy: '5-10 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Média (natação livre)',
          socialNeeds: 'Média (pode ser solitário)'
      }
  },
  {
      type: 'fish',
      image: 'limpavidro.jpg',
      name: 'Limpa Vidro',
      color: 'Verde e Branco',
      sex: 'Masculino',
      characteristics: ['Calmo', 'Útil', 'Resistente'],
      healthInfo: {
          vacinated: false,
          lastCheckup: new Date('2024-02-05'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '5-15g',
          heightRange: '5-10cm',
          lifeExpectancy: '5-8 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Baixa (natação livre)',
          socialNeeds: 'Baixa (solitário)'
      }
  },
  {
      type: 'fish',
      image: 'tanictis.jpg',
      name: 'Tanictis',
      color: 'Vermelho',
      sex: 'Masculino',
      characteristics: ['Pacífico', 'Ativo', 'Pequeno'],
      healthInfo: {
          vacinated: false,
          lastCheckup: new Date('2024-02-03'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '2-5g',
          heightRange: '2-5cm',
          lifeExpectancy: '3-5 anos'
      },
      careInfo: {
          feedingFrequency: '3 vezes ao dia',
          exerciseNeeds: 'Média (natação livre)',
          socialNeeds: 'Alta (precisa de grupo)'
      }
  },
  {
      type: 'fish',
      image: 'acara.jpg',
      name: 'Acará Bandeira',
      color: 'Preto',
      sex: 'Masculino',
      characteristics: ['Elegante', 'Sociável', 'Colorido'],
      healthInfo: {
          vacinated: false,
          lastCheckup: new Date('2024-01-28'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '30-60g',
          heightRange: '10-20cm',
          lifeExpectancy: '8-12 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Média (natação livre)',
          socialNeeds: 'Média (pode ser em grupo)'
      }
  },
  {
      type: 'bird',
      image: 'canario.jpg',
      name: 'Canário',
      color: 'Amarelo',
      sex: 'Masculino',
      characteristics: ['Cantor', 'Alegre', 'Ativo'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-12'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '10-15g',
          heightRange: '10-15cm',
          lifeExpectancy: '10-15 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Média (voos no cage)',
          socialNeeds: 'Baixa (pode ser solitário)'
      }
  },
  {
      type: 'bird',
      image: 'periquito.jpg',
      name: 'Periquito',
      color: 'Verde e Azul',
      sex: 'Feminino',
      characteristics: ['Sociável', 'Brincalhão', 'Colorido'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-08'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '30-60g',
          heightRange: '15-20cm',
          lifeExpectancy: '7-10 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (precisa voar)',
          socialNeeds: 'Alta (precisa de par)'
      }
  },
  {
      type: 'bird',
      image: 'papagaio.jpg',
      name: 'Papagaio',
      color: 'Verde',
      sex: 'Masculino',
      characteristics: ['Falante', 'Inteligente', 'Sociável'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-25'),
          healthIssues: ['Problemas de bico']
      },
      sizeInfo: {
          weightRange: '300-500g',
          heightRange: '30-40cm',
          lifeExpectancy: '50-60 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (precisa voar)',
          socialNeeds: 'Alta (precisa de interação)'
      }
  },
  {
      type: 'bird',
      image: 'arara.jpg',
      name: 'Arara',
      color: 'Azul e Amarelo',
      sex: 'Feminino',
      characteristics: ['Colorida', 'Inteligente', 'Afetuosa'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-20'),
          healthIssues: ['Problemas de asa']
      },
      sizeInfo: {
          weightRange: '900-1700g',
          heightRange: '80-90cm',
          lifeExpectancy: '50-60 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (precisa voar)',
          socialNeeds: 'Alta (precisa de par)'
      }
  },
  {
      type: 'bird',
      image: 'calopsita.jpg',
      name: 'Calopsita',
      color: 'Cinza e Amarelo',
      sex: 'Masculino',
      characteristics: ['Sociável', 'Afetuosa', 'Brincalhona'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-02-05'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '60-80g',
          heightRange: '20-25cm',
          lifeExpectancy: '30-50 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (precisa voar)',
          socialNeeds: 'Alta (precisa de par)'
      }
  },
  {
      type: 'bird',
      image: 'coruja.jpg',
      name: 'Coruja',
      color: 'Branco e Marrom',
      sex: 'Feminino',
      characteristics: ['Silenciosa', 'Observadora', 'Noturna'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-15'),
          healthIssues: []
      },
      sizeInfo: {
          weightRange: '500-1000g',
          heightRange: '30-40cm',
          lifeExpectancy: '10-15 anos'
      },
      careInfo: {
          feedingFrequency: '1 vez ao dia',
          exerciseNeeds: 'Baixa (voos curtos)',
          socialNeeds: 'Baixa (solitária)'
      }
  },
  {
      type: 'bird',
      image: 'falcao.jpg',
      name: 'Falcão',
      color: 'Marrom e Preto',
      sex: 'Masculino',
      characteristics: ['Ágil', 'Caçador', 'Atento'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-10'),
          healthIssues: ['Problemas de asa']
      },
      sizeInfo: {
          weightRange: '700-1400g',
          heightRange: '40-50cm',
          lifeExpectancy: '15-20 anos'
      },
      careInfo: {
          feedingFrequency: '1 vez ao dia',
          exerciseNeeds: 'Alta (caça)',
          socialNeeds: 'Baixa (solitário)'
      }
  },
  {
      type: 'bird',
      image: 'tucano.jpg',
      name: 'Tucano',
      color: 'Preto e Laranja',
      sex: 'Masculino',
      characteristics: ['Exótico', 'Colorido', 'Pacífico'],
      healthInfo: {
          vacinated: true,
          lastCheckup: new Date('2024-01-05'),
          healthIssues: ['Problemas de bico']
      },
      sizeInfo: {
          weightRange: '300-400g',
          heightRange: '50-60cm',
          lifeExpectancy: '20-30 anos'
      },
      careInfo: {
          feedingFrequency: '2 vezes ao dia',
          exerciseNeeds: 'Alta (precisa voar)',
          socialNeeds: 'Média (pode ser em grupo)'
      }
  }
];

export const Pet = {
  getAll: (): Pet[] => {
    return data;
  },

  getFromType: (type: PetType): Pet[] => {
    return data.filter(item => item.type === type);
  },

  getFromName: (name: string): Pet[] => {
    return data.filter(item => 
      item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },

  getByCareNeeds: (exerciseNeeds: string, socialNeeds: string): Pet[] => {
    return data.filter(pet => 
        pet.careInfo.exerciseNeeds.includes(exerciseNeeds) &&
        pet.careInfo.socialNeeds.includes(socialNeeds)
    );
  },

  getPetsNeedingCheckup: (daysThreshold: number): Pet[] => {
    const thresholdDate = new Date();
    thresholdDate.setDate(thresholdDate.getDate() - daysThreshold);
    
    return data.filter(pet => 
        pet.healthInfo.lastCheckup < thresholdDate
    );
  }
};