FROM php:8.2-cli

# Install SQLite
RUN apt-get update && apt-get install -y sqlite3

# Copy application files
COPY . /var/www/html
WORKDIR /var/www/html

# Create database file
RUN touch mood.db

# Expose port
EXPOSE 8000

# Start PHP server
CMD ["php", "-S", "0.0.0.0:8000", "public/router.php"]