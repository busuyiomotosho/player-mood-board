FROM php:8.2-apache

# Install SQLite extension
RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev
RUN docker-php-ext-install pdo pdo_sqlite
RUN a2enmod rewrite

COPY . /var/www/html
COPY ./public /var/www/html/public

ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Create database file if it doesn't exist
RUN touch /var/www/html/mood.db && chown www-data:www-data /var/www/html/mood.db