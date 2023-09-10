export interface MedicalCondition {
    label: string;
    value: string;
    items?: MedicalCondition[]
}

export const medicalConditions: MedicalCondition[] = [
    {
        label: "Cardiovascular",
        value: "🫀",
        items: [
            { label: "Atheroma", value: "Atheroma" },
            { label: "Coronary artery disease", value: "Coronary artery disease" },
            { label: "Angina pectoris", value: "Angina pectoris" },
            { label: "Myocardial infarction", value: "Myocardial infarction" },
            { label: "Hypertension", value: "Hypertension" },
            { label: "Congenital heart disease", value: "Congenital heart disease" },
            { label: "Infective endocarditis", value: "Infective endocarditis" }
        ]
    },
    {
        label: "Respiratory",
        value: "🫁",
        items: [
            { label: "Lung cancer", value: "Lung cancer" },
            { label: "Asthma", value: "Asthma" },
            { label: "Chronic obstructive pulmonary disease", value: "Chronic obstructive pulmonary disease" }
        ]
    },
    {
        label: "Metabolic and endocrine",
        value: "🍎",
        items: [
            { label: "Pregnancy", value: "Pregnancy", },
            { label: "Breast cancer", value: "Breast cancer", },
            { label: "Diabetes mellitus", value: "Diabetes mellitus", },
            { label: "Alcoholism", value: "Alcoholism", },
            { label: "Chronic liver disease", value: "Chronic liver disease", },
            { label: "Chronic kidney disease", value: "Chronic kidney disease", },
            { label: "Thyrotoxicosis", value: "Thyrotoxicosis", },
            { label: "Cushing disease/syndrome", value: "Cushing disease/syndrome", },
            { label: "Addison disease", value: "Addison disease", },
            { label: "Gastrointestinal conditions", value: "Gastrointestinal conditions", },
            { label: "Peptic ulcer disease", value: "Peptic ulcer disease", },
            { label: "Stomach(gastric) cancer", value: "Stomach(gastric) cancer", },
            { label: "Inflammatory bowel disease", value: "Inflammatory bowel disease", },
            { label: "Coeliac disease", value: "Coeliac disease", },
            { label: "Colon cancer(colorectal cancer)", value: "Colon cancer(colorectal cancer)" },
        ]
    },
    {
        label: "Haematological",
        value: "🩸",
        items: [
            { label: "Anaemia", value: "Anaemia", },
            { label: "Von Willebrand disease", value: "Von Willebrand disease", },
            { label: "Haemophilia", value: "Haemophilia", },
            { label: "Leukaemias", value: "Leukaemias", },
            { label: "Thrombocytopaenias", value: "Thrombocytopaenias", },
        ]
    },
    {
        label: "Mental",
        value: "🧠",
        items: [
            { label: "Anxiety and stress", value: "Anxiety and stress", },
            { label: "Depression", value: "Depression", },
            { label: "Eating disorders", value: "Eating disorders", },
            { label: "Schizophrenia", value: "Schizophrenia", },
        ]
    },
    {
        label: "Neurological",
        value: "⽊",
        items: [
            { label: "Bell palsy", value: "Bell palsy", },
            { label: "Cerebrovascular accident", value: "Cerebrovascular accident", },
            { label: "Epilepsy", value: "Epilepsy", },
            { label: "Multiple sclerosis", value: "Multiple sclerosis", },
            { label: "Dementia", value: "Dementia", },
            { label: "Osteoarticular conditions", value: "Osteoarticular conditions", },
            { label: "Osteoarthritis", value: "Osteoarthritis", },
            { label: "Rheumatoid arthritis", value: "Rheumatoid arthritis", },
            { label: "Gout", value: "Gout", },
            { label: "Sjögren syndrome", value: "Sjögren syndrome", },
        ]
    },
    {
        label: "Mucocutaneous",
        value: "💦",
        items: [
            { label: "Allergy", value: "Allergy", },
            { label: "Lichen planus", value: "Lichen planus", },
            { label: "Behçet disease", value: "Behçet disease", },
            { label: "Erythema multiforme", value: "Erythema multiforme", },
            { label: "Pemphigoid", value: "Pemphigoid", },
            { label: "Pemphigus", value: "Pemphigus", },
            { label: "Scleroderma", value: "Scleroderma", },
            { label: "Systemic lupus erythematosus", value: "Systemic lupus erythematosus" },
        ]
    },
    {
        label: "Infectious",
        value: "😷",
        items: [
            { label: "HIV infection and AIDS", value: "HIV infection and AIDS", },
            { label: "Herpes: HSV", value: "Herpes: HSV", },
            { label: "Herpes: VZV", value: "Herpes: VZV", },
            { label: "Herpes: EBV", value: "Herpes: EBV", },
            { label: "Tuberculosis", value: "Tuberculosis", },
            { label: "SARS-COV-2", value: "SARS-COV-2" },
            { label: "Syphilis", value: "Syphilis" },
        ]
    }
];


// https://www.wiley.com/en-us/Common+Medical+Conditions:+A+Guide+for+the+Dental+Team-p-9781444315394