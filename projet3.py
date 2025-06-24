def analyze_sentence(sentence):
    # Initialize counters
    char_count = 0
    word_count = 0
    vowel_count = 0
    
    # Define vowels
    vowels = "aeiouAEIOU"
    
    # Process each character in the sentence
    for char in sentence:
        # Count characters
        char_count += 1
        
        # Count vowels
        if char in vowels:
            vowel_count += 1
            
        # Count words (assuming words are separated by a single space)
        if char == ' ':
            word_count += 1
            
    # Since the last character is a point, we do not count it as a word
    # We need to add 1 to word_count for the last word
    if char_count > 1:  # Ensure there's at least one character before the point
        word_count += 1
    
    # Print results
    print(f"Total characters (including point): {char_count}")
    print(f"Total words: {word_count}")
    print(f"Total vowels: {vowel_count}")
    
# Example usage
sentence = "Hello world."
analyze_sentence(sentence)