import pandas as pd
import glob

# Define la lista de columnas que deseas mantener
columns_to_keep = ['title', 'description', 'author', 'date', 'link']

# Función para limpiar los datos

# Encontrar todos los archivos CSV en el directorio actual
csv_files = glob.glob('./*.csv')

# Inicializar una lista vacía para contener los dataframes
dfs = []

# Recorrer cada archivo CSV
for filename in csv_files:
    # Leer el archivo CSV
    df = pd.read_csv(filename)    
    df = df[columns_to_keep]
    # Filtrar las filas donde la longitud de la columna 'description' sea menor o igual a ...
    #df.loc[df['description'].str.len() >  200, 'description'] = ''
    # Guardar el dataframe con las columnas seleccionadas en el mismo archivo
    df.to_csv(filename, index=False)
    # Asegurarse de que la columna 'author' exista, añadiéndola con valores NaN si no existe
    if 'author' not in df.columns:
        df['author'] = None
    
    # Seleccionar solo las columnas que deseas mantener
    
    # Añadir el dataframe a la lista
    dfs.append(df)

# Concatenar todos los dataframes en la lista en un único dataframe
merged_df = pd.concat(dfs, ignore_index=True)

# Guardar el dataframe fusionado en un nuevo archivo CSV
merged_df.to_csv("all_news.csv", index=False)
