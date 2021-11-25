FROM node:16-alpine3.14
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ADD . /workspace
WORKDIR /workspace
RUN npm i puppeteer@10.2.0 && \
    npm install
CMD ["npm", "run", "start:wechat:web"]