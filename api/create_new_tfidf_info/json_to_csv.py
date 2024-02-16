import os
import pandas as pd

# Get the current working directory
current_directory = os.getcwd()

# Iterate over all files in the current directory
for filename in os.listdir(current_directory):
    # Check if the file has a .json extension
    if filename.endswith(".json"):
        # Construct the full file path
        json_file_path = os.path.join(current_directory, filename)
        
        # Read the JSON file into a pandas DataFrame
        df = pd.read_json(json_file_path)
        
        # Construct the CSV file name by replacing the .json extension with .csv
        csv_file_name = filename.replace(".json", ".csv")
        csv_file_path = os.path.join(current_directory, csv_file_name)
        
        # Write the DataFrame to a CSV file
        df.to_csv(csv_file_path, index=False)

print("Conversion completed.")
