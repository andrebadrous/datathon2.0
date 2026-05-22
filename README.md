# FakeLens
AI-generated image detection with explainable computer vision.

## Overview
FakeLens is a computer vision system that helps users determine whether an image is real or AI-generated.

Our system uses a fine-tuned ConvNeXt-Tiny model trained on the CIFAKE dataset, containing 120,000 real and synthetic images. The application provides:
- Real vs Fake prediction
- Confidence score
- Explainable visual evidence using Grad-CAM

This tool is intended as decision support, not definitive proof of authenticity.


## Features
- Fine-tuned ConvNeXt-Tiny classifier
- Explainable AI visualization
- Streamlit web application
- Confidence scoring
- Validation metrics and confusion matrix


## Dataset
Dataset: CIFAKE  
- 60,000 real images (CIFAR-10)
- 60,000 AI-generated images (Stable Diffusion 1.4)

References:
- Krizhevsky & Hinton (2009)
- Bird & Lotfi (2024)


## Model Architecture
Base model:
- ConvNeXt-Tiny (pretrained ImageNet weights)

Training details:
- Input size: 224x224
- Optimizer: AdamW
- Loss: CrossEntropyLoss
- Epochs: 10
- Augmentations:
  - Random horizontal flip
  - Random resized crop
  - Color jitter


## Repository Structure

```text
.
├── app.py
├── requirements.txt
├── model_report.md
├── predictions.csv
├── models/
├── src/
└── notebooks/
```


## Installation

```bash
git clone <repo_url>
cd fakelens
pip install -r requirements.txt
```


## Training

```bash
python src/train.py
```



## Run Application

```bash
streamlit run app.py
```


## Results

| Metric | TBD |
|---|---|
| Validation Accuracy | TBD |
| F1 Score | TBD |
| Precision | TBD |
| Recall | TBD |



## Responsible AI
This system is designed as a decision-support tool rather than definitive proof of authenticity. False positives could incorrectly flag real photography or artwork as synthetic, while false negatives could allow misinformation to spread. The system should not be used as sole evidence for moderation, journalism, or legal decisions.

---

## Team
- Aayush Roy
- Andre Baderous
- Angel 