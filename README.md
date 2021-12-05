# Tutorialwork-website

Port: ```4000```

## Deploy

### Save to images

- ````docker buildx build --platform linux/amd64 --tag ghcr.io/tutorialwork/tutorialwork-website/website:<tag> . --load````
- ````docker push ghcr.io/tutorialwork/tutorialwork-website/website:<tag>````

### Build & instant push image

- ````docker buildx build --platform linux/amd64 --tag ghcr.io/tutorialwork/tutorialwork-website/website:<tag> . --push````
