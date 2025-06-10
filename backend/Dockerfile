FROM php:8.2-apache

# Set ServerName to prevent warnings
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Install SQLite extension
RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev
RUN docker-php-ext-install pdo pdo_sqlite
RUN a2enmod rewrite

# Create index file for public directory
RUN echo "<?php header('Location: /api/moods');" > /var/www/html/public/index.php

# Copy application files
COPY . /var/www/html
COPY ./public /var/www/html/public

# Create and configure database file
RUN touch /var/www/html/mood.db && chown www-data:www-data /var/www/html/mood.db

# Set document root
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Fix permissions
RUN chown -R www-data:www-data /var/www/html

# Copy Apache configuration
COPY ./apache.conf /etc/apache2/sites-available/000-default.conf