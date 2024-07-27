/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Text } from 'app/lib';

interface SelectComponentProps {
    data: any;
    showIcon: boolean;
}

const SelectDropdownComponent = ({ data, showIcon }: SelectComponentProps) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelect = ({selectedItem, index}: any) => {
    setSelectedGender(selectedItem);
    console.log(selectedItem);
  };

  return (
    <SelectDropdown
      data={data}
      onSelect={handleSelect}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            {showIcon && selectedItem && (
              <FontAwesome5 name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
            )}
            <Text size={10} style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || 'Select'}
            </Text>
            <FontAwesome5 name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
            {showIcon && <FontAwesome5 name={item.icon} style={styles.dropdownItemIconStyle} />}
            <Text size={10} style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: '100%',
    height: 60,
    backgroundColor: '#edeef0',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    
  },
  dropdownButtonIconStyle: {
    
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
   
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    
    marginRight: 8,
  },
});

export default SelectDropdownComponent;
