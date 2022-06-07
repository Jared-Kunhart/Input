FROM node:16.14.2 AS build-stage
RUN mkdir /src
RUN npm install nodemon -g
WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install
EXPOSE 3000
CMD npm start
# WORKDIR /react-app
# COPY react-app/. .

# You have to set this because it should be set during build time.
# ENV REACT_APP_BASE_URL=https://lnput.herokuapp.com/

# Build our React App
# RUN npm install
# RUN npm run build

# FROM python:THE.EXACT.PYTHON.VERSION.IN.YOUR.PIPFILE

# # Setup Flask environment
# ENV FLASK_APP=app
# ENV FLASK_ENV=production
# ENV SQLALCHEMY_ECHO=True

# EXPOSE 8000

# WORKDIR /var/www
# COPY backend/. .
# COPY . .
# COPY --from=build-stage /react-app/build/* app/static/

# # Install Python Dependencies
# RUN pip install -r requirements.txt
# RUN pip install psycopg2

# # Run flask environment
# CMD gunicorn app:app
